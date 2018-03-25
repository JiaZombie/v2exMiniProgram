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
        success: function (res) {
          if (res.statusCode === 200) {
            that.setData({
              topics: res.data
            });
          } else {
            that.data.errorMsg = res.errMsg;
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
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})