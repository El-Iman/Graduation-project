import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token_admin')
    })
  };
  AllDonners = [];
  AllDisease = [];
  AllUsers = [];
  AllAdvices=[];
  userCart;
  donorChart;



word=""
blogs=[
{title:'blog1' , describtion:' one'},
{title:'blog2' , describtion:' two'},
{title:'blog3' , describtion:' three'},
{title:'blog4' , describtion:' four'},
]




  constructor(private api: ApiService , private router:Router) { }

  ngOnInit(): void {

    this.getDonners();
    this.getDisease();
    this.getAllUsers();
    this.getUserChart();
    this.getCount();
    this.getAllAdvices()
  }
  getAllAdvices() {
    this.api.getallAdices().subscribe((data: any) => {
      this.AllAdvices = data.advices;
      if(this.AllAdvices.length > 4){
        this.AllAdvices.length= 4;
      }
    })
  }
  getDonners() {
    this.api.getDonners().subscribe((data: any) => {
      this.AllDonners = data.Donors;
      if(this.AllDonners.length > 4){
        this.AllDonners.length = 4;
      }
    })
  }

  getAllUsers() {
    console.log(this.httpOptions)
    this.api.getAllUsers(this.httpOptions).subscribe((data: any) => {
      this.AllUsers = data.users;
      if(this.AllUsers.length > 4){
        this.AllUsers.length= 4;
      }
    })
  }

  getDisease() {
    this.api.getDisease().subscribe((data: any) => {
      this.AllDisease = data.Chronic_Diseases;
      if(this.AllDisease.length > 4){
        this.AllDisease.length = 4;
      }

    })
  }

  deleteUser(id) {
    this.api.deleteUser({id:id}, this.httpOptions).subscribe(data => {
      window.location.reload()
    })
  }

  deleteDonor(id){
    this.api.deleteDonor({id:id}, this.httpOptions).subscribe(data => {
      window.location.reload()
    })
  }

  getUserChart() {
    this.api.getUserChart(this.httpOptions).subscribe((data: any) => {
      this.userCart = data.data;
      this.api.getDonnersChart(this.httpOptions).subscribe((data: any) => {
        this.donorChart = data.data;
        this.chart1([(this.donorChart[1].count + this.donorChart[2].count),
        (this.donorChart[3].count + this.donorChart[4].count),
        (this.donorChart[5].count + this.donorChart[6].count),
        (this.donorChart[7].count + this.donorChart[8].count),
        (this.donorChart[9].count + this.donorChart[10].count),
        (this.donorChart[11].count + this.donorChart[12].count)],
        [(this.userCart[1].count + this.userCart[2].count),
        (this.userCart[3].count + this.userCart[4].count),
        (this.userCart[5].count + this.userCart[6].count),
        (this.userCart[7].count + this.userCart[8].count),
        (this.userCart[9].count + this.userCart[10].count),
        (this.userCart[11].count + this.userCart[12].count)])
      })

    })
  }
  getCount() {
    this.api.getCount().subscribe((data: any) => {
      this.chart2([data.counts.users, data.counts.donors, data.counts.diseases, data.counts.advices]);
    })
  }

  chart1(data1, data2) {
    const canvas2 = <HTMLCanvasElement>document.getElementById('lineChart');
    const ctx2 = <CanvasRenderingContext2D>canvas2.getContext('2d');
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ["Feb", "Apr", "June", "August", "Oct", "Dec"],
        datasets: [{
          label: "donners / monthly",
          data: data1,
          backgroundColor: 'rgba(105, 0, 132, .2)',
          borderColor: 'rgba(200, 99, 132, .7)',
          borderWidth: 2,
          fill: true,
          tension: 0.4

        },
        {
          label: "users / monthly",
          data: data2,
          backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: 'rgba(0, 10, 130, .7)',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  chart2(data) {
    let months = ["Users", "Donors", "Diseases", "Advices"];
    let traffic = data;
    const canvas1 = <HTMLCanvasElement>document.getElementById('plots');
    const ctx1 = <CanvasRenderingContext2D>canvas1.getContext('2d');
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: months,
        datasets: [{
          data: traffic,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 205, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(54, 162, 235,0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
        }]

      },
      options: {
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

  deleteDisease(id){
    this.api.deleteDis(id,this.httpOptions).subscribe((data:any)=>{
      window.location.reload()
    })
  }
  goToEditDisease(id){
    this.router.navigate(["admin","edit","disease",id])
  }
  goToshowDisease(id){
    this.router.navigate(["admin","show","disease",id])
  }
  goToEditUser(){
    this.router.navigate(["admin","edit","user"])
  }
}
