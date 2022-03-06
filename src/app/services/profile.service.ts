import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username = "string"; 
  private clientid = '5ceeb84a143ff738faff';
  private clientsecret = 'b542c7f42a6f0b81c984742b98aaf724c5a9d369';

  constructor(private http: HttpClient) {
    console.log("This service is now ready");
    this.username = "Michaelmapesa"
    

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map(res => res));
     

   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
    

   }
   updateProfile(username:string){
    this.username = username;

  }

}
