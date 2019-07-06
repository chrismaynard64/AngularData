import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatTabsModule
  ],
  exports:[MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatTabsModule]
})
export class NgMaterialModule { }
