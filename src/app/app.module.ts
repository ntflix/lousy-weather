import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';
import { MainWeatherBodyComponent } from './components/main-weather-body/main-weather-body.component';
import { LocationChooserComponent } from './components/location-chooser/location-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherContainerComponent,
    MainWeatherBodyComponent,
    LocationChooserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
