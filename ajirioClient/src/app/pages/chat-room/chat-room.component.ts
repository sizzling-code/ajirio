import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GigService } from '../../services/gig.service';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  imports: [CommonModule],
  templateUrl: './chat-room.component.html'
})
export class ChatRoomComponent {
  chatId!: string;
  messages: any[] = [];
  text = '';
  me: any = null;

  private sub!: Subscription;

  constructor(private route: ActivatedRoute,  private api: GigService) {}
  chat = inject(ChatService);

  // async ngOnInit() {
  //   this.me = JSON.parse(localStorage.getItem('user') || 'null');
  //   this.chatId = this.route.snapshot.paramMap.get('id') || '';
  //   // connect and join room if not already
  //   if (this.me) this.chat.connect(this.me._id, this.me.token);
  //   this.chat.joinRoom(this.chatId);

  //   // load history
  //   const res = await this.api.getChatMessages(this.chatId);
  //   this.messages = res;

  //   // subscribe to live messages
  //   this.sub = this.chat.onMessage().subscribe((payload: SocketMessage) => {
  //     if (payload.chatId === this.chatId) {
  //       this.messages.push(payload.message);
        
  //     }
  //   });
  // }

  // send() {
  //   if (!this.text.trim()) return;
  //   const receiverId = ''; 
  //   this.chat.sendPrivateMessage(this.chatId, this.me._id, receiverId, this.text);
  //   // optimistic UI
  //   this.messages.push({
  //     sender: { _id: this.me._id, username: this.me.username },
  //     text: this.text,
  //     createdAt: new Date().toISOString()
  //   });
  //   this.text = '';
  // }

  // ngOnDestroy() {
  //   this.sub?.unsubscribe();
  //   // optionally leave room
  //   this.chat.leaveRoom(this.chatId);
  // }
}
