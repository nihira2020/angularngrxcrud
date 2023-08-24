import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlistingComponent } from './customerlisting.component';

describe('CustomerlistingComponent', () => {
  let component: CustomerlistingComponent;
  let fixture: ComponentFixture<CustomerlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerlistingComponent]
    });
    fixture = TestBed.createComponent(CustomerlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
