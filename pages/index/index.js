//获取应用实例
var app = getApp();

var config = {
    data: {
        errorMsg: '',
        themeList: []
    },

    onLoad: function() {
        var that = this;
        wx.request({
          url: "https://www.v2ex.com/api/topics/hot.json",
          success: function(res) {
            if (res.statusCode === 200) {
              that.data.themeList = res.data;
            } else {
              that.data.errorMsg = res.errMsg;
            }
          }
        });
    },
    onReady: function() {
        // 页面渲染完毕
      var that = this;
      console.log(that.data);
    }
};
Page(config);