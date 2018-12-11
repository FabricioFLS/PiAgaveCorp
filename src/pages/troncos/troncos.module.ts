import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TroncosPage } from './troncos';

@NgModule({
  declarations: [
    TroncosPage,
  ],
  imports: [
    IonicPageModule.forChild(TroncosPage),
  ],
})
export class TroncosPageModule {}
