import {get, post, put, _delete} from '@/lin/plugin/axios'
class Application {
    static async create(data) {
        const res = await post('v1/application', data)
        return res
    }

    static async getByHrId(hrID, state) {
        const res = await get(`v1/application/page/${hrID}`, {
            state: state
        })
        return res
    }

    static async updateState(id, state) {
        const res = await put(`v1/application/state/${id}?state=${state}`)
        return res
    }

    static async delete(id) {
        const res = await _delete(`v1/application/${id}`)
        return res
    }

    static async sortByGrade(hrID) {
        const res = await get(`v1/application/sort/${hrID}`)
        return res
    }

    static async getByPositionIdAndUserId(positionId, userId) {
        const res = await get('v1/application', {
            positionId: positionId,
            userId: userId
        })
        return res
    }

    static async getByUserId(userId, state) {
        const res = await get(`v1/application/page/find/${userId}`, {
            state: state
        })
        return res
    }
}

export {
    Application
}