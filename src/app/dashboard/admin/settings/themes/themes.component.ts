import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeService } from 'src/app/shared/service/query/theme/theme.service';
import { ThemeSetting } from 'src/app/shared/models/model';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
})
export class ThemesComponent implements OnInit {
  themeSettings: ThemeSetting[] = [];
  selectedTheme: number | null = null;
  themeToModify: number | null = null;
  themeToDelete: number | null = null;
  isCreateThemeModalOpen = false;
  isCreatingTheme = false;
  showSuccessMessage = false;
  newTheme: Partial<ThemeSetting> = {};
  @ViewChild('createThemeForm') createThemeForm!: NgForm;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadThemeSettings();
  }

  async loadThemeSettings() {
    try {
      this.themeSettings = await this.themeService.getThemeSettings();
      // Optionally, sort the themes by creation date or any other criteria
      this.themeSettings.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } catch (error) {
      console.error('Error fetching theme settings:', error);
    }
  }

  openCreateThemeModal() {
    const currentDate = new Date().toISOString();
    this.isCreateThemeModalOpen = true;
    this.newTheme = {
      name: '',
      primary_color: '',
      secondary_color: '',
      text_color: '',
      background_color: '',
      link_color: '',
      header_background_color: '',
      footer_background_color: '',
      primary_color_dark: '',
      secondary_color_dark: '',
      text_color_dark: '',
      background_color_dark: '',
      link_color_dark: '',
      header_bgcolor_dark: '',
      footer_bgcolor_dark: '',
      is_active: false,
      created_at: currentDate,
      updated_at: currentDate,
    };
  }

  async createNewTheme() {
    if (this.isCreatingTheme || this.createThemeForm.form.invalid) return;

    this.isCreatingTheme = true;
    try {
      const createdTheme = await this.themeService.createTheme(
        this.newTheme as ThemeSetting
      );
      this.closeCreateThemeModal();
      await this.loadThemeSettings();
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
    } catch (error) {
      console.error('Error creating new theme:', error);
    } finally {
      this.isCreatingTheme = false;
    }
  }

  closeCreateThemeModal() {
    this.isCreateThemeModalOpen = false;
    this.isCreatingTheme = false;
    if (this.createThemeForm) {
      this.createThemeForm.resetForm();
    }
  }

  async applyTheme() {
    if (this.selectedTheme === null) return;
    try {
      // Implement logic to apply the selected theme
      await this.themeService.applyTheme(this.selectedTheme);
      console.log('Applied theme:', this.selectedTheme);
      // Optionally, update the is_active status in the local themeSettings array
      this.updateActiveTheme(this.selectedTheme);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }

  async modifyTheme() {
    if (this.themeToModify === null) return;
    try {
      // Implement logic to modify the selected theme
      console.log('Modifying theme:', this.themeToModify);
      // After modifying, reload theme settings
      await this.loadThemeSettings();
    } catch (error) {
      console.error('Error modifying theme:', error);
    }
  }

  async deleteTheme() {
    if (this.themeToDelete === null) return;
    try {
      // Implement logic to delete the selected theme
      await this.themeService.deleteTheme(this.themeToDelete);
      console.log('Deleted theme:', this.themeToDelete);
      // After deleting, reload theme settings
      await this.loadThemeSettings();
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  }

  private updateActiveTheme(activeThemeId: number) {
    this.themeSettings = this.themeSettings.map((theme) => ({
      ...theme,
      is_active: theme.id === activeThemeId,
    }));
  }
}
