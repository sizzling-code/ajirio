import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService, SocketMessage } from '../../app/services/chat.service';
import { ApiService } from '../../app/services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html'
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  chatId!: string;
  messages: any[] = [];
  text = '';
  me: any = null;

  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private chat: ChatService, private api: ApiService) {}

  async ngOnInit() {
    this.me = JSON.parse(localStorage.getItem('user') || 'null');
    this.chatId = this.route.snapshot.paramMap.get('id') || '';
    // connect and join room if not already
    if (this.me) this.chat.connect(this.me._id, this.me.token);
    this.chat.joinRoom(this.chatId);

    // load history
    const res = await this.api.getChatMessages(this.chatId);
    this.messages = res;

    // subscribe to live messages
    this.sub = this.chat.onMessage().subscribe((payload: SocketMessage) => {
      if (payload.chatId === this.chatId) {
        this.messages.push(payload.message);
        
      }
    });
  }

  send() {
    if (!this.text.trim()) return;
    const receiverId = ''; 
    this.chat.sendPrivateMessage(this.chatId, this.me._id, receiverId, this.text);
    // optimistic UI
    this.messages.push({
      sender: { _id: this.me._id, username: this.me.username },
      text: this.text,
      createdAt: new Date().toISOString()
    });
    this.text = '';
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    // optionally leave room
    this.chat.leaveRoom(this.chatId);
  }
}
