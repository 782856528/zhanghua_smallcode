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
  login(){
    http.post("/users/login",{name:this.data.name,password:parseInt(this.data.password)}).then(res=>{
     wx.setStorageSync('token', res.data.token)
     wx.switchTab({
       url: '../index/index',
     })
    })
  },
  setInputVal(e) {
    app.pulicSetData(e, this)
  },
// 跳转注册页面
tozhuce(){

  wx.navigateTo({
    url: '/pages/register/register',
  })
},




 
})