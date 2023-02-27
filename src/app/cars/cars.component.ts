import { Component } from '@angular/core';
import { Car } from "../car";
import { CarService } from "../car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
        .subscribe(cars => this.cars = cars);
  }
}
