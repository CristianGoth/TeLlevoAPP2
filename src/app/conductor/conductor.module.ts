import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConductorPageRoutingModule } from './conductor-routing.module';
import { ConductorPage } from './conductor.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ConductorPage]
})
export class ConductorPageModule {}
