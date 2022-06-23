import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserDiagnosisComponent } from './all-user-diagnosis.component';

describe('AllUserDiagnosisComponent', () => {
  let component: AllUserDiagnosisComponent;
  let fixture: ComponentFixture<AllUserDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
