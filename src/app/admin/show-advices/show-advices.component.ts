import { HttpHeaders } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as $ from 'jquery';
import 'jquery';
@Component({
  selector: 'app-show-advices',
  templateUrl: './show-advices.component.html',
  styleUrls: ['./show-advices.component.css']
})

export class ShowAdvicesComponent implements OnInit  {
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  AllAdvices;
  page = 1;
  tabledata: any;
  count = 0;
  tableSize = 5;
  tableSizes = [5,10, 20];

  expandedIndex = 0;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }



  fetchPosts(): void {
    this.api.getallAdices().subscribe((data: any) => {
      this.AllAdvices = data.advices;
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

  deleteadvice(id) {
    this.api.deleteAdvice(id, this.httpOptions).subscribe((data: any) => {
      window.location.reload()
    })
  }


  goToEdit(id) {
    this.router.navigate(["admin", "edit", "advice", id])
  }

  goToshow(id) {
    this.router.navigate(["admin", "advice", id])
  }

}


