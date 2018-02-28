import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvnHeaderComponent } from './cvn-header.component';

describe('CvnHeaderComponent', () => {
  let component: CvnHeaderComponent;
  let fixture: ComponentFixture<CvnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
