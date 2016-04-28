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
    $('.edit-rec').on('click',function(){
        $('#recipe-edit').val($(this).data('recipe'));
        $('#ing-edit').val($(this).data('ing'));
        $('#dir-edit').val($(this).data('dir'));
        $('#id-edit').val($(this).data('id'));
    })

})
