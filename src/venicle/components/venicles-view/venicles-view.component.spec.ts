import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeniclesViewComponent } from './venicles-view.component';

describe('VeniclesViewComponent', () => {
  let component: VeniclesViewComponent;
  let fixture: ComponentFixture<VeniclesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeniclesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeniclesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
