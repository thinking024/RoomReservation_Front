function getNoticeList(params) {
    return $axios({
        url: '/notice/page',
        method: 'get',
        params
    })
}

function queryNoticeById(id) {
    return $axios({
        url: `/notice/id/${id}`,
        method: 'get'
    })
}

function editNotice(params) {
    return $axios({
        url: '/notice',
        method: 'put',
        data: { ...params }
    })
}

const deleteNotice = (ids) => {
    return $axios({
        url: '/notice',
        method: 'delete',
        params: { ids }
    })
}

function addNotice(params) {
    return $axios({
        url: '/notice',
        method: 'post',
        data: { ...params }
    })
}