#!/usr/bin/expect
###
 # @Author: LaurenBerrys && 949154547@qq.com
 # @Date: 2023-12-21 17:15:41
 # @LastEditTime: 2023-12-21 17:22:23
 # @Description: 
### 

set timeout 2000
spawn npm install
expect "DONE"
spawn npm run build
expect "DONE"
spawn scp -r ./dist/* root@120.77.83.106:/home/nest/
 expect {
 "(yes/no)?"
  {
    send "yes\n"
    expect "*assword:" { send "Cj19980507\r"}
  }
 "*assword:"
  {
    send "Cj19980507\r"
  }
}
expect "100%"