function formatTime(date) {
  date = typeof date === 'object' ? date : (new Date(date))

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 跳转页面
function redirect(url) {
  wx.navigateTo({
    url: url,
  })
}
module.exports = {
  formatTime: formatTime,
  redirect: redirect
}
