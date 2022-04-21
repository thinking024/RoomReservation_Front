
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
        url: '/reservation/',
        method: 'get',
        params: { ...data }
    })
}

//获取菜品分类对应的菜品
function dishListApi(data) {
    return $axios({
        'url': '/dish/list',
        'method': 'get',
        params: { ...data }
    })
}

//购物车中添加商品
function addCartApi(data) {
    return $axios({
        'url': '/shoppingCart/add',
        'method': 'post',
        data
    })
}

//购物车中修改商品
function updateCartApi(data) {
    return $axios({
        'url': '/shoppingCart/sub',
        'method': 'post',
        data
    })
}


