import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-disease',
  templateUrl: './edit-disease.component.html',
  styleUrls: ['./edit-disease.component.css']
})
export class EditDiseaseComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  erroeMassage;
  message;
  id;
  myGroup = new FormGroup({
    id: new FormControl(),
    chronic_disease: new FormControl(),
    description: new FormControl(),
    treatment: new FormControl(),
    syndrome: new FormControl(),
  });
  AllDisease;
  disease;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = data.get('id');
    })
    this.getAllDisease();
  }

  edit(f:FormGroup) {
    this.api.editDisease(f.value,this.httpOptions).subscribe((data: any) => {
      if(data.status == true){
        this.message = data.msg
      }else{
        this.erroeMassage = data.msg
      }
    })
  }

  getAllDisease() {
    this.api.getDisease().subscribe((data: any) => {
      this.AllDisease = data.Chronic_Diseases;
      this.AllDisease.forEach(e => {
        if (e.id == this.id) {
          this.disease = e;
        }
      })
      this.myGroup.controls.id.patchValue(this.id);
      this.myGroup.controls.chronic_disease.patchValue(this.disease.chronic_disease);
      this.myGroup.controls.description.patchValue(this.disease.description);
      this.myGroup.controls.treatment.patchValue(this.disease.treatment);
      this.myGroup.controls.syndrome.patchValue(this.disease.syndrome);
    })
  }

}
