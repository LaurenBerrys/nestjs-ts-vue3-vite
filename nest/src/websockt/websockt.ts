/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 14:04:42
 * @LastEditTime: 2023-08-11 17:38:38
 * @Description:
 */
import {
  WebSocketServer,
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from "@nestjs/websockets";
import { Socket, Server } from "socket.io";
@WebSocketGateway(3333, {
  cors: {
    origin: "*",
  },
})
class WebSocketClient {
  @WebSocketServer() server: Server;

  // SubscribeMessage里面的字符串代表类型，就是send event的值
  @SubscribeMessage("events")
  async handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): Promise<any> {
    const clients = client.id;
    const event = "events";
    // this.server.emit('events', { msg: 'ws 服务端返回数据'+clients+'发送的数据是'+data});
    return {
      event,
      data: {
        msg: "ws 服务端返回数据" + clients + "发送的数据是" + data,
      },
    };
  }
}
//将WebSocketClient类导出
export default WebSocketClient;
