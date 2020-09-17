import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { routes } from '../../routes/app-routing.module'

import { EstablishmentComponent } from './establishment.component';

describe('EstablishmentComponent', () => {
  let component: EstablishmentComponent;
  let fixture: ComponentFixture<EstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentComponent ],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: 'test' })
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
