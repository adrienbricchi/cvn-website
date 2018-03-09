import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMovieComponent } from './first-movie.component';

describe('FirstMovieComponent', () => {
  let component: FirstMovieComponent;
  let fixture: ComponentFixture<FirstMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
