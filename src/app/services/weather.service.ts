import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '73f5c1fa2fae9e7322a80798656cc8b0'
  URI: string = ''

  constructor(private httpClient: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
   }

   getClima(ciudad: string, pais: string) {
    return this.httpClient.get(`${this.URI}${ciudad},${pais}`)
   }
}
