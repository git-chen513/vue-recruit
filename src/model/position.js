import {get, put, _delete, post} from '@/lin/plugin/axios'
class Position {
    static async getByState(state, page, count) {
        const res = await get(`v1/position/page/${state}`, {
            page: page,
            count: count
        })
        return res
    }

    static async getById(id) {
        const res = await get(`v1/position/${id}`)
        return res
    }

    static async updateState(id, state) {
        const res = await put(`v1/position/state/${id}?state=${state}`)
        return res
    }

    static async updateHits(id) {
        const res = await put(`v1/position/hits/${id}`)
        return res
    }

    static async getByHrId(hrID, page, count) {
        const res = await get(`v1/position/page/hr/${hrID}`, {
            page: page,
            count: count
        })
        return res
    }

    static async delete(id) {
        const res = await _delete(`v1/position/${id}`)
        return res
    }

    static async updatePosition(id, data) {
        const res = await put(`v1/position/${id}`, data)
        return res
    }

    static async create(data) {
        const res = await post('v1/position', data)
        return res
    }

    static async getByKeyword(page, count, keyword) {
        const res = await get('v1/position/page/keyword', {
            page: page,
            count: count,
            keyword: keyword
        })
        return res
    }

    static async sortByHits() {
        const res = await get('v1/position/sort')
        return res
    }
}

export {
    Position
}