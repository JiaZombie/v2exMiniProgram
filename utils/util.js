/**
 * 格式化时间 YYYY/MM/DD HH:II:SS
 */
function formatTime(date) {
  date = typeof date === 'object' ? date : (new Date(date))

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 格式化时间日期数据
 */
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 跳转页面
function redirect(url) {
  wx.navigateTo({
    url: url,
  })
}

/**
 * html是否需要解析
 */
function isNeedParse(html) {
  return html.indexOf('<a') !== -1 ||
    html.indexOf('<img') !== -1 ||
    html.indexOf('://') !== -1 ||
    html.indexOf('<blockquote') !== -1 ||
    html.indexOf('<code') !== -1;
}

/**
 * 解析离散的回复
 */
function utilParseTemArray(temArrayName, bindNameReg, total, that) {
  var array = [];
  var temData = that.data;
  var obj = null;

  for (var i = 0; i < total; i++) {
    if (temData[bindNameReg + i]) {
      var simArr = temData[bindNameReg + i].nodes;
      array[i] = simArr;
    }
  }
  
  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"' + temArrayName + '":""}');
  obj[temArrayName] = array;

  that.setData(obj);
}

module.exports = {
  formatTime: formatTime,
  redirect: redirect,
  isNeedParse: isNeedParse,
  utilParseTemArray: utilParseTemArray
}
