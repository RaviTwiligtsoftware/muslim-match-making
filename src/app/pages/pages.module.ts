import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './components/profile/profile.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule
  ]
})
export class PagesModule { }
