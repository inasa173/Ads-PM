// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $.ajax({
//   type: 'GET',
//   url: 'https://iwb.jp/s/js/data.json'
  
// });


// $.getJSON(
//   'http://penta.a.one.impact-ad.jp/dd?oid=cb56af1cdaf1cbef&rft=k&jsonp=callback',
//   {},
//   function (json) {
//     // body...
//   }
//   )
// callback = function(jsonData){
// //   var hoge = function(data) {
// // alert("key1:" + data.key1);
// // alert("key2:" + data.key1);
// //   }
 
//   var script = document.createElement('script');
//   script.src = 'http://penta.a.one.impact-ad.jp/dd?oid=cb56af1cdaf1cbef&rft=k&jsonp=callback';
//   document.head.appendChild(script);
// };
// function ddCallback (callback)

// var element = document.createElement('script');
// element.forEach(function(element, index, array){

//     callback = function(array){
    
//     };
// });

// (function(){
//     // 'use strict':
    
//     var element = document.createElement('script');
//     element.src = 'http://penta.a.one.impact-ad.jp/dd?oid=cb56af1cdaf1cbef&rft=k&jsonp=callback';
//     document.body.appendChild(element);

//     // window.callback = function(segmentIds){
//     //     console.log(segmentIds);
//     // };
// }());
    
   
      var element =document.createElement('script');
      element.src = 'http://penta.a.one.impact-ad.jp/dd?oid=b25b43b24a9e171b&rft=k&jsonp=callback';
    //   document.body.appendChild(element);
        
      
var callback = function(data){

  var profile = data.aonesegments;
    
    var aone_demographic = profile.demographic;
    var aone_interest     = profile.interest;
    var aone_zipcode_home = profile.zipcode.home;
    var aone_zipcode_work = profile.zipcode.work;


      document.open();
  // demographic    
      document.write('<li class="demographic">');
      document.write("demographic");
       
        for (var i = 0; i < aone_demographic.length; i++){
           document.write('<ul class=demographic' +[i]+'>');
          // document.write(aone_demographic[i]);
          document.write('</ul>');
          };
        $(function(){
            var prism1Array = {"category": [ 
                      {"id":3675340613,"category_1":"子供（高校生）有無","category_2":"高校生いない"},
                      {"id":1327062654,"category_1":"性年齢","category_2":"男性：22~29歳"},
                      {"id":3420598002,"category_1":"未既婚","category_2":"未婚"},
                      {"id":3722116526,"category_1":"子供（未就学児）有無","category_2":"未就学児いない"},
                      {"id":3383005355,"category_1":"世帯年収","category_2":"300万未満"},
                      {"id":3633703723,"category_1":"子供（小学生）有無","category_2":"小学生いない"},
            ]};
            for(var index in prism1Array){
                $('<p>'+ prism1Array.category[0].id+' / ' +prism1Array.category[0].category_1+' / '+prism1Array.category[0].category_2+'</p>' ).appendTo('ul.demographic0');
                $('<p>'+ prism1Array.category[1].id+' / ' +prism1Array.category[1].category_1+' / '+prism1Array.category[1].category_2+'</p>' ).appendTo('ul.demographic1');
                $('<p>'+ prism1Array.category[2].id+' / ' +prism1Array.category[2].category_1+' / '+prism1Array.category[2].category_2+'</p>' ).appendTo('ul.demographic2');
                $('<p>'+ prism1Array.category[3].id+' / ' +prism1Array.category[3].category_1+' / '+prism1Array.category[3].category_2+'</p>' ).appendTo('ul.demographic3');
                $('<p>'+ prism1Array.category[4].id+' / ' +prism1Array.category[4].category_1+' / '+prism1Array.category[4].category_2+'</p>' ).appendTo('ul.demographic4');
                $('<p>'+ prism1Array.category[5].id+' / ' +prism1Array.category[5].category_1+' / '+prism1Array.category[5].category_2+'</p>' ).appendTo('ul.demographic5');
            };
        });  
        
      document.write('</li>');
      document.write('<br>');
      
  // interest
      document.write('<li class="interest">');
      document.write("interest");
        for (var i = 0; i < aone_interest.length; i++){
          document.write('<ul class=interest'+[i]+'>');
          // document.write( aone_interest[i] );
          document.write('</ul>');
           
            // var callbackFunk = function(array){
            //   var test = array.prism3Array;
            //   var category_1 = test.category_1;
            // console.log(category_1);
            // };
          // var callbackFunk = function(prism3Array){
          //   // var type_id = prism3Array.id;
          //   // var type_cate1 = prism3Array.category_1;
          //   // var type_cate2 = prism3Array.category_2;
          //   // console.log(type_id);
          //   // for (var j = 0; j < prism3Array.length; j++){
          //   //   document.write(type_cate1[j] + "<br>");
          //   // };
          //   console.log(callbackFunk);
          // };
        };
       $(function(){
            var prism3Array = {"category": [ 
                      {"id":3511973508,"category_1":"各種資料","category_2":""},
                      {"id":3475145692,"category_1":"各種資料","category_2":"知識探索(Q&A)"},
            ]};
            for(var index in prism3Array){
                $('<p>'+ prism3Array.category[0].id+' / ' +prism3Array.category[0].category_1+' / '+prism3Array.category[0].category_2+'</p>' ).appendTo('ul.interest0');
                $('<p>'+ prism3Array.category[1].id+' / '+prism3Array.category[1].category_1+' / '+prism3Array.category[1].category_2+'</p>' ).appendTo('ul.interest1');
            };
        });
      document.write('</li>');
     document.write('<br>');
      
     // aone_zipcode_home
      document.write('<li>');
      document.write("居住地");
        document.write('<ul>');
        if (aone_zipcode_home == null ){
          document.write("該当なし");
        }else{
        for (var i = 0; i < aone_zipcode_home.length; i++){
          document.write(aone_zipcode_home[i]+"<br>");
          };
        };
        document.write('</ul>'+"<br>");
      document.write('</li>');
      document.write('<br>');
      
      
     //aone_zipcode_work
      document.write('<li>');
      document.write("勤務地");
        document.write('<ul>');
        for (var i = 0; i < aone_zipcode_work.length; i++){
          document.write(aone_zipcode_work[i]+"<br>");
          };
        document.write('</ul>'+"<br>");
      document.write('</li>');
      
      document.close();
};
