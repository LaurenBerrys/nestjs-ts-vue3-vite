/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-02-16 10:13:40
 * @LastEditTime: 2023-05-16 15:58:16
 * @Description: 消息提示
 */
import { isNullOrUnDef } from '@/utils/is';
export function setupMessage(NMessage) {
  let loadingMessage: any = null;
  class Message {
    /**
     * 规则：
     * * loading message只显示一个，新的message会替换正在显示的loading message
     * * loading message不会自动清除，除非被替换成非loading message，非loading message默认2秒后自动清除
     */
    removeMessage(message: any = loadingMessage, duration = 2000) {
      setTimeout(() => {
        if (message) {
          message.destroy();
          message = null;
        }
      }, duration);
    }

    showMessage(type, content, option: any = {}) {
      if (loadingMessage && loadingMessage.type === 'loading') {
        // 如果存在则替换正在显示的loading message
        loadingMessage.type = type;
        loadingMessage.content = content;

        if (type !== 'loading') {
          // 非loading message需设置自动清除
          this.removeMessage(loadingMessage, option.duration);
        }
      } else {
        // 不存在正在显示的loading则新建一个message,如果新建的message是loading message则将message赋值存储下来
        const message = NMessage[type](content, option);
        if (type === 'loading') {
          loadingMessage = message;
        }
      }
    }

    loading(content) {
      this.showMessage('loading', content, { duration: 0 });
    }

    success(content, option = {}) {
      this.showMessage('success', content, option);
    }

    error(content, option = {}) {
      this.showMessage('error', content, option);
    }

    info(content, option = {}) {
      this.showMessage('info', content, option);
    }

    warning(content, option = {}) {
      this.showMessage('warning', content, option);
    }
  }

  return new Message();
}

export function setupDialog(NDialog: any) {
  NDialog.confirm = function (option: any = {}) {
    const showIcon = !isNullOrUnDef(option.title);
    return NDialog[option.type || 'warning']({
      showIcon,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: option.confirm,
      onNegativeClick: option.cancel,
      onMaskClick: option.cancel,
      ...option,
    });
  };

  return NDialog;
}
