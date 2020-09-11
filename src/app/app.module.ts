import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EstablishmentService } from './service/establishment.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask'
import { ToastService } from './service/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EstablishmentComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ EstablishmentService, ToastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
