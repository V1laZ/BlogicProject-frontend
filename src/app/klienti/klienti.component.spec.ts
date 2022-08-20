import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlientiComponent } from './klienti.component';

describe('KlientiComponent', () => {
  let component: KlientiComponent;
  let fixture: ComponentFixture<KlientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlientiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
