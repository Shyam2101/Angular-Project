import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('api/Users/getuser')
  }

  deleteUser(id:any){
    return this.http.get('api/DeleteUser/'+id)
  }

  saveUser(value:any){
    return this.http.post('api/SaveUserDetails',value)
  }

  editUser(id:any){
    return this.http.get('api/GetUserById/'+ id)
  }
}
