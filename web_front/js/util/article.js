// 把所有与文章相关的操作写在这里

var article = {

 //获取主页中的数据
    getFouce:function () {
        return $.get(APILIST.article_get,{perpage:5})
    },

 // 获取排行信息
    getRank:function (type) {
        return $.get(APILIST. article_rank,{"type":type})
    },

 // 获取最新文章
   getLast:function () {
    return $.get(APILIST. article_last)
   },

 // 用来获取文章列表数据
  getList:function(type,page) {
  return $.get(APILIST.article_get,{'type':type,'page':page})
  },

  
}