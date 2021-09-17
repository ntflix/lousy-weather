import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherItem } from '../weather-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "http://localhost:2020"

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<WeatherItem[]> {
    const url = `${this.apiUrl}/${location}`;
    return this.http.get<WeatherItem[]>(url);
  }

  getLocations(): Observable<string[]> {
    const url = `${this.apiUrl}/locations`
    return this.http.get<string[]>(url);
  }
}
