function getSelfInfoApi() {
    return $axios({
        url: `/user/me`,
        method: 'get'
    })
}

function getSelfReservationApi() {
    return $axios({
        url: `/reservation/me`,
        method: 'get'
    })
}