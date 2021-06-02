import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ColorService } from 'src/services/color.service';
import { VenicleDefaultOptions } from 'src/venicle/models/venicle-default-options.model';
import { VenicleType } from 'src/venicle/models/venicle-type.enum';
import { VENICLE_TOKEN } from 'src/venicle/tokens/venicle-color.token';

@Component({
  selector: 'app-venicle',
  templateUrl: './venicle.component.html',
  styleUrls: ['./venicle.component.scss'],
  providers: [
    { provide: ColorService, useValue: { color: 'blue' } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenicleComponent implements OnInit {
  @Input()
  make: string;

  @Input()
  model: string;

  @Input()
  year: number;

  @Input()
  type: VenicleType;

  @Input()
  @HostBinding('class.venicle-has-shadow')
  hasShadow = true;

  color: string;

  constructor(
    @Optional() @Inject(VENICLE_TOKEN) private venicleDefaultOptions: VenicleDefaultOptions,
    @SkipSelf() private colorService: ColorService) { }

  ngOnInit(): void {
    if (this.venicleDefaultOptions) {
      this.hasShadow = this.venicleDefaultOptions.hasShadow;
    }

    this.color = this.colorService.color;
  }
}
