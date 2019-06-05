import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenButtonComponent } from './gen-button/gen-button.component';
import { GenSearchButtonComponent } from './gen-search-button/gen-search-button.component';
import { GenCheckboxComponent } from './gen-checkbox/gen-checkbox.component';
import { GenInputComponent } from './gen-input/gen-input.component';
import { GenDropdownComponent } from './gen-dropdown/gen-dropdown.component';
import { GenListComponent } from './gen-list/gen-list.component';
import { GenOrderedListComponent } from './gen-ordered-list/gen-ordered-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GenButtonComponent,
    GenSearchButtonComponent,
    GenCheckboxComponent,
    GenInputComponent,
    GenDropdownComponent,
    GenListComponent,
    GenOrderedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
