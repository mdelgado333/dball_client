import axios from 'axios'

class LearningService {
    app: any

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_NATIVE_APP_API_URL}/workouts`
        })

        this.app.interceptors.request.use((config: any) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAllWorkouts = () => {
        return this.app.get('/')
    }

    getOneWorkout = (id: any) => {
        return this.app.get(`/${id}`)
    }

    newWorkout = (workout: any) => {
        return this.app.post('/newLearning', workout)
    }

    editOneWorkout = (id: any) => {
        return this.app.patch(`/${id}`)
    }

    deleteOneWorkout = (id: any) => {
        return this.app.delete(`/${id}`)
    }

}