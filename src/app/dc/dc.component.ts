import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather;
  temp;
  constructor(private _service:WeatherService) { }
  
  ngOnInit() {
    this._service.getWeather('dc')
    .subscribe(
      (response)=>{
        console.log(response.json())
        this.weather = response.json()
        this.temp = this.weather.main.temp
    })
  }

}
