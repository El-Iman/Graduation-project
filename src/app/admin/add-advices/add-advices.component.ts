import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-advices',
  templateUrl: './add-advices.component.html',
  styleUrls: ['./add-advices.component.css']
})
export class AddAdvicesComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;
 test=""
  Form = new FormGroup({
    advice: new FormControl('', [Validators.required]),
    status: new FormControl(''),
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  addAdvice(f: FormGroup) {
    this.api.addAdvice(f.value, this.httpOptions).subscribe((data: any) => {
      if (data.status == true) {
        this.erroeMassage = null;
        this.message = data.msg;
      } else {
        this.erroeMassage = data.msg
      }
    })
  }




}
