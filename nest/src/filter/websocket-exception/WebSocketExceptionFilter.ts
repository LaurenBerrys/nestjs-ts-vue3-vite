/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 16:41:44
 * @LastEditTime: 2023-05-25 17:42:08
 * @Description: 
 */
import { Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { WebSocketException } from "src/filter/websocket-exception/WebSocketException";

@Catch()
export class WebSocketExceptionFilter extends BaseExceptionFilter {
    /**
     * 异常捕捉
     * @param exception 
     * @param host 
     */
    catch(exception: WebSocketException, host) {
        const client = host.switchToWs().getClient();
        this.handleError(client, exception);
    }
    /**
     * 异常处理
     * @param client 
     * @param exception 
     */
    handleError(client, exception: WebSocketException) {
        const exceptionName: string = exception.getExceptionName();
        const result: string | object = exception.getError();
        const status = "error";
        let message: object;
        if(Object.prototype.toString.call(result).slice(-7,-1) === 'Object') {
            message = (result as object);
        }
        else {
            message = {
                status,
                message: (result as string)
            }
        }
        client.emit(exceptionName, message);
    }
}