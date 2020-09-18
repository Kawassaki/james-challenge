import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, flushMicrotasks, getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../../models/establishment';
import { setupEstablishmentsMock } from '../../models/MockTest';

import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let service: EstablishmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EstablishmentService ],
    });

    service = TestBed.inject(EstablishmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return all establishments', () => {
    let establishments: Establishment[] = setupEstablishmentsMock();

    service.getAll().subscribe((res) => {
      expect(res).toEqual(establishments);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/establishments`);
    expect(req.request.method).toBe('GET');
    req.flush(establishments);

  });

});
