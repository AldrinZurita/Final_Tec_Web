import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly apiUrl = '/usuarios';

  constructor(private axiosService: AxiosService) {}
  
  async getUsuarios() {
    try {
      const response = await this.axiosService.getAxiosInstance().get(this.apiUrl);
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener usuarios:', error.response?.data || error.message);
      throw error;
    }
  }

  async createUsuario(data: { ci_usuario: number; nombre: string; ap_paterno:string; ap_materno:string;  email: string; contrasena: string; direccion: string; telefono: string }) {
    try {
      const response = await this.axiosService.getAxiosInstance().post(this.apiUrl, data);
      return response.data;
    } catch (error: any) {
      console.error('Error al crear usuario:', error.response?.data || error.message);
      throw error;
    }
  }

  async updateUsuarioDatos(ci_usuario: number, data: any) {
    try {
      const response = await this.axiosService.getAxiosInstance().patch(
        `${this.apiUrl}/${ci_usuario}`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error('Error al actualizar datos del usuario:', error.response?.data || error.message);
      throw error;
    }
  }

  async deleteUsuario(ci_usuario: number): Promise<void> {
    try {
      console.log(`URL generada: ${this.apiUrl}/${ci_usuario}`);
      await this.axiosService.getAxiosInstance().delete(`${this.apiUrl}/${ci_usuario}`);
    } catch (error : any) {
      console.error('Error al eliminar usuario:', error.response?.data || error.message);
      throw error;
    }
  }
    
  }
  