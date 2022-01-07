import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPipeComponent } from './product-pipe.component';

describe('ProductPipeComponent', () => {
  let component: ProductPipeComponent;
  let fixture: ComponentFixture<ProductPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
