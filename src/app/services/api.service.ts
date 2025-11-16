import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../enviroments/enviroment';
import type { Socket } from "socket.io-client";


const api = axios.create({
  baseURL: environment.apiUrl,
});

api.interceptors.request.use(config => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  } catch {}
  return config;
});
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  async getUsers() {
    const res = await api.get('/users');
    return res.data;
  }

  
  async createChat(userIds: string[]) {
    const res = await api.post('/chats', { userIds });
    return res.data;
  }

  async getChatMessages(chatId: string, page = 1, limit = 50) {
    const res = await api.get(`/chats/${chatId}/messages?page=${page}&limit=${limit}`);
    return res.data;
  }
}
