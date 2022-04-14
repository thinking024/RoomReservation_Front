// 查询列表接口
const getBuildingPage = (params) => {
  return $axios({
    url: '/building/page',
    method: 'get',
    params
  })
}

// 编辑页面反查详情接口
const queryBuildingById = (id) => {
  return $axios({
    url: `/building/${id}`,
    method: 'get'
  })
}

// 删除当前列的接口
const deleteBuilding = (ids) => {
  return $axios({
    url: '/building',
    method: 'delete',
    params: { ids }
  })
}

// 修改接口
const editBuilding = (params) => {
  return $axios({
    url: '/building',
    method: 'put',
    data: { ...params }
  })
}

// 新增接口
const addBuilding = (params) => {
  return $axios({
    url: '/building',
    method: 'post',
    data: { ...params }
  })
}

// 修改状态
const changeStatus = (params) => {
  return $axios({
    url: `/building/status/${params.status}`,
    method: 'post',
    params: { ids: params.id }
  })
}