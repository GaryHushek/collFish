// 获取全局的app数据
var appData = getApp();
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择', '请选择', '请选择'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(appData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 选择地址
  bindRegionChange: function(event) {
    console.log(event);
    this.setData({
      region: event.detail.value
    })
  },
  // 数据提交时间
  doRegister: function(event) {
    // 保存用户注册信息
    var userInfo = event.detail.value
    console.log(event);
    // 开启loading
    wx.showLoading({
      // 标题
      title: "正在提交...",
      // 遮罩层
      mask: true,
      // 
      success: function(backData) {
        setTimeout(() => {
          wx.showToast({
            title: "登陆成功",
            icon: "success",
            duration: 1500,
            success: function(backData) {
              // 保存注册信息
              appData.globalData.userInfo = userInfo;
              // 去首页
              wx.switchTab({
                url: "/pages/index/index"
              });
            }
          })
        }, 1500)
      }
    })
  },
  // 
  test: function(event) {
    console.log(event);
  }
})