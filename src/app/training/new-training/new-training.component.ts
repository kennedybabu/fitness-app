import { Exercise } from './../exercise.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>()

  exrcises: Exercise [] = []

  constructor(private trainingService: TrainingService){}

  onStartTraining() {
    this.trainingStart.emit()
  }


  ngOnInit(): void {
    this.exrcises = this.trainingService.getAvailableExercises()
  }

}
