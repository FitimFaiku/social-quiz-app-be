import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const { NODE_ENV } = process.env;

function _enableCors(app: INestApplication) {
  console.log("Enabling CORS")
  const whitelist = ['http://localhost:8080'];
  app.enableCors({
    origin: function(origin, callback) {
      console.log("origin", origin);
      if (!origin || (whitelist.indexOf(origin) !== -1)) {
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders:
      'X-Requested-With,XMLHttpRequest, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
}

async function bootstrap() {
  console.log("Bootstrap", NODE_ENV);
  const app = await NestFactory.create(AppModule);
  if (NODE_ENV === 'dev') {
    console.log("dev");
    _enableCors(app);
  }
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
   // Setup Swagger
   const options = new DocumentBuilder()
   .setTitle('SocialQuizApp')
   .setDescription('The API description for SocialQuizApp')
   .setVersion('1.0')
   .addTag('SocialQuizApp')
   .build();
   const document = SwaggerModule.createDocument(app, options);
   SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
  }
bootstrap();


