import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShopComponent } from './modal-shop.component';

describe('ModalShopComponent', () => {
  let component: ModalShopComponent;
  let fixture: ComponentFixture<ModalShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
