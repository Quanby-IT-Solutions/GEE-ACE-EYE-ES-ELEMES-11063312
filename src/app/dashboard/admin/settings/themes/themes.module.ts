import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { ThemeService } from 'src/app/shared/service/query/theme/theme.service';

import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesComponent } from './themes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThemesComponent],
  imports: [CommonModule, ThemesRoutingModule, HttpClientModule, FormsModule],
  providers: [SupabaseService, ThemeService],
})
export class ThemesModule {}
