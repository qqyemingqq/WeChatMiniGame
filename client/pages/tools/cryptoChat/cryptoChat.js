// pages/tools/cryptoChat/cryptoChat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    crptoText: '',
    height: 20,
    focus: false
  },
  copy: function (e) {
    console.log(e);
    console.log(this);
    wx.setClipboardData({
      data: this.data.crptoText,
      success: (res) => {
        console.log(this.data.crptoText);
      }
    })
  },
  empty: function () {
    this.setData({ crptoText: '' });
    console.log('empty');
  },
  paste: function () {
    console.log('paste');
    wx.getClipboardData({
      success: (res) => {
        console.log('paste:'+res.data);
        this.setData({ crptoText: res.data });
      }
    })
  },
  bindTextBlur: function (e) {
    console.log(e.detail.value);
    this.setData({ crptoText: e.detail.value });
  },
  encryptoMose:function(){

  },
  decryptoMose:function(){

  },
  encryptoPassword:function(){

  },
  decryptoPassword:function(){

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

  }
})