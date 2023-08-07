import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogdetailComponent } from './components/dialogdetail/dialogdetail.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    MainComponent,
    DialogdetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AdminModule { }
