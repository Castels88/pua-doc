import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpieghiCreatiComponent } from './impieghi-creati.component';

describe('ImpieghiCreatiComponent', () => {
  let component: ImpieghiCreatiComponent;
  let fixture: ComponentFixture<ImpieghiCreatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpieghiCreatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpieghiCreatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
