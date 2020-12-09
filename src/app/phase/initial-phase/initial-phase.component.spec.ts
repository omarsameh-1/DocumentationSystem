import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhaseComponent } from './initial-phase.component';

describe('InitialPhaseComponent', () => {
  let component: InitialPhaseComponent;
  let fixture: ComponentFixture<InitialPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
