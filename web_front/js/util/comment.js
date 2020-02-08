var comment = {
    // 给文章添加评论 
    add:  (name,content,article_id) => $.post(APILIST.comment_add,{name,content,article_id}),

}