import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AdminModule { }
