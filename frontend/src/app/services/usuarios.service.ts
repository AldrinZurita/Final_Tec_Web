import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  findOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(usuarioData: Partial<any>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, usuarioData);
  }

  update(id: number, usuarioData: Partial<any>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, usuarioData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
