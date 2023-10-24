/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 17:23:41
 * @LastEditTime: 2023-05-26 10:04:27
 * @Description: 
 */
import { Injectable } from "@nestjs/common";
import {UserService} from 'src/models/user/user-service';
@Injectable()
export class MessageService {
    constructor(private readonly userService: UserService) {}
  async sendMessage(mes: any, socket: any) {
    console.log(mes, socket);
    const {
        message_from_id: messageFromId,
        message_to_id: messageToId,
        message_type: messageType,
        message_content: messageContent,
        message_content_type: messageContentType,
        name: messageName
    } = mes;
    mes.message_created_time = new Date().toLocaleString();
    // 在线消息
    mes.message_state = 1;
    let messageId: number;
    let messageTarget;
    const {
        name: messageFromName,
        avatar: messageFromAvatar,
        state: messageFromState
        } = (await this.userService.findOne(messageName)).data;
        const messageCreatedTime = new Date().toLocaleString();
        if(messageType === 0) {
            const exitence: boolean =  await this.userService.checkUserExistence({
                id: messageToId
            })
        }
  }
}
