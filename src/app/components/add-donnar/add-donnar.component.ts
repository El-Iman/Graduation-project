import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-donnar',
  templateUrl: './add-donnar.component.html',
  styleUrls: ['./add-donnar.component.css']
})
export class AddDonnarComponent implements OnInit {

  erroeMassage;
  message;
    address = [];
    Form = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z- ]{2,}')]),
      national_id: new FormControl('',[Validators.required,Validators.pattern('[0-9]{14}')]),
      mobile: new FormControl('',[Validators.required,Validators.pattern('[0-9]{4,}')]),
      address: new FormControl('',[Validators.required]),
      blood_type: new FormControl('',[Validators.required ]),
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
      this.api.addDonners(f.value).subscribe((data:any) =>{
        if(data.status == true){
          this.erroeMassage =  null;
          this.message = data.msg;
        }else{
          this.erroeMassage = data.msg
        }
      })
    }

    goToHome(){
      this.route.navigate(['/']);
    }

}
