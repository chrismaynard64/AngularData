import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/core/model';
import { Subject } from 'rxjs';
import { HeroEditData, HeroSaveData, editType } from 'src/app/hero/heroEditData';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

 hero: Hero;
 _data: HeroEditData

  constructor(
    public dialogRef: MatDialogRef<HeroEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroEditData) { 
      if (data) {
          this.hero = data.hero;
          this._data = data;
      } 
    }

  ngOnInit() {
  }


  save() {
    let data = new HeroSaveData();

    data.hero = this.hero;
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
