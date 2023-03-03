import { Injectable } from '@angular/core';
import { Car } from "./car";
import { Observable, of, from} from 'rxjs';
import { Part } from "./part";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private cars: Car[] = [];
  private parts: Part[] = [];

  // parametry do wypełniania id - inkrementowane przy dodawaniu rekordu
  private car_inc: number = 1;
  private part_inc: number = 1;

  constructor() {
    let storage = localStorage.getItem('cars')
    this.cars = storage ? JSON.parse(storage): [];

    storage = localStorage.getItem('parts')
    this.parts = storage ? JSON.parse(storage): [];

    this.car_inc = Number(localStorage.getItem('car_inc') || 1);
    this.part_inc = Number(localStorage.getItem('part_inc') || 1);
  }

  getAllCars(): Observable<Car[]> {
    return of(this.cars);
  }

  addCar(car: Car) {
    car.car_id = this.car_inc;
    this.car_inc++;
    this.cars.push(car);
    localStorage.setItem('cars', JSON.stringify(this.cars))
    localStorage.setItem('car_inc', String(this.car_inc) )
  }

  updateCar(car: Car) {
    const index = this.cars.findIndex(c => c.car_id === car.car_id);
    if (index !== -1) {
      this.cars[index] = car;
      localStorage.setItem('cars', JSON.stringify(this.cars))
    }
  }

  deleteCar(car: Car) {
    if (window.confirm(`Czy potwierdzasz usunięcie samochodu ${car.make} ${car.model} rocznik: ${car.year}?`)) {
      this.cars = this.cars.filter(c => c.car_id !== car.car_id);
      localStorage.setItem('cars', JSON.stringify(this.cars));
      location.reload()
      }
    }

  getCarParts(carId: number): Observable<Part[]>{
  const parts = this.parts.filter(part => part.car_id === carId);
  return of(parts);
  }

  addPart(part: Part) {
    part.part_id = this.part_inc;
    this.part_inc++;
    this.parts.push(part);
    localStorage.setItem('parts', JSON.stringify(this.parts));
    localStorage.setItem('part_inc', String(this.part_inc));
  }

  updatePart(part: Part) {
    const index = this.parts.findIndex(c => c.part_id === part.part_id);
    if (index !== -1) {
      this.parts[index] = part;
      localStorage.setItem('parts', JSON.stringify(this.parts))
    }
  }

  deletePart(part: Part) {
    if (window.confirm(`Czy potwierdzasz usunięcie części ${part.name}?`)) {
      this.parts = this.parts.filter(p => p.part_id !== part.part_id);
      localStorage.setItem('parts', JSON.stringify(this.parts));
      location.reload()
      }
    }
  }
