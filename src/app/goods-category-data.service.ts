import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsCategoryDataService {

  private guestMascaraUrl = "http://localhost:3001/api/guestMascara";
  private adminMascaraUrl = "http://localhost:3001/api/adminMascara";
  private faceCareUrl = "http://localhost:3001/api/face-care";
  private todaysSaleUrl = "http://localhost:3001/api/todaySales";
  private decorativeCosmUrl = "http://localhost:3001/api/decorativeCosm";
  private creamsUrl = "http://localhost:3001/api/guestCreams";



  constructor(private http: HttpClient) { }

  getGuestMascaraUrl() {
    return this.http.get<any>(this.guestMascaraUrl);
  }
  getAdminMascaraUrl() {
    return this.http.get<any>(this.adminMascaraUrl);
  }
  getGuestFaceCareUrl() {
    return this.http.get<any>(this.faceCareUrl);
  }
  getTodaysSaleUrl() {
    return this.http.get<any>(this.todaysSaleUrl);
  }
  getDecorativeCosmUrl() {
    return this.http.get<any>(this.decorativeCosmUrl);
  }
  getCreamsUrl() {
    return this.http.get<any>(this.creamsUrl);
  }
}
