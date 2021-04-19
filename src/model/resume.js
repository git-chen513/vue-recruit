import {get, post, put, _delete} from '@/lin/plugin/axios'
class Resume {
    static async create(data) {
        const res = await post('v1/resume', data)
        return res
    }

    static async getByUserId(userId) {
        const res = await get(`v1/resume/get/${userId}`)
        return res
    }

    static async update(userId, data) {
        const res = await put(`v1/resume/${userId}`, data)
        return res
    }

    static async getById(id) {
        const res = await get(`v1/resume/${id}`)
        return res
    }
}

export {
    Resume
}