var DES = require('../../../utils/DES.js');
var base64 = require('../../../utils/base64.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    crptoText: '',
    height: 20,
    focus: false,
    password: ''
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
        console.log('paste:' + res.data);
        this.setData({ crptoText: res.data });
      }
    })
  },
  bindTextBlur: function (e) {
    console.log(e.detail.value);
    this.setData({ crptoText: e.detail.value });
  },
  bindPasswordBlur: function (e) {
    console.log(e.detail.value);
    this.setData({ password: e.detail.value });
  },
  encryptoMose: function () {
    var str = this.data.crptoText;
    var strArr = str.split('');
    var encryptoStr = '';
    strArr.forEach((value, index) => {
      encryptoStr += value.charCodeAt().toString(2);
      if (index != this.lenth - 1) {
        encryptoStr += ' ';
      }
    });
    this.setData({
      crptoText: encryptoStr.replace(/1/g, '-').replace(/0/g, '.')
    })
  },
  decryptoMose: function () {
    var strArr = this.data.crptoText.replace(/\-/g, '1').replace(/\./g, '0').split(' ');
    var decryptoStr = '';
    console.log(strArr);
    strArr.forEach((value, index) => {
      if (value != '') {
        decryptoStr += String.fromCharCode(parseInt(value, 2));
      }
    });
    console.log(decryptoStr);
    this.setData({
      crptoText: decryptoStr
    })
  },
  encryptoPassword: function () {
    if (this.data.crptoText == '' || this.data.password == '') {
      this.emptyEnter();
      return;
    }
    var en = DES.DESEncrypto(this.data.crptoText, this.data.password);
    en = base64.btoa(en);
    this.setData({
      crptoText: en
    })
  },
  decryptoPassword: function () {
    if (this.data.crptoText == '' || this.data.password == '') {
      this.emptyEnter();
      return;
    }
    var en = base64.atob(this.data.crptoText);
    en = DES.DESDecrypto(en, this.data.password);
    console.log(this.data.crptoText, this.data.password,en);
    this.setData({
      crptoText: en
    })
  },
  emptyEnter: function () {
    wx.showModal({
      title:'提示',
      content: '密码或内容为空',
      showCancel: false
    })
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