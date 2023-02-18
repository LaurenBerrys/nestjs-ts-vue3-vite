/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-18 16:13:27
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 16:13:35
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/config/config.ts
 * @Description: 
 * 
 */
export   const  config = {
    mongodb:{
      type: 'mongodb',
      url: process.env.DB_URL,
      database: 'nest',
      entities:  [ __dirname + '/../**/*.entity{.ts,.js}'],
      useUnifiedTopology: true,
      synchronize: true,
    },
    redis:{
      host: '127.0.0.1',
      port: 6379,
      db: 0,
      password: 'root',
      keyPrefix: 'nest:',
    }
}