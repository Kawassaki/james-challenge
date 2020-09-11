import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment';
import { EstablishmentService } from 'src/app/service/establishment.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public establishments: Establishment[] = [];

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.establishments = JSON.parse(localStorage.getItem("establishments")) || [];

    if(this.establishments.length === 0){
      this.establishmentService.getAll().subscribe(
        (establishments: Establishment[]) => {
          this.establishments = establishments;
          localStorage.setItem("establishments", JSON.stringify(
            establishments.map((establishment) => (
              {...establishment }
            ))
          ));
        }
      );
    }
  }

  toDetails(id: string){
    this.router.navigate(["establishment", id]);
  }

}
