import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {

    this.axiosInstance = axios.create({
      baseURL: 'https://backend-service-name.onrender.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
  
}