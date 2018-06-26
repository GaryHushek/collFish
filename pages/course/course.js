// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainColor: "#FF547C",
    pullColor: "#CACACA",
    courseInfo: [{
        url: "/img/lesson1.png",
        title: "创意DIY班",
        subTitle: "适宜2~3岁的宝宝",
        courseStatus: 1
      },
      {
        url: "/img/lesson2.png",
        title: "创意美术班",
        subTitle: "适合3~6岁的儿童",
        courseStatus: 0
      },
      {
        url: "/img/lesson3.png",
        title: "素描班",
        subTitle: "适合8岁以上的儿童",
        courseStatus: 1
      },
      {
        url: "/img/lesson4.png",
        title: "色彩班",
        subTitle: "适合6岁以上的儿童",
        courseStatus: 1
      },
      {
        url: "/img/lesson5.png",
        title: "速写班",
        subTitle: "适合6岁以上的儿童",
        courseStatus: 1
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 课程人数已满
  courseFull: function (event) {
    // console.log(event);
    // 弹出提示框提示课程已满
    wx.showToast({
      title: "本课程人数已满，请选择其他课程",
      icon: 'none',
      duration: 1500,
      mask: false,
    });
  },
  // 查看课程详细信息
  getCourseDetail: function (event) {
    console.log(event);
    // 去课程详细页面
    wx.navigateTo({
      url:"courseDetail/courseDetail?course="+event.currentTarget.dataset.courseName
    })
  }
})