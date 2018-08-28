// pages/product/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      productList:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
      wx.request({
        url: 'http://yaocai.yxwlit.com/api.php/xcx/product',
        method: 'GET',
        success: function (res) {
          var tar=res.data.pics;
          var imgList=[];
          for(var item of tar){
            imgList.push("http://yaocai.yxwlit.com/public/uploads/"+item.pic);
          }
          console.log(imgList);
          that.setData({
            productList: res.data.pics,
            imgList:imgList
          })
          wx.hideLoading();
        }
      })
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
  
  },
      proImg: function (e) {
        console.log(e);
        wx.previewImage({
          current: e.currentTarget.dataset.img,// 当前显示图片的http链接
          urls: this.data.imgList // 需要预览的图片http链接列表
        })
      }
})