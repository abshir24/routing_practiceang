import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private _http:Http) { }

  getWeather(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90d0b79bd6205d862f8457b4d0c44e76`)
  }

}