const queryBuildingsApi = () => {
    return $axios({
        'url': '/building/map',
        'method': 'get'
    })
}

const queryRoomsApi = (buildingId) => {
    return $axios({
        url: `/room/map/${buildingId}`,
        method: 'get'
    })
}

const queryReservationsApi = (data) => {
    return $axios({
        url: '/room/able',
        method: 'get',
        params: { ...data }
    })
}

const addReservationApi = (params) => {
    return $axios({
        url: '/reservation',
        method: 'post',
        data: { ...params }
    })
}


