import {get, put, _delete, post} from '@/lin/plugin/axios'
class Category {
    static async getAll(page, count) {
        const res = await get('v1/category/page', {
            page: page,
            count: count
        })
        return res
    }

    static async getById(id) {
        const res = await get(`v1/category/${id}`)
        return res
    }

    static async update(id, data) {
        const res = await put(`v1/category/${id}`, data)
        return res
    }

    static async delete(id) {
        const res = await _delete(`v1/category/${id}`)
        return res
    }

    static async createCategory(data) {
        const res = await post('v1/category', data)
        return res
    }

    static async getList() {
        const res = await get('v1/category')
        return res
    }

    static async show() {
        const res = await get('v1/category/show')
        return res
    }
}

export {
    Category
}