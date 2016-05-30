let completeURL = param => {
  let url = param.url
  url += param.url.indexOf('?') == -1 ? '?' : '&'
  url += objectToQuery(param.data)
  return url
}

let objectToQuery = obj => {
  let query = []
  let encode = encodeURIComponent
  for (let key in obj) {
    query.push(encode(key) + '=' + encode(obj[key]))
  }
  return query.join('&')
}

let random = length => {
  length += 2
  return Math.random().toString(36).slice(2, length)
}

export const JSONP = (options = {}) => {
  let param = Object.assign({
    url: '',
    data: {},
    before: param => {},
    success: response => {},
    error: event => {},
    completed: (response, param) => {}
  }, options)

  if (param.url == '') {
    throw new error('URL must not be empty!')
  }

  let callbackName = 'jsonp_' + random(15)
  param.data.callback = callbackName
  param.url = completeURL(param)
  param.before(param)

  callbackName = param.data.callback
  window[callbackName] = response => {
    window[callbackName] = null
    param.success(response)
    param.completed(response, param)
  }

  let script = document.createElement('script')
  script.async = true
  script.src = param.url

  script.addEventListener('error', event => {
    param.error(event)
    param.completed(event, param)
  })

  script.addEventListener('load', event => {
    script.parentNode.removeChild(script)
    script = null
  })

  document.head.appendChild(script)
}