import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule,
     MatTabsModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule
  ],
  exports:[MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule, 
    MatTabsModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule
  ]
})
export class NgMaterialModule { }
