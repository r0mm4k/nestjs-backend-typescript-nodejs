import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  const hasLogin = configService.get('MONGO_LOGIN');
  const hasPassword = configService.get('MONGO_PASSWORD');
  const hasHost = configService.get('MONGO_HOST');
  const hasPort = configService.get('MONGO_PORT');
  const hasAuthDB = configService.get('MONGO_AUTH_DB');

  return `mongodb://${hasLogin}:${hasPassword}@${hasHost}:${hasPort}/${hasAuthDB}`;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

export { getMongoConfig };
