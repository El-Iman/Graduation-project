import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
erroeMassage;
message;
  address = [];
  Form = new FormGroup({
    full_name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z- ]{2,}')]),
    national_id: new FormControl('',[Validators.required,Validators.pattern('[0-9]{14}')]),
    mobile: new FormControl('',[Validators.required,Validators.pattern('[0-9]{4,}')]),
    address: new FormControl('',[Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    blood_type: new FormControl('',[Validators.required ]),
    sex: new FormControl('',[Validators.required]),
    social_status: new FormControl('',[Validators.required ,Validators.pattern('[a-zA-Z- ]{2,}')]),
  });


  constructor(private api: ApiService , private route:Router) { }
  ngOnInit(): void {
    this.getdress();
  }

  getdress(){
    this.api.getProvnces().subscribe((data:any) => {
      this.address = data.provinces;
    })
  }

  submit(f:FormGroup){
    this.api.creataccount(f.value).subscribe((data:any) =>{
      if(data.status == true){
        this.erroeMassage =  null;
        this.message = data.msg;
      }else{
        this.erroeMassage = data.msg
      }
    })
  }

  goToLogin(){
    this.route.navigate(['/login']);
  }
}
