$(document).ready(function(){

    var currentAssignments = {};


    function getAssignments(){

        $.ajax({
            method: 'GET',
            url: '/assignments',
            dataType: 'json'
        }).done(function(data){
            if (data.length != currentAssignments.length){
                currentAssignments = data;
                $('.assignment').empty();
                var source = $('#assignmentList').html();
                var template = Handlebars.compile(source);
                $(".assignment").append(template(data));
            }
        }).fail(function(err){
            console.log(err);
        }).always(function(){
        })
    }
   var refresh =  setInterval(getAssignments, 5000);

    $('#addASSForm').on('submit',function(e) {
        e.preventDefault();
        var input1 = $(this).serializeArray()[0];
        var input2 = $(this).serializeArray()[1];
        var input3 = $(this).serializeArray()[2];
        var input4 = $(this).serializeArray()[3];
        var data = {assignment_name: input1.value, student_name: input2.value, score: input3.value, date_completed: input4.value };
        document.getElementById('addASSForm').reset();


$.ajax({
    method: 'POST',
    url: '/assignments',
    dataType: 'json',
    data: data
}).done(function(data){
    if (data.length != currentAssignments.length){
        currentAssignments = data;
        $('.assignment').empty();
        var source = $('#assignmentList').html();
        var template = Handlebars.compile(source);
        $(".assignment").append(template(data));
    }
}).fail(function(err){
    console.log(err);
}).always(function(){
});


    });
});