import API from "./api.service"

class LearningService {

    getAllLearnings = () => {
        return API.get('/learnings')
    }

    getLearningById = (learningId: any) => {
        return API.get(`/learnings/${learningId}`)
    }

    newLearning = (learningData: any) => {
        return API.post(`/learnings/newLearning`, learningData)
    }

    updateLearning = (learningId: any, learningData: any) => {
        return API.patch(`/learnings/${learningId}`, learningData)
    }

    deleteLearning = (learningId: any) => {
        return API.delete(`/learnings/${learningId}`)
    }

}

export default new LearningService()