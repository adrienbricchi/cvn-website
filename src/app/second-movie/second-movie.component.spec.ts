import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMovieComponent } from './second-movie.component';

describe('SecondMovieComponent', () => {
  let component: SecondMovieComponent;
  let fixture: ComponentFixture<SecondMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
