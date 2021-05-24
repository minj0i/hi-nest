import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 pipe
  app.useGlobalPipes(
    new ValidationPipe({
      // 아무 decorator도 없는 어떠한 property의 object를 거른다.
      whitelist: true,
      // 이상한걸 보냈을때 request 자체를 막음
      forbidNonWhitelisted: true,
      // 유저가 보낸 것을 원하는 타입으로 변환해줌
      transform: true,
    }),
  );
  // port
  await app.listen(3000);
}
bootstrap();
