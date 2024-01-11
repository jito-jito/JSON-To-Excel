import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExcelComponent } from './crear-excel.component';

describe('CrearExcelComponent', () => {
  let component: CrearExcelComponent;
  let fixture: ComponentFixture<CrearExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearExcelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
