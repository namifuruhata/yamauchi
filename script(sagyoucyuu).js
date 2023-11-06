  let totalpoint = 0;
​
    const yamauchiquesion = [
    {quesion: "G'sの課題終わった？？", response1: "終わった", response2: "終わってない", response3: "キレる" },
    {quesion: "プログラミング言語どれが好き？", response1: "HTML", response2: "CSS", response3: "JavaScript" },
    {quesion: "ちょっと聞いてもいい？", response1: "もちろん", response2: "ごめんなさい", response3: "30分後なら大丈夫" }
  ];
​
    const kadaianswer = [
      {quesion: "どれくらい時間かかった？", response1: "10時間以下", response2: "20時間以下", response3: "すごいいっぱい" },
      {quesion: "何してたの？", response1: "仕事", response2: "寝てた", response3: "遊んでた" },
      {quesion: "どうしたの？", response1: "いやなことがあった", response2: "悔しかった", response3: "何でもない" }
    ];
    
    const timeanswer = [{talk: "頑張ったね", point: 10},
      {talk: "すごいね", point: 20}, {talk: "アメージング", point: 30}];
​
    function yamauchi(array) {
      const i = randomnumber = Math.floor(Math.random() * array.length);
      $("#talk").text(array[i].quesion);
      $("#button1").text(array[i].response1);
      $("#button2").text(array[i].response2);
      $("#button3").text(array[i].response3);
      array = array.splice(0, i);
    }
​
    function tennkai(array, i) {
      $("#talk").text(array[i].quesion);
      $("#button1").text(array[i].response1);
      $("#button2").text(array[i].response2);
      $("#button3").text(array[i].response3);
    }
​
    function pointget(array, i) {
      $("#talk").text(array[i].talk);
      return array[i].point;
    }
​
    yamauchi(yamauchiquesion);
    console.log(yamauchiquesion);
    
    $("#button4").hide();
    $("#button1").on("click", function () {
      const str = $("#button1").text();
      if (str === "終わった") {
        tennkai(kadaianswer, 0);
      } else if (str === "10時間以下") {
        $(".button").hide();
        $("#button4").show();
        totalpoint = totalpoint + pointget(timeanswer, 0);
      }
      console.log(totalpoint);
    });
    
    $("#button4").on("click", function () {
      $(".button").show();
      $("#button4").hide();
      yamauchi(yamauchiquesion);
    });
 
 
 

 
 
 
 
 //山内さんからの質問と私の回答
$('#talk').on('click', function () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        $('#yamauchi_talk').text("G'sの課題終わった？");
        $('#response1').text('終わっていない');
        $('#response2').text('終わった');
        $('#response3').text('キレる');
        $("#default_image").attr("src", "images/10.png");
    } else if (randomNumber === 1) {
        $('#yamauchi_talk').text('今日は何するの？');
        $('#response1').text('朝から夜まで飲み歩く');
        $('#response2').text('仕事');
        $('#response3').text("G'sの課題をやる");
        $("#default_image").attr("src", "images/10.png");
    } else if (randomNumber === 2) {
        $('#yamauchi_talk').text('何か用？');
        $('#response1').text('今日の私の運勢を教えて！');
        $('#response2').text('今日朝ご飯何食べた？');
        $('#response3').text('今日の山内さんの調子はどう？');
        $("#default_image").attr("src", "images/10.png");
    }



    

//     //--------------------G'sの課題終わった？-------------------------
//     //------終わっていない
    
//     //今まで何してたの？

//     // $('#response1').off('click');          
//      // G'sの課題終わった？のレスポンスの処理
//     $("#response1").off("click").on("click", function () {
//         // クリックされたボタンのテキストを取得
//         const response1button = $(this).text();

//         // もし山内のトークが特定のテキストだった場合の処理
//         if ($('#yamauchi_talk').text() === "G'sの課題終わった？" && response1button === "終わっていない") {
//             const owattenaiResponses = owattenaiRandomText();
//             $('#yamauchi_talk').text(owattenaiResponses.yamauchi_response);
//             $('#response1').text(owattenaiResponses.response_1);
//             $('#response2').text(owattenaiResponses.response_2);
//             $('#response3').text(owattenaiResponses.response_3);
//             $("#default_image").attr("src", owattenaiResponses.image_path);

//             // 古いIDのイベントをunbindして、IDを変更
//             $(this).off('click').attr('id', 'response4');
//         }




//     // 以下のイベント委譲を使って、動的に追加される要素に対応
//     $(document).on("click", "#response4", function () {
//         if ($('#yamauchi_talk').text() === "今まで何してたの？") {
//             const response = imamadenanishitetanoRandomText();
//             $('#yamauchi_talk').text(response.yamauchi_response);
//             $('#default_image').attr('src', response.image_path);
//             // increaseGauge(response.increase); // increaseGaugeがどこで定義されているか不明です
//         }

