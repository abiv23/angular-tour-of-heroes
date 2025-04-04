import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {HeroDetail} from '../hero-detail/hero-detail.component'
import { HttpResponseBase } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetail],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})



export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  
}
