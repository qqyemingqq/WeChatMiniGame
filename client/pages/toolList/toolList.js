// pages/toolList/toolList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tool1:{
      sort:'1',
      name:'聊天文本加密',
      icon:'../../res/item-cryptoChat.png',
      url:'../tools/cryptoChat/cryptoChat'
    },
    tool2: {
      sort: '2',
      name: '麻将计分器',
      icon:'../../res/item-calc.png',
      url: '../tools/majongCalc/majongCalc'
    },
    tool3: {
      sort: '3',
      icon:'../../res/item-develop.png',
      name: '以后添加',
      url: ''
    }
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