import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';


@Injectable()
export class UsuarioService {


  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}
  
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ ci_usuario: id });
  }

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<void> {
    const result = await this.usuarioRepository.update(id, usuario);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  }

  async updatePartial(id: number, usuario: Partial<Usuario>): Promise<void> {
    const existingUsuario = await this.usuarioRepository.findOneBy({ ci_usuario: id });

    if (!existingUsuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    // Actualizar únicamente los campos enviados en el body
    await this.usuarioRepository.update(id, usuario);
  }


  async delete(id: number): Promise<void> {
    const usuario = await this.usuarioRepository.delete(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    await this.usuarioRepository.delete(id);
  }

}
