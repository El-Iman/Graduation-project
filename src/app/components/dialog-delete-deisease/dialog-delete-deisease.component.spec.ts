import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteDeiseaseComponent } from './dialog-delete-deisease.component';

describe('DialogDeleteDeiseaseComponent', () => {
  let component: DialogDeleteDeiseaseComponent;
  let fixture: ComponentFixture<DialogDeleteDeiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteDeiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteDeiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
