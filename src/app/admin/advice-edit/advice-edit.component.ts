import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-advice-edit',
  templateUrl: './advice-edit.component.html',
  styleUrls: ['./advice-edit.component.css']
})
export class AdviceEditComponent implements OnInit {

  advice_info;
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;
  myGroup = new FormGroup({
    id: new FormControl(),
    advice: new FormControl(),
    status: new FormControl(),
  });
  AllAdvices;
  advice
  id
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(data => {
      this.id = data.get('id');
    })

    this.getAllAdvices();
  }

  edit(f:FormGroup) {
    this.api.editAdvice(f.value,this.httpOptions).subscribe((data: any) => {
      if(data.status == true){
        this.message = data.msg
      }else{
        this.erroeMassage = data.msg
      }
    })
  }

  getAllAdvices() {
    this.api.getallAdices().subscribe((data: any) => {
      this.AllAdvices = data.advices;
      this.AllAdvices.forEach(e => {
        if (e.id == this.id) {
          this.advice = e;
        }
      })

      this.myGroup.controls.id.patchValue(this.advice.id);
      this.myGroup.controls.advice.patchValue(this.advice.advice);
      this.myGroup.controls.status.patchValue(this.advice.status);

    })
  }

}
