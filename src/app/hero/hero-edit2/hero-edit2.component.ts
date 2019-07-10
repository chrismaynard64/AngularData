import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/core/model';
import { Subject } from 'rxjs';
import { HeroEditData, HeroSaveData, editType } from 'src/app/hero/heroEditData';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-edit2',
  templateUrl: './hero-edit2.component.html',
  styleUrls: ['./hero-edit2.component.scss']
})
export class HeroEdit2Component implements OnInit {

  hero: Hero;
  _data: HeroEditData

  heroForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    portrait: new FormControl(''),
    type: new FormControl('1'),
  });
 
   constructor(
     public dialogRef: MatDialogRef<HeroEdit2Component>,
     @Inject(MAT_DIALOG_DATA) public data: HeroEditData) { 
       if (data) {
           this.hero = data.hero;
           this._data = data;
           if (!this.hero.type)
              this.hero.type = 1;
           this.heroForm.setValue(this.hero);
       } 
     }
 
   ngOnInit() {
   }
 
 
   save() {
     let data = new HeroSaveData();
 
     data.hero = this.heroForm.value;
     data.type = this._data.type;
     
       this._data.heroChange.next(data);
       this.dialogRef.close();
   }
 
 
   delete() {
 
     if (!confirm('Delete this hero\n\nAre your sure?'))
       return;
     let data = new HeroSaveData();
 
     data.hero = this.hero;
     data.type = editType.delete;
     
       this._data.heroChange.next(data);
       this.dialogRef.close();
   }
 
 
 
   close() {
      this.dialogRef.close();
   }
 
 
   portraitUrl(hero) {
       if (hero) {
         return 'assets/images/Portrait_' + hero.portrait + '.png';
       }
       else
       return '';
   }
}
