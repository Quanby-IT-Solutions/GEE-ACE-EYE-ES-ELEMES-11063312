import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: string;
  avatar: string;
  text: string;
  time: string;
  file?: {
    name: string;
    url: string;
  } | null;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  status: string;
  messages: ChatMessage[];
}

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {
  chats: Chat[] = [
    {
      id: 1,
      name: 'Instructor',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'Please check the attached syllabus.',
      time: '1h Ago',
      status: 'Online',
      messages: [
        { sender: 'Instructor', avatar: 'assets/img/bini.jpeg', text: 'Morning, here is the course syllabus.', time: '09:00 AM', file: { name: 'Syllabus.pdf', url: 'assets/files/Syllabus.pdf' } },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Thanks! I will review it.', time: '09:05 AM', file: null }
      ]
    },
    {
      id: 2,
      name: 'Admin',
      avatar: 'assets/img/bini.jpeg',
      lastMessage: 'The updated schedule is attached.',
      time: '2h Ago',
      status: 'Offline',
      messages: [
        { sender: 'Admin', avatar: 'assets/img/bini.jpeg', text: 'Here is the updated schedule.', time: '08:00 AM', file: { name: 'Schedule.pdf', url: 'assets/files/Schedule.pdf' } },
        { sender: 'me', avatar: 'assets/img/bini.jpeg', text: 'Got it, thank you!', time: '08:10 AM', file: null }
      ]
    }
  ];

  selectedChat = this.chats[0];
  filteredChats = [...this.chats]; // Initialize with all chats
  newMessage = '';
  selectedFile: File | null = null;

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '' || this.selectedFile) {
      const message: ChatMessage = {
        sender: 'me',
        avatar: 'assets/img/bini.jpeg',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        file: null
      };

      if (this.selectedFile) {
        message.file = {
          name: this.selectedFile.name,
          url: URL.createObjectURL(this.selectedFile)
        };
      }

      this.selectedChat.messages.push(message);
      this.newMessage = '';
      this.selectedFile = null;  // Clear selected file after sending
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  searchTerm: string = '';

  searchChats() {
    const term = this.searchTerm.toLowerCase();
    this.filteredChats = this.chats.filter(chat =>
      chat.name.toLowerCase().includes(term)
    );
  }
}
