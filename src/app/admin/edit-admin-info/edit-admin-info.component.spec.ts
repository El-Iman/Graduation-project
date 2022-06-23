import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminInfoComponent } from './edit-admin-info.component';

describe('EditAdminInfoComponent', () => {
  let component: EditAdminInfoComponent;
  let fixture: ComponentFixture<EditAdminInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
