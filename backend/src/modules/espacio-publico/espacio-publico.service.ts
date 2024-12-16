
//   constructor(
//     @InjectRepository(EspacioPublico)
//     private readonly espacioPublicoRepository: Repository<EspacioPublico>,
//   ) {}
  
//   async findAll(): Promise<EspacioPublico[]> {
//     return this.espacioPublicoRepository.find();
//   }

//   async findOne(id: number): Promise<EspacioPublico> {
//     return this.espacioPublicoRepository.findOneBy({ id : id });
//   }

//   async create(espacioPublico: Partial<EspacioPublico>): Promise<EspacioPublico> {
//     return this.espacioPublicoRepository.save(espacioPublico);
//   }

//   async update(id: number, espacioPublico: Partial<EspacioPublico>): Promise<void> {
//     const result = await this.espacioPublicoRepository.update(id, espacioPublico);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Espacio publico con id ${id} no encontrado`);
//     }
//   }

// //   async updatePartial(id: number, espacioPublico: Partial<EspacioPublico>): Promise<void> {
// //     const existingUsuario = await this.espacioPublicoRepository.findOneBy({ id : id });

// //     if (!existingUsuario) {
// //       throw new NotFoundException(`Usuario con id ${id} no encontrado`);
// //     }

// //     // Actualizar únicamente los campos enviados en el body
// //     await this.espacioPublicoRepository.update(id, espacioPublico);
// //   }


//   async delete(id: number): Promise<void> {
//     const result = await this.espacioPublicoRepository.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Espacio público con id ${id} no encontrado`);
//     }
//   }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EspacioPublico } from 'src/entities/espacio_publico.entity';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';


@Injectable()
export class EspacioPublicoService {

constructor(
    @InjectRepository(EspacioPublico)
    private readonly espacioPublicoRepository: Repository<EspacioPublico>,
  ) {}

  async findAll(): Promise<EspacioPublico[]> {
    return this.espacioPublicoRepository.find();
  }

  async findOne(id: number): Promise<EspacioPublico> {
    const espacioPublico = await this.espacioPublicoRepository.findOneBy({ id });
    if (!espacioPublico) {
      throw new NotFoundException(`Espacio público con id ${id} no encontrado`);
    }
    return espacioPublico;
  }

  async create(espacioPublico: Partial<EspacioPublico>): Promise<EspacioPublico> {
    return this.espacioPublicoRepository.save(espacioPublico);
  }

  async update(id: number, espacioPublico: Partial<EspacioPublico>): Promise<void> {
    const result = await this.espacioPublicoRepository.update(id, espacioPublico);
    if (result.affected === 0) {
      throw new NotFoundException(`Espacio público con id ${id} no encontrado`);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.espacioPublicoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Espacio público con id ${id} no encontrado`);
    }
  }

}
