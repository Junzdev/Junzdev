async function mulainama() {
           kadoIn.style="display:none";ket.style="display:none";
           Content.style = "opacity:1;margin-top:2vh";
           bodyblur.style="opacity:.7";
           wallpaper.style="transform: scale(1);";
           fotostiker.style="display:inline-flex;";
           setTimeout(ftmuncul,200);
           setTimeout(kethalo,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotostiker.src = fotostiker2.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotostiker.src = fotostiker3.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==3){fotostiker.src = fotostiker4.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==4){fotostiker.src = fotostiker5.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==5){fotostiker.src = fotostiker6.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==6){fotostiker.src = fotostiker7.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==7){fotostiker.src = fotostiker8.src;fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";setInterval(createHeart,200);}
  
  function kethalo(){
  new TypeIt("#halo", {
  strings: ["" + vketikhalo], startDelay: 50, speed: 30, waitUntilVisible: true,
  afterComplete: function(){
    halo.innerHTML = vketikhalo;
    setTimeout(bqmuncul,200);
  },}).go();
  }
  function kethalo2(){
  bqhilang();fthilang();ftganti=6;setTimeout(ftmuncul,400);
  halo.style="display:none";
  new TypeIt("#halo2", {
  strings: ["" + vketikhalo2], startDelay: 50, speed: 60, waitUntilVisible: true,
  afterComplete: function(){
    bq.style="";
    halo2.innerHTML = vketikhalo2;
    setTimeout(munculbwh,800);
    setInterval(createHeart,400);setTimeout(tombol,7000);
  },}).go();
  }
  
  defkalimatbawah = kalimatbawah.innerHTML;
  function munculbwh(){kalimatbawah.innerHTML=defkalimatbawah;setTimeout(munculbwh2,2000);otomatis();}
  function munculbwh2(){kalimatbawah.innerHTML=kalimatbawah2.innerHTML;setTimeout(munculbwh3,2000);otomatis();}
  function munculbwh3(){kalimatbawah.innerHTML=kalimatbawah3.innerHTML;setTimeout(munculbwh,2000);otomatis();}
  function otomatis() {kalimatbawah.style="position:relative;opacity:0;transform:scale(.3);";setTimeout(anim,300);} 
  function anim() {kalimatbawah.style="position:relative;opacity:1;transform:scale(1);";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();fungsi=1;}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function otokal() {kalimat.style="opacity:0;transform:scale(.3);";setTimeout(anikal,300);} 
  function anikal() {setTimeout(otopsL,700);kalimat.style="opacity:1;transform:scale(1);";}
  function otopsL(){opsL.style.opacity=".8";opsLcheck+=1;opsLclick=1;}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";fungsi=1}
  document.getElementById("By").onclick = function() {if(fungsi==1){menuju();}}
  
  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 50, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    otopsL();
  },}).go();
  }

  opsLclick=0;opsLcheck=0;
  document.getElementById("bq").addEventListener("click", myCheck);
  function myCheck() {
    if(opsLclick==1){
      if(opsLcheck==1){kalimat.innerHTML = kalimatb.innerHTML;otokal();fthilang();ftganti=1;setTimeout(ftmuncul,300);}
      if(opsLcheck==2){kalimat.innerHTML = kalimatc.innerHTML;otokal();fthilang();ftganti=2;setTimeout(ftmuncul,300);}
      if(opsLcheck==3){kalimat.innerHTML = kalimatd.innerHTML;otokal();fthilang();ftganti=3;setTimeout(ftmuncul,300);}
      if(opsLcheck==4){kalimat.innerHTML = kalimate.innerHTML;otokal();fthilang();ftganti=4;setTimeout(ftmuncul,300);}
      if(opsLcheck==5){kalimat.innerHTML = kalimatf.innerHTML;otokal();fthilang();ftganti=5;setTimeout(ftmuncul,300);}
      if(opsLcheck==6){kethalo2();}
      opsL.style.opacity="0";opsLclick=0;
    }
  }
