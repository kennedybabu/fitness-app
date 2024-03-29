import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0
  timer!: number | any

  constructor(private dialog: MatDialog,
    private trainingService: TrainingService){}

  ngOnInit(): void {
    this.startOrResumeTimer()
  }
  
  
  startOrResumeTimer() {
    const runningExercise = this.trainingService.getRunningExercise()
    if(runningExercise && runningExercise.duration) {
      const step = runningExercise.duration / 100 * 1000
      this.timer =  setInterval(() => {
         this.progress = this.progress + 20  
         if( this.progress >= 100) {
          this.trainingService.completeExercise()
           clearInterval(this.timer)
         }
       }, step)
    }
  }


  onStop() {
    clearInterval(this.timer)
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    })


    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.trainingService.cancelExercise(this.progress)
      } else {
        this.startOrResumeTimer()
      }
    })
  }
}
