//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  loading: function(title) {
    var tlt = title || '加载中';
    wx.showLoading({
      title: tlt,
      mask: true
    })
  }
})