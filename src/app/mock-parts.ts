import { Part } from "./part";

export const PARTS: Part[] = [
  {
    part_id: 1,
    car_id: 1,
    name: 'Oil Filter',
    description: 'A crucial component for maintaining engine health',
    cost: 25.99,
    date: '2022-02-21'
  },
  {
    part_id: 2,
    car_id: 1,
    name: 'Brake Pads',
    description: 'Wear and tear item for stopping the vehicle',
    cost: 79.99,
    date: '2022-01-14'
  },
  {
    part_id: 3,
    car_id: 2,
    name: 'Windshield Wipers',
    description: 'Replace worn wipers for clear visibility',
    cost: 22.50,
    date: '2021-12-05'
  },
  {
    part_id: 4,
    car_id: 3,
    name: 'Battery',
    description: 'Rechargeable battery for powering the car',
    cost: 179.99,
    date: '2022-02-01'
  },
  {
    part_id: 5,
    car_id: 3,
    name: 'Tire Rotation',
    description: 'Prevent uneven tire wear and extend tire life',
    cost: 45.00,
    date: '2022-01-10'
  }
]
