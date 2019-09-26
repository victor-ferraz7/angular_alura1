import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({ // decorator
  selector: 'app-root', // permite usar o componente em templates em sua forma declarativa  <app-root>
  templateUrl: './app.component.html', // diz qual é a apresentação desse componente
  styleUrls: ['./app.component.css'] // determina o Css desse componente
})
export class AppComponent implements OnInit { // classe es6

  photos: Object[] = [];

  constructor(private photoService: PhotoService) {} // constructor só para injeção de dependência
  
  ngOnInit(): void{
    
    this.photoService.listFromUser('flavio') // precisa por this para acessar a propriedade da classe
      .subscribe(photos => this.photos = photos); 
  }

}