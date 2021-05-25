import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-expanses',
  templateUrl: './expanses.component.html',
  styleUrls: ['./expanses.component.scss']
})
export class ExpansesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExpansesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  onClose(){
    this.dialogRef.close('pera se zatvorio u sebe');
  }
}
