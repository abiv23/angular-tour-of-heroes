import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetail } from './hero-detail/hero-detail.component'
import { Messages } from './messages/messages.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, HeroDetail, Messages],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
