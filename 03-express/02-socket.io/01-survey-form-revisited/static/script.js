$(document).ready(function() {
    console.log('connected');

    var socket = io.connect();

    $('#user').submit(function() {
        console.log('submit')
        var data = {
            name: $('#name').val(),
            location: $('#location').val(),
            language: $('#language').val(),
            comment: $('#comment').val()
        }
        $('#name').value = '';
        $('#comment').value = '';

        var emit_name = "posting_form";
        socket.emit(emit_name, data);
        console.log('Emission:', emit_name, data);
        return false;
    });
    socket.on("server_response", function(data) {
        var dojos = {
            'San Jose': 'San Jose',
            'Seattle': 'Seattle',
            'NYC': 'New York',
            'LAX': 'Los Angeles',
        }
        data.location = dojos[data.location];

        $('#results').removeClass('hidden');
        $('#message').html('You emitted the following information to the server: {' + data);
        console.log('The server says:', data)
    })

    socket.on("random_number", function(data) {
        $('#results').removeClass('hidden');
        console.log('Lucky:', data)
        $('#lucky_number').html('Your lucky number emitted by the server is ' + data);
    })

})