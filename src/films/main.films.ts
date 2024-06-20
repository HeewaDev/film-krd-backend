import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { FilmsModule } from './films.module';

async function bootstrap() {
  try {
    const protoPath = join(__dirname, 'proto', 'films.proto');
    console.log('Resolved protoPath:', protoPath);

    // Create the NestJS microservice
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(FilmsModule, {
      transport: Transport.GRPC,
      options: {
        package: 'films',
        protoPath: protoPath,
        url: '0.0.0.0:50051',
      },
    });

    await app.listen();
    console.log('Films microservice is listening on port 50051');
  } catch (err) {
    console.error('Error starting Films microservice:', err);
    process.exit(1); // Exit with error code
  }
}

bootstrap();