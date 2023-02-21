"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./logger/logger.middleware");
const transform_interceptor_1 = require("./interceptor/transform/transform.interceptor");
const http_exception_filter_1 = require("./filter/http-exception/http-exception.filter");
const any_exception_filter_1 = require("./filter/any-exception/any-exception.filter");
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
    swagger_1.SwaggerModule.setup('index', app, document);
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new any_exception_filter_1.AllExceptionsFilter());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(logger_middleware_1.logger);
    app.enableCors();
    app.setGlobalPrefix('nest-api');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map