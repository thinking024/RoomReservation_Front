function getHelpList() {
    return $axios({
      'url': '/support/list',
      'method': 'get',
    })
  }