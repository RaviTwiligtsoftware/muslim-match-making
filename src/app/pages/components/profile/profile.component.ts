import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ToastrService } from 'ngx-toastr';
import { UserProfile } from '../../models/user-profile';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent {
  public currentIndex = 0;
  public profileData: any;
  public menuItems = [
    { label: 'Home', icon: 'home-select.png' },
    { label: 'Chat', icon: 'chat.png' },
    { label: 'Intrest', icon: 'intrest.png' },
    { label: 'Mutual', icon: 'mutual.png' },
    { label: 'menu', icon: 'menu.png' }
  ];

  constructor(
    private service: ProfileService,
    public toastr: ToastrService
    ) { }



  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(): void {

    this.service.getProfile().pipe(
      catchError(error => {
        console.error('Error fetching profile:', error);
        return throwError(error);
      })
    ).subscribe((res: UserProfile) => {
      this.profileData = res.profileData;
    });
  }

  public profileIntrested(): void {
    this.toastr.success(`Interested in this profile ${this.profileData[this.currentIndex]?.name}`);
    this.currentIndex++;
  }

  public profileRejected(): void {
    this.toastr.warning(`Not Interested in this profile ${this.profileData[this.currentIndex]?.name}`);
    this.currentIndex++;
  }

  public hasProfileProperty(property: string): boolean {
    return this.profileData && this.profileData[this.currentIndex]?.[property] !== undefined;
  }

}

