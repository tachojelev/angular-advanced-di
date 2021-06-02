import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VenicleType } from '../models/venicle-type.enum';
import { Venicle } from '../models/venicle.model';

@Injectable()
export class VenicleService {

  private readonly CARS: Array<Venicle> = [
    {
      make: 'BMW',
      model: '525i',
      year: 2008,
      type: VenicleType.CAR
    },
    {
      make: 'Mercedes',
      model: 'A4',
      year: 2009,
      type: VenicleType.CAR
    },
    {
      make: 'Ferrari',
      model: 'Enzo',
      year: 2010,
      type: VenicleType.CAR
    }
  ];

  getVenicles(): Observable<Array<Venicle>> {
    return of(this.CARS);
  }
}
