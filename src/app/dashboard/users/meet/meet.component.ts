


import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  participants = [
    { name: 'Ken', image: 'assets/img/wallpaper.jpg' },
    { name: 'Wade ', image: 'assets/img/wallpaper.jpg' },
    { name: 'Wilson ', image: 'assets/img/wallpaper.jpg' },
    { name: 'Cooper ', image: 'assets/img/wallpaper.jpg' },
  ];

  messages = [
    { userName: 'Wade Warren', userImage: 'assets/img/bini.jpeg', time: '02:11 PM', text: 'Hello Guys 👋 My name is Wade', isReply: false },
    { userName: 'Bessie Wilson', userImage: 'assets/img/bini.jpeg', time: '02:11 PM', text: 'Hello Wade!', isReply: true },
    { userName: 'Bessie Cooper', userImage: 'assets/img/bini.jpeg', time: '02:18 PM', text: 'Human-centered design is a way of developing interactive systems, aimed at creating usable and useful systems', isReply: false }
  ];

  videoOn: boolean = false;
  screenSharing: boolean = false;
  microphoneOn: boolean = true;
  stream: MediaStream | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadParticipants();
  }

  startMeeting() {
    document.getElementById('start-meeting-container')!.style.display = 'none';
    document.getElementById('meeting-container')!.style.display = 'block';
  }

  toggleVideo() {
    if (this.videoOn) {
      this.stopVideo();
    } else {
      this.startVideo();
    }
  }

  startVideo() {
    console.log("Starting video...");
    const video = document.getElementById('main-video-element') as HTMLVideoElement;
    const img = document.getElementById('main-participant-img') as HTMLImageElement;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      console.log("Video stream obtained.");
      video.srcObject = stream;
      this.stream = stream;
      this.videoOn = true;
      video.classList.remove('hidden');
      img.classList.add('hidden');
      document.getElementById('toggle-video-btn')!.textContent = 'Stop Video';
    }).catch(error => {
      console.error('Error accessing media devices.', error);
    });
  }

  stopVideo() {
    if (this.stream) {
      console.log("Stopping video...");
      this.stream.getTracks().forEach(track => track.stop());
      this.videoOn = false;
      const video = document.getElementById('main-video-element') as HTMLVideoElement;
      const img = document.getElementById('main-participant-img') as HTMLImageElement;
      video.classList.add('hidden');
      img.classList.remove('hidden');
      document.getElementById('toggle-video-btn')!.textContent = 'Start Video';
    }
  }

  leaveMeeting() {
    console.log("Leaving meeting...");
    // Implement the leave meeting functionality here
  }

  sendMessage(inputElement: HTMLInputElement) {
    const messageText = inputElement.value.trim();
    if (messageText) {
      const newChatMessage = {
        userName: 'You',
        userImage: 'assets/img/participant1.jpg',
        time: new Date().toLocaleTimeString(),
        text: messageText,
        isReply: false
      };
      this.messages.push(newChatMessage);
      inputElement.value = '';
      this.displayMessages();
    }
  }

  toggleMicrophone() {
    if (this.stream) {
      console.log("Toggling microphone...");
      this.stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
      this.microphoneOn = !this.microphoneOn;

      const micIcon = document.getElementById('microphone-icon');
      if (this.microphoneOn) {
        this.renderer.removeClass(micIcon, 'fa-microphone-slash');
        this.renderer.addClass(micIcon, 'fa-microphone');
        this.renderer.addClass(micIcon, 'text-blue-700');
        this.renderer.addClass(micIcon, 'animate-pulse');
      } else {
        this.renderer.removeClass(micIcon, 'fa-microphone');
        this.renderer.addClass(micIcon, 'fa-microphone-slash');
        this.renderer.removeClass(micIcon, 'text-blue-700');
        this.renderer.removeClass(micIcon, 'animate-pulse');
      }

      document.getElementById('toggle-mic-btn')!.textContent = this.microphoneOn ? 'Mute Microphone' : 'Unmute Microphone';
    }
  }

  startScreenShare() {
    console.log("Starting screen share...");
    navigator.mediaDevices.getDisplayMedia({ video: true }).then(screenStream => {
      console.log("Screen sharing stream obtained.");
      const video = document.getElementById('shared-screen-element') as HTMLVideoElement;
      const placeholder = document.getElementById('shared-screen-placeholder')!;
      video.srcObject = screenStream;
      this.screenSharing = true;
      placeholder.style.display = 'none';
      screenStream.getVideoTracks()[0].addEventListener('ended', () => {
        console.log("Screen sharing ended.");
        this.screenSharing = false;
        placeholder.style.display = 'flex';
      });
    }).catch(error => {
      console.error('Error sharing screen.', error);
    });
  }

  loadParticipants() {
    const participantsContainer = document.getElementById('participants-container')!;
    this.participants.forEach(participant => {
      const participantDiv = document.createElement('div');
      participantDiv.classList.add('flex', 'flex-col', 'items-center', 'participant');

      const participantImg = document.createElement('img');
      participantImg.src = participant.image;
      participantImg.alt = participant.name;
      participantImg.classList.add('w-34', 'h-40', 'rounded-xl');

      const participantName = document.createElement('div');
      participantName.textContent = participant.name;
      participantName.classList.add('text-xs', 'mt-2');

      participantDiv.appendChild(participantImg);
      participantDiv.appendChild(participantName);
      participantsContainer.appendChild(participantDiv);
    });
  }

  displayMessages() {
    const chatRoom = document.getElementById('chat-room')!;
    chatRoom.innerHTML = '';
    this.messages.forEach(message => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('mb-4');

      const messageFlex = document.createElement('div');
      messageFlex.classList.add('flex', 'items-start');

      const messageImg = document.createElement('img');
      messageImg.src = message.userImage;
      messageImg.alt = message.userName;
      messageImg.classList.add('w-8', 'h-8', 'rounded-full', 'mr-2');

      const messageContent = document.createElement('div');

      const messageUserName = document.createElement('div');
      messageUserName.textContent = message.userName;
      messageUserName.classList.add('text-sm', 'font-semibold');

      const messageTime = document.createElement('div');
      messageTime.textContent = message.time;
      messageTime.classList.add('text-xs', 'text-gray-500');

      const messageText = document.createElement('div');
      messageText.textContent = message.text;
      messageText.classList.add('text-sm', message.isReply ? 'text-blue-700' : 'text-gray-700');

      messageContent.appendChild(messageUserName);
      messageContent.appendChild(messageTime);
      messageContent.appendChild(messageText);

      messageFlex.appendChild(messageImg);
      messageFlex.appendChild(messageContent);

      messageDiv.appendChild(messageFlex);
      chatRoom.appendChild(messageDiv);
    });
  }
}
