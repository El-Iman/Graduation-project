import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GraduationProject';
  advice;
  Tips = [];
  i = 0;
  constructor(private api: ApiService) {

  }
  ngOnInit() {
    new WOW().init();

    // document.querySelector("body").style.overflowY ="hidden";
    // let x = document.querySelector(".loading") as HTMLElement;

    // x.style.display="block !important";

    // window.onload = ()=>{
    // setTimeout(()=>{
    //   x.style.display="none";
    // document.querySelector("body").style.overflowY ="auto";
    // },3000)


    // }

    this.api.getallAdices().subscribe((data: any) => {
      this.Tips = data.advices;
    })

    setInterval(() => {
      let d = document.querySelector(".dialog");
      this.advice = this.Tips[this.i].advice;
      d.classList.add('active');
      setTimeout(() => {
        d.classList.remove('active');
      }, 7000)
      this.i++;
      if (this.i >= this.Tips.length) {
        this.i = 0;
      }
    }, 15000);

  }



}
