import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaviworkComponent } from './raviwork.component';

describe('RaviworkComponent', () => {
  let component: RaviworkComponent;
  let fixture: ComponentFixture<RaviworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaviworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaviworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
