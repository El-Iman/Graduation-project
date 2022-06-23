import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  users;
  page = 1;
  tabledata: any;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 20];
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.api.getAllUsers(this.httpOptions).subscribe((data: any) => {
      this.users = data.users;
      console.log(data)
    });
  }

  onTableDataChange(event) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
