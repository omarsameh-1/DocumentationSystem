import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPhaseComponent } from './design-phase.component';

describe('DesignPhaseComponent', () => {
  let component: DesignPhaseComponent;
  let fixture: ComponentFixture<DesignPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
