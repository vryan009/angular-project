import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenOrderedListComponent } from './gen-ordered-list.component';

describe('GenOrderedListComponent', () => {
  let component: GenOrderedListComponent;
  let fixture: ComponentFixture<GenOrderedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenOrderedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenOrderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
