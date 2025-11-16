import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { Router } from '@angular/router';
import { ChatService } from '../../app/services/chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  me: any = null;

  constructor(private api: ApiService, private router: Router, private chat: ChatService) {}

  async ngOnInit() {
    this.me = JSON.parse(localStorage.getItem('user') || 'null');
    const data = await this.api.getUsers();
    // filter out self
    this.users = data.filter((u: any) => u._id !== this.me._id);
    // connect socket if not already
    if (this.me) this.chat.connect(this.me._id, this.me.token);
  }
  async openChat(otherUser: any) {
    // Create or get chat for [me, otherUser]
    const chat = await this.api.createChat([this.me._id, otherUser._id]);
    // optionally join chat room
    this.chat.joinRoom(chat._id);
    // navigate to chat page
    this.router.navigate(['/chat', chat._id]);
  }
}
