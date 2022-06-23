import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  erroeMassage;
  message;

    Form = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z- ]{2,}')]),
      email: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      content: new FormControl('',[Validators.required]),
    });
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  
  submit(f:FormGroup){
    this.api.contactUs(f.value).subscribe((data:any) =>{
      if(data.status == true){
        this.erroeMassage =  null;
        this.message = data.msg;
      }else{
        this.erroeMassage = data.msg
      }
    })
  }

}
