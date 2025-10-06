import { Injectable } from '@nestjs/common';

@Injectable()
export class KioscoService {

productos: any[] = []
constructor() {

    let prod = {
        "nombre" : "masita",
        "tipo" : "chocolate",
        "marca" : "oreo",
        "precio" : "$1300",
    }
    this.productos.push(prod);
    prod = {
        "nombre" : "gomitas",
        "tipo" : "dulce",
        "marca" : "mogul",
        "precio" : "$850",
    }
    this.productos.push(prod);









}







}

