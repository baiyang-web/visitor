var comment = {
    // 给文章添加评论 
    add:  (name,content,article_id) => $.post(APILIST.comment_add,{name,content,article_id}),

    // 获取文章评论
    get: (id) => $.get(APILIST.comment_get, { 'article_id': id})
    
}