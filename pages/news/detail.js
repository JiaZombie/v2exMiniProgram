// pages/news/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topic: {},
    replies: [],
    replyPage: 1,
    topicId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var app = getApp();

    this.data.topicId = options.id;

    app.loading();

    // 请求指定主题
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      header: {
        'cache-control': 'max-age=120'
      },
      success: function (res) {
        if (!res.data.rate_limit) {
          self.setData({
            topic: res.data[0]
          });
          // 解析md内容
          WxParse.wxParse('content', 'html', self.data.topic.content_rendered, self, 5);
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
    })
    // 请求指定主题的评论
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
      success: function (res) {
        if (!res.data.rate_limit) {
          self.setData({
            replies: res.data
          });
          var replies = self.data.replies;
          // 解析md内容
          for (var i = 0; i < replies.length; i++) {
            WxParse.wxParse('reply' + i, 'html', replies[i].content_rendered, self);
            if (i === replies.length - 1) {
              WxParse.wxParseTemArray("replyTemArray", 'reply', replies.length, self)
            }
          }
        }
      }
    });
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var self = this;
    if (self.data.replies.length < self.data.topic.replies) {
      self.data.replyPage++;
      // 请求指定主题的评论
      wx.request({
        url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + self.data.topicId + '&page=' + self.data.replyPage,
        success: function (res) {
          if (!res.data.rate_limit) {
            self.setData({
              replies: res.data
            });
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000
            })
          }
        }
      });
    }
  },

})