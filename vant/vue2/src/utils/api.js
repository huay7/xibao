import request from '@/utils/request'

const baseUrl = 'http://192.168.0.103:80';

export function queryParams(data) {
    return request({
        url: baseUrl + `/api/api/h5/content/list`,
        method: 'get',
        headers:{
            token:'eyJhbGciOiJIUzI1NiJ9QeyJzdWIiOiJlbnRlclByaXNlV1hRWUgiLAJaW1lIjoxNjEzNzIxMT'
        },
        data
    })
}