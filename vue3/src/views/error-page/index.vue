<template>
    <!-- <div id='box' style="background-color: #fff;" v-resize="Resize"> -->
    <div id='box' style="background-color: #fff;">
      <el-form class='formtable' label-width="140px" label-position="left">
        <!-- 抵押信息 -->
        <el-row>
          <el-col :span="24" style="margin-bottom: 15px;">
              <div :style="biaotistyle">
                <div :style="bttextstyle">抵押信息</div>
                <div :style="xianstyle"></div>
              </div>
            </el-col>
          <el-row>
            <el-col :span='txtminw' :style='[pl,bgGray]'>
              <el-form-item label="预告登记种类">
                <el-input style="width:100%;" @input="getAgain" type="预告登记种类" name='预告登记种类' v-model="result.ygdj_fwdydjsq.YGDJZLMC"
                    ></el-input>            
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style='[pl,bgGray]'>
              <el-form-item label="预告买卖证明号">
                <el-input style="width:100%;" @input="getAgain"  name='预告买卖证明号'  v-model="result.ygmmzmh.BDCQZH"
                    ></el-input>            
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style='[pl,bgGray]'>
              <el-form-item label="合同编号">
                <constant-input style="width:100%;"   name='合同编号'  v-model="result.ygdj_fwdydjsq.HTBH" constant="YWH"
                    ></constant-input>            
              </el-form-item>
            </el-col>
             <el-col :span="txtminw" :style="[pl, bgGray]">
              <el-form-item label="抵押方式">
                <dict-select
                  style="width: 100%"
                  type="抵押方式"
                  name="抵押方式"
     @valueChange="getAgain"
                  v-model="result.ygdj_fwdydjsq.DYFS"
                  v-validate="'required|zhengNum'"
                ></dict-select>
              </el-form-item>
            </el-col>
  
            <el-col :span='txtminw' :style="[pl,{'background': (largeWidth==false? '':'#F9F9F9')}]">
              <el-form-item label="被担保主债权数额">
                <constant-input  name='被担保主债权数额'  placeholder="被担保主债权数额" v-model="result.ygdj_fwdydjsq.BDBZQSE" @input="changeBDBZZQJE" v-validate="'required|fourRadixNum'"></constant-input>
                  <span style="position:absolute;top:0;right:0;font:13px/32px 'microsoft yahei';padding-right:10px;">万元</span>          
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style="[pl,{'background': (largeWidth==false? '':'#F9F9F9')}]">
              <el-form-item label-width="0px">
                <el-input name='被担保主债权数额大写'  placeholder="被担保主债权数额(大写)" disabled v-model="dxje"></el-input>          
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style="[pl,{'display':(largeWidth==true? 'block':'none')}]"></el-col>
            <el-col :span='txtminw' :style="[pl,{'background': (largeWidth==true? '':'#F9F9F9')}]">
              <el-form-item label="起始日期">
                <form-date-picker type="date" @valueChange="getAgain" :picker-options="pickerOptions1" placeholder="选择起始日期" name='起始日期' format="yyyyMMdd" value-format="yyyy-MM-dd" v-model="result.ygdj_fwdydjsq.ZWLXQSSJ"
                    v-validate="'required'">
                  </form-date-picker>          
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style="[pl,{'background': (largeWidth==true? '':'#F9F9F9')}]">
              <el-form-item label="终止日期">
                <form-date-picker type="date" @valueChange="getAgain" :picker-options="pickerOptions2" placeholder="选择终止日期" name='终止日期' format="yyyyMMdd" value-format="yyyy-MM-dd" v-model="result.ygdj_fwdydjsq.ZWLXJSSJ"
                    v-validate="'required'">
                  </form-date-picker>          
              </el-form-item>
            </el-col>
            <el-col :span='txtminw' :style="pl">
               <el-checkbox  style="line-height:35px;margin:0 2rem 2rem 2rem" @change="checked">是否存在其他抵押物</el-checkbox>
            </el-col>
            <!--<el-col :span='txtminw' :style="[pl,bgGray,{'display': (largeWidth==false? 'none':'block')}]"></el-col>-->
            <el-col :span="11" :style="[pl, bgGray]">
            <el-form-item
              label="是否存在禁止或限制转让不动产约定"
              label-width="260px"
            >
              <dict-select
                :style="[pl,'{width: 100%;min-width: 100px;}']"
                type="是否"
                name="是否存在禁止或限制转让不动产约定"
                @valueChange="handleChange"
                v-model="result.ygdj_fwdydjsq.SFCZYD"
                v-validate="'required'"
              ></dict-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" :style="[pl, bgGray]">
            <el-form-item label="担保范围">
              <el-input
                placeholder="担保范围"
                name="担保范围"
                v-model="result.ygdj_fwdydjsq.DBFW"
                @input="dbfw"
              ></el-input>
            </el-form-item>
          </el-col>
          </el-row>
        </el-row>
        <!-- 转让信息-end -->
  
        <!-- 附记及其他信息 -->
        <el-row :style="[{'padding-bottom':'100px'}]">
          <el-col :span="24" style="margin-bottom: 15px;">
              <div :style="biaotistyle">
                <div :style="bttextstyle">附记及其他信息</div>
                <div :style="xianstyle"></div>
              </div>
            </el-col>
          <el-row>
        <el-col :span="24" :style="{ padding: '5px 0'}">
        <el-button type="primary" @click='getAgain'>获取抵押信息</el-button>
        </el-col>  
            <el-col :style="{'padding':'5px 0','background':'#F9F9F9','min-height':'110px'}">
              <el-form-item  label="权利其他状况">
                <el-input class='largetxtQl' disabled type='textarea'  resize='none'name='权利其他状况' placeholder="请输入权利其他状况" v-model="result.ygdj_fwdydjsq.QLQTZK"
                    ></el-input>
              </el-form-item>
            </el-col>
            <el-col :style="{'padding':'5px 0','min-height':'110px'}">
              <el-form-item label="附记">
                <el-input class='largetxt' type='textarea' resize='none' placeholder="请输入附记" v-model="result.fj_qlxx_fwdydjsq.FJ"
                    name='附记'></el-input>          
              </el-form-item>
            </el-col>
            <el-col :style="{'padding':'5px 0','background':'#F9F9F9','min-height':'110px'}">
              <el-form-item label="收件备注">
                <el-input class='largetxt' type='textarea' resize='none' name='收件备注' v-model="result.slsq_bz_fwdydjsq.BZ"
                    placeholder="请填写收件备注"></el-input>          
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
        <!-- 附记及其他信息-end -->
      </el-form>
    </div>
  </template>
  
  <script>
    // import resize from 'vue-resize-directive'
    export default {
      name: 'fpfj',
      props: {
        result: {
          type: Object,
          required: false,
          default: function() {
            return {
              //begin
  fj_qlxx_fwdydjsq:{},
  slsq_bz_fwdydjsq:{},
  ygdj_fwdydjsq:{},
  dymj_fwdydjsq:{},
  qlqtxx_zh:{},
  ygmmzmh:{}
  //end
            }
          }
        },
        readonly: {
          default: true,
          type: Boolean
        }, //配置只读属性
        dictionary: {
          // default: () => ([])
          default: function() {
            return []
          },
          type: Array
        },
        attachVisiable: {
          default: true,
          type: Boolean
        },
      },
      watch: {
        attachVisiable: { //监听通知人姓名
          handler: function(newName, oldName) {
            if (newName == false) {
              this.minw = 12;
              this.txtminw = 8;
              this.largeWidth = true;
            } else {
              this.minw = 24;
              this.txtminw = 12;
              this.largeWidth = false;
            }
          },
          // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
          immediate: true
        },
      },
      // directives: {
      //   resize,
      // },
      data: function() {
        const vm = this; //为了兼容IE，去掉箭头函数
        return {
          biaotistyle:{height: '18px',display: 'flex'},
          bttextstyle:{height:'20px', width:'100px',color:'#0E90FE','font-size':'14px','font-weight':'bold'},
          xianstyle:{width: 'calc(100% - 100px)',height: '9px','border-bottom': '1px dashed #0E90FE'},
          dxje:'',
          pickerOptions1: {
            disabledDate(time) {
              if(vm.result.ygdj_fwdydjsq.ZWLXJSSJ!=""&&vm.result.ygdj_fwdydjsq.ZWLXJSSJ!=null){
                return time.getTime() > new Date(vm.result.ygdj_fwdydjsq.ZWLXJSSJ).getTime();
              }  
            }
          },
          pickerOptions2: {
            disabledDate(time) {
              return time.getTime() < new Date(vm.result.ygdj_fwdydjsq.ZWLXQSSJ).getTime();
            }
          },
          //样式绑定
          pl: {
            padding:'9px 0',
            height:'50px',
          },
          bgGray: {
            backgroundColor: '#F9F9F9',
          },
          // 样式绑定-end
          form: '',
          checked1: true,
          checked2: true,
          boxWidth: '', //页面外层元素宽度
          textarea1: '',
          textarea2: '',
          minw: 12,
          txtminw: 6,
          largeWidth: false, //判断是否显示表单背景色
          value1: '', //时间
          dialogVisible: false, //弹窗状态
          rules: {
            ks: [{
                required: true,
                message: '请输入科室',
                trigger: 'blur'
              },
              {
                min: 3,
                max: 5,
                message: '长度在 3 到 5 个字符',
                trigger: 'blur'
              }
            ]
          }
        };
      },
      methods: {
        checked(e){
          if(e){
            this.result.fj_qlxx_fwdydjsq.FJ =this.result.fj_qlxx_fwdydjsq.FJ +"\n另有其他抵押物共同为主债权进行担保"
          }else{
            this.result.fj_qlxx_fwdydjsq.FJ =this.result.fj_qlxx_fwdydjsq.FJ.split("\n另有其他抵押物共同为主债权进行担保")[0]
          }  
        },
        handleChange(e) {
        if (Number(e) == 1) {
          if(!this.result.fj_qlxx_fwdydjsq.FJ) {
     this.result.fj_qlxx_fwdydjsq.FJ = '抵押凭证：';
      }
           if(this.result.fj_qlxx_fwdydjsq.FJ.indexOf('存在禁止或限制转让不动产的约定') < 0) {
          this.result.fj_qlxx_fwdydjsq.FJ =
            this.result.fj_qlxx_fwdydjsq.FJ + '\n存在禁止或限制转让不动产的约定';
           }
        } else {
          var reg = '\n存在禁止或限制转让不动产的约定';
          this.result.fj_qlxx_fwdydjsq.FJ = this.result.fj_qlxx_fwdydjsq.FJ.replace(reg, '');
        }
      },
      dbfw(){ 
        if(this.result.ygdj_fwdydjsq.DBFW){
           if(this.result.fj_qlxx_fwdydjsq.FJ.indexOf('担保范围') > 0 ) {
                  var reg=/担保范围:(\S*) /; 
                  var substr = this.result.fj_qlxx_fwdydjsq.FJ.match(reg); 
                   this.result.fj_qlxx_fwdydjsq.FJ= this.result.fj_qlxx_fwdydjsq.FJ.replace(substr[0] + "\n", "");
                    this.result.fj_qlxx_fwdydjsq.FJ = this.result.fj_qlxx_fwdydjsq.FJ.substring(0, this.result.fj_qlxx_fwdydjsq.FJ.lastIndexOf('\n'));
                     this.getAgain('FJ');
             
                }else{
  
                  this.getAgain('FJ');
  
                }
           }else{
             var reg=/担保范围:(\S*) /; 
             var substr = this.result.fj_qlxx_fwdydjsq.FJ.match(reg); 
             this.result.fj_qlxx_fwdydjsq.FJ = this.result.fj_qlxx_fwdydjsq.FJ.replace(substr[0] + '\n', "")
             this.result.fj_qlxx_fwdydjsq.FJ = this.result.fj_qlxx_fwdydjsq.FJ.substring(0, this.result.fj_qlxx_fwdydjsq.FJ.lastIndexOf('\n'));
             
             this.getAgain('FJ');
              
             this.result.fj_qlxx_fwdydjsq.FJ = this.result.fj_qlxx_fwdydjsq.FJ.substring(0, this.result.fj_qlxx_fwdydjsq.FJ.lastIndexOf('\n'));
            
        }
        console.log(this.result)
      },
      //重新获取
        getAgain(type) {
          let result = '',result1 = '';
          let dyfs = this.result.ygdj_fwdydjsq.DYFS;
          let bdbzzqse = this.result.ygdj_fwdydjsq.BDBZQSE;
          let startDate = this.result.ygdj_fwdydjsq.ZWLXQSSJ;
          let endDate = this.result.ygdj_fwdydjsq.ZWLXJSSJ;
          let yzh = this.result.ygmmzmh.BDCQZH;
          let ygdjzlmc = this.result.ygdj_fwdydjsq.YGDJZLMC;
          let dbfw = this.result.ygdj_fwdydjsq.DBFW;
         if (dbfw) {
          result1 += '担保范围:' + dbfw + ' \n';
        }
          if(yzh){result+=('不动产预告证明号:'+yzh+'\n')}
          if (dyfs) {
            if (this.result.ygdj_fwdydjsq.DYFS == '2') {
              this.bdbtxt = '最高';
            } else {
              this.bdbtxt = '被担保主';
            }
            var dyfsValue = dyfs;
            var dyfsLabel = '';
            for (let i = 0; i < this.dictionary.length; i++) {
              if (this.dictionary[i].label == '抵押方式') {
                for (let j = 0; j < this.dictionary[i].childrens.length; j++) {
                  if (dyfsValue == this.dictionary[i].childrens[j].value) {
                    dyfsLabel = this.dictionary[i].childrens[j].label;
                  }
                }
              }
            }
            result += '抵押方式:' + dyfsLabel + '\n';
          }
          if(bdbzzqse){result+=('被担保主债权数额:'+bdbzzqse+'万元\n')}
          if(startDate&&endDate){
            console.log('起止日期',startDate,endDate)
            //console.log('起始日期',startDate.substr(0,4)+'年'+startDate.substr(5,2)+'月'+startDate.substr(8,2)+'日')
            startDate = startDate.substr(0,4)+'年'+startDate.substr(5,2)+'月'+startDate.substr(8,2)+'日'
            endDate = endDate.substring(0,4)+'年'+endDate.substr(5,2)+'月'+endDate.substr(8,2)+'日'
            result+=('债务履行期限:'+startDate+'至'+endDate+'\n')
          }
          result = result.substring(0, result.lastIndexOf('\n'))
          console.log('123123123123',result1)
          this.result.ygdj_fwdydjsq.QLQTZK = result;
          if (type == 'FJ') {
          if (this.result.fj_qlxx_fwdydjsq.FJ) {
            this.result.fj_qlxx_fwdydjsq.FJ += '\n' + result1;
          } else {
            this.result.fj_qlxx_fwdydjsq.FJ += result1;
          }
        }
        },
        datechange(){
          console.log(this.inpval)
          this.result.ygdj_fwdydjsq.ZWLXQSSJ = this.inpval[0];
          this.result.ygdj_fwdydjsq.ZWLXJSSJ = this.inpval[1];
        },
        changeBDBZZQJE: function(type) {
          this.result.ygdj_fwdydjsq.BDBZQSE = this.result.ygdj_fwdydjsq.BDBZQSE.toString().replace(/[^\d^\.]/g,'');
          if(this.result.ygdj_fwdydjsq.BDBZQSE==''||this.result.ygdj_fwdydjsq.BDBZQSE==undefined){
            this.dxje=''
          } else{
            this.dxje = this.$changeMoneyToChinese(this.result.ygdj_fwdydjsq.BDBZQSE * 10000);
  
          }
          this.getAgain()
        },
        
        
        //表单验证
        validate: function() {
          return this.$validator.validateAll();
        },
        //插件事件
        handleClick: function(data, operate, formUrl, formId, alias) {
          console.log('row:' + JSON.stringify(data))
          this.$emit('handleClick', {
            data: data,
            operate: operate,
            formUrl: formUrl,
            formId: formId,
            alias: alias
          });
        },
        //表格获取字典数据
        getDictData: function(h, type, data) {
          let result = '';
          if (this.dictionary) {
            let items = this.dictionary.filter(function(item) {
              return item.label === type;
            });
            for (i in items) {
              for (j in items[i].childrens) {
                let temp = items[i].childrens[j];
                if (temp.value === data) {
                  result = temp.label;
                  break;
                }
              }
            }
            return h('span', {
              domProps: {
                innerHTML: result
              }
            });
          }
        },
      },
      mounted: function() {
        this.getAgain() 
        if (!this.result.ygdj_fwdydjsq.DYFS) {
          this.result.ygdj_fwdydjsq.DYFS = '1';
        }
         if(this.result.ygdj_fwdydjsq.BDBZQSE!=''&&this.result.ygdj_fwdydjsq.BDBZQSE!=undefined){
           this.changeBDBZZQJE('init');
         }
           if(!this.result.ygdj_fwdydjsq.YGDJZLMC) {
     this.result.ygdj_fwdydjsq.YGDJZLMC = '预售商品房抵押权预告登记';
      }
        
        
      }
    }
  </script>
  
  <style scoped>
    .hender-title {
      width: 100%;
      height: 20px;
      font-size: 18px;
      line-height: 20px;
      padding-left: 6px;
      border-left: 3px solid #0E90FE;
    }
  </style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                