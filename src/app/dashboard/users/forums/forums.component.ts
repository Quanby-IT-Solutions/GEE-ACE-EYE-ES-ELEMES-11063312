import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Subscription } from 'rxjs';

interface ForumPost {
  id: number;
  author: string;
  role: string;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit, OnDestroy {
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  posts: ForumPost[] = [];
  newPostContent: string = '';

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
      }
    );
    this.loadPosts();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  loadPosts() {
    // TODO: Implement actual loading of posts from your backend
    this.posts = [
      { id: 1, author: 'John Doe', role: 'student', content: 'Hello, this is a test post!', timestamp: new Date() },
      { id: 2, author: 'Jane Smith', role: 'instructor', content: 'Welcome to the forum!', timestamp: new Date() }
    ];
  }

  updateNewPostContent(event: Event) {
    this.newPostContent = (event.target as HTMLTextAreaElement).value;
  }

  submitPost() {
    if (this.newPostContent.trim() && this.user) {
      const newPost: ForumPost = {
        id: this.posts.length + 1,
        author: this.user.email || 'Anonymous',
        role: this.getUserRole() || 'Unknown',
        content: this.newPostContent,
        timestamp: new Date()
      };
      this.posts.unshift(newPost);
      this.newPostContent = '';
      // TODO: Implement actual posting to your backend
    }
  }
}