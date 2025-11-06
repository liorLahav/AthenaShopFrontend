import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.html',
  styleUrl: './section.css'
})
export class Section {
  @Input({required : true}) title! : string;
  @Input() price : number = -1;
  @Input() isBold : boolean = false;
}
