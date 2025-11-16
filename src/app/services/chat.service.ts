import { Injectable } from '@angular/core';
import { io, type Socket } from 'socket.io-client';
import { environment } from '../../enviroments/enviroment';
import { Observable, Subject } from 'rxjs';


export interface SocketMessage {
  chatId: string;
  message: any;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket!: Socket;   
  private msgSubject = new Subject<SocketMessage>();
  private usersSubject = new Subject<any[]>();

  connect(userId: string, token?: string) {

    if (this.socket && this.socket.connected) return;

    this.socket = io(environment.socketUrl, {
      transports: ['websocket', 'polling'],
      auth: token ? { token } : undefined,
      query: { userId }
    });

    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket.id);
      this.socket.emit('register', userId);
    });

    this.socket.on('newPrivateMessage', (payload: SocketMessage) => {
      this.msgSubject.next(payload);
    });

    this.socket.on('onlineUsers', (users: any[]) => {
      this.usersSubject.next(users);
    });

    this.socket.on('connect_error', (err) => {
      console.error('Socket connection error', err);
    });
  }
  disconnect() {
    if (this.socket) this.socket.disconnect();
  }

  onMessage(): Observable<SocketMessage> {
    return this.msgSubject.asObservable();
  }

  onUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  sendPrivateMessage(chatId: string, senderId: string, receiverId: string, text: string) {
    if (!this.socket) throw new Error('Socket not connected');
    this.socket.emit('privateMessage', { chatId, senderId, receiverId, text });
  }

  joinRoom(chatId: string) {
    if (!this.socket) return;
    this.socket.emit('joinRoom', { chatId });
  }

  leaveRoom(chatId: string) {
    if (!this.socket) return;
    this.socket.emit('leaveRoom', { chatId });
  }
}
