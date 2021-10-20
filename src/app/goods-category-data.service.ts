import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsCategoryDataService {

  private guestMascaraUrl = "http://localhost:3001/api/guestMascara";
  private adminMascaraUrl = "http://localhost:3001/api/adminMascara";
  private faceCareUrl = "http://localhost:3001/api/face-care";


  constructor(private http: HttpClient) { }

  getGuestMascaraUrl(){
    return this.http.get<any>(this.guestMascaraUrl);
  }
  getAdminMascaraUrl(){
    return this.http.get<any>(this.adminMascaraUrl);
  }
  getGuestFaceCareUrl(){
    return this.http.get<any>(this.faceCareUrl);
  }
}
