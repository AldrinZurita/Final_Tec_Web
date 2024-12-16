import { TestBed } from '@angular/core/testing';
import { EspaciosPublicosService } from './espacios-publicos.service';

describe('EspaciosPublicosService', () => {
  let service: EspaciosPublicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaciosPublicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
