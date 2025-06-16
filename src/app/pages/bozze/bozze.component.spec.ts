import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BozzeComponent } from './bozze.component';

describe('BozzeComponent', () => {
  let component: BozzeComponent;
  let fixture: ComponentFixture<BozzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BozzeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BozzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
