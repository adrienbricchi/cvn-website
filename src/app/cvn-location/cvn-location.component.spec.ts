import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvnLocationComponent } from './cvn-location.component';

describe('CvnLocationComponent', () => {
  let component: CvnLocationComponent;
  let fixture: ComponentFixture<CvnLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvnLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvnLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
