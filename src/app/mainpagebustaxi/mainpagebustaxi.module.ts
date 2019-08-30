import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainpagebustaxiPage } from './mainpagebustaxi.page';

const routes: Routes = [
  {
    path: '',
    component: MainpagebustaxiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainpagebustaxiPage]
})
export class MainpagebustaxiPageModule {}
