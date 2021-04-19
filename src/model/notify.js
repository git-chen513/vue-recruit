import {get, put} from '@/lin/plugin/axios'
class Notify {
    static async get(userName, isRead) {
        const res = await get('v1/notify', {
            userName: userName,
            isRead: isRead
        })
        return res
    }

    static async getAll(userName) {
        const res = await get('v1/notify/all', {
            userName: userName
        })
        return res
    }

    static async update(userName) {
        const res = await put(`v1/notify?userName=${userName}`)
        return res
    }
}

export {
    Notify
}