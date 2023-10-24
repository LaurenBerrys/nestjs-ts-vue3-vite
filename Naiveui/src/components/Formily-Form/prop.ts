/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 17:23:55
 * @LastEditTime: 2023-08-07 17:24:53
 * @Description: 
 */
export const nvapProps = {
    id:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    },
    values:{
        type:Object,
        default:()=>{}
    },
    code:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    appCode:{
        type:String,
        default:''
    }
}