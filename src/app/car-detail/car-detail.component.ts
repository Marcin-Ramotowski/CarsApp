import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from "../car.service";
import { Part } from "../part";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css', '../w3.css']
})

export class CarDetailComponent {

  parts: Part[] = [];
  newPart: Part = {part_id: 0, car_id: 0, name:'', cost:0, date:''}
  editingPart: number = 0;
  carId: number = 0;

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
    this.carId = id;
    this.carService.getCarParts(id).subscribe(parts =>this.parts=parts);
  }

  addPart(): void {
    this.newPart.car_id = this.carId
    this.carService.addPart(this.newPart);
    this.newPart =  {part_id: 0, car_id: 0, name:'', cost:0, date:''}
    location.reload();
  }

  updatePart(part: Part): void {
    this.carService.updatePart(part);
    this.editingPart = 0;
  }

  deletePart(part: Part): void {
    this.carService.deletePart(part);
  }

  enableEditMode(partId: number): void{
    this.editingPart = partId;
  }

  goBack(): void {
    this.location.back();
  }
}
