import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

 usuarios: any[] = [];
  constructor() {
   let usuario = {
    "name": "duki",
    "surname": "modo diablo",
    "address":"antezana 247",
    "phone": "8737898972389"
   }; 
    this.usuarios.push(usuario)
}
getUsuarios(){
    return this.usuarios
}



}


