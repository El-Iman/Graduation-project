import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError ;
  message;
  // @Output() message_output = new EventEmitter();
  Form = new FormGroup({
    national_id: new FormControl('',[Validators.required,Validators.pattern('[0-9]{14}')])
  });

  constructor(private api:ApiService , private route:Router) { }
  ngOnInit(): void {}

  login(f:FormGroup){

    this.api.login(f.value).subscribe((data:any) =>{
      if(data.status === true){
        localStorage.setItem("login_token", data.token)

        this.loginError = null;
        this.message = data.msg;

        let d = document.querySelector(".dialog-1");
        d.classList.toggle('active');
        setTimeout(()=>{
          this.route.navigate(['/profile']);
        },3000);
        
      }else{
        this.loginError = data.msg;
      }
    })

  }



}
