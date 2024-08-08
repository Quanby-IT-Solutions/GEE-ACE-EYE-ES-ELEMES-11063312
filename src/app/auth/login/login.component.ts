// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { GuestUser, welcomeLogin } from 'src/app/shared/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public routes = routes;
  password = 'password';
  show = true;
  email: string = '';
  passwordInput: string = 'password';
  errorMessage: string | null = null;
  university: any =  {
    'name' : 'Catanduanes State University',
    'description' : `CATSU Learning Management System (LMS), your one-stop solution for all your educational needs. Whether you're a student, teacher, administrator, or parent, our platform is designed to make your academic journey smooth and efficient.`
  }

  public welcomeLogin: welcomeLogin[] = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(
    private dataService: DataService,
    private supabaseService: SupabaseService,
    public router: Router
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
  }

  togglePasswordVisibility() {
    this.show = !this.show;
    if(this.show){
      this.passwordInput = 'password';
    }else{
      this.passwordInput = '';
    }
  }

  async login() {
    try {
      await this.supabaseService.signIn(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (show message to user, etc.)
    }
  }

  loginAsGuest(userType: string) {
    const guestUser: GuestUser = {
      id: 'guest-' + Date.now(),
      email: `guest-${userType}@example.com`,
      user_type: userType,
    };
    this.supabaseService.setGuestUser(guestUser);
    this.router.navigate(['/dashboard']);
  }


  loginAs(email:string, password: string) {
    this.email = email;
    this.password = password;
    this.login();
  }
}
