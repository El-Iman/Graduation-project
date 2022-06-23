import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-user-id',
  templateUrl: './edit-user-id.component.html',
  styleUrls: ['./edit-user-id.component.css']
})
export class EditUserIdComponent implements OnInit {

  filtered_users = [];
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;
  showForm = false;
  myGroup = new FormGroup({
    national_id: new FormControl(),
  });
  editForm = new FormGroup({
    id: new FormControl(),
    national_id: new FormControl(),
  });
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

get(f:FormGroup){
  this.api.searchForUser(f.value,this.httpOptions).subscribe((data:any)=>{
    if(data.status == true){
    this.filtered_users = data.user;
    this.editForm.controls.id.patchValue(this.filtered_users[0].id);
    this.editForm.controls.national_id.patchValue(this.filtered_users[0].national_id);
      this.erroeMassage =  null;
    }else{
      this.erroeMassage = data.msg
    }
  })
}


edit(f:FormGroup){
  this.api.editUserData(f.value,this.httpOptions).subscribe((data:any)=>{
    if(data.status == true){
      this.erroeMassage =  null;
    }else{
      this.erroeMassage = data.msg
    }
  })
}

}
