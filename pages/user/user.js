// pages/users/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: {},
    topics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.topics)
    this.getMemberInfo(options.username);
    this.getMemberTopics(options.username);
    
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
  
  },
  /**
   * 请求会员基本信息
   */
  getMemberInfo: function (username) {
    var that = this;
    var app = getApp();

    try {
      app.loading();

      wx.request({
        url: "https://www.v2ex.com/api/members/show.json?username=" + username,
        header: {
          'cache-control':'max-age=120'
        },
        success: function (res) {
          if (res.statusCode === 200) {
            that.setData({
              member: res.data
            });
          } else {
            wx.showToast({
              title: 'Member not found',
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
  /**
   * 请求会员发表的主题
   */
  getMemberTopics: function (username) {
    var that = this;

    try {
      wx.request({
        url: "https://www.v2ex.com/api/topics/show.json?username=" + username,
        success: function (res) {
          if (res.statusCode === 200) {
            that.setData({
              topics: res.data
            });
          }
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  }
})