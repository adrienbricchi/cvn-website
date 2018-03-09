import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvnIntroComponent } from './cvn-intro.component';

describe('CvnIntroComponent', () => {
  let component: CvnIntroComponent;
  let fixture: ComponentFixture<CvnIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvnIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvnIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
