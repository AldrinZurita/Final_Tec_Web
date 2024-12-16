import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';


@Injectable({
  providedIn: 'root',
})
export class EspaciosPublicosService {
  private apiUrl = '/espacio-publico'; // Ruta base del backend para esta entidad

  constructor(private axiosService: AxiosService) {}

  async getEspaciosPublicos() {
    try {
      const response = await this.axiosService.getAxiosInstance().get(this.apiUrl);
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener espacio publico:', error.response?.data || error.message);
      throw error;
    }
  }

  async createEspacioPublico(data: {id : number; nombre : string; descripcion: string; latitud: number; longitud:number; direccion:string;}) {
    try {
      const response = await this.axiosService.getAxiosInstance().post(this.apiUrl, data);
      return response.data;
    } catch (error: any) {
      console.error('Error al crear espacio publico:', error.response?.data || error.message);
      throw error;
    }
  }


  async updateEspacioPublico(id: number, data: any) {
    try {
      const response = await this.axiosService.getAxiosInstance().patch(
        `${this.apiUrl}/${id}`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error('Error al actualizar datos del espacio publico:', error.response?.data || error.message);
      throw error;
    }
  }


  async deleteEspacioPublico(id: number) {
    try {
      console.log(`URL generada: ${this.apiUrl}/${id}`); // Verifica que la URL sea correcta
      await this.axiosService.getAxiosInstance().delete(`${this.apiUrl}/${id}`);
    } catch (error: any) {
      console.error('Error al eliminar espacio publico:', error.response?.data || error.message);
      throw error;
    }
  }
  
}
