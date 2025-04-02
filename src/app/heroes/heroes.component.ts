import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
