import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/weather-item';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {
  @Input() weather!: WeatherItem[];
  @Input() location!: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  convertDateToFormat(date: Date): string {
    return this.datePipe.transform(date, 'dd MMMM yyyy')!;
  }
}
