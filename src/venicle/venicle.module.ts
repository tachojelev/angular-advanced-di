import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenicleComponent } from './components/venicle/venicle.component';
import { VenicleService } from './services/venicle.service';
import { VeniclesViewComponent } from './components/venicles-view/venicles-view.component';
import { TruckService } from './services/truck.service';

@NgModule({
  declarations: [VenicleComponent, VeniclesViewComponent],
  imports: [
    CommonModule
  ],
  exports: [VeniclesViewComponent],
  providers: [
    { provide: VenicleService, useClass: TruckService }
  ]
})
export class VenicleModule { }
