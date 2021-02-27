import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSideBarComponent } from './exercise-side-bar.component';

describe('ExerciseSideBarComponent', () => {
  let component: ExerciseSideBarComponent;
  let fixture: ComponentFixture<ExerciseSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
