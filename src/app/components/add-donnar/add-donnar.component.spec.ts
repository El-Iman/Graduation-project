import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonnarComponent } from './add-donnar.component';

describe('AddDonnarComponent', () => {
  let component: AddDonnarComponent;
  let fixture: ComponentFixture<AddDonnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonnarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
