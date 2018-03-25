//获取应用实例
var app = getApp();

var config = {
  data: {
    errorMsg: '',
    topics: []
  },

  onLoad: function (options) {
    var that = this;
    // var nodeId = options.id;

    try {
      app.loading();

      // 请求数据
      wx.request({
        url: "https://www.v2ex.com/api/topics/hot.json",
        success: function (res) {
          if (res.statusCode === 200) {
            that.setData({
              topics: res.data
            });
          } else {
            that.data.errorMsg = res.errMsg;
          }
        },
        complete: function() {
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