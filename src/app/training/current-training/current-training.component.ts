import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0
  timer!: number | any


  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
     this.timer =  setInterval(() => {
        this.progress = this.progress + 20

        if( this.progress >= 100) {
          clearInterval(this.timer)
        }
      }, 1000)
  }

  onStop() {
    clearInterval(this.timer)
    this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    })
  }
}
