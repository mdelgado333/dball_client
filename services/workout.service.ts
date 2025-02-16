import API from "./api.service"

class WorkoutService {

    getAllWorkouts = () => {
        return API.get('/workouts')
    }

    getWorkoutById = (workoutId: any) => {
        return API.get(`/workouts/${workoutId}`)
    }

    newWorkout = (workoutData: any) => {
        return API.post('/workouts/newWorkout', workoutData)
    }

    updateWorkout = (workoutId: any, workoutData: any) => {
        return API.patch(`/workouts/${workoutId}`, workoutData)
    }

    addExerciseToWorkout = (workoutId: any, exerciseId: any) => {
        return API.patch(`/workouts/${workoutId}/addExercise`, exerciseId)
    }

    deleteExerciseFromWorkout = (workoutId: any, indexData: any) => {
        return API.patch(`/workouts/${workoutId}/deleteExercise`, indexData)
    }

    deleteWorkout = (workoutId: any) => {
        return API.delete(`/workouts/${workoutId}`)
    }

}

export default new WorkoutService