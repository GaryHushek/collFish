Page({

  data: {
    // 轮播图数据预配置
    bannerImgUrls: [
      '/img/banner-01@2x.png',
      '/img/banner-02@2x.png',
      '/img/banner-03@2x.png'
    ],
    swiperOptions: {
      // 是否显示面板指示点
      indicatorDots: true,
      // 是否自动轮播
      autoplay: true,
      // 自动切换时间间隔
      interval: 5000,
      // 滑动动画时长
      duration: 1000,
      previousMargin: "30rpx",
      nextMargin: "30rpx",
      // 衔接轮播
      circular: true
    },
    // 热门课程数据
    hotLesson: [{
        bgc: "#4399F9",
        title: "创意DIY班",
        subTitle: "适合2~3岁的宝宝"
      },
      {
        bgc: "#8C43F9",
        title: "速写班",
        subTitle: "适合6岁以上的儿童/青少年"
      },
      {
        bgc: "#F94388",
        title: "国画班",
        subTitle: "适合6岁以上的儿童"
      },
      {
        bgc: "tomato",
        title: "创意DIY班",
        subTitle: "适合2~3岁的宝宝"
      }
    ],
    recommendVideo: [{
        url: "/img/indexvideo1.png",
        title: "非常可爱的布偶插画制作流程",
        seeCount: 5685
      },
      {
        url: "/img/indexvideo2.png",
        title: "非常可爱的布偶插画制作流程",
        seeCount: 5685
      },
      {
        url: "/img/indexvideo3.png",
        title: "非常可爱的布偶插画制作流程",
        seeCount: 5685
      },
      {
        url: "/img/indexvideo4.png",
        title: "非常可爱的布偶插画制作流程",
        seeCount: 5685
      }
    ]
  },

  onLoad: function(options) {},

  onReady: function() {

  },

  onShow: function() {},

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function() {

  }
});