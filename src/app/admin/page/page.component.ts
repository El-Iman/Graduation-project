import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
// import { $ } from 'jquery';
import * as $ from 'jquery';
import 'jquery';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  admin_info;
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  donnerLength = 0;
  userLength = 0;
  diseaseLength = 0;
  adviceLength = 0;
  fileToUpload;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAdminInfo();

    this.api.adminInfo(this.httpOptions).subscribe((data: any) => {
      this.admin_info = data.admin;
    })
    $(document).ready(function () {
      $(".admin-img").click(function () {
        $("#dropdown").toggle();
        $(".fa-chevron-up").toggleClass("transform");
      });
      $(".about-admin").click(function () {
        $("#dropdown").toggle();
        $(".fa-chevron-up").toggleClass("transform");
      });
      $(".first").click(function () {
        $(".chf").toggleClass("rotate-chevron-right");
        $(".fir").toggle();
      });
      $(".second").click(function () {
        $(".chs").toggleClass("rotate-chevron-right");
        $(".sec").toggle();
      });
      $(".third").click(function () {
        $(".cht").toggleClass("rotate-chevron-right");
        $(".thi").toggle();
      });
      $(".five").click(function () {
        $(".chv").toggleClass("rotate-chevron-right");
        $(".fiv").toggle();
      });

      $(".sidebar-icon").click(function () {
        $(".sidebar").show();
      });
      $(".close").click(function () {
        $(".sidebar").hide();
      });
    });

    this.api.getCount().subscribe((data: any) => {
      this.donnerLength =data.counts.donors;
      this.userLength =data.counts.users;
      this.diseaseLength =data.counts.diseases;
      this.adviceLength =data.counts.advices;
    })
  }

 
  getAdminInfo() {
    this.api.adminInfo(this.httpOptions).subscribe((data: any) => {
      this.admin_info = data.admin;
    })
  }

  logOut() {
    this.api.logOutAdmin(this.httpOptions).subscribe((data: any) => {
      if (data.status == 1) {
        localStorage.setItem("login_token_admin", null);
        this.router.navigate([ "admin","login"])
      }
    })
  }

  showAdminCard(){
    document.querySelector(".admin-card").classList.remove('hidden')
  }
  hiddenAdminCard(){
    document.querySelector(".admin-card").classList.add('hidden')
  }
  
  addPhoto(event){
    let x =URL.createObjectURL(event.target.files[0]);
    this.fileToUpload =event.target.files[0]
    const fd = new FormData();
    fd.append('photo',this.fileToUpload,this.fileToUpload.name);

    let img = document.querySelector(".user-img") ;
    img.setAttribute("src" ,x);
    this.api.editAdminPhoto(fd, this.httpOptions).subscribe((data:any)=>{
      window.location.reload()
    });

  }
}
