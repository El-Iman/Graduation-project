import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  creataccount(info){
   return this.http.post("https://health-history.herokuapp.com/api/user/register",info);
  }

  login(id){
   return this.http.post(`https://health-history.herokuapp.com/api/user/login`,id);
  }
  logout(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/user/logout`,opt);
  }


  getProvnces(){
   return this.http.get("https://health-history.herokuapp.com/api/user/provinces");
  }

  getDonners(){
    return this.http.get("https://health-history.herokuapp.com/api/user/donors");
  }


  addDonners(donner){
    return this.http.post("https://health-history.herokuapp.com/api/user/add-donor", donner);
  }

  donnerSearch(search){
    return this.http.post("https://health-history.herokuapp.com/api/user/donors-search", search);
  }


  /******** profile  user ********/
  getPersonalInfo(opt){
   return this.http.post("https://health-history.herokuapp.com/api/user/profile/personal-information",{},opt);
  }

  editUserInfo(info,opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/edit-information",info , opt)
  }
  getUserDisease(opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/chronic-disease-data",{},opt)
  }

  getUserDiagnosis(opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/diagnosis-data",{},opt);
  }

  getDisease(){
   return this.http.get("https://health-history.herokuapp.com/api/user/chronic-disease")
  }

  addUserDisease(id , opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/add-chronic-disease",id , opt)
  }

  addUserDiagnosis(diagnosis , opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/add-diagnosis",diagnosis , opt)
  }

  UpdateUserDiagnosis(diagnosis , opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/edit-diagnosis",diagnosis , opt)
  }

  addPhoto(photo , opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/profile-picture",photo, opt)
  }

  changeUserDisease(id, opt){
    return this.http.post("https://health-history.herokuapp.com/api/user/profile/chronic-disease-status",{id:id} , opt)
  }

  contactUs(data){
    return this.http.post("https://health-history.herokuapp.com/api/user/contact-us",data )

  }

  /*** admin ****/
  adminInfo(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/admin-info` ,opt)
  }
  editAdminInfo(data,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-info`,data,opt)
  }
  editAdminPhoto(data,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-photo`,data,opt)
  }
  loginِAdmin(data){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/login`,data);
   }
  //  auth-token
   logOutAdmin(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/logout`,opt);
   }
   getallAdices(){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/all-advices`);
   }
   addAdvice(data,opt){
    // advice , status
     return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/add-advice`,data,opt)
   }
   editAdvice(data,opt){
    //id, advice , status
     return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-advice`,data,opt)
   }
   deleteAdvice(id,opt){
    //id
     return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-advice`,{id:id},opt)
   }
   AdviceStatus(data,opt){
    //id
     return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/change-advice-status`,data,opt)
   }

   getAllUsers(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/all-users`,opt);
   }

   deleteUser(id,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-user`,id,opt);
   }
   deleteDonor(id,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/delete-donor`,id,opt);
   }

   getUserChart(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/number-of-user-per-month`,opt);
   }

   getDonnersChart(opt){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/profile/number-of-donor-per-month`,opt);
   }

   getCount(){
    return this.http.get(`https://health-history.herokuapp.com/api/admin/counts`);
   }
  ///error
   deleteDis(id,opt){
     return this.http.post('https://health-history.herokuapp.com/api/admin/profile/delete-chronic-disease',{id:id} ,opt)
   }

   editDisease(data,opt){
    return this.http.post('https://health-history.herokuapp.com/api/admin/profile/edit-chronic-disease',data,opt)
  }

  addDisease(data,opt){
    return this.http.post('https://health-history.herokuapp.com/api/admin/profile/add-chronic-disease',data,opt)
  }

  getAdminPhoto(data,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-admin-photo`,data,opt);
  }

  searchForUser(data,opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/users-search`,data,opt);
  }
  editUserData(data , opt){
    return this.http.post(`https://health-history.herokuapp.com/api/admin/profile/edit-user-by-admin`,data,opt)
   }

}
