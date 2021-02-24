import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCodeComponent } from './free-code.component';

describe('FreeCodeComponent', () => {
  let component: FreeCodeComponent;
  let fixture: ComponentFixture<FreeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
