import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as AOS from 'aos';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteDeiseaseComponent } from '../dialog-delete-deisease/dialog-delete-deisease.component';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userImg;
  userInfo;
  chronic_disease_user;
  diagosis;
  chronic_disease;
  age;
  nameOfUserDisease = [];
  activeUpdate = false;
  activeAdd = false;
  fileToUpload;
  image;
  ind;
  erroeMassage;
  message;
  address = [];
  login_message;

  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': localStorage.getItem('login_token')
    })
  };

  Edit_Form = new FormGroup({
    full_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z- ]{2,}')]),
    national_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]{14}')]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4,}')]),
    address: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    blood_type: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    social_status: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z- ]{2,}')]),
  });

  Disease_Form = new FormGroup({
    chronic_disease_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,}')]),
  });

  Diagosis_Form_add = new FormGroup({
    diagnosis: new FormControl("", [Validators.required])
  });

  Diagosis_Form_update = new FormGroup({
    diagnosis: new FormControl("", [Validators.required])
  });

  Photo_Form = new FormGroup({
    photo: new FormControl("")
  });


  constructor(private api: ApiService, private route: Router, private rout: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    // AOS.init();
    new WOW().init();

    this.getDisease();
    this.getPersonalInfo();
    this.getPersonalDisease();
    this.getPersonalDiagnosis();
    this.getdress();

    this.rout.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: 'end', inline: "end" });
      }
    });
  }

  getLoginMessage(e) {
    this.login_message = e;
  }


  openDialog(id): void {
    this.api.changeUserDisease(id, this.httpOptions).subscribe(data => {
      window.location.reload();
    })

  }


  getdress() {
    this.api.getProvnces().subscribe((data: any) => {
      this.address = data.provinces;
    })
  }
  getPersonalInfo() {
    this.api.getPersonalInfo(this.httpOptions).subscribe((data: any) => {
      this.userInfo = data.user;
    })
  }

  getPersonalDisease() {
    this.api.getUserDisease(this.httpOptions).subscribe((data: any) => {
      this.chronic_disease_user = data.chronic_disease;
      this.chronic_disease_user.sort((a, b) => a.chronic_disease_id - b.chronic_disease_id);

      this.chronic_disease.forEach((element1: any) => {
        this.chronic_disease_user.forEach(element => {
          if (element.chronic_disease_id == element1.id) {
            this.nameOfUserDisease.push(element1.chronic_disease);
          }
        });

      });
    });
  }


  openForm() {
    document.querySelector(".edit-form").classList.remove("hidden");
    document.querySelector(".close-form i").classList.remove("hidden")
  }

  closeForm() {
    document.querySelector(".close-form i").classList.add("hidden")
    document.querySelector(".edit-form").classList.add("hidden")
  }


  getDisease() {
    this.api.getDisease().subscribe((data: any) => {
      this.chronic_disease = data.Chronic_Diseases;
    })
  }

  addUserDiseas(f: FormGroup) {
    this.api.addUserDisease(f.value, this.httpOptions).subscribe((data: any) => {
      window.location.reload();
    })
  }

  getPersonalDiagnosis() {
    this.api.getUserDiagnosis(this.httpOptions).subscribe((data: any) => {
      this.diagosis = data.diagnosis;
    });
  }

  addUserDiagnosis(f: FormGroup) {
    this.api.addUserDiagnosis(f.value, this.httpOptions).subscribe((data: any) => {
      this.toggleActive('.diagosis-Form-add');
      window.location.reload();
    })
  }

  updateUserDiagnosis(f: FormGroup, id) {
    this.api.UpdateUserDiagnosis({ id: id, diagnosis: f.value.diagnosis }, this.httpOptions).subscribe((data: any) => {
      window.location.reload();
    })
  }

  addPhoto(event) {

    let x = URL.createObjectURL(event.target.files[0]);
    this.fileToUpload = event.target.files[0]
    const fd = new FormData();
    fd.append('photo', this.fileToUpload, this.fileToUpload.name);

    let img = document.querySelector(".user-img");
    img.setAttribute("src", x);
    this.api.addPhoto(fd, this.httpOptions).subscribe((data: any) => {
      this.image = data.photo
    });
  }

  toggleActive(s) {
    document.querySelector(s).classList.toggle("active");
  }

  changeAddActive() {
    this.activeAdd = true;
    this.activeUpdate = false;
  }

  changeUpdateActive() {
    this.activeAdd = false;
    this.activeUpdate = true
  }

  goToAllDiagnosis() {
    this.route.navigate(['all-diagnosis'])
  }


  submit(f: FormGroup) {
    this.api.editUserInfo(f.value, this.httpOptions).subscribe((data: any) => {
      if (data.status == true) {
        this.erroeMassage = null;
        this.message = data.msg;
        document.querySelector(".edit-form").classList.add("hidden")
      } else {
        this.erroeMassage = data.msg;
      }
    })
  }

}
