import API from "./api.service"

class ExerciseService {

    getAllExercises = () => {
        return API.get('/exercises')
    }

    getExerciseById = (exerciseId :any) => {
        return API.get(`/exercises/${exerciseId}`)
    }

    newExercise = (exerciseData: any) => {
        return API.post('/exercises/newExercise', exerciseData)
    }

    updateExercise = (exerciseId: any, exerciseData: any) => {
        return API.patch(`/exercise/${exerciseId}`, exerciseData)
    }

    deleteExercise = (exerciseId: any) => {
        return API.delete(`/exercise/${exerciseId}`)
    }

}

export default new ExerciseService()