import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog-modal',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class TeamsStatsDialogComponent implements OnInit {
  fromPage: string;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<TeamsStatsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
