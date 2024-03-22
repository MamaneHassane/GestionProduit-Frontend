import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardButtonComponent } from './product-card-button.component';

describe('ProductCardButtonComponent', () => {
  let component: ProductCardButtonComponent;
  let fixture: ComponentFixture<ProductCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
