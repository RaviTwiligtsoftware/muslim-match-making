import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }



  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>('./assets/data/profileData.json');
  }
}

