// pages/nodes/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    node: {},
    topics: [],
    nodeId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNodeInfo(options.node_id);
    this.getNodeTopics(options.node_id);
    this.setData({
      nodeId: options.node_id
    });
  },

/**
 * 下拉刷新
 */
  onPullDownRefresh: function () {
    this.onLoad({ node_id: this.data.nodeId });
  },

  /**
 * 请求会员基本信息
 */
  getNodeInfo: function (nodeId) {
    var that = this;
    var app = getApp();

    try {
      app.loading();

      wx.request({
        url: "https://www.v2ex.com/api/nodes/show.json?id=" + nodeId,
        success: function (res) {
          if (res.statusCode === 200) {
            that.setData({
              node: res.data
            });
            wx.setNavigationBarTitle({
              title: that.data.node.title
            })
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
          wx.stopPullDownRefresh()
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  },
  /**
   * 请求会员发表的主题
   */
  getNodeTopics: function (nodeId) {
    var that = this;
    var app = getApp();

    try {
      wx.request({
        url: "https://www.v2ex.com/api/topics/show.json?node_id=" + nodeId,
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