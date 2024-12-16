import { Component } from '@angular/core';
import { EspaciosPublicosService } from '../services/espacios-publicos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-espacios-publicos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './espacios-publicos.component.html',
  styleUrl: './espacios-publicos.component.scss'
})
export class EspaciosPublicosComponent {

  espaciosPublicos: any[] = [];
  espaciosPublicosFiltrados: any[] = [];
  searchId: string = ''; // Valor del id en el buscador
  isEditing: any ={};


constructor(private espaciosPublicosService: EspaciosPublicosService) {}

  ngOnInit(): void {
    this.getEspaciosPublicos(); 
  }

  // Obtener todos los usuarios
  getEspaciosPublicos(): void {
    this.espaciosPublicosService.getEspaciosPublicos().then((data) => {
      this.espaciosPublicos= data; // Guardar todos los usuarios
      this.espaciosPublicosFiltrados = data; // Inicializar la lista filtrada con todos los usuarios
    }).catch(error => {
      console.error('Error al cargar espacio publicos:', error);
    });
  }

  // deleteEspacioPublico(id: number): void {
  //   this.espaciosPublicosService.deleteEspacioPublico(id).then(() => {
  //       console.log(`Espacio público con ID ${id} eliminado correctamente.`);
  //       this.getEspaciosPublicos(); // Actualiza la lista después de eliminar
  //     })
  //     .catch(error => {
  //       console.error('Error al eliminar el espacio público:', error);
  //     });
  // }
  
  deleteEspacioPublico(id: number): void {
    console.log(`ID recibido para eliminar: ${id}`); // Verifica el ID aquí
    this.espaciosPublicosService.deleteEspacioPublico(id)
      .then(() => {
        this.getEspaciosPublicos(); // Recargar la lista después de eliminar
      })
      .catch((error) => {
        console.error('Error al eliminar espacio público:', error);
      });
  }
  


}
