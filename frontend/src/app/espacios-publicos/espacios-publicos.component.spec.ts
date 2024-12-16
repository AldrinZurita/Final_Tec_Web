import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosPublicosComponent } from './espacios-publicos.component';

describe('EspaciosPublicosComponent', () => {
  let component: EspaciosPublicosComponent;
  let fixture: ComponentFixture<EspaciosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaciosPublicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
