import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDonorsComponent } from './show-all-donors.component';

describe('ShowAllDonorsComponent', () => {
  let component: ShowAllDonorsComponent;
  let fixture: ComponentFixture<ShowAllDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllDonorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
