import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const DEFAULT_PORT = 3010;
const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);

  const configService = app.get(ConfigService);
  const port = configService.get<string>('API_PORT') ?? DEFAULT_PORT;
  await app.listen(port);

  const serverUrl = await app.getUrl();

  // Log URLs for easy access
  console.log('\x1b[32m%s\x1b[0m', '🚀 Server is running!');
  console.log(
    '\x1b[36m%s\x1b[0m',
    `📡 Local:            http://localhost:${port}/${GLOBAL_PREFIX}`,
  );
  console.log(
    '\x1b[36m%s\x1b[0m',
    `📡 Server:           ${serverUrl}/${GLOBAL_PREFIX}`,
  );
  console.log('\x1b[33m%s\x1b[0m', '📚 Press CTRL+C to stop the server');
}
void bootstrap();
