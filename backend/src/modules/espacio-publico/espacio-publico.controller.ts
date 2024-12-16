import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EspacioPublico } from 'src/entities/espacio_publico.entity';
import { EspacioPublicoService } from './espacio-publico.service';

@Controller('espacio-publico')
export class EspacioPublicoController {
  constructor(private readonly espacioPublicoService: EspacioPublicoService) {}

  @Get()
    findAll(): Promise<EspacioPublico[]> {
      return this.espacioPublicoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<EspacioPublico> {
      return this.espacioPublicoService.findOne(id);
    }
  
    @Post()
    create(@Body() EspacioPublicoData: Partial<EspacioPublico>): Promise<EspacioPublico> {
      return this.espacioPublicoService.create(EspacioPublicoData);
    }
  
    @Patch(':id')
    async update(@Param('id') id: number, @Body() EspacioPublicoData: Partial<EspacioPublico>): Promise<void> {
      return this.espacioPublicoService.update(id, EspacioPublicoData);
    }
  
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    console.log('ID recibido para eliminar:', id); // Verifica qué ID llega
    return this.espacioPublicoService.delete(id);
  }

}
