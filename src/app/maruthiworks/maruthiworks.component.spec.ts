import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaruthiworksComponent } from './maruthiworks.component';

describe('MaruthiworksComponent', () => {
  let component: MaruthiworksComponent;
  let fixture: ComponentFixture<MaruthiworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaruthiworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaruthiworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
