/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 14:10:42
 * @LastEditTime: 2023-08-07 16:05:25
 * @Description: 
 */
class WebSocketClient {
    ws: any;
    constructor() {
        this.ws = null;
    }
    connect(url:number){
        this.ws = new WebSocket(`ws://localhost:${url}`);
        this.ws.addEventListener('open', (event) => {
            console.log('ws 连接成功', event);
            this.sendData('测试ws 发送数据 hello');
          });
          this.ws.addEventListener('message', (event) => {
            const data = event.data;
            console.log('ws message data', data);
          });
      
          this.ws.addEventListener('error', (event) => {
            console.log('ws 连接失败', event);
          });
    }
    sendData(data) {
      console.log(this.ws.readyState,'this.ws.readyState');
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(
            JSON.stringify({
              event: 'events',
              data: data,
            })
          );
        } else {
          console.log('无法发送数据，WebSocket 连接未建立或已关闭');
        }
      }
}
export default WebSocketClient;