import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Establishment } from 'src/app/models/establishment';
import { FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit {

  establishmentsStorage = (JSON.parse(localStorage.getItem("establishments")) as Establishment[]);
  public establishment: Establishment;

  public establishmentForm = new FormGroup({
    name: new FormControl(null),
    city: new FormControl(null),
    address: new FormControl(null),
    account: new FormControl(null),
    bank: new FormControl(null),
    cnpj: new FormControl(null),
    accountNumber: new FormControl(null),
    accountNumberVerify: new FormControl(null),
    agencyNumber: new FormControl(null),
    agencyNumberVerify: new FormControl(null),
    automaticWithdraw: new FormControl(null),
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.establishment = this.establishmentsStorage?.find(
      (item) => item.id === this.activatedRoute.snapshot.paramMap.get("id")
    );

    this.establishmentForm.setValue({
      name: this.establishment?.name || null,
      city: this.establishment?.city || null,
      address: this.establishment?.address || null,
      account: this.establishment?.account || null,
      bank: this.establishment?.bank || null,
      cnpj: this.establishment?.cnpj || null,
      accountNumber: this.establishment?.accountNumber || null,
      accountNumberVerify: this.establishment?.accountNumberVerify || null,
      agencyNumber: this.establishment?.agencyNumber || null,
      agencyNumberVerify: this.establishment?.agencyNumberVerify || null,
      automaticWithdraw: this.establishment?.automaticWithdraw || null,
    });
  }

  back(){
    this.router.navigate(["dashboard"]);
  }

  onSubmit() {
    this.establishment = {... this.establishment, ...this.establishmentForm.value};
    localStorage.setItem("establishments",
      JSON.stringify(
        this.establishmentsStorage.map(
          (establishment) => (
            establishment.id === this.establishment.id ?
            this.establishment : establishment
          )
        )
      )
    );
    this.snackbarService.show('Salvo com sucesso!', { classname: 'bg-success text-light toaster', delay: 1000 });
  }

  isTemplate(snackbar) { return snackbar?.textOrTpl instanceof TemplateRef; }
}
