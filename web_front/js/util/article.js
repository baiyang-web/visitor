// 把所有与文章相关的操作写在这里

var article = {

 //获取主页中的数据
    getFouce: () =>  $.get(APILIST.article_get,{perpage:5}),

 // 获取排行信息
    getRank: (type) => $.get(APILIST. article_rank,{type}),

 // 获取最新文章
   getLast: () => $.get(APILIST. article_last),

 // 用来获取文章列表数据
  getList:(type,page) => $.get(APILIST.article_get,{type,page}),

  // 获取文章详情
  getDetail: (id) => $.get(APILIST.article_detail,{id})
  
}