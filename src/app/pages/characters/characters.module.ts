import { NgModule } from '@angular/core';
import { CharactersPageRoutingModule } from './characters-routing.module';
import { CharactersPage } from './characters.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage]
})
export class CharactersPageModule {}
