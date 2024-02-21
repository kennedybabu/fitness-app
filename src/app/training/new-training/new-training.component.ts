import { Observable } from 'rxjs';
import { Exercise } from './../exercise.model';
import { Component, OnInit, inject} from '@angular/core';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Firestore, collectionData, getDocs, onSnapshot, query, collection } from "@angular/fire/firestore"
// import { doc } from "fire"
import { doc } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  
  exercises$!: Observable<Exercise[]>
  list$ = collectionData(collection(this.db, 'availableExercises')) as Observable<Exercise[]>

  constructor(private trainingService: TrainingService,
    private db: Firestore, 
    private fbDb: AngularFireDatabase
    ){
      // const itemCollection = collection(this.db, 'vailableExercises')
      // const any = collectionData(itemCollection).subscribe((res) => {
      //   console.log(res)
      // })   
      
      // console.log(any)
    }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }


  ngOnInit(): void {
    // this.db.collection('a')
    // const unsub = onSnapshot(doc(this.db, 'availableExercises'), (doc) => {
    //   console.log(doc)
    // })

    // console.log(unsub)
  }


  // getExercises() {
  //   const all = this.fbDb.collection('availableExercises').snapshotChanges().map(docArray => {
  //     return docArray.map(doc => {
  //       return {
  //         id: doc.payload.doc.id,
  //         ...doc.payload.doc.data()
  //       }
  //     })
  //   }).subscribe(result => {
  //     console.log(result)
  //   })
  // }
  
}
