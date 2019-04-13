import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewearComponent } from './homewear.component';

describe('HomewearComponent', () => {
  let component: HomewearComponent;
  let fixture: ComponentFixture<HomewearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomewearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
