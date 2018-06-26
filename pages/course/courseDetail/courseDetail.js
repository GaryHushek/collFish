var sliderWidth = 61; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radomIndex: 0,
    // 非vip视屏体验时长
    normalUserWathcTime: 5,
    // 是否显示视屏控件
    controls: true,
    videoInfo: [{
        url: "https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },
      {
        url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },
      {
        url: "https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },
      {
        url: "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },
      {
        url: "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },
      {
        url: "https://nie.v.netease.com/nie/2017/1109/5ca2bb0e5979eec17d6ef183cc9256ddqt.mp4",
        autoplay: true,
        controls: true,
        title: "创意DIY班视频演示",
        teacher: "王老师",
        courseTime: 12,
        learnPersonNum: 56897
      },

    ],
    tabs: ["目录", "详情", "评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    listInfo: [{
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
      },
      {
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
      },
      {
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
      },
      {
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
      },
      {
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
      },
      {
        index: '01',
        info: "橡皮泥的介绍",
        time: "05:00",
        url: "https://nie.v.netease.com/nie/2017/1109/5ca2bb0e5979eec17d6ef183cc9256ddqt.mp4",
      },
    ],
    // 评价信息
    commentInfo: [{
        headPic: "/img/@2x.png",
        author: "王妈妈",
        content: "课程内容很棒，孩子非常喜欢！"
      },
      {
        headPic: "/img/@2x.png",
        author: "赵妈妈",
        content: "课程内容很棒，孩子非常喜欢！"
      },
      {
        headPic: "/img/@2x.png",
        author: "张妈妈",
        content: "课程内容很棒，孩子非常喜欢！"
      }, {
        headPic: "/img/@2x.png",
        author: "李妈妈",
        content: "课程内容很棒，孩子非常喜欢！"
      },
      {
        headPic: "/img/@2x.png",
        author: "刘妈妈",
        content: "课程内容很棒，孩子非常喜欢！"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options);
    // 随机生成index 来随机获取不同的视频
    this.setData({
      // radomIndex: Math.floor(Math.random() * this.data.videoInfo.length)
      radomIndex: 2
    })
    console.log(this.data.radomIndex);
    // 根据上个页面传来的课程名动态生成本页面的title
    wx.setNavigationBarTitle({
      title: options.course + "视屏演示"
    })
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 创建video实例化对象  ， 并绑定页面的video标签  id
    this.videoContext = wx.createVideoContext('myVideo');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("视屏播放");
    // 视屏播放
    if (this.data.controls) {
      this.videoContext.play();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("视屏暂停");
    // 暂停视屏
    this.videoContext.pause();
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
  // weui的tab栏点击切换
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 弹出modal框
  openConfirm: function() {
    // 保存this
    var that = this;
    // 暂停视屏
    this.videoContext.pause();
    wx.showModal({
      title: '',
      content: '购买此课程',
      confirmText: "立即购买",
      cancelText: "下次再说",
      cancelColor: "#C0C0C0",
      confirmColor: "#00C200",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
          // 调到购买页面
          wx.navigateTo({
            url: '/pages/course/buyCourse/buyCourse',
          })
        } else {
          console.log('用户点击辅助操作')
          // 视屏播放
          if (that.data.controls) {
            that.videoContext.play();
          }
        }
      }
    });
  },
  // 点击动态改变视屏URL
  changeUrl: function(event) {
    // console.log(event);
    this.setData({
      radomIndex: event.currentTarget.dataset.index
    })
  },
  // 控制播放
  controlPlay: function(event) {
    console.log(event);
    if (event.detail.currentTime >= this.data.normalUserWathcTime) {
      console.log("请购买课程！");
      // 暂停视屏
      this.videoContext.pause();
      // 视屏控件隐藏
      this.setData({
        controls: false
      })
      // 视屏播放时间回到0
      this.videoContext.seek(0);
      // 保存this
      var that = this;
      // 暂停视屏
      console.log(this.videoContext);
      this.videoContext.pause();
      wx.showModal({
        title: '',
        content: '试看已结束，如需继续观看， 请购买此课程',
        confirmText: "立即购买",
        cancelText: "下次再说",
        cancelColor: "#C0C0C0",
        confirmColor: "#00C200",
        success: function(res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击主操作')
            // 调到购买页面
            wx.navigateTo({
              url: '/pages/course/buyCourse/buyCourse',
            })
          } else {
            console.log('用户点击辅助操作')
            // 视屏播放
            if (that.data.controls) {
              that.videoContext.play();
            }
          }
        }
      });
    }
  }
})