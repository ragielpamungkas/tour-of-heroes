import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  // template: '<h1>Hello</h1>',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id} and name ${hero.name}`)
    console.log(hero);
    this.selectedHero = hero;
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Ragil',
  // };
}
