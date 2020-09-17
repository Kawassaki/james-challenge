import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from '../../routes/app-routing.module'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { Establishment } from 'src/app/models/establishment';
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


  function setupEstablishmentsMock(): Establishment[] {
    return [
      {
        id: "5e34937af59dabb9a2c4c05f",
        index: 0,
        guid: "7d35ec3a-1462-49cc-adec-1726f98862e1",
        picture: "http://placehold.it/32x32",
        name: "Gink",
        email: "contato@gink.com",
        phone: "+1 (859) 505-2620",
        address: "808 Ford Street, Westerville, Nevada, 6937",
        registered: "Sunday, September 18, 2016 10:04 AM",
        latitude: "37.849767",
        longitude: "-58.807759",
        account: '',
        bank: '',
        cnpj: '',
        accountNumber: null,
        accountNumberVerify: null,
        agencyNumber: null,
        agencyNumberVerify: null,
        automaticWithdraw: false,
        city: '',
      },
      {
        id: "5e34937ab389aaf14cd62d05",
        index: 1,
        guid: "0fd467f7-5af4-4f7a-89f5-273d4032e153",
        picture: "http://placehold.it/32x32",
        name: "Geeketron",
        email: "contato@geeketron.com",
        phone: "+1 (984) 548-3600",
        address: "698 Hendrickson Place, Valle, Missouri, 5695",
        registered: "Wednesday, November 28, 2018 12:47 PM",
        latitude: "84.233418",
        longitude: "-1.928457",
        account: '',
        bank: '',
        cnpj: '',
        accountNumber: null,
        accountNumberVerify: null,
        agencyNumber: null,
        agencyNumberVerify: null,
        automaticWithdraw: false,
        city: '',
      },
      {
        id: "5e34937a6f4589a5b9c0d117",
        index: 2,
        guid: "d02092a0-9d20-4f78-9332-c69d7527d061",
        picture: "http://placehold.it/32x32",
        name: "Combogene",
        email: "contato@combogene.com",
        phone: "+1 (909) 527-2582",
        address: "143 Berkeley Place, Machias, Palau, 3958",
        registered: "Sunday, November 27, 2016 11:27 PM",
        latitude: "-72.727928",
        longitude: "-68.08458",
        account: '',
        bank: '',
        cnpj: '',
        accountNumber: null,
        accountNumberVerify: null,
        agencyNumber: null,
        agencyNumberVerify: null,
        automaticWithdraw: false,
        city: '',
      },
      {
        id: "5e34937a65f306cde33e4f58",
        index: 3,
        guid: "8f56b01f-a8ba-45e6-8115-ba461ed89b5f",
        picture: "http://placehold.it/32x32",
        name: "Kegular",
        email: "contato@kegular.com",
        phone: "+1 (806) 484-2330",
        address: "265 Cropsey Avenue, Yardville, Michigan, 3580",
        registered: "Thursday, July 24, 2014 12:24 AM",
        latitude: "-63.544775",
        longitude: "142.010713",
         account: '',
        bank: '',
        cnpj: '',
        accountNumber: null,
        accountNumberVerify: null,
        agencyNumber: null,
        agencyNumberVerify: null,
        automaticWithdraw: false,
        city: '',
      },
    ]
  }
});
