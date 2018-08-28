// pages/personal/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerUrls:'',
      envUrls:'',
      imgList:[]
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
      url: 'http://yaocai.yxwlit.com/api.php/xcx/ad?cateId=2',
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        var tar =res.data.pics;
        var newArr1=[];
        for(var item of tar){
          newArr1.push("http://yaocai.yxwlit.com/public/uploads/" + item.ad_pic)
        }
        that.setData({
          bannerUrls: res.data.pics,
          imgList:newArr1
        })
        wx.request({
          url: 'http://yaocai.yxwlit.com/api.php/xcx/ad?cateId=3',
          method: 'GET',
          success: function (res) {
            console.log(res.data);
            var tar1 = res.data.pics;
            var newArr2 = that.data.imgList;
            for (var item of tar1) {
              newArr2.push("http://yaocai.yxwlit.com/public/uploads/" + item.ad_pic)
            }
            that.setData({
              envUrls: res.data.pics,
              imgList: newArr2
            })
            wx.hideLoading();
          }
        });
      }
    });   
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
    wx.previewImage({
      current: e.currentTarget.dataset.img,// 当前显示图片的http链接
      urls:this.data.imgList // 需要预览的图片http链接列表
    })
  },
  calla:function(){
    wx.makePhoneCall({
      phoneNumber: '18309266727',
    })
  },
  callb: function () {
    wx.makePhoneCall({
      phoneNumber: '15309242693',
    })
  }
})