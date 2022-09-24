// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Hei: '2590rpx',
    isshow1: false,
    isshow2: false,
    navh: 0,
    descshow: false
  },
  // 点击下拉显示框
  openNav() {
    // 这里要注意 if 判断的时候里面的条件 获取 data 中的数据是 this.data.XXXX
    if (!this.data.descshow) {
      this.setData({
        navh: '754rpx',
        descshow: true
      })
    } else {
      this.setData({
        navh: 0,
        descshow: false
      })
    }
  },
  // 点击回到顶部
  goTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 1000
    })
  },
  // 点击 UI 出现蒙层
  openDetailUI() {
    this.setData({
      isshow1: !this.setData.isshow1,
    })
  },
  // 点击打开H5
  openDetailH() {
    this.setData({
      isshow2: !this.setData.isshow2,
    })
  },
  // 点击以外的区域关闭
  maskEvent1() {
    this.setData({
      isshow1: !this.data.isshow1,
    })
  },
  maskEvent2() {
    this.setData({
      isshow2: !this.data.isshow2,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})