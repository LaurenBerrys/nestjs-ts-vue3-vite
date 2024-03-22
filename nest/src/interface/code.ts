//返回参数格式
export class ResponseData {
  code: number;
  msg: string;
  data: any;
  //默认code是200
  constructor() {
    this.code = 200;
    this.msg = "成功";
  }
}


