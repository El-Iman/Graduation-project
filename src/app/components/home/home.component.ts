import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';
import { ApiService } from 'src/app/services/api.service';
import { WOW } from 'wowjs/dist/wow.min';
// import { $ } from 'jquery';
import * as $ from 'jquery';
import 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth: boolean;
  login_token;
  Tips = [
    "Breakfast is the necessary and basic meal for the body, and has enough to eat breakfast regulary, and do not forget to oeat a cup of milk within your destination",
    "Be careful to work a little sports exercises, especially in the morning to renew your activity and your life and the health ",
    "The stomach is not filled with food to another,enough to fill one-third, and for a third of the water and third of the air to help them digest",
  ]
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem("login_token")
    })
  };

  tens = 0;
  hundred = 0;
  thousands = 0;
  started = false; // Function Started ? No
  disease;
  donors_all;
  advices;
  users;
  constructor(private rout: ActivatedRoute, private api: ApiService, private route: Router) { }

  ngOnInit(): void {

    new WOW().init();

    window.addEventListener('scroll', this.onWindowScroll, true);
    window.scrollTo(0,0);
    this.onWindowScroll();
    if (localStorage?.getItem('login_token') == 'null') {
      this.isAuth = false;
    } else {
      this.isAuth = true;
    }
    this.rout.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: 'end', inline: "end" });
      }
    });



    this.api.getCount().subscribe((data: any) => {
      this.disease = data.counts.diseases;
      this.donors_all = data.counts.donors;
      this.users = data.counts.users;
      this.advices = data.counts.advices;
     
    })

  }

  onWindowScroll() {
    let element = document.querySelector('.nav-two') as HTMLElement;
    let section = document.querySelector(".use-number") as HTMLElement;
    let nums = document.querySelectorAll(".use-number .item h4") || [];

    if (document.body.scrollTop > 110 || window.scrollY > 110) {
      element.style.background = "var(--black)";
    } else {
      element.style.background = "none";
    }

    if (document.body.scrollTop >= 1700) {
      console.log(section.offsetTop)
      if (!this.started) {
        nums?.forEach((num) => {
          let goal = num.textContent;
          let x = 0;
          let count = setInterval(() => {
            num.textContent = x++;
            if (num.textContent == goal) {
              clearInterval(count);
            }
          }, 1000 / goal);
        });
      }
      this.started = true;
    }


  }

  logout() {

    this.api.logout(this.httpOptions).subscribe(data => {
      console.log(data)
      localStorage.setItem("login_token", null);
      if (localStorage?.getItem('login_token') == 'null') {
        this.isAuth = false;
      } else {
        this.isAuth = true;
      }
      this.route.navigate(['/']);

    });
  }



  navslide() {
    const nav = document.querySelector(".nav_list");
    nav.classList.toggle("nav-active");
  }


}
