import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-texas',
  templateUrl: './texas.component.html',
  styleUrls: ['./texas.component.css']
})
export class TexasComponent implements OnInit {
  weather;
  temp;
  constructor(private _service:WeatherService) { }
  
    ngOnInit() {
      this._service.getWeather('texas')
      .subscribe(
        (response)=>{
          console.log(response.json())
          this.weather = response.json()
          this.temp = this.weather.main.temp
      })
    }

}
