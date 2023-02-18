"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'debug', 'log'],
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest zero to one')
        .setDescription('The nest-zero-to-one API description')
        .setVersion('1.0')
        .addTag('test')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-doc', app, document);
    app.setGlobalPrefix('nest-api');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map