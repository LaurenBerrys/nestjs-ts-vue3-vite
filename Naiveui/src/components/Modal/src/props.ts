import { NModal } from 'naive-ui';

export const nvapProps = {
  ...NModal.props,
  // 确认按钮文字
  subBtuText: {
    type: String,
    default: '确认',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  height:{
    type: Number,
    default: 446,
  },
  width: {
    type: Number,
    default: 600,
  },
  title: {
    type: String,
    default: '',
  },
  maskClosable: {
    type: Boolean,
    default: false,
  },
  //模态框预设用那种
  preset: {
    type: String,
    default: 'dialog',
  },
    // 是否展示按钮
    showBtn: {
      type: Boolean,
      default: true,
    }
 
};
