import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestednewComponent } from './nestednew.component';

describe('NestednewComponent', () => {
  let component: NestednewComponent;
  let fixture: ComponentFixture<NestednewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestednewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestednewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
