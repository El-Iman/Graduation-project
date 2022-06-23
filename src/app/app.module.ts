import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddDonnarComponent } from './components/add-donnar/add-donnar.component';
import { DonnerSearchComponent } from './components/donner-search/donner-search.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { AllUserDiagnosisComponent } from './components/all-user-diagnosis/all-user-diagnosis.component';
import { AllDonorComponent } from './components/all-donor/all-donor.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDeleteDeiseaseComponent } from './components/dialog-delete-deisease/dialog-delete-deisease.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { PageComponent } from './admin/page/page.component';
import { EditAdminInfoComponent } from './admin/edit-admin-info/edit-admin-info.component';
import { AddAdvicesComponent } from './admin/add-advices/add-advices.component';
import { CommonModule } from '@angular/common';
import { ShowAdvicesComponent } from './admin/show-advices/show-advices.component';
import { AddNewDonnerComponent } from './admin/add-new-donner/add-new-donner.component';
import { AdviceEditComponent } from './admin/advice-edit/advice-edit.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { SearchPipe } from './pipes/search.pipe';
import { ShowDiseaseComponent } from './admin/show-disease/show-disease.component';
import { AddDiseaseComponent } from './admin/add-disease/add-disease.component';
import { EditDiseaseComponent } from './admin/edit-disease/edit-disease.component';
import { EditUserIdComponent } from './admin/edit-user-id/edit-user-id.component';
import { ShowAllUsersComponent } from './admin/show-all-users/show-all-users.component';
import { ShowAllDiseasesComponent } from './admin/show-all-diseases/show-all-diseases.component';
import { ShowAllDonorsComponent } from './admin/show-all-donors/show-all-donors.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeSliderComponent,
    NotFoundComponent,
    AddDonnarComponent,
    DonnerSearchComponent,
    DiseasesComponent,
    AllUserDiagnosisComponent,
    AllDonorComponent,
    DialogDeleteDeiseaseComponent,
    ContactComponent,
    DashboardComponent,
    LoginAdminComponent,
    PageComponent,
    EditAdminInfoComponent,
    AddAdvicesComponent,
    ShowAdvicesComponent,
    AddNewDonnerComponent,
    AdviceEditComponent,
    AddUserComponent,
    SearchPipe,
    ShowDiseaseComponent,
    AddDiseaseComponent,
    EditDiseaseComponent,
    EditUserIdComponent,
    ShowAllUsersComponent,
    ShowAllDiseasesComponent,
    ShowAllDonorsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgwWowModule,
    MatTableModule,CdkAccordionModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatDialogModule,
  CommonModule 
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
