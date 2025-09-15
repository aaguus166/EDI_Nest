import { Controller, Get, Post, Put, Delete} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('okii')
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get('listaUser')
listaUsuario(): string {
  return this.appService.getlistaUser();
}

@Post('usuario')
crearUsuario(): string {
  return this.appService.postCrearUsuario();
}

@Put('actualizar')
actualizacion(): string {
  return this.appService.putactualizar();
}

@Delete('borrarUsuario')
borrarUsuario(): string {
  return this.appService.DeleteUsuario();
}

}
