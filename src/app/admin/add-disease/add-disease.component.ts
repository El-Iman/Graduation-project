import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.css']
})
export class AddDiseaseComponent implements OnInit {
 
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;

  myGroup = new FormGroup({
    chronic_disease: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    treatment:new FormControl('',[Validators.required]),
    syndrome:new FormControl('',[Validators.required]),
  });
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  
  }

  add(f:FormGroup) {
    this.api.addDisease(f.value,this.httpOptions).subscribe((data: any) => {
      if(data.status == true){
        this.message = data.msg
      }else{
        this.erroeMassage = data.msg
      }
    })
  }



}
