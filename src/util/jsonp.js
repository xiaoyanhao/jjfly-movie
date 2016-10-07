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

let random = () => {
  return Math.random().toString(36).slice(2)
}

export const JSONP = (options = {}) => {
  let param = Object.assign({
    url: '',
    data: {},
    before: param => {},
    success: response => {},
    error: event => {},
    after: (response, param) => {}
  }, options)

  if (param.url == '') {
    throw new error('URL must not be empty!')
    return
  }

  let callbackName = 'jsonp_' + random()
  param.data.callback = callbackName
  param.url = completeURL(param)

  window[callbackName] = response => {
    param.success(response)
    param.after(response, param)
    window[callbackName] = null
  }
  
  param.before(param)

  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = param.url
  script.async = true

  script.addEventListener('error', event => {
    param.error(event)
    param.after(event, param)
    script.parentNode.removeChild(script)
    script = null
  })

  script.addEventListener('load', event => {
    script.parentNode.removeChild(script)
    script = null
  })

  document.head.appendChild(script)
}