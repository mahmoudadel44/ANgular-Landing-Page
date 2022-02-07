import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesadsComponent } from './citiesads.component';

describe('CitiesadsComponent', () => {
  let component: CitiesadsComponent;
  let fixture: ComponentFixture<CitiesadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
