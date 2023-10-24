<!--
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 16:22:53
 * @LastEditTime: 2023-09-25 15:51:38
 * @Description: 
-->
<template>
  <div class="form-component" :style="formContent || {}">
    <FormProvider :form="form" @change="handleChange">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script setup lang="ts">
import { createForm, onFormValuesChange, onFieldValueChange, FormPath } from '@formily/core';
import { FormProvider } from '@formily/vue';
import { nvapProps } from './prop';
import  * as pinia from 'pinia';
import { componentMap } from './componentMap';
const props = defineProps(nvapProps);
const emits = defineEmits(['change']);
const formContent: any = ref({})
const schema:any = ref()
const loading = ref(false);
const {SchemaField} = componentMap()
const createNewForm = () => {
  return createForm({
    effects() {
      onFieldValueChange('*', (field, form) => {
        emits('change', field.props.name, field.value);
      });
    },
  });
};
const resetForm = (excludePath?: string[], res?: any) => {
	const formValue: any = form.value;
	const resetValues = (values, parentPath = '') => {
		const fieldKeys = (Object.keys(formValue.fields) || [])
			.map((path) => formValue.fields[path])
			.filter((item) => !item.hide)
			.map((item) => item.path.entire);
		if (values == null) {
			return;
		}
		Object.keys(values).forEach((pathKey) => {
			if (typeof values[pathKey] === 'object') {
				resetValues(values[pathKey], (parentPath && `${parentPath}.${pathKey}`) || pathKey);
			} else {
				const setValuePath = (parentPath && `${parentPath}.${pathKey}`) || pathKey;
				if (!(excludePath || []).includes(setValuePath)) {
					if (!fieldKeys.includes(setValuePath)) {
						formValue.deleteValuesIn(setValuePath);
					} else {
						formValue.setValuesIn(setValuePath, '');
					}
				}
			}
		});
	};

	resetValues(formValue.values);
	formValue.setValues(props.values);
	formValue.disabled = props.disabled;
	// 获取对应field
	formValue.getField = (name) => {
		const findKey: string = Object.keys(formValue.fields).find((item) => item.endsWith(`.${name}`)) || '';
		return formValue.fields[findKey];
	};
	formValue.validateForm = validateForm;
};
const form = ref(createNewForm())

const formValueTmp: any = form.value;
formValueTmp.resetForm = resetForm;
formValueTmp.pinia = pinia
// 获取form对象
const getForm = () => {
	return new Promise((resolve, reject) => {
		if (loading.value === false) {
			resolve(form.value);
		} else {
			const interval = window.setInterval(() => {
				if (loading.value === false) {
					clearInterval(interval);
					resolve(form.value);
				}
			}, 500);
		}
	});
};
// 校验表单
const validateForm = () => {
	return getForm().then((validateForm: any) => {
		return validateForm
			.validate()
			.then(() => {
				const errorPromises: any[] = [];
				const errors = Object.keys(validateForm.fields).reduce((accum: any[], key) => {
					if (validateForm.fields[key] && validateForm.fields[key].customValidate) {
						const fieldErrors: any = validateForm.fields[key].customValidate();
						if (fieldErrors && fieldErrors.then) {
							// 为promise
							errorPromises.push(fieldErrors);
						} else {
							// 为同步返回值
							if (Array.isArray(fieldErrors)) {
								accum = accum.concat(fieldErrors);
							}
						}
					}
					return accum;
				}, []);
				if (errors && errors.length > 0) {
					return Promise.reject(errors);
				} else if (errorPromises.length > 0) {
					// 表单验证为promise处理逻辑
					return Promise.all(errorPromises).then((promiseErrors) => {
						let rtPromiseErrs: any[] = [];
						promiseErrors.forEach((promiseErrorItem) => {
							if (Array.isArray(promiseErrorItem) && promiseErrorItem.length > 0) {
								rtPromiseErrs = rtPromiseErrs.concat(promiseErrorItem);
							}
						});
						if (Array.isArray(rtPromiseErrs) && rtPromiseErrs.length > 0) {
							return Promise.reject(rtPromiseErrs);
						}
					});
				}
				return true;
			})
			.then(() => {
				return validateForm;
			})
			.catch((err) => {
				const message = err
					.map((item) => {
						return item.messages[0];
					})
					.join(';');
				ElMessage.error(message || '请完善表单');
				return Promise.reject(false);
			});
	});
};
const queryData=async()=>{
  loading.value = true;
	if (props.id) {
    const { data } = await getFormily(props.id);
      formContent.value=data[0]
      schema.value = data[0].schema
      // resetForm([]);
	}
}
onMounted(() => {
	queryData();
});
defineExpose({
	getForm,
	validateForm,
});
const handleChange = () => {
};
</script>

<style scoped lang="scss">
.form-component {
	height: 100%;
	flex: 1;
	min-height: 100px;
	overflow: auto;
}
</style>
