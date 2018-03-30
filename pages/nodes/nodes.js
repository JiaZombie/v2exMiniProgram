Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var app = getApp();

    app.loading();

    wx.request({
      url: 'https://www.v2ex.com/api/nodes/all.json',
      success: function(res) {
       self.setData({
         nodes: res.data
       });
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    wx.reLaunch({
      url: 'pages/nodes/nodes',
    });
  }
})