import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  // Obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  // Obtener un usuario por su CI (id)
  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ ci_usuario: id });

    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    return usuario;
  }

  // Crear un nuevo usuario
  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(usuario);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  // Actualizar un usuario completamente
  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    const existingUsuario = await this.usuarioRepository.findOneBy({ ci_usuario: id });

    if (!existingUsuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    await this.usuarioRepository.update(id, usuario);
    return this.findOne(id); // Devolver el usuario actualizado
  }

  // Actualizar parcialmente los datos del usuario
  async updatePartial(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    const existingUsuario = await this.usuarioRepository.findOneBy({ ci_usuario: id });

    if (!existingUsuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    await this.usuarioRepository.update(id, usuario);
    return this.findOne(id); // Devolver el usuario actualizado parcialmente
  }

  // Eliminar un usuario por su id
  async delete(id: number): Promise<void> {
    const result = await this.usuarioRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  }
}
