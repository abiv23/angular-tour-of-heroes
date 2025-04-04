import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {HeroDetail} from '../hero-detail/hero-detail.component'
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetail],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})



export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
