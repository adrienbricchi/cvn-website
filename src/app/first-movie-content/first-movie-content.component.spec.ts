import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMovieContentComponent } from './first-movie-content.component';

describe('FirstMovieContentComponent', () => {
  let component: FirstMovieContentComponent;
  let fixture: ComponentFixture<FirstMovieContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMovieContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMovieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
