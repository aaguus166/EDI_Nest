import { Controller, Get } from '@nestjs/common';
import { KioscoService } from './kiosco.service';

@Controller('kiosquito')
export class KioscoController {
constructor(private readonly kioskoService: KioscoService){}



}
