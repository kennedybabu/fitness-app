import { Exercise } from './../exercise.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  
  exrcises: Exercise [] = []

  constructor(private trainingService: TrainingService){}

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }


  ngOnInit(): void {
    this.exrcises = this.trainingService.getAvailableExercises()
  }

}
