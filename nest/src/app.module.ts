import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SpaceModule } from './space/space.module';


@Module({
  imports: [
      MongooseModule.forRoot("mongodb://localhost:27017/"),
      UsersModule,
      AuthModule,
      ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true,
      }),
      AuthModule,
      SpaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
