import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe, INestApplication } from '@nestjs/common';
const { NODE_ENV } = process.env;

function _enableCors(app: INestApplication) {
  const whitelist = ['http://localhost:49921'];
  app.enableCors({
    origin: function(origin, callback) {
      if (!origin || (whitelist.indexOf(origin) !== -1)) {
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (NODE_ENV == 'dev') {
    _enableCors(app);
  }
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();


