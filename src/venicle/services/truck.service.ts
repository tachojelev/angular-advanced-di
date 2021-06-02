import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VenicleType } from '../models/venicle-type.enum';
import { Venicle } from '../models/venicle.model';
import { VenicleService } from './venicle.service';

@Injectable()
export class TruckService extends VenicleService {
  private readonly TRUCKS: Array<Venicle> = [
    {
      make: 'Ford',
      model: 'Ranger',
      year: 2009,
      type: VenicleType.TRUCK
    },
    {
      make: 'Toyota',
      model: 'Tundra',
      year: 2019,
      type: VenicleType.TRUCK
    },
    {
      make: 'Nissan',
      model: 'Frontier',
      year: 2013,
      type: VenicleType.TRUCK
    },
    {
      make: 'Chevrolet',
      model: 'Colorado',
      year: 2015,
      type: VenicleType.TRUCK
    },
    {
      make: 'Ford',
      model: 'F-150',
      year: 2018,
      type: VenicleType.TRUCK
    }
  ];

  getVenicles(): Observable<Array<Venicle>> {
    return of(this.TRUCKS);
  }
}
