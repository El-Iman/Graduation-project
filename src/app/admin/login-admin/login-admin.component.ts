import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginError;
  message;
  Form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private api:ApiService , private route:Router) { }
  ngOnInit(): void {}

  login(f:FormGroup){
    this.api.loginِAdmin(f.value).subscribe((data:any) =>{
      console.log(data)
      if(data.status === true){
        localStorage.setItem("login_token_admin", data.token)
        this.loginError = null;
        this.message = data.msg;
        let d = document.querySelector(".dialog-1");
        d.classList.toggle('active');
        setTimeout(()=>{
          this.route.navigate(['/admin/dashboard']);
        },3000);

      }else{
        this.loginError = data.msg;
      }
    })

  }

}
