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

  constructor(private trainingService: TrainingService,
    private db: Firestore){
      const itemCollection = collection(this.firestore, 'vailableExercises')
      const any = collectionData(itemCollection) 

      console.log(any)
    }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }


  ngOnInit(): void {
    // this.exrcises = this.trainingService.getAvailableExercises()
    // this.firestore.collection('availableExercises').valueChanges().subscribe(result => {
    //   console.log(result)
    // })
    // this.getExercises()

    // this.db.collection('availableExercises').valueChanges().subscribe(result => {
    //   console.log(result)
    // })

    const results = getDocs(query(collection(this.db, 'availableExercises')))

    console.log(results)

  }
  
  // async getExercises() {
  //   return (
  //     await getDocs(query(collection(this.db, 'availableExercises')))
  //   ).docChanges()
  // }
}
