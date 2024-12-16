import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})

export class UsuariosComponent {
  usuarios: any[] = []; // Lista completa de usuarios
  usuariosFiltrados: any[] = []; // Lista filtrada de usuarios
  searchCi: string = ''; // Valor del CI en el buscador
  isEditing: any ={};

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios(); // Cargar todos los usuarios al inicio
  }

  // Obtener todos los usuarios
  getUsuarios(): void {
    this.usuariosService.getUsuarios().then((data) => {
      this.usuarios = data; // Guardar todos los usuarios
      this.usuariosFiltrados = data; // Inicializar la lista filtrada con todos los usuarios
    }).catch(error => {
      console.error('Error al cargar usuarios:', error);
    });
  }

  // Filtrar usuarios por CI
  findUsuario(): void {
    const ci = this.searchCi ? this.searchCi.toString() : '';
    if (ci) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.ci_usuario.toString().includes(ci)
      );
    } else {
      // Si no hay CI ingresado, mostrar todos los usuarios
      this.usuariosFiltrados = this.usuarios;
    }
  }

  // Eliminar un usuario por CI
  deleteUsuario(ci_usuario: number): void {
    this.usuariosService.deleteUsuario(ci_usuario).then(() => {
      // Eliminar el usuario de ambas listas
      this.usuarios = this.usuarios.filter(usuario => usuario.ci_usuario !== ci_usuario);
      this.usuariosFiltrados = this.usuariosFiltrados.filter(usuario => usuario.ci_usuario !== ci_usuario);
    }).catch(error => {
      console.error('Error al eliminar usuario:', error);
    });
  }

  editField(index : number, field: string) : void {
    if (!this.isEditing[index]){
      this.isEditing[index] = {}; 
    }
    this.isEditing[index][field] = true;
  }

  stopEditing(index: number, field: string): void {
    this.isEditing[index][field] = false;
  }

  async updateUsuario(ci_usuario: number, usuario: any): Promise<void> {
    try {
      const updatedUsuario = await this.usuariosService.updateUsuarioDatos(ci_usuario, usuario);
      console.log('Usuario actualizado', updatedUsuario);
      this.getUsuarios(); // Recargar los usuarios después de la actualización
    } catch (error) {
      console.error('Error al actualizar el usuario', error);
    }
  }


}
