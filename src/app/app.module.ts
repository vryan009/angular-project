import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenButtonComponent } from './gen-button/gen-button.component';
import { GenSearchButtonComponent } from './gen-search-button/gen-search-button.component';
import { GenCheckboxComponent } from './gen-checkbox/gen-checkbox.component';
import { GenInputComponent } from './gen-input/gen-input.component';
import { GenDropdownComponent } from './gen-dropdown/gen-dropdown.component';
import { GenListComponent } from './gen-list/gen-list.component';
import { GenOrderedListComponent } from './gen-ordered-list/gen-ordered-list.component';
import { GenTableComponent } from './gen-table/gen-table.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { MockPatientService } from './service/mock-patient.service';
import { PatientService } from './service/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    GenButtonComponent,
    GenSearchButtonComponent,
    GenCheckboxComponent,
    GenInputComponent,
    GenDropdownComponent,
    GenListComponent,
    GenOrderedListComponent,
    GenTableComponent,
    HeaderComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [MockPatientService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }