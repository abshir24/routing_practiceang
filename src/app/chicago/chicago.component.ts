import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  temp;
  weather;
  constructor(private _service:WeatherService) { }
  
  ngOnInit() {
    this._service.getWeather('chicago')
    .subscribe(
      (response)=>{
        console.log(response.json())
        this.weather = response.json()
        this.temp = this.weather.main.temp
    })
  }

}
