import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { PetService } from './pet.service';
import { AppRoutingModule } from './/app-routing.module';
import { OrgsComponent } from './orgs/orgs.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PetListComponent } from './pet-list/pet-list.component';
import {MatCardModule,  MatSnackBarModule} from '@angular/material';
import { NxModule } from '@nrwl/nx';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    OrgsComponent,
    NewPetComponent,
    OrgDetailComponent,
    UserDetailComponent,
    NavigationComponent,
    PetListComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    NxModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
