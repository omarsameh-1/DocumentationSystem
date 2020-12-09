import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsPhaseComponent } from './requirements-phase.component';

describe('RequirementsPhaseComponent', () => {
  let component: RequirementsPhaseComponent;
  let fixture: ComponentFixture<RequirementsPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
