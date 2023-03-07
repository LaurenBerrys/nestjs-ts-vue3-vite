/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 17:42:26
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 17:44:07
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/use-Online.ts
 * @Description: 
 * 
 */

/**
 * @description 用户网络是否可用
 * */
export function useOnline() {
  const online = ref(true);

  const showStatus = (val) => {
    online.value = typeof val == 'boolean' ? val : val.target.online;
  };

  // 在页面加载后，设置正确的网络状态
  navigator.onLine ? showStatus(true) : showStatus(false);

  onMounted(() => {
    // 开始监听网络状态的变化
    window.addEventListener('online', showStatus);

    window.addEventListener('offline', showStatus);
  });
  onUnmounted(() => {
    // 移除监听网络状态的变化
    window.removeEventListener('online', showStatus);

    window.removeEventListener('offline', showStatus);
  });

  return { online };
}

/**
 * @description 获取本地时间
 */
export function useTime() {
    let timer; // 定时器
    const year = ref(0); // 年份
    const month = ref(0); // 月份
    const week = ref(''); // 星期几
    const day = ref(0); // 天数
    const hour = ref<number | string>(0); // 小时
    const minute = ref<number | string>(0); // 分钟
    const second = ref(0); // 秒
  
    // 更新时间
    const updateTime = () => {
      const date = new Date();
      year.value = date.getFullYear();
      month.value = date.getMonth() + 1;
      week.value = '日一二三四五六'.charAt(date.getDay());
      day.value = date.getDate();
      hour.value =
        (date.getHours() + '')?.padStart(2, '0') ||
        new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getHours());
      minute.value =
        (date.getMinutes() + '')?.padStart(2, '0') ||
        new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getMinutes());
      second.value = date.getSeconds();
    };
  
    // 原生时间格式化
    // new Intl.DateTimeFormat('zh', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     second: '2-digit',
    //     hour12: false
    // }).format(new Date())
  
    updateTime();
  
    onMounted(() => {
      clearInterval(timer);
      timer = setInterval(() => updateTime(), 1000);
    });
  
    onUnmounted(() => {
      clearInterval(timer);
    });
  
    return { month, day, hour, minute, second, week };
  }
  

interface Battery {
    charging: boolean; // 当前电池是否正在充电
    chargingTime: number; // 距离充电完毕还需多少秒，如果为0则充电完毕
    dischargingTime: number; // 代表距离电池耗电至空且挂起需要多少秒
    level: number; // 代表电量的放大等级，这个值在 0.0 至 1.0 之间
    [key: string]: any;
  }
  
  // 电池状态
export const useBattery = () => {
    const state = reactive({
      battery: {
        charging: false,
        chargingTime: 0,
        dischargingTime: 0,
        level: 100,
      },
    });
  
    // 更新电池使用状态
    const updateBattery = (target) => {
      for (const key in state.battery) {
        state.battery[key] = target[key];
      }
      state.battery.level = state.battery.level * 100;
    };
  
    // 计算电池剩余可用时间
    const calcDischargingTime = computed(() => {
      const hour = state.battery.dischargingTime / 3600;
      const minute = (state.battery.dischargingTime / 60) % 60;
      return `${~~hour}小时${~~minute}分钟`;
    });
  
    // 计算电池充满剩余时间
    const calcChargingTime = computed(() => {
      console.log(state.battery);
      const hour = state.battery.chargingTime / 3600;
      const minute = (state.battery.chargingTime / 60) % 60;
      return `${~~hour}小时${~~minute}分钟`;
    });
  
    // 电池状态
    const batteryStatus = computed(() => {
      if (state.battery.charging && state.battery.level >= 100) {
        return '已充满';
      } else if (state.battery.charging) {
        return '充电中';
      } else {
        return '已断开电源';
      }
    });
  
    onMounted(async () => {
      const BatteryManager: Battery = await (window.navigator as any).getBattery();
      updateBattery(BatteryManager);
  
      // 电池充电状态更新时被调用
      BatteryManager.onchargingchange = ({ target }) => {
        updateBattery(target);
      };
      // 电池充电时间更新时被调用
      BatteryManager.onchargingtimechange = ({ target }) => {
        updateBattery(target);
      };
      // 电池断开充电时间更新时被调用
      BatteryManager.ondischargingtimechange = ({ target }) => {
        updateBattery(target);
      };
      // 电池电量更新时被调用
      BatteryManager.onlevelchange = ({ target }) => {
        updateBattery(target);
      };
    });
  
    return {
      ...toRefs(state),
      batteryStatus,
      calcDischargingTime,
      calcChargingTime,
    };
  };
  