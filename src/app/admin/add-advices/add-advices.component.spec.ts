import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvicesComponent } from './add-advices.component';

describe('AddAdvicesComponent', () => {
  let component: AddAdvicesComponent;
  let fixture: ComponentFixture<AddAdvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
