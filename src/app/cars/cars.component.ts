import { Component } from '@angular/core';
import { Car } from "../car";
import { CarService } from "../car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css', '../w3.css']
})

export class CarsComponent {

  cars: Car[] = [];
  newCar: Car = {car_id: 0, make: '', model: '', year: 0 };
  editingCar: number = 0;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getAllCars()
        .subscribe(cars => this.cars = cars);
  }

  addCar(): void {
    this.carService.addCar(this.newCar);
    this.newCar = {car_id:0, make: '', model: '', year: 0 };
  }

  updateCar(car: Car): void{
    this.carService.updateCar(car)
    this.editingCar = 0;
  }

  deleteCar(car: Car): void{
    this.carService.deleteCar(car);
  }

  enableEditMode(car_id: number): void{
    this.editingCar = car_id;
  }
}
