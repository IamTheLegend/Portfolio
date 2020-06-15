import { NgModule } from '@angular/core';
import * as sharedComponents from './components';
import { MaterialModule } from 'app/material/material.module';

@NgModule({
  declarations: [
    ...sharedComponents.sharedComponents
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    ...sharedComponents.sharedComponents,
  ]
})
export class SharedModule { }
