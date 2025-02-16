import API from "./api.service"

class UnitService {

    getAllUnits = () => {
        return API.get('/units')
    }

    getUnitById = (unitId: any) => {
        return API.get(`/units/${unitId}`)
    }

    newUnit = (unitData: any) => {
        return API.post('/units/newUnit', unitData)
    }

    updateUnit = (unitId: any, unitData: any) => {
        return API.patch(`/units/${unitId}`, unitId)
    }

    addLearningToUnit = (unitId: any, learningData: any) => {
        return API.patch(`/units/${unitId}/addLearning`, learningData)
    }

    deleteLearningFromUnit = (unitId: any, indexData: any) => {
        return API.patch(`/units/${unitId}/deleteLearning`, indexData)
    }

    deleteUnit = (unitId: any) =>{
        return API.delete(`/units/${unitId}`)
    }

}

export default new UnitService