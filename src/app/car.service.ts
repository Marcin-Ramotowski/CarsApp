import { Injectable } from '@angular/core';
import { Car } from "./car";
import { CARS } from "./mock-cars";
import { Observable, of, from} from 'rxjs';
import { Part } from "./part";
import { PARTS } from "./mock-parts";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(CARS);
  }

  getCarParts(carId: number): Observable<Part[]>{
    const parts = PARTS.filter(part => part.car_id === carId);
    return of(parts);
  }

}
