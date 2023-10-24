/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 14:04:42
 * @LastEditTime: 2023-05-25 17:38:58
 * @Description:
 */
import { UseFilters } from "@nestjs/common";
import {
  WebSocketServer,
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from "@nestjs/websockets";
import { Socket, Server } from "socket.io";
import { WebSocketExceptionFilter } from "src/filter/websocket-exception/WebSocketExceptionFilter";
@WebSocketGateway(3333, {
  namespace: "websocket",
  cors: {
    origin: "*",
  },
})
class WebSocketClient {
  @WebSocketServer() server: Server;
  constructor() // private readonly socketService: SocketService,
  // private readonly chatingMessageService: ChatingMessageService,
  // private readonly friendsService: FriendsService,
  // @Inject(forwardRef(() => WebsocketService))
  // private readonly websocketService: WebsocketService
  {}
  /**
   * @description: 发送消息
   */
  @UseFilters(new WebSocketExceptionFilter())
  @SubscribeMessage("message")
  async sendMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() mes: any
  ) {
    
    // return await this.chatingMessageService.sendMessage(mes, socket);
  }
  /**
   * @description: 同意/拒绝好友申请
   */
  @UseFilters(new WebSocketExceptionFilter())
  @SubscribeMessage("agreeFriend")
  async agreeFriend(
    @ConnectedSocket() socket: Socket,
    @MessageBody() mes: any
  ) {
    // return await this.friendsService.agreeFriend(socket, mes);
  }
  /**
   * @description: 添加好友
   */
  @UseFilters(new WebSocketExceptionFilter())
  @SubscribeMessage("addFriend")
  async addFriend(@ConnectedSocket() socket: Socket, @MessageBody() mes: any) {
    // return await this.friendsService.addFriend(socket, mes);
  }
  /**
   * @description: 加入指定聊天室
   */
  @UseFilters(new WebSocketExceptionFilter())
  @SubscribeMessage("joinChatingRoom")
  async joinChatingRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() roomName: string
  ) {
    // return await this.websocketService.joinChatingRoom(socket, roomName);
  }
  /**
   * 当有新的连接建立时调用该函数，已登录用户更新自身的socketId并加入所有群聊
   * 返回默认群组的基本信息
   * @param socket
   */
  @UseFilters(new WebSocketExceptionFilter())
  async handleConnection(socket: Socket) {
    const query = socket.handshake.query;
    const socketId = socket.id;
    const clientIp = socket.handshake.address;
    console.log(query, socketId, clientIp);
    if (query.userId) {
      const userId = query.userId;
      // await this.websocketService.updateSocketMes(socketId, clientIp, userId);
      // await this.websocketService.userJoinRooms(socket, userId);
    }
  }
  /**
   * 获取连接同一房间的列表与人数
   * @param roomName
   */
  @UseFilters(new WebSocketExceptionFilter())
  async getClientsInChatingRoom(roomName: string) {
    console.log(this.server);
    // return await new Promise((resolve, reject) => {
    //   this.server.in(roomName).clients((error, clients) => {
    //     if (error) throw new CustomWsException("gerClientsException", error);
    //     console.log(clients);
    //     resolve({
    //       clients,
    //       clientsNum: clients.length,
    //     });
    //   });
    // });
  }

  // SubscribeMessage里面的字符串代表类型，就是send event的值
  @SubscribeMessage("events")
  async handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): Promise<any> {
    console.log("ws  data", data);
    console.log("ws client", client.id);
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
