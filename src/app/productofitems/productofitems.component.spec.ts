import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductofitemsComponent } from './productofitems.component';

describe('ProductofitemsComponent', () => {
  let component: ProductofitemsComponent;
  let fixture: ComponentFixture<ProductofitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductofitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductofitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
