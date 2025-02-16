import API from "./api.service"

class CycleService {

    getAllCycles = () => {
        return API.get('/cycles')
    }

    getCycleById = (cylceId: any) => {
        return API.get(`/cycles/${cylceId}`)
    }

    newCycle = (cycleData: any) => {
        return API.post('/cycles/newCycle', cycleData)
    }

    addWorkoutToCycle = (cycleId: any, workoutId: any) => {
        return API.patch(`/cycles/${cycleId}/addWorkout`, workoutId)
    }

    deleteWorkoutFromCycle = (cycleId: any, indexData: any) => {
        return API.patch(`/cycles/${cycleId}/deleteWorkout`, indexData)
    }

    deleteCycle = (cycleId: any) => {
        return API.delete(`/cycles/${cycleId}`)
    }

}

export default new CycleService