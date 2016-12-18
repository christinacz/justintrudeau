// Option 3: Replace IMGs that have Trump kewords with random Justin Trudeau image from this list DOESN'T WORK

// var justins = ['http://c5.staticflickr.com/9/8367/8495419492_3f5e7902d9_z.jpg', 
// 'http://c4.staticflickr.com/1/455/19432753795_234e50aa59_z.jpg', 
// 'http://c8.staticflickr.com/6/5702/20552314631_44218d3c88_z.jpg',
// 'http://c4.staticflickr.com/4/3809/14116241027_ff01c7f261_z.jpg',
// 'http://c7.staticflickr.com/8/7298/27806064590_983242139c_z.jpg',
// 'http://c5.staticflickr.com/2/1506/24853745364_f15ce79092_z.jpg',
// 'https://c6.staticflickr.com/1/83/245906621_98e9d09f06.jpg',
// 'https://c7.staticflickr.com/2/1474/25078165694_141e17aaf7.jpg'
// ];

// var pickJustin = function () {
//   var randomJustin = justins[Math.floor(Math.random()*8)];
//   return randomJustin;
// };


var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    $('img').each(function(i,e){
      var $e = $(e);
      var proto=document.location.protocol;
      if (('' + $e.attr('src') + $e.attr('alt') + $e.attr('title')).match(/trump||president-elect||djt||donaldtrump||devos||exxon||exxonmobile||tillerson||jeffsessions||sessions||steve_bannon||bannon/i)) {
        //OPTION 1: LoremFlickr: Replace IMG with random image pulled from loremflickr.com, with matched pixel dimensions, that have keword Trudeau (works but is slow)
        // $e.attr('src', proto+'//loremflickr.com/' + $e.width() + '/' + $e.height() + '/' + 'trudeau/')
        
        // Option 2: p-hold: Like Option 1 but maybe faster
        $e.attr('src', proto+'//p-hold.com/' + 'trudeau/' + $e.width() + '/' + $e.height() + '/')

        // 
        // OPTION 3: DOESN'T WORK
        // $e.attr('src', proto+ pickJustin)
        // 
        //  // // OPTION 4: Replaces IMG with this set Justin image - WORKS! but also replaces images indescriminately
        // $e.attr('src', proto+'//c4.staticflickr.com/1/455/19432753795_234e50aa59_z.jpg')
    	}
    });

  }
}, 10);
