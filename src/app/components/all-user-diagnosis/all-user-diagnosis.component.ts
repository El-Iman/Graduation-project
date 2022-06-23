import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-user-diagnosis',
  templateUrl: './all-user-diagnosis.component.html',
  styleUrls: ['./all-user-diagnosis.component.css']
})
export class AllUserDiagnosisComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token':  localStorage.getItem('login_token')
    })
  };
  diagnosis_all;
  page = 1;
  tabledata: any;
  count = 0;
  tableSize = 3;
  tableSizes = [3,6,10];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.api.getUserDiagnosis(this.httpOptions).subscribe((data: any)=>{
      this.diagnosis_all = data.diagnosis;
    })
  }


  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
