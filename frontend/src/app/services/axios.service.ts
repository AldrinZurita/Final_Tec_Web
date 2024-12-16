import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {

    this.axiosInstance = axios.create({
      baseURL: 'https://final-tec-web-76vo.onrender.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
  
}