import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  temp;
  
  constructor(private _service:WeatherService) { }
  
    ngOnInit() {
      this._service.getWeather('san jose')
      .subscribe(
        (response)=>{
          console.log(response.json())
          this.weather = response.json()
          this.temp = this.weather.main.temp
      })
    }

}
