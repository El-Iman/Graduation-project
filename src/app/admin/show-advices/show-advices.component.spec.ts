import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdvicesComponent } from './show-advices.component';

describe('ShowAdvicesComponent', () => {
  let component: ShowAdvicesComponent;
  let fixture: ComponentFixture<ShowAdvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdvicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
