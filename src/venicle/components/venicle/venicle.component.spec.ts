import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenicleComponent } from './venicle.component';

describe('VenicleComponent', () => {
  let component: VenicleComponent;
  let fixture: ComponentFixture<VenicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
