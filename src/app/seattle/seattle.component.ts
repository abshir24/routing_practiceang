import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather;
  temp;
  constructor(private _service:WeatherService) { }
  
    ngOnInit() {
      this._service.getWeather('seattle')
      .subscribe(
        (response)=>{
          console.log(response.json())
          this.weather = response.json()
          this.temp = this.weather.main.temp
      })
    }

}
