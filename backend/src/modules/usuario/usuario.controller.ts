import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../../entities/usuario.entity';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Post()
  create(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.create(usuarioData);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() usuarioData: Partial<Usuario>): Promise<void> {
    return this.usuarioService.update(id, usuarioData);
  }

//   @Patch(':id')
// async update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
//   return this.usuarioService.update(id, updateUsuarioDto);
// }
  
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
  console.log('ID recibido para eliminar:', id); // Verifica qué ID llega
  return this.usuarioService.delete(id);
}

}
