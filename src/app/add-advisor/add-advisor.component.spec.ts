import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvisorComponent } from './add-advisor.component';

describe('AddAdvisorComponent', () => {
  let component: AddAdvisorComponent;
  let fixture: ComponentFixture<AddAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
