import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyNewMemberComponent } from './monthly-new-member.component';

describe('MonthlyNewMemberComponent', () => {
  let component: MonthlyNewMemberComponent;
  let fixture: ComponentFixture<MonthlyNewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyNewMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
