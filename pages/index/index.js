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
          wx.stopPullDownRefresh()
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    wx.reLaunch({
      url: 'index',
    });
  }
};
Page(config);