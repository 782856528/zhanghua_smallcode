// pages/order/order.js
var http = require("../../utils/request.js")
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getdata:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata()
  },
// 订单列表
getdata(){
  http.get("/order/orderList").then(res=>{
    this.setData({
      getdata:res.data
    })
  })
},
  // 删除订单
  delete(e){
    Dialog.confirm({
      title: '操作',
      message: '确定删除此订单吗？',
    })
      .then(() => {
        let arr=  e.currentTarget.dataset.data;
        http.post("/order/deleteorder",{id:arr._id}).then(res=>{
         this.getdata()
        })
      })
      .catch(() => {
        // on cancel
      });
  },
})