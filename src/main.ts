import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  try {
    console.log("Initializing NestJS application... LUIS");
    const app = await NestFactory.create(AppModule);
    await app.init();
    console.log("NestJS application initialized.");

    const expressApp = app.getHttpAdapter().getInstance();
    console.log("Serverless express setup complete.");
    return serverlessExpress({ app: expressApp });
  } catch (error) {
    console.error("Error during NestJS application initialization:", error);
    throw error;  // Re-throw the error after logging it
  }
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};