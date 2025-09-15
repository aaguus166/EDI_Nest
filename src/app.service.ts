import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! tengo sueño' ;
  }
  getlistaUser(): string{
    return 'esta son la lista de usuario'
  }
  postCrearUsuario(): string{
    return 'usuario creado exitosamete!'
  }
  putactualizar(): string{
    return 'actualizacion del usuario'
  }
  DeleteUsuario(): string{
    return 'borrar lista de usuario'
  }

  
}
