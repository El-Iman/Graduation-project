import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonorComponent } from './all-donor.component';

describe('AllDonorComponent', () => {
  let component: AllDonorComponent;
  let fixture: ComponentFixture<AllDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
