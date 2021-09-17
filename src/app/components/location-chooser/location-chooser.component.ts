import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-chooser',
  templateUrl: './location-chooser.component.html',
  styleUrls: ['./location-chooser.component.css']
})
export class LocationChooserComponent implements OnInit {
  @Input() locations!: string[];
  @Output() locationChosen = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(location: string): void {
    this.locationChosen.emit(location);
  }
}