//                 function owattenaiRandomText() {
//                     const responses = [
//                         {
//                             "yamauchi_response": "今まで何してたの？",
//                             "response_1": "仕事",
//                             "response_2": "寝てた",
//                             "response_3": "遊んでた",
//                             "image_path": "images/3.png"
//                         }
//                     ];
//                     const randomNumber = Math.floor(Math.random() * responses.length);
//                     return responses[randomNumber];
//                 }


//                 function imamadenanishitetanoRandomText() {
//                     const responses = [
//                         {
//                             "yamauchi_response": "偉いね",
//                             "image_path": "images/8.png"
//                         }
//                     ];

//                     return responses[0];
//                 }


// });
//             // $('#response1').on('click', function () {
                
//             //     const response = imamadenanishitetanoRandomText();
        
//             //     $('#yamauchi_talk').text(response.text);
//             //     $('#default_image').attr('src', response.img);
//             //     increaseGauge(response.increase);
//             // })
                    
//             // $('#response2').on('click', function () {
                
//             //     const response = imamadenanishitetanoRandomText();
        
//             //     $('#yamauchi_talk').text(response.text);
//             //     $('#default_image').attr('src', response.img);
//             //     increaseGauge(response.increase);
                    
//             // })
//             // $('#response3').on('click', function () {
                
//             //     const response = imamadenanishitetanoRandomText();
        
//             //     $('#yamauchi_talk').text(response.text);
//             //     $('#default_image').attr('src', response.img);
//             //     increaseGauge(response.increase);
//             // })
                 
            

//             // else if ($(this).text() === '仕事') {
//             //                 const response = imamadenanishitetanoRandomText();
        
//             //                 $('#yamauchi_talk').text(response.text);
//             //                 $('#default_image').attr('src', response.img);
//             //                 increaseGauge(response.increase);
//             //             }
                 
//             // else if ($('#yamauchi_talk').text() === "今まで何してたの？" && response1button=== "仕事") {
//             //     const imamadenanishitetanoResponses = imamadenanishitetanoRandomText();
//             //     console.log(imamadenanishitetanoResponses.yamauchi_response)
//             //     $('#yamauchi_talk').text(imamadenanishitetanoResponses.yamauchi_response);
//             //     $("#default_image").attr("src", imamadenanishitetanoResponses.image_path);
//             //     console.log($(this).text())


//             // }               

           
//             //  $('#response1').on('click', function() {
//             //     if ($(this).text() === '仕事') {
//             //         const response = imamadenanishitetanoRandomText();
        
//             //         $('#yamauchi_talk').text(response.text);
//             //         $('#default_image').attr('src', response.img);
//             //         increaseGauge(response.increase);
//             //     }
//             // });


        

        
    
//         //--------終わった
//         function owattaRandomText() {
//             const responses = [
//                 { text: '頑張ったね！！偉すぎるので100,000円あげます！！', img: 'images/8.png', increase: 10 },
//                 { text: '凄すぎで距離を感じる・・・', img: 'images/13.png', increase: 10 },
//                 { text: '僕の課題を手伝って欲しいです・・・', img: 'images/7.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         // $('#response2').off('click');     
//         $('#response2').on('click', function () {
//             if ($(this).text() === '終わった') {
//                 const response = owattaRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
    
        
//         //--------キレる
//         function mushiRandomText() {
//             const responses = [
//                 { text: 'もしかして、終わってないの？人に当たらないでよ', img: 'images/9.png', increase: 10 },
//                 { text: 'は？お前がもし詰んでも、二度と助けないから', img: 'images/11.png', increase: 10 },
//                 { text: 'つらいのは自分だけじゃないんだよ・・・？', img: 'images/12.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         //  $('#response3').off('click');    
//         $('#response3').on('click', function () {
//             if ($(this).text() === 'キレる') {
//                 const response = mushiRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
    
    
 

    
//         //--------------------今日は何するの？-------------------------
//         //朝から夜まで飲み歩く
//         function nomiarukuRandomText() {
//             const responses = [
//                 { text: '飲みにいくなら、オールナイトに申請して一緒に課題やらない？', img: 'images/7.png', increase: 10 },
//                 { text: 'は？課題提出前なのに？', img: 'images/5.png', increase: 20 },
//                 { text: '課題終わってから一緒に飲もうよ〜・・・', img: 'images/2.png', increase: -10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         //  $('#response1').off('click');    
//         $('#response1').on('click', function () {
    
              
//         });
    
