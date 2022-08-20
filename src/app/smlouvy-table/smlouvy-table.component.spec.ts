import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmlouvyTableComponent } from './smlouvy-table.component';

describe('SmlouvyTableComponent', () => {
  let component: SmlouvyTableComponent;
  let fixture: ComponentFixture<SmlouvyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmlouvyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmlouvyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
