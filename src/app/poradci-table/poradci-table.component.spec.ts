import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoradciTableComponent } from './poradci-table.component';

describe('PoradciTableComponent', () => {
  let component: PoradciTableComponent;
  let fixture: ComponentFixture<PoradciTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoradciTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoradciTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
