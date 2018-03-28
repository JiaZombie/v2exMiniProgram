// pages/news/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    topic: {},
    replies: [],
    replyPage: 0,
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
          if (util.isNeedParse(self.data.topic.content_rendered)) {
            // 解析html内容
            WxParse.wxParse('content', 'html', self.data.topic.content_rendered, self, 5);
          }
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
    this.getReplies();
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.replies.length < this.data.topic.replies) {
      0 === this.data.replyPage ? this.data.replyPage = 2 : this.data.replyPage++;
      this.getReplies();
    }
  },
 getReplies: function() {
   var self = this;
   var url = 'https://www.v2ex.com/api/replies/show.json?topic_id=' + self.data.topicId + '&page=' + self.data.replyPage;
   // 请求指定主题的评论
   wx.request({
     url: url,
     success: function (res) {
       if (!res.data.rate_limit) {
         self.setData({
           replies: res.data
         });
         var replies = self.data.replies;
         // 解析html内容
         for (var i = 0; i < replies.length; i++) {
           if (util.isNeedParse(replies[i].content_rendered)) {
             WxParse.wxParse('reply' + i, 'html', replies[i].content_rendered, self, 5);
           }
           if (i === replies.length - 1) {
             util.utilParseTemArray('parsedReplies', 'reply', replies.length, self);
           }
         }
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
})