import { Module } from '@nestjs/common';
import { EspacioPublicoService } from './espacio-publico.service';
import { EspacioPublicoController } from './espacio-publico.controller';
import { EspacioPublico } from 'src/entities/espacio_publico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EspacioPublicoController],
  providers: [EspacioPublicoService],
  imports: [TypeOrmModule.forFeature([EspacioPublico])],
  exports: [EspacioPublicoService
  ],
})
export class EspacioPublicoModule {}
