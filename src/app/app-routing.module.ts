import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdvicesComponent } from './admin/add-advices/add-advices.component';
import { AddDiseaseComponent } from './admin/add-disease/add-disease.component';
import { AddNewDonnerComponent } from './admin/add-new-donner/add-new-donner.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdviceEditComponent } from './admin/advice-edit/advice-edit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditAdminInfoComponent } from './admin/edit-admin-info/edit-admin-info.component';
import { EditDiseaseComponent } from './admin/edit-disease/edit-disease.component';
import { EditUserIdComponent } from './admin/edit-user-id/edit-user-id.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { PageComponent } from './admin/page/page.component';
import { ShowAdvicesComponent } from './admin/show-advices/show-advices.component';
import { ShowAllDiseasesComponent } from './admin/show-all-diseases/show-all-diseases.component';
import { ShowAllDonorsComponent } from './admin/show-all-donors/show-all-donors.component';
import { ShowAllUsersComponent } from './admin/show-all-users/show-all-users.component';
import { ShowDiseaseComponent } from './admin/show-disease/show-disease.component';
import { AddDonnarComponent } from './components/add-donnar/add-donnar.component';
import { AllDonorComponent } from './components/all-donor/all-donor.component';
import { AllUserDiagnosisComponent } from './components/all-user-diagnosis/all-user-diagnosis.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { DonnerSearchComponent } from './components/donner-search/donner-search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'' , component:HomeComponent , data:{i : 0}},
  {path:'register' , component:RegisterComponent, data:{i : 1}},
  {path:'login', component:LoginComponent, data:{i : 2}},
  {path:'profile', component: ProfileComponent, data:{i : 3}},
  {path:'donor-search', component:DonnerSearchComponent, data:{i : 4}},
  {path:'add-donor', component:AddDonnarComponent, data:{i : 5}},
  {path:'diseases', component:DiseasesComponent, data:{i : 6}},
  {path:'all-donors', component:AllDonorComponent, data:{i : 8}},
  {path:'all-diagnosis', component:AllUserDiagnosisComponent},
  {path:'contact-us', component:ContactComponent},

  {path:'admin', component:PageComponent,children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'edit-info', component:EditAdminInfoComponent},
    {path:'add/advice', component:AddAdvicesComponent},
    {path:'show/advice', component:ShowAdvicesComponent},
    {path:'edit/advice/:id', component:AdviceEditComponent},
    {path:'add/donor', component:AddNewDonnerComponent},
    {path:'add/user', component:AddUserComponent},
    {path:'add/disease', component:AddDiseaseComponent},
    {path:'show/disease/:id', component:ShowDiseaseComponent},
    {path:'edit/disease/:id', component:EditDiseaseComponent},
    {path:'edit/user', component:EditUserIdComponent},
    {path:'show/users', component:ShowAllUsersComponent},
    {path:'show/diseases', component:ShowAllDiseasesComponent},
    {path:'show/donors', component:ShowAllDonorsComponent},
  ]},

  {path:'admin/login', component:LoginAdminComponent},

  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
