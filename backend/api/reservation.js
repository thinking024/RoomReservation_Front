// 查询列表页接口
const getReservationDetailPage = (params) => {
  return $axios({
    url: '/reservation/page',
    method: 'get',
    params
  })
}

// 查看接口
const queryReservationDetailById = (id) => {
  return $axios({
    url: `/reservation/${id}`,
    method: 'get'
  })
}

// 取消，派送，完成接口
const cancel = (params) => {
  return $axios({
    url: '/reservation/cancel',
    method: 'post',
    params: { ids: params }
  })
}
