// pages/course/buyCourse/buyCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // vip卡信息
    vipCardInfo: [{
      url: "/img/vipcard1.png"
    }, {
      url: "/img/vipcard2.png"
    }],
    // vip 福利信息
    vipInfo: [{
      content: "享受所有VIP视频课程的观看权限"
    }, {
      content: "专属标志显示"
    }, {
      content: "专属课程推送"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appData = getApp();
    console.log(appData.globalData);
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