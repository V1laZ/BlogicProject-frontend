import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsTableComponent } from './advisors-table.component';

describe('AdvisorsTableComponent', () => {
  let component: AdvisorsTableComponent;
  let fixture: ComponentFixture<AdvisorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
