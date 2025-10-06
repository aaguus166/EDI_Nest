import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

 usuarios: any[] = [];
  constructor() {
   let usuario = {
    "id":"1",
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

getUsuarioById(id:string) {
    for(let i = 0; i < this.usuarios.length; i++){

    }

}
//id = {
//"name" : "gojo",
//"surname" : "satoru",
//"addres" : "pancho 345",
//"phone" : "83732878723








    
}





