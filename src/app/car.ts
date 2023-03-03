export class Car {
  car_id: number;
  make: string;
  model: string;
  year: number;

  constructor(car_id: number, make: string, model: string, year: number) {
    this.car_id = car_id;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
