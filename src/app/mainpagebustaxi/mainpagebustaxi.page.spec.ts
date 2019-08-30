import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagebustaxiPage } from './mainpagebustaxi.page';

describe('MainpagebustaxiPage', () => {
  let component: MainpagebustaxiPage;
  let fixture: ComponentFixture<MainpagebustaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagebustaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagebustaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
