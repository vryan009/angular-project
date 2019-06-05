import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenInputComponent } from './gen-input.component';

describe('GenInputComponent', () => {
  let component: GenInputComponent;
  let fixture: ComponentFixture<GenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
