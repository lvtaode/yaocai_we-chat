//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerUrls: [],
    hotUrls:[],
    imgList:[]
  },
  //事件处理函数
  onLoad: function () {
    wx.showLoading({
      title: '加载中...',
    })
    var that=this;
    var newArr=[];
        wx.request({
          url: 'http://yaocai.yxwlit.com/api.php/xcx/ad?cateId=1',
          method:'GET',
          success:function(res){
            console.log(res.data);
            for(let item of res.data.pics){
              newArr.push("http://yaocai.yxwlit.com/public/uploads/"+item.ad_pic);
            }
            that.setData({
              bannerUrls:res.data.pics
            })
            wx.request({
              url: 'http://yaocai.yxwlit.com/api.php/xcx/product?cateId=1&number=4',
              method: 'GET',
              success: function (res) {
                for (let item of res.data.pics) {
                  newArr.push("http://yaocai.yxwlit.com/public/uploads/" + item.pic);
                }
                that.setData({
                  hotUrls: res.data.pics
                })
                wx.request({
                  url: 'http://yaocai.yxwlit.com/api.php/xcx/product?cateId=2&number=4',
                  method: 'GET',
                  success: function (res) {
                    for (let item of res.data.pics) {
                      newArr.push("http://yaocai.yxwlit.com/public/uploads/" + item.pic);
                    }
                    that.setData({
                      recommendUrls: res.data.pics,
                      imgList:newArr
                    })
                    wx.hideLoading();
                  }
                })
              }
            });
          }
        });
  },
  proImg: function (e) {
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.dataset.img,// 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  },
  jump:function(){
    wx.switchTab({
      url: '/pages/product/list',
    })
  }
})
