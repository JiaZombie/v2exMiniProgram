//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');

var config = {
  data: {
    topics: []
  },
  onLoad: function (options) {
    var that = this;
    // var nodeId = options.nodeid;

    try {
      app.loading();

      // 请求数据
      wx.request({
        url: "https://www.v2ex.com/api/topics/hot.json",
        header: {
          'cache-control': 'max-age=120'
        },
        success: function (res) {
          if (!res.data.rate_limit) {
            that.setData({
              topics: res.data
            });
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000
            })
          }
        },
        complete: function () {
          wx.hideLoading()
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  },
  onReady: function () {
    // 页面渲染完毕
    var that = this;
  }
};
Page(config);