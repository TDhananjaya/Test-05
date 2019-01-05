import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeShopComponent } from './mange-shop.component';

describe('MangeShopComponent', () => {
  let component: MangeShopComponent;
  let fixture: ComponentFixture<MangeShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
