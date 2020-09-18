import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from '../../routes/app-routing.module'
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { setupEstablishmentsMock } from '../../models/MockTest';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ RouterTestingModule.withRoutes(routes), HttpClientTestingModule ],
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create DashboardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should render at least one card', () => {
    component.establishments = setupEstablishmentsMock();
    fixture.detectChanges();

    const cards = el.queryAll(By.css(".card"));
    expect(cards).toBeTruthy("Could not find establishments");
    expect(cards.length).toBeGreaterThan(1);
    expect(cards.length).toBe(4, "Unexpected number of establishments");
  });

  it('Each establishment should have a picture', () => {
    component.establishments = setupEstablishmentsMock();
    fixture.detectChanges();

    const cardsImages = el.queryAll(By.css("#img-card"));
    expect(cardsImages.length).toBeGreaterThan(0, "Could not find establishments picture");
    expect(cardsImages[0].nativeElement.src).toContain("http", "The establishment should have a picture");
  });

  it('Each establishment should render the name', () => {
    component.establishments = setupEstablishmentsMock();
    fixture.detectChanges();

    const cardsName = el.queryAll(By.css("#establishmentName"));
    expect(cardsName.length).toBeGreaterThan(0, "The establishment should have a name");
    expect(cardsName[0].nativeElement.textContent).toContain("Gink");
  });

  it('Each establishment should render the id', () => {
    component.establishments = setupEstablishmentsMock();
    fixture.detectChanges();

    const cardsIds = el.queryAll(By.css("#establishmentId"));
    expect(cardsIds.length).toBeGreaterThan(0, "Could not find establishments id");
    expect(cardsIds[0].nativeElement.textContent).toContain("5e34937af59dabb9a2c4c05f", "The establishment should have a id");
  });

  it('Each establishment should render the address', () => {
    component.establishments = setupEstablishmentsMock();
    fixture.detectChanges();

    const cardsAddress = el.queryAll(By.css("#establishmentAddress"));
    expect(cardsAddress.length).toBeGreaterThan(0, "Could not find establishments address");
    expect(cardsAddress[0].nativeElement.textContent).toContain("808 Ford Street", "The establishment should have a address");
  });

});
