// 查询列表页接口
const getMessagePage = (params) => {
  return $axios({
    url: '/message/page',
    method: 'get',
    params
  })
}

// 查看接口
const queryMessageById = (id) => {
  return $axios({
    url: `/message/${id}`,
    method: 'get'
  })
}
