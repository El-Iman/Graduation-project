import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  disease;
  page = 1;
  tabledata: any;
  count = 0;
  tableSize = 1;

  showLess=false;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.api.getDisease().subscribe((data: any)=>{
      this.disease = data.Chronic_Diseases;
      console.log(this.disease)
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
