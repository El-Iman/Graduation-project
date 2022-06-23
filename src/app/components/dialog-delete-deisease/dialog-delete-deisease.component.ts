import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-deisease',
  templateUrl: './dialog-delete-deisease.component.html',
  styleUrls: ['./dialog-delete-deisease.component.css']
})
export class DialogDeleteDeiseaseComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogDeleteDeiseaseComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
