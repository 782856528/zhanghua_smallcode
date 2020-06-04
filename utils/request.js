/**
 * GET请求封装
 */
let publicurl="http://127.0.0.1:3000"
function get(url, data = {}) {
  return request(url, data, 'GET')
}

/**
 * POST请求封装
 */
function post(url, data = {}) {
  return request(url, data, 'POST')
}

/**
 * 微信的request
 */
function request(url, data = {}, method = "") {
  var contentType = 'application/json'
  console.log( wx.getStorageSync('token'))
  return new Promise(function(resolve, reject) {
    wx.request({
      url: publicurl+url,
      data: data,
      method: method,
      header: {
        'Content-Type': contentType,
        'Authorization': 'Bearer ' + wx.getStorageSync('token')
      },
      success: function(res) {
        if (res.data.isSuccess == true) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
         resolve(res.data)
        } else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
        }
      },
      fail: function(err) {
        
      }
    })
  });
}

module.exports = {
  request,
  get,
  post
}
