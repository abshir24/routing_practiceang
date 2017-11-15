import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  temp;
  weather;
  constructor(private _service:WeatherService) { }

  ngOnInit() {
    this._service.getWeather('burbank')
    .subscribe(
      (response)=>{
        console.log(response.json())
        this.weather = response.json()
        this.temp = this.weather.main.temp
      })
  }

}
