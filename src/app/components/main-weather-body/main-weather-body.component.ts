import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherItem } from 'src/app/weather-item';

@Component({
  selector: 'app-main-weather-body',
  templateUrl: './main-weather-body.component.html',
  styleUrls: ['./main-weather-body.component.css']
})
export class MainWeatherBodyComponent implements OnInit {
  locations: string[] = [];
  chosenLocation?: string;
  weather?: WeatherItem[];
  title: string = "Weather";

  constructor(private weatherService: WeatherService) {
    this.weatherService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  private getWeather(): void {
    if (this.chosenLocation == null) {
      alert("No location selected");
      return;
    }

    this.weatherService.getWeather(this.chosenLocation).subscribe((weather) => {
      this.weather = weather;
      this.title = `Weather for ${this.chosenLocation}`
    });

  }

  locationChosen(location: string): void {
    this.chosenLocation = location;
    if (this.locations.includes(location)) {
      this.getWeather();
    }
  }

  ngOnInit(): void {
  }

}
