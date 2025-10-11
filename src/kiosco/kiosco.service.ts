import { Injectable } from '@nestjs/common';

@Injectable()
export class KioscoService {

Productos: any[] = []
constructor() {

    let prod = {
        "nombre" : "masita",
        "tipo" : "chocolate",
        "marca" : "oreo",
        "precio" : "$1300",
    }
    this.Productos.push(prod);
    prod = {
        "nombre" : "gomitas",
        "tipo" : "dulce",
        "marca" : "mogul",
        "precio" : "$850",
    }
    this.Productos.push(prod);



}

getProductos(){
        return this.Productos
    }






}

