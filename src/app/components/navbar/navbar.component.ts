import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { ApiService } from 'src/app/services/api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Tips = [
    "Breakfast is the necessary and basic meal for the body, and has enough to eat breakfast regulary, and do not forget to oeat a cup of milk within your destination",
    "Be careful to work a little sports exercises, especially in the morning to renew your activity and your life and the health ",
    "The stomach is not filled with food to another,enough to fill one-third, and for a third of the water and third of the air to help them digest",
  ]

  isAuth:boolean;
  login_token;

   httpOptions = {
    headers: new HttpHeaders({
      'auth-token':  localStorage.getItem("login_token")
    })
  };
  constructor(private api:ApiService,private route:Router) {}

  ngOnInit(): void {
    if(localStorage?.getItem('login_token') == 'null'){
      this.isAuth = false;
    }else{
      this.isAuth= true;
    }
  }


  logout(){

    this.api.logout(this.httpOptions).subscribe(data=>{
      console.log(data)
    localStorage.setItem("login_token",null);
    if(localStorage?.getItem('login_token') == 'null' || localStorage?.getItem('login_token') == undefined){
      this.isAuth = false;
    }else{
      this.isAuth= true;
    }
    this.route.navigate(['/']);

    });
}


deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

    }
}

  navslide() {
    const nav = document.querySelector(".nav_list");
      nav.classList.toggle("nav-active");
  }
}
