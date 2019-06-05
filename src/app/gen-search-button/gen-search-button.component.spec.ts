import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSearchButtonComponent } from './gen-search-button.component';

describe('GenSearchButtonComponent', () => {
  let component: GenSearchButtonComponent;
  let fixture: ComponentFixture<GenSearchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenSearchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
