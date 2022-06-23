import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-admin-info',
  templateUrl: './edit-admin-info.component.html',
  styleUrls: ['./edit-admin-info.component.css']
})
export class EditAdminInfoComponent implements OnInit {
  admin_info;
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;
  myGroup:FormGroup;
  constructor(private api:ApiService) { }
 
  ngOnInit(): void {
    this.getAdminInfo();
  }

  getAdminInfo() {
    this.api.adminInfo(this.httpOptions).subscribe((data: any) => {
      this.admin_info = data.admin;
      this.myGroup = new FormGroup({
        name: new FormControl(this.admin_info.name,[Validators.pattern('[a-zA-Z- ]{2,}')]),
        email: new FormControl(this.admin_info.email),
      });
    })
  }


  submit(f:FormGroup){
    this.api.editAdminInfo(f.value , this.httpOptions).subscribe((data:any) =>{
      if(data.status == true){
        this.erroeMassage =  null;
        this.message = data.msg;
      }else{
        this.erroeMassage = data.msg
      }
    })
  }

}
