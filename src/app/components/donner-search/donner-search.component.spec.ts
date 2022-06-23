import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerSearchComponent } from './donner-search.component';

describe('DonnerSearchComponent', () => {
  let component: DonnerSearchComponent;
  let fixture: ComponentFixture<DonnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
