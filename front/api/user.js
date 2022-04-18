function getSelfInfoApi() {
    return $axios({
        url: `/user/me`,
        method: 'get'
    })
}

function getRecentReservationApi() {
    return $axios({
        url: `/reservation/latest`,
        method: 'get'
    })
}

function updateUserApi(data) {
    return $axios({
        url: `/user`,
        method: 'put',
        data
    })
}