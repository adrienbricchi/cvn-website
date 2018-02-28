import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMovieContentComponent } from './second-movie-content.component';

describe('SecondMovieContentComponent', () => {
  let component: SecondMovieContentComponent;
  let fixture: ComponentFixture<SecondMovieContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMovieContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMovieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
