import { Component, Input } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})

export class HeroDetail {
  @Input() hero?: Hero;
  
}
