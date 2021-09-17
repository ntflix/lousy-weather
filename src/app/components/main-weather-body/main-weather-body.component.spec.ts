import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherBodyComponent } from './main-weather-body.component';

describe('MainWeatherBodyComponent', () => {
  let component: MainWeatherBodyComponent;
  let fixture: ComponentFixture<MainWeatherBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWeatherBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
