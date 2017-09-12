var hash = md5("1196673f4d8e9d2f761a2da193f775c34e97cb1448818af6b04fa0d0f2541f055410064a9"); //599fb6c9e1715ff549cda8e5bcd040e7
var pubKey = "8818af6b04fa0d0f2541f055410064a9";

$("#btngr").click(function(){
    location.reload();
});

$(".btn").click(function(){
    var buttonContent = $(this).html();
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=' + buttonContent + '&ts=1&apikey=' + pubKey + '&hash=' + hash,
        success: function(data) {
            console.log(data);
            var html = "";
            var length = data.data.results.length;
            for (var i = 0; i < length;i++) {
                html += $('.table').append('<tr>'+'<td class="text-center">'+data.data.results[i].id+'</td>'+'<td class="text-center align-center"><img class="thumbnail" src="'+data.data.results[i].thumbnail.path+'.'+data.data.results[i].thumbnail.extension+'"/></td><td class="text-center">'+data.data.results[i].name+'</td></tr>');
            }
        },
        error: function() {
            console.log('Nope');
        }
    })
});