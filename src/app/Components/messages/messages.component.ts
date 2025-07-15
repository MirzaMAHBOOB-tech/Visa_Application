import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  unreadMessages: any[] = [];
  readMessages: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages() {
    this.contactService.getContacts().subscribe(data => {
      this.unreadMessages = data.filter((msg: any) => !msg.isRead);
      this.readMessages = data.filter((msg: any) => msg.isRead);
    });
  }

  markAsRead(id: string) {
    this.contactService.markAsRead(id).subscribe(() => this.fetchMessages());
  }

  deleteMessage(id: string) {
    this.contactService.deleteContact(id).subscribe(() => this.fetchMessages());
  }
}
