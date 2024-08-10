import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {
  chats = [
    {
      id: 1,
      name: 'Kenneth Levin',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Et harum quidem rerum facilis est...',
      time: '2m Ago',
      status: 'Online',
      messages: [
        { sender: 'Kenneth', avatar: 'assets/img/bini.jpeg', text: 'Morning Kenneth, I have a question about the course', time: '11:52 AM' },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Yes sure, any problem to implement the course?', time: '11:53 AM' },
        { sender: 'Kenneth', avatar: 'assets/img/bini.jpeg', text: 'Nam libero tempore, cum soluta nobis...', time: '11:55 AM' }
      ]
    },
    {
      id: 2,
      name: 'Sean Calzoni',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Sure! Let me tell you about what happened...',
      time: '5m Ago',
      status: 'Offline',
      messages: [
        { sender: 'Jakob', avatar: 'assets/img/bini.jpeg', text: 'Sure! Let me tell you about what happened...', time: '11:50 AM' },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'I’m curious, what happened exactly?', time: '11:51 AM' },
        { sender: 'Jakob', avatar: 'assets/img/bini.jpeg', text: 'It was a wild story...', time: '11:53 AM' }
      ]
    },
    {
      id: 3,
      name: 'Joemar Korsgaard',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Don’t worry, everything is under control!',
      time: '10m Ago',
      status: 'Online',
      messages: [
        { sender: 'Joemar', avatar: 'assets/img/bini.jpeg', text: 'Don’t worry, everything is under control!', time: '11:45 AM' },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Are you sure? It seems pretty chaotic...', time: '11:46 AM' },
        { sender: 'Joemar', avatar: 'assets/img/bini.jpeg', text: 'Trust me on this one!', time: '11:47 AM' }
      ]
    },
    {
      id: 4,
      name: 'Randy Palacay',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Just sent you the documents, check your email.',
      time: '15m Ago',
      status: 'Offline',
      messages: [
        { sender: 'Randy', avatar: 'assets/img/bini.jpeg', text: 'Just sent you the documents, check your email.', time: '11:40 AM' },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Thanks, I’ll review them shortly.', time: '11:41 AM' },
        { sender: 'Randy', avatar: 'assets/img/bini.jpeg', text: 'No problem!', time: '11:42 AM' }
      ]
    },
    {
      id: 5,
      name: 'Antonzxz Septimus',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Let’s catch up later this week.',
      time: '20m Ago',
      status: 'Online',
      messages: [
        { sender: 'Antonzxz', avatar: 'assets/img/bini.jpeg', text: 'Let’s catch up later this week.', time: '11:35 AM' },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Sounds good, I’m free on Friday.', time: '11:36 AM' },
        { sender: 'Antonzxz', avatar: 'assets/img/bini.jpeg', text: 'Perfect, let’s plan for Friday afternoon.', time: '11:37 AM' }
      ]
    }
  ];

  selectedChat = this.chats[0];
  newMessage = '';

  selectChat(chat: any) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.selectedChat.messages.push({
        sender: 'me',
        avatar: 'assets/img/bini.jpeg',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.newMessage = '';
    }
  }
}
