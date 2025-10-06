import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { KioscoService } from './kiosco/kiosco.service';
import { KioscoController } from './kiosco/kiosco.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, KioscoController],
  providers: [AppService, UsersService, KioscoService],
})
export class AppModule {}
