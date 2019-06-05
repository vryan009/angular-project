import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenCheckboxComponent } from './gen-checkbox.component';

describe('GenCheckboxComponent', () => {
  let component: GenCheckboxComponent;
  let fixture: ComponentFixture<GenCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
