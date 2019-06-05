import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenButtonComponent } from './gen-button.component';

describe('GenButtonComponent', () => {
  let component: GenButtonComponent;
  let fixture: ComponentFixture<GenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
