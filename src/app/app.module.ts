import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { TexasComponent } from './texas/texas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DcComponent } from './dc/dc.component';
import { WeatherService } from 'app/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    TexasComponent,
    BurbankComponent,
    SanjoseComponent,
    SeattleComponent,
    DcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
