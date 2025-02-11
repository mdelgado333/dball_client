import axios from 'axios'

class LearningService {
    app: any

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_NATIVE_APP_API_URL}/learnings`
        })

        this.app.interceptors.request.use((config: any) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAllLearnings = () => {
        return this.app.get('/')
    }

    getOneLearning = (id: any) => {
        return this.app.get(`/${id}`)
    }

    newLearning = (learning: any) => {
        return this.app.post('/newLearning', learning)
    }

    editOneLearning = (id: any) => {
        return this.app.patch(`/${id}`)
    }

    deleteOneLearning = (id: any) => {
        return this.app.delete(`/${id}`)
    }

}