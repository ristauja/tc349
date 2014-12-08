// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('#my-div').html('<img src="http://i.imgur.com/90Mmdcm.png">')
$('#my-div img').hover( function() {
  this.src = 'http://i.imgur.com/nTj3Fxx.gif'
}, function() {
  this.src = 'http://i.imgur.com/90Mmdcm.png'
})
$('#my-div img').mousedown( function() {
  this.src = 'http://i.imgur.com/Rfj0a80.png'
})
$('#my-div img').mousedown(function() {
  $('.demo-hadouken').remove();
})
$('#my-div img').mousedown(function() {
  $('#my-div').append(
    '<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">'
  );
})
$('#my-div img').mousedown(function() {
  $('.demo-hadouken').animate( {
    "margin-left": "600px"
  }, 1000, 'swing', function() {
    this.remove();
  })
})
$('#my-div img').mouseup(function() {
  this.src = 'http://i.imgur.com/90Mmdcm.png'
})
