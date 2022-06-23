import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface Donor {
  address: string;
  created_at: string;
  blood_type: string;
  id:number;
  mobile: number;
  name: string;
  national_id: number;
  updated_at: string;
}
@Component({
  selector: 'app-all-donor',
  templateUrl: './all-donor.component.html',
  styleUrls: ['./all-donor.component.css']
})
export class AllDonorComponent implements OnInit {
  donors_all;
  page = 1;
  tabledata: any;
  count = 0;
  tableSize = 5;
  tableSizes = [5,10, 20];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
      this.fetchPosts();
  }



  fetchPosts(): void {
    this.api.getDonners().subscribe((data:any)=>{
      this.donors_all = data.Donors;
    });
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
