import {get, put, post} from '@/lin/plugin/axios'
class Company {
    static async getById(id) {
        const res = await get(`v1/company/${id}`)
        return res
    }
    
    static async update(id,data) {
        const res = await put(`v1/company/${id}`,data)
        return res
    }

    static async getByState(state, page, count) {
        const res = await get(`v1/company/page/${state}`, {
            page: page,
            count: count
        })
        return res
    }

    static async updateState(id, state) {
        const res = await put(`v1/company/state/${id}?state=${state}`)
        return res
    }

    static async create(data) {
        const res = await post('v1/company',data)
        return res
    }
    
    static async getByName(name) {
        const res = await get('v1/company/search', {
            name: name
        })
        return res
    }

    static async getByKeyword(page, count, keyword) {
        const res = await get('v1/company/page/keyword', {
            page: page,
            count: count,
            keyword: keyword
        })
        return res
    }

    static async findHotCompany() {
        const res = await get('v1/company/find')
        return res
    }
}

export {
    Company
}