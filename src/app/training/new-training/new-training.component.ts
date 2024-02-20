import { Observable } from 'rxjs';
import { Exercise } from './../exercise.model';
import { Component, OnInit, inject} from '@angular/core';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Firestore, collection, collectionData, getDocs, query } from "@angular/fire/firestore"

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  
  exercises$!: Observable<Exercise[]>
  firestore: Firestore = inject(Firestore)
  list$ = collectionData(collection(this.db, 'availableExercises')) as Observable<Exercise[]>

  constructor(private trainingService: TrainingService,
    private db: Firestore, 
    ){
      const itemCollection = collection(this.firestore, 'vailableExercises')
      const any = collectionData(itemCollection)      
    }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }


  ngOnInit(): void {
    
  }
  
}
