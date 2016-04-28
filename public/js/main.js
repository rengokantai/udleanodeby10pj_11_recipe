/**
 * Created by Hernan Y.Ke on 2016/4/28.
 */
$(function(){
    $('.delete-rec').on('click',function(){
        var id = $(this).data('id');
        var url = '/delete/'+id;
        if(confirm('del?')){
            $.ajax({
                url:url,
                type:'DELETE',
                success:function(res){
                    window.location.href='/'
                },
                error:function(err){

                }
            })
        }
    })
})
