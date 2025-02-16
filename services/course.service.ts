import API from "./api.service"

class CourseService {

    getAllCourses = () => {
        return API.get('/courses')
    }

    getCourseById = (courseId: any) => {
        return API.get(`/courses/${courseId}`)
    }

    newCourse = (courseData: any) => {
        return API.post('/courses/newCourse', courseData)
    }

    updateCourse = (courseId: any, courseData: any) => {
        return API.patch(`/courses/${courseId}`, courseData)
    }

    addUnitToCourse = (courseId: any, unitId: any) => {
        return API.patch(`/courses/${courseId}/addUnit`, unitId)
    }

    deleteUnitFromCourse = (courseId: any, indexData: any) => {
        return API.patch(`/courses/${courseId}/deleteUnit`, indexData)
    }

    deleteCourse = (courseId: any) => {
        return API.delete(`/courses/${courseId}`)
    }

}

export default new CourseService