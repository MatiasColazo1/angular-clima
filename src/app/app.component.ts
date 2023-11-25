import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  clima: any;

  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
  }
  
  getClima(ciudad: string, pais: string) {
    this.weatherService.getClima(ciudad, pais)
    .subscribe(
      res => {
        console.log(res);
        this.clima = res
      },
      err => console.log(err)
    )
  }

  submitLocation(ciudad: HTMLInputElement, pais: HTMLInputElement) {
    if(ciudad.value && pais.value) {
      this.getClima(ciudad.value, pais.value);
  
      ciudad.value = '';
      pais.value = '';
    } else {
      alert('Inserte los valores')
    }

    ciudad.focus;
    return false;
  }

}
