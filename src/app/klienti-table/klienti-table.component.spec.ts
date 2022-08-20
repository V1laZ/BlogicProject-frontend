import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlientiTableComponent } from './klienti-table.component';

describe('KlientiTableComponent', () => {
  let component: KlientiTableComponent;
  let fixture: ComponentFixture<KlientiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlientiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlientiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
