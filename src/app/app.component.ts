import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  //heroes = [new Hero(1,'Windstorm'),new Hero(13,'Bombnastic'),new Hero(14,'Magneta'),new Hero(20,'Damasco')]
//  myHero = this.heroes[0];
}