//         //仕事
//         function jobRandomText() {
//             const responses = [
//                 { text: '仕事もして勉強もして偉いね！！', img: 'images/8.png', increase: 10 },
//                 { text: '仕事終わったら一緒に課題やろう？', img: 'images/3.png', increase: 10 },
//                 { text: '僕は休みだから16時間コード書くよ', img: 'images/6.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         //  $('#response2').off('click');    
//         $('#response2').on('click', function () {
//             if ($(this).text() === '仕事') {
//                 const response = jobRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
    
        
//         //G'sの課題をやる
//         function kadaiRandomText() {
//             const responses = [
//                 { text: 'わからないときはSlackで聞いてね！', img: 'images/8.png', increase: 10 },
//                 { text: '一緒にgatherでやる？', img: 'images/6.png', increase: 10 },
//                 { text: 'サイレント詰みは重罪だよ・・・？', img: 'images/4.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         // $('#response3').off('click');    
//         $('#response3').on('click', function () {
//             if ($(this).text() === "G'sの課題をやる") {
//                 const response = kadaiRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
    
    
//         //--------------------何か用？-------------------------
//         //今日の私の運勢を教えて！
//         function unnseiRandomText() {
//             const responses = [
//                 { text: '今日の運勢は最高！特に、勉強運がいいみたい。ラッキーアイテムはPCだよ。', img: 'images/8.png', increase: 10 },
//                 { text: '今日は最悪だね・・・外に出ないで家でもくもくするのがよさそう。', img: 'images/12.png', increase: 20 },
//                 { text: 'まあまあかな。プリオ大名ビル1Fに行くと運勢が上がるみたい。', img: 'images/6.png', increase: -10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         //  $('#response1').off('click');    
//         $('#response1').on('click', function () {
//             if ($(this).text() === '今日の私の運勢を教えて！') {
//                 const response = unnseiRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);

//             }
//         });
    
//         //今日朝ご飯何食べた？
//         function gohanRandomText() {
//             const responses = [
//                 { text: '課題に集中しすぎて何も食べられなかった', img: 'images/12.png', increase: 10 },
//                 { text: '卵かけご飯５杯食べたよ', img: 'images/7.png', increase: 10 },
//                 { text: 'ラーメン食べたよ', img: 'images/6.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         //  $('#response2').off('click');    
//         $('#response2').on('click', function () {
//             if ($(this).text() === '今日朝ご飯何食べた？') {
//                 const response = gohanRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
    
        
//         //今日の山内さんの調子はどう？
//         function choushiRandomText() {
//             const responses = [
//                 { text: 'やる気に満ち溢れてる！！一緒に頑張ろう！！', img: 'images/8.png', increase: 10 },
//                 { text: '難しくて、ついていくのに必死だよ', img: 'images/2.png', increase: 10 },
//                 { text: '詰みすぎてしんどい・・・助けて・・・', img: 'images/9.png', increase: 10 }
//             ];
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         // $('#response3').off('click');    
//         $('#response3').on('click', function () {
//             if ($(this).text() === "今日の山内さんの調子はどう？") {
//                 const response = choushiRandomText();
        
//                 $('#yamauchi_talk').text(response.text);
//                 $('#default_image').attr('src', response.img);
//                 increaseGauge(response.increase);
//             }
//         });
      

    
    
//         //---------------ゲージ-----------------
    
//         let currentValue = 0; // ゲージの初期値

//         function increaseGauge(amount) {
//             currentValue += amount;
//             if (currentValue > 100) {
//                 currentValue = 100; // 最大値は100%
//             }
//             $('#parameter_gauge').css('width', currentValue + '%');

//             // ゲージが100%になったときの処理を追加
//             if (currentValue === 100) {
//                 $('#popup').show(); // ポップアップを表示
//             }
//             else {
        
//             }
//         }

//         $('#close_popup').on('click', function () {
//             $('#popup').hide(); // ポップアップを非表示にする
//         });
    
     
    
    
//         //----------話しかけるを押した後に選択が出る----------
//         $('#responses').show();
//         });

//     $('#response1, #response2, #response3').on('click', function () {
//         $('#you_talk').text($(this).text());
//     });



//     //     //------------BGM--------------
//     //     function togglePlayPause() {
//     //         var audio = document.getElementById('myAudio');
//     //         var button = document.getElementById('playPauseBtn');

//     //         if (audio.paused) {
//     //             audio.play();
//     //             button.innerText = 'BGM停止';
//     //         } else {
//     //             audio.pause();
//     //             button.innerText = 'BGM再生';
//     //         }
//     //     }



//     //     //--------------効果音--------------
//     //     function playSound() {
//     //         var sound = document.getElementById("mySound");
//     //         sound.play();
//     //     }

//     //     //---------main読み込み------------
//     //     window.addEventListener("DOMContentLoaded", function () {
//     //         document.documentElement.style.opacity = "1";
//     //         document.body.style.opacity = "1";
//     //     })
   
});