import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoradciComponent } from './poradci.component';

describe('PoradciComponent', () => {
  let component: PoradciComponent;
  let fixture: ComponentFixture<PoradciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoradciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoradciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
