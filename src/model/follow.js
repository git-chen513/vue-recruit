import {get, _delete, post} from '@/lin/plugin/axios'
class Follow {
    static async getFollowByUserId(userId) {
        const res = await get(`v1/follow/${userId}`)
        return res
    }

    static async cancel(userId, companyId) {
        const res = await _delete('v1/follow/cancel',{
            userId:userId,
            companyId:companyId
        })
        return res
    }

    static async create(data) {
        const res = await post('v1/follow/add', data)
        return res
    }
}

export {
    Follow
}