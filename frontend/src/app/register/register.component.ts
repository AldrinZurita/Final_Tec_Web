import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // Datos del formulario
  registerData = {
        ci_usuario: null,
        nombre: '',
        ap_paterno: '',
        ap_materno: '',
        email: '',
        password: '',
        confirmPassword: '',
        direccion: '',
        telefono: '',
      };

    constructor(
      private usuariosService: UsuariosService,
      private router: Router
    ) {}

  async onRegisterSubmit() {
    try {
      // Validación simple antes de enviar
      if (!this.registerData.ci_usuario || !this.registerData.email || !this.registerData.password) {
        console.error('Por favor, llena los campos obligatorios: CI, Email y Contraseña.');
        return;
      }

      try {
        const usuario = {
          ci_usuario: this.registerData.ci_usuario,
          nombre : this.registerData.nombre,
          ap_paterno: this.registerData.ap_paterno,
          ap_materno: this.registerData.ap_materno,
          email: this.registerData.email,
          contrasena: this.registerData.password,
          direccion: this.registerData.direccion,
          telefono: this.registerData.telefono
        };
  
        const response = await this.usuariosService.createUsuario(usuario);
        console.log('Usuario registrado:', response);
  
        localStorage.setItem('ci_usuario', response.ci_usuario.toString());
  
        //redirigir
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}
