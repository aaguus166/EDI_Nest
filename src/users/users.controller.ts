import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get()  
    getUsuarios() {
        return this.usersService.getUsuarios();
    }

    @Get(':id')
    getUsuarioById() {
    }


}


