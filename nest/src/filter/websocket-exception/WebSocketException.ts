/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 16:41:26
 * @LastEditTime: 2023-05-25 17:42:21
 * @Description: 
 */
import { WsException } from "@nestjs/websockets";

/**
 * 导出自定义WebSocket异常类（可以自定义异常名）
 */
export class WebSocketException extends WsException {
    exceptionName: string;
    constructor(exceptionName,error) {
        super(error);
        this.exceptionName = exceptionName;
    }
    getExceptionName(): string {
        return this.exceptionName;
    }
}