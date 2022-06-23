import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDonnerComponent } from './add-new-donner.component';

describe('AddNewDonnerComponent', () => {
  let component: AddNewDonnerComponent;
  let fixture: ComponentFixture<AddNewDonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDonnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
