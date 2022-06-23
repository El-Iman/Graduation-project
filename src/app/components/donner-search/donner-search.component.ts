import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-donner-search',
  templateUrl: './donner-search.component.html',
  styleUrls: ['./donner-search.component.css']
})
export class DonnerSearchComponent implements OnInit {
  search_form  = new FormGroup({
    address: new FormControl('',[Validators.required]),
    blood_type: new FormControl('',[Validators.required]),
  });
  address;
  donors;
  message;
  constructor(private api: ApiService , private route:Router) { }

  ngOnInit(): void {
    this.getdress();
    // Aos.init();
  }

  search(f:FormGroup){
    this.api.donnerSearch(f.value).subscribe((data:any)=>{
      if(data.status == true){
        this.donors = data.Donors;
        this.message =""
      }
      else{
        this.message = data.msg;
        this.donors=[]
      }
    })
  }


  getdress(){
    this.api.getProvnces().subscribe((data:any) => {
      this.address = data.provinces;
      console.log(this.address)
    })
  }

  goToAllDonors(){
    this.route.navigate(['all-donors'])
  }
}
