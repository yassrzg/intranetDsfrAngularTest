import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEComponent } from './oe.component';

describe('OEComponent', () => {
  let component: OEComponent;
  let fixture: ComponentFixture<OEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OEComponent]
    });
    fixture = TestBed.createComponent(OEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
