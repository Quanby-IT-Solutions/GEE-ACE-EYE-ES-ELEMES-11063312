import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() icon: string = 'fa-user';
  @Input() value: string = '0';
  @Input() label: string = 'Label';
  @Input() progress: number = 50; 
}
