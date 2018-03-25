// pages/news/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: {},
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    app.loading();

     // 请求指定主题
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      success: function(res) {
        self.setData({
          topic: res.data[0]
        });
      },
      complete: function () {
        wx.hideLoading()
      }
    })
     // 请求指定主题的评论
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
      success: function (res) {
        self.setData({
          replies: res.data
        });
      }
    })
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