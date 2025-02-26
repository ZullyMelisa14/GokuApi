import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';
import { ShowimageComponent } from './components/showimage/showimage.component';
import { LoadingService } from './services/loadingService/loading.service';
import { FilterComponent } from './components/filter/filter.component';

const Components = [
  ButtonComponent,
  ShowimageComponent,
  FilterComponent
]

const Modules = [
  CommonModule,
  FormsModule,
  IonicModule
]

const Controls = [
  LoadingService
]

@NgModule({
  declarations: [... Components],
  imports: [
    ... Modules
  ],
  providers: [... Controls],
  exports: [... Components, ... Modules],
})
export class SharedModule { }
