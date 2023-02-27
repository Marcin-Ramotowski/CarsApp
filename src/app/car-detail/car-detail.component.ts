import { Component, Input } from '@angular/core';
import { Car } from "../car";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService } from "../car.service";
import { Part } from "../part";
import {Observable} from "rxjs";
import {PARTS} from "../mock-parts";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent {
  parts: Part[] = [];

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getParts();
  }

  getParts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Last url id:', id)
    this.carService.getCarParts(id).subscribe(parts =>this.parts=parts);
  }

  goBack(): void {
    this.location.back();
  }
}
