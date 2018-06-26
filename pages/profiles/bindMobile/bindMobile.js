Page({

  data: {
    // 是否发送了验证码标志位
    mainColor: "#FF547C",
    sendVCodeFlag: false,
    sendSecond: 60,
    info: "绑定手机号成功后赠送三天VIP会员使用时间",
    sendFlage: false,
    sendFlagTrueColor: "rgba(255,135,46,1)",
    sendFlagFalseColor: "rgba(255,156,84,1)",
    // 验证码
    verifyCode: ""
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
    // 页面显示随机生成一个验证码，防止第一次不声明验证码,做验证的时候 验证码的值是undefined  文本框的值是""  ==  成立
    this.setData({
      verifyCode: this.getVCode()
    })
  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },
  // 随机生成验证码
  getVCode: function () {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var codeArr = [];
    for (var i = 0; i <= 3; i++) {
      // 获取随机的索引
      var index = Math.floor(Math.random() * arr.length);
      codeArr.push(index);
    }
    return codeArr.join("");
  },

  // 手机号验证
  phoneNumVerify: function (event) {
    console.log(event);
    // 正则匹配手机号
    var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    // 获取输入的手机号
    var phone = event.detail.value;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: "请输入正确的手机号",
        icon: 'none',
        duration: 1500,
        mask: false,
      });
      this.setData({
        phoneVerifyFlag: false
      })
      return;
    }
    this.setData({
      phoneVerifyFlag: true
    })
  },
  // 发送验证码
  senVCode: function (event) {
    // 手机号没验证通过不能发送验证码
    if (!this.data.phoneVerifyFlag) {
      wx.showToast({
        title: "请输入正确的手机号",
        icon: 'none',
        duration: 1500,
        mask: false,
      });
      return;
    }
    // 保存this
    var that = this;
    console.log(event);
    // 生成验证码
    this.setData({
      verifyCode: this.getVCode()
    })
    // 提示验证码
    wx.showToast({
      title: "验证码是" + that.data.verifyCode,
      icon: 'none',
      duration: 1500,
      mask: false,
    });
    // 改变验证码发送标志位
    this.setData({
      sendVCodeFlag: true
    })
    // 计时器每隔一秒改变距离下一次发送验证码的时间
    this.data.vCodeTimeId = setInterval(() => {
      console.log(that);
      if (that.data.sendSecond <= 1) {
        clearInterval(that.data.vCodeTimeId);
        // 改变验证码发送标志位
        that.setData({
          sendVCodeFlag: false
        })
        return;
      }
      that.setData({
        sendSecond: --that.data.sendSecond
      })
    }, 1000)
  },
  // 绑定验证
  sendVerify: function (event) {
    console.log(event);
    // 验证手机号跟验证码
    if (event.detail.value.vCode == this.data.verifyCode) {
      this.setData({
        verifySuccess: true
      })
    } else {
      this.setData({
        verifySuccess: false
      })
    }
    if (!this.data.verifySuccess) {
      // 显示验证码错误提示框
      wx.showToast({
        title: "验证码错误",
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    } else {
      // 绑定成功提示
      wx.showToast({
        title: "绑定成功",
        icon: 'success',
        duration: 1500,
        mask: false,
      });
    }
  }
});