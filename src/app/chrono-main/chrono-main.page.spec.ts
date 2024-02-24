import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChronoMainPage } from './chrono-main.page';

describe('ChronoMainPage', () => {
  let component: ChronoMainPage;
  let fixture: ComponentFixture<ChronoMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChronoMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
