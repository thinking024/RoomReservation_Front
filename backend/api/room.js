// 查询列表接口
const getRoomPage = (params) => {
  return $axios({
    url: '/room/page',
    method: 'get',
    params
  })
}

// 删除接口
const deleteRoom = (ids) => {
  return $axios({
    url: '/room',
    method: 'delete',
    params: { ids }
  })
}

// 修改接口
const editRoom = (params) => {
  return $axios({
    url: '/room',
    method: 'put',
    data: { ...params }
  })
}

// 新增接口
const addRoom = (params) => {
  return $axios({
    url: '/room',
    method: 'post',
    data: { ...params }
  })
}

// 查询详情
const queryRoomById = (id) => {
  return $axios({
    url: `/room/${id}`,
    method: 'get'
  })
}

// 获取楼宇列表
const querytBuildingList = (params) => {
  return $axios({
    url: '/building/list',
    method: 'get',
    params
  })
}

// 获取房间列表
const queryRoomList = (params) => {
  return $axios({
    url: '/room/list',
    method: 'get',
    params
  })
}

// 文件down预览
const commonDownload = (params) => {
  return $axios({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '/common/download',
    method: 'get',
    params
  })
}

// 起售停售---批量起售停售接口
const roomStatusByStatus = (params) => {
  return $axios({
    url: `/room/status/${params.status}`,
    method: 'post',
    params: { ids: params.id }
  })
}