import { Injectable } from '@angular/core';
import { ThemeSetting } from 'src/app/shared/models/model';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';


interface Theme {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private supabaseService: SupabaseService) {}

  async getThemeSettings(): Promise<ThemeSetting[]> {
    const { data, error } = await this.supabaseService.client
      .from('theme_settings_tb')
      .select('*')
      .returns<ThemeSetting[]>();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getThemes(): Promise<Theme[]> {
    const { data, error } = await this.supabaseService.client
      .from('themes') // Assuming you have a 'themes' table
      .select('id, name')
      .returns<Theme[]>();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async createTheme(theme: Partial<ThemeSetting>): Promise<ThemeSetting> {
    const { data, error } = await this.supabaseService.client
      .from('theme_settings_tb')
      .insert(theme)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async applyTheme(themeId: number): Promise<void> {
    // This method might involve updating a user's preferences or
    // some other application state. The implementation will depend
    // on how you want to handle theme application in your app.
    console.log(`Applying theme with id: ${themeId}`);
    // Implement the actual logic here
  }

  async modifyTheme(
    themeId: string,
    updates: Partial<ThemeSetting>
  ): Promise<ThemeSetting> {
    const { data, error } = await this.supabaseService.client
      .from('theme_settings_tb')
      .update(updates)
      .eq('id', themeId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteTheme(themeId: number): Promise<void> {
    const { error } = await this.supabaseService.client
      .from('theme_settings_tb')
      .delete()
      .eq('id', themeId);

    if (error) {
      throw new Error(error.message);
    }
  }
}
