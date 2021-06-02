import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venicle } from 'src/venicle/models/venicle.model';
import { VenicleService } from 'src/venicle/services/venicle.service';

@Component({
  selector: 'app-venicles-view',
  templateUrl: './venicles-view.component.html',
  styleUrls: ['./venicles-view.component.scss']
})
export class VeniclesViewComponent implements OnInit {
  venicles$: Observable<Array<Venicle>>;

  constructor(private venicleService: VenicleService) { }

  ngOnInit(): void {
    this.venicles$ = this.venicleService.getVenicles();
  }
}
