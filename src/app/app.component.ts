import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jdashboard';

  apps: {name: string, description: string, url: string}[] = [
    {name: 'FootballTV', description: 'Scheduler setmanal de futbol a les TV', url: 'https://jollmat.github.io/footballtv/'},
    {name: 'BasketTV', description: 'Scheduler setmanal de bàsket a les TV', url: 'https://jollmat.github.io/baskettv/'},
    {name: 'BMoviments', description: 'Analitzador de moviments bancaris (llistat i gràfics)', url: 'https://jollmat.github.io/bmoviments/'},
    {name: 'TVPlayer', description: 'Cercador i visualitzador de TVs online de tot el mòn', url: 'https://jollmat.github.io/tvplayer/'},
    {name: 'Timeline', description: 'Gestor de timeline personal', url: 'https://jollmat.github.io/timeline/'},
    {name: 'Proddle', description: 'Base de dades co.laborativa de productes alimentaris', url: 'https://jollmat.github.io/proddle/'},
    {name: 'Meteogit', description: 'Tracker personalitzat de meteorologia a ubicacions mundials', url: 'https://jollmat.github.io/meteogit/'},
    {name: 'Hondt', description: 'Simulador de pactes en eleccions municipals', url: 'https://jollmat.github.io/hondt/'},
    {name: 'Timeline', description: 'Gestor de timeline personal', url: 'https://jollmat.github.io/timeline/'},
    {name: 'Cinematix', description: 'Cercador dedicat al cinema (pel.lícules, sèries, actors...)', url: 'https://jollmat.github.io/cinematix/'},
  ];
}
