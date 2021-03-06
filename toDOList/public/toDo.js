var todoTemplate = Handlebars.compile(`
        {{#each toDo}}
        <div class="toDo">
            <span class="input"><textarea data-id="{{ @index }}">{{ this }}</textarea></span>

            <button class="remove btn btn-xs" data-id="{{ @index }}"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
        {{/each}}
`);

function reloadList(todo){
    //reference index.handlebars each toDo
    //pass parameter to template
    $('#toDo').html(todoTemplate({toDo: todo}));
}

function beginSaving(target){
    //set the value of properties
    //disabled -> Indicates whether the element is disabled or not.  it does not respond to user actions, it cannot be focused, and the command event will not fire.
    $(target).prop('disabled', true);
    $('.saving').show();
}

function endSaving(target){
    $(target).prop('disabled', false);
    $('.saving').hide();
}


$(function(){
    $('#add').submit(function(e){
        e.preventDefault();
        var val = $('textarea[name=toDo]').val()
        // console.log(val)
        if(val===''){
            return;
        }
        $('textarea[name=toDo]').val('');
        //axios allow automatic transformations to convert the respon to JSON data (val = > data)
        axios.post('/api/todo/',{
            todo: val
        }).then(function(res){
            //updated todo list array (this.todo.toDoList)
            reloadList(res.data)
        })
    })
    //.on( events [, selector ] [, data ], handler )
    $('#toDo').on('click', '.remove', function(evt){
        //<button> element
        beginSaving(evt.currentTarget);
        //use /api/todo/:id to pass index to toDoRouter then toDoService.remove(req.params.id)
        axios.delete('/api/todo/'+ $(evt.currentTarget).data('id'))
        .then(function(res){
            endSaving(evt.currentTarget);
            //array after removed
            reloadList(res.data.toDoList)
            // console.log(res.data)
        }).catch(function(e) {
            endSaving(evt.currentTarget);
            alert(e);
        });
    })
})

