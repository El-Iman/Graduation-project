import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-disease',
  templateUrl: './show-disease.component.html',
  styleUrls: ['./show-disease.component.css']
})
export class ShowDiseaseComponent implements OnInit {

  AllDisease = [];
  disease:any;
  id;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = data.get('id');
      console.log(data, this.id)
    })
    this.getAllDisease();
  }

  getAllDisease() {
    this.api.getDisease().subscribe((data: any) => {
      console.log(data)
      this.AllDisease = data.Chronic_Diseases;
      this.AllDisease.forEach(e => {
        if (e.id == this.id) {
          this.disease = e;
        }
      })
    })
  }
}
