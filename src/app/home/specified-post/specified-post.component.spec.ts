import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifiedPostComponent } from './specified-post.component';

describe('SpecifiedPostComponent', () => {
  let component: SpecifiedPostComponent;
  let fixture: ComponentFixture<SpecifiedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifiedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifiedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
