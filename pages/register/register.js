// pages/login/login.js
const app = getApp()
var http = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    password:""
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
  register(){
    http.post("/users/register",{name:this.data.name,password:parseInt(this.data.password)}).then(res=>{
     wx.navigateBack({
       complete: (res) => {
        delta:1
       },
     })
    })
  },
  setInputVal(e) {
    app.pulicSetData(e, this)
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