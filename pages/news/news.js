Page({

  /**
   * 页面的初始数据
   */
  data: {
    topics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var app = getApp();
    
    try {
      app.loading();

      // 请求数据
      wx.request({
        url: "https://www.v2ex.com/api/topics/latest.json",
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
      // Do something whe
    }
  },
})