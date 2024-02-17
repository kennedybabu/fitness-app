import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
    
    private availableExercises: Exercise [] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ]
    
    getAvailableExercises() {
        return this.availableExercises.slice()
    }

    private runningExercise: Exercise | null = null
    exerciseChanged = new Subject<Exercise | null>()
    private exercises: Exercise [] = []

    startExercise(selectedId: string) {
        const selectedExercise = this.availableExercises.find(ex => ex.id === selectedId)
        if(selectedExercise) {
            this.runningExercise  = selectedExercise
            this.exerciseChanged.next({ ...this.runningExercise })
        }
    }


    getRunningExercise(){
        return { ...this.runningExercise }
    }

    cancelExercise(progress: number) {
        if(this.runningExercise) {
            this.exercises.push({
                ...this.runningExercise, 
                date: new Date(), 
                state: 'cancelled',
                duration: this.runningExercise.duration * (progress / 100),
                calories: this.runningExercise.calories * (progress / 100),})                                 
        }
        this.runningExercise = null 
        this.exerciseChanged.next(null)
    }

    completeExercise(){
        if(this.runningExercise) {
            this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'})
            this.runningExercise = null 
            this.exerciseChanged.next(null)
        }
    }


    getAllExercises() {
        return this.exercises.slice()
    }
}