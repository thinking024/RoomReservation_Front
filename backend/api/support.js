function getSupportList(params) {
    return $axios({
        url: '/support/page',
        method: 'get',
        params
    })
}

function querySupportById(id) {
    return $axios({
        url: `/support/id/${id}`,
        method: 'get'
    })
}

function editSupport(params) {
    return $axios({
        url: '/support',
        method: 'put',
        data: { ...params }
    })
}

const deleteSupport = (ids) => {
    return $axios({
        url: '/support',
        method: 'delete',
        params: { ids }
    })
}

function addSupport(params) {
    return $axios({
        url: '/support',
        method: 'post',
        data: { ...params }
    })
}