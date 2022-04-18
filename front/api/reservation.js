//提交订单
function addReservationApi(data) {
  return $axios({
    'url': '/reservation/submit',
    'method': 'post',
    data
  })
}

//查询所有订单
function reservationListApi() {
  return $axios({
    'url': '/reservation/list',
    'method': 'get',
  })
}

//分页查询订单
function reservationPagingApi(data) {
  return $axios({
    'url': '/reservation/page/me',
    'method': 'get',
    params: { ...data }
  })
}

//再来一单
function reservationAgainApi(data) {
  return $axios({
    'url': '/reservation/again',
    'method': 'post',
    data
  })
}

// 取消预订
function cancelReservationApi(data) {
  console.log('data=' + data)
  return $axios({
    'url': '/reservation/cancel',
    'method': 'post',
    params: { ids: data }
  })
}