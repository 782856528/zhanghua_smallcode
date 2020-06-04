// pages/mine/mine.js
var http = require("../../utils/request.js")
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenggeList:[],
    fenleiList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.getdata()
  },
  getdata(){
    http.post("/category/goodsList",{type:this.data.type}).then(res=>{
      this.setData({
        fenggeList:res.data[0].data,
        fenleiList:res.data[1].data
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 下单
  downorder(e){
    Dialog.confirm({
      title: '标题',
      message: '确认下单吗？',
    })
      .then(() => {
        let arr=  e.currentTarget.dataset.data;
        console.log(arr)
        http.post("/order/addorder",{name:arr.name,picurl:arr.picurl,price:arr.price}).then(res=>{
         
        })
      })
      .catch(() => {
        // on cancel
      });
  },





  
})