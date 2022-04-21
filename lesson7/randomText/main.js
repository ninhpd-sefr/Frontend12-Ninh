$(document).ready(function  () {
    function random(){
        var quotes = new Array("foo", "bar", "baz", "chuck"),
        randno = quotes[Math.floor( Math.random() * quotes.length )];
        $('.quote').text( randno );
    }
0
    setInterval(random,200)
});

