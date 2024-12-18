import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {

    this.axiosInstance = axios.create({
      baseURL: 'https://final-tec-web-2-n87q.onrender.com',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
  
}