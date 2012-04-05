enchant();

window.onload = function() {

    var game = new Game(300, 370);
	var count1P = 0;
	var gameStart = new Scene();
			
			
    game.preload('puti.gif');
	game.preload('puC.gif');
	game.preload('tubusu.wav');
    game.preload('botan.wav');
	game.fps=12;
    
 
 game.onload = function() {
    
	
     game.score = 0;

	var gameStartScene=new Scene();//タイトル画面
	    gameStartScene.backgroundColor='white';
    var start = new Label('36 Putitto ');
		start.x=72;
		start.y=100;
		start.color = 'red';
		start.font = "bold 30px 'Impact'";
		gameStartScene.addChild(start);
	var start2 = new Label('Push Start');
		start2.x=90;
		start2.y=200;
		start2.color = 'red';
		start2.font = "bold 20px 'Impact'";
		gameStartScene.addChild(start2);
    
	
	
	//while (start2.x=90){	var start3 = new Label('Omega');
	//	start3.x=90;
	//	start3.y=150;
	//	start3.color = 'red';
	//	start3.font = "bold 50px 'Impact'";
	//	gameStartScene.addChild(start3);
	//	}
	
		
		var label = new Label('Player');//1Pという文字の表示
		label.x=5;
		label.y=5;
		label.color = 'red';
		label.font = "bold 15px 'Impact'";
		
		var label2 = new Label('SCORE:0/36');//SCORE初期表示
		label2.x=150;
		label2.y=5;
		label2.color = 'red';
		label2.font = "bold 20px 'Impact'";
	
	





	
	
	
	var gameOverScene=new Scene();//ゲームオーバー画面
	    gameOverScene.backgroundColor='black';
	var over = new Label('GAMEOVER');
		over.x=5;
		over.y=5;
		over.color = 'red';
		over.font = "bold 15px 'Impact'";
		gameOverScene.addChild(over);
    
	 
	 
	  //  gameStartScene.backgroundColor='blue';
	
//	var st1 = new Label("puti");
//		st1.x=5;
//		st1.y=5;
//		st1.color = 'red';
//		st1.font = "bold 30px 'Impact'";
	
//	 gameStartScene.addchild(st1);
	
	
	//game.pushScene(gameStartScene);
		
		
	
	
		count=0;	
	  var p1 = new Sprite(40, 40);
        p1.image = game.assets['puti.gif'];
        p1.frame=0;
		p1.x=30;
		p1.y=50;

		
	 var p1C = new Sprite(40, 40);
        p1C.image = game.assets['puC.gif'];
        p1C.frame=0;
		p1C.x=-100;
		p1C.y=-100;

		
		var p2 = new Sprite(40, 40);
        p2.image = game.assets['puti.gif'];
        p2.frame=0;
		p2.x=30;
		p2.y=90;
	
		
	 var p2C = new Sprite(40, 40);
        p2C.image = game.assets['puC.gif'];
        p2C.frame=0;
		p2C.x=-100;
		p2C.y=-100;
	
      var p3 = new Sprite(40, 40);
        p3.image = game.assets['puti.gif'];
        p3.frame=0;
		p3.x=30;
		p3.y=130;

		
	 var p3C = new Sprite(40, 40);
        p3C.image = game.assets['puC.gif'];
        p3C.frame=0;
		p3C.x=-100;
		p3C.y=-100;

		
		var p4 = new Sprite(40, 40);
        p4.image = game.assets['puti.gif'];
        p4.frame=0;
		p4.x=30;
		p4.y=170;
	
		
	 var p4C = new Sprite(40, 40);
        p4C.image = game.assets['puC.gif'];
        p4C.frame=0;
		p4C.x=-100;
		p4C.y=-100;
	
	var p5 = new Sprite(40, 40);
        p5.image = game.assets['puti.gif'];
        p5.frame=0;
		p5.x=30;
		p5.y=210;

		
	 var p5C = new Sprite(40, 40);
        p5C.image = game.assets['puC.gif'];
        p5C.frame=0;
		p5C.x=-100;
		p5C.y=-100;

		
		var p6 = new Sprite(40, 40);
        p6.image = game.assets['puti.gif'];
        p6.frame=0;
		p6.x=30;
		p6.y=250;
	
		
	 var p6C = new Sprite(40, 40);
        p6C.image = game.assets['puC.gif'];
        p6C.frame=0;
		p6C.x=-100;
		p6C.y=-100;
	
      var p7 = new Sprite(40, 40);
        p7.image = game.assets['puti.gif'];
        p7.frame=0;
		p7.x=70;
		p7.y=50;

		
	 var p7C = new Sprite(40, 40);
        p7C.image = game.assets['puC.gif'];
        p7C.frame=0;
		p7C.x=-100;
		p7C.y=-100;

		
		var p8 = new Sprite(40, 40);
        p8.image = game.assets['puti.gif'];
        p8.frame=0;
		p8.x=70;
		p8.y=90;
	
		
	 var p8C = new Sprite(40, 40);
        p8C.image = game.assets['puC.gif'];
        p8C.frame=0;
		p8C.x=-100;
		p8C.y=-100;	
		
		
		
		 var p9 = new Sprite(40, 40);
        p9.image = game.assets['puti.gif'];
        p9.frame=0;
		p9.x=70;
		p9.y=130;

		
	 var p9C = new Sprite(40, 40);
        p9C.image = game.assets['puC.gif'];
        p9C.frame=0;
		p9C.x=-100;
		p9C.y=-100;

		
		var p10 = new Sprite(40, 40);
        p10.image = game.assets['puti.gif'];
        p10.frame=0;
		p10.x=70;
		p10.y=170;
	
		
	 var p10C = new Sprite(40, 40);
        p10C.image = game.assets['puC.gif'];
        p10C.frame=0;
		p10C.x=-100;
		p10C.y=-100;
	
	var p11 = new Sprite(40, 40);
        p11.image = game.assets['puti.gif'];
        p11.frame=0;
		p11.x=70;
		p11.y=210;

		
	 var p11C = new Sprite(40, 40);
        p11C.image = game.assets['puC.gif'];
        p11C.frame=0;
		p11C.x=-100;
		p11C.y=-100;

		
		var p12 = new Sprite(40, 40);
        p12.image = game.assets['puti.gif'];
        p12.frame=0;
		p12.x=70;
		p12.y=250;
	
		
	 var p12C = new Sprite(40, 40);
        p12C.image = game.assets['puC.gif'];
        p12C.frame=0;
		p12C.x=-100;
		p12C.y=-100;
	
		  var p13 = new Sprite(40, 40);
        p13.image = game.assets['puti.gif'];
        p13.frame=0;
		p13.x=110;
		p13.y=50;

		
	 var p13C = new Sprite(40, 40);
        p13C.image = game.assets['puC.gif'];
        p13C.frame=0;
		p13C.x=-100;
		p13C.y=-100;

		
		var p14 = new Sprite(40, 40);
        p14.image = game.assets['puti.gif'];
        p14.frame=0;
		p14.x=110;
		p14.y=90;
	
		
	 var p14C = new Sprite(40, 40);
        p14C.image = game.assets['puC.gif'];
        p14C.frame=0;
		p14C.x=-100;
		p14C.y=-100;
	
      var p15 = new Sprite(40, 40);
        p15.image = game.assets['puti.gif'];
        p15.frame=0;
		p15.x=110;
		p15.y=130;

		
	 var p15C = new Sprite(40, 40);
        p15C.image = game.assets['puC.gif'];
        p15C.frame=0;
		p15C.x=-100;
		p15C.y=-100;

		
		var p16 = new Sprite(40, 40);
        p16.image = game.assets['puti.gif'];
        p16.frame=0;
		p16.x=110;
		p16.y=170;
	
		
	 var p16C = new Sprite(40, 40);
        p16C.image = game.assets['puC.gif'];
        p16C.frame=0;
		p16C.x=-100;
		p16C.y=-100;
	
	var p17 = new Sprite(40, 40);
        p17.image = game.assets['puti.gif'];
        p17.frame=0;
		p17.x=110;
		p17.y=210;

		
	 var p17C = new Sprite(40, 40);
        p17C.image = game.assets['puC.gif'];
        p17C.frame=0;
		p17C.x=-100;
		p17C.y=-100;

		
		var p18 = new Sprite(40, 40);
        p18.image = game.assets['puti.gif'];
        p18.frame=0;
		p18.x=110;
		p18.y=250;
	
		
	 var p18C = new Sprite(40, 40);
        p18C.image = game.assets['puC.gif'];
        p18C.frame=0;
		p18C.x=-110;
		p18C.y=-100;
	
      var p19 = new Sprite(40, 40);
        p19.image = game.assets['puti.gif'];
        p19.frame=0;
		p19.x=150;
		p19.y=50;

		
	 var p19C = new Sprite(40, 40);
        p19C.image = game.assets['puC.gif'];
        p19C.frame=0;
		p19C.x=-100;
		p19C.y=-100;

		
		var p20 = new Sprite(40, 40);
        p20.image = game.assets['puti.gif'];
        p20.frame=0;
		p20.x=150;
		p20.y=90;
	
		
	 var p20C = new Sprite(40, 40);
        p20C.image = game.assets['puC.gif'];
        p20C.frame=0;
		p20C.x=-100;
		p20C.y=-100;	
		
		
		
		 var p21 = new Sprite(40, 40);
        p21.image = game.assets['puti.gif'];
        p21.frame=0;
		p21.x=150;
		p21.y=130;

		
	 var p21C = new Sprite(40, 40);
        p21C.image = game.assets['puC.gif'];
        p21C.frame=0;
		p21C.x=-100;
		p21C.y=-100;

		
		var p22 = new Sprite(40, 40);
        p22.image = game.assets['puti.gif'];
        p22.frame=0;
		p22.x=150;
		p22.y=170;
	
		
	 var p22C = new Sprite(40, 40);
        p22C.image = game.assets['puC.gif'];
        p22C.frame=0;
		p22C.x=-100;
		p22C.y=-100;
	
	var p23 = new Sprite(40, 40);
        p23.image = game.assets['puti.gif'];
        p23.frame=0;
		p23.x=150;
		p23.y=210;

		
	 var p23C = new Sprite(40, 40);
        p23C.image = game.assets['puC.gif'];
        p23C.frame=0;
		p23C.x=-100;
		p23C.y=-100;

		
		var p24 = new Sprite(40, 40);
        p24.image = game.assets['puti.gif'];
        p24.frame=0;
		p24.x=150;
		p24.y=250;
	
		
	 var p24C = new Sprite(40, 40);
        p24C.image = game.assets['puC.gif'];
        p24C.frame=0;
		p24C.x=-100;
		p24C.y=-100;
	
		var p25 = new Sprite(40, 40);
        p25.image = game.assets['puti.gif'];
        p25.frame=0;
		p25.x=190;
		p25.y=50;

		
	 var p25C = new Sprite(40, 40);
        p25C.image = game.assets['puC.gif'];
        p25C.frame=0;
		p25C.x=-100;
		p25C.y=-100;

		
		var p26 = new Sprite(40, 40);
        p26.image = game.assets['puti.gif'];
        p26.frame=0;
		p26.x=190;
		p26.y=90;
	
		
	 var p26C = new Sprite(40, 40);
        p26C.image = game.assets['puC.gif'];
        p26C.frame=0;
		p26C.x=-100;
		p26C.y=-100;
	
     var p27 = new Sprite(40, 40);
        p27.image = game.assets['puti.gif'];
        p27.frame=0;
		p27.x=190;
		p27.y=130;

		
	 var p27C = new Sprite(40, 40);
        p27C.image = game.assets['puC.gif'];
        p27C.frame=0;
		p27C.x=-100;
		p27C.y=-100;

		
		var p28 = new Sprite(40, 40);
        p28.image = game.assets['puti.gif'];
        p28.frame=0;
		p28.x=190;
		p28.y=170;
	
		
	 var p28C = new Sprite(40, 40);
        p28C.image = game.assets['puC.gif'];
        p28C.frame=0;
		p28C.x=-100;
		p28C.y=-100;
	
      var p29 = new Sprite(40, 40);
        p29.image = game.assets['puti.gif'];
        p29.frame=0;
		p29.x=190;
		p29.y=210;

		
	 var p29C = new Sprite(40, 40);
        p29C.image = game.assets['puC.gif'];
        p29C.frame=0;
		p29C.x=-100;
		p29C.y=-100;

		
		var p30 = new Sprite(40, 40);
        p30.image = game.assets['puti.gif'];
        p30.frame=0;
		p30.x=190;
		p30.y=250;
	
		
	 var p30C = new Sprite(40, 40);
        p30C.image = game.assets['puC.gif'];
        p30C.frame=0;
		p30C.x=-100;
		p30C.y=-100;
	
	var p31 = new Sprite(40, 40);
        p31.image = game.assets['puti.gif'];
        p31.frame=0;
		p31.x=230;
		p31.y=50;

		
	 var p31C = new Sprite(40, 40);
        p31C.image = game.assets['puC.gif'];
        p31C.frame=0;
		p31C.x=-100;
		p31C.y=-100;

		
		var p32 = new Sprite(40, 40);
        p32.image = game.assets['puti.gif'];
        p32.frame=0;
		p32.x=230;
		p32.y=90;
	
		
	 var p32C = new Sprite(40, 40);
        p32C.image = game.assets['puC.gif'];
        p32C.frame=0;
		p32C.x=-100;
		p32C.y=-130;
	
      var p33 = new Sprite(40, 40);
        p33.image = game.assets['puti.gif'];
        p33.frame=0;
		p33.x=230;
		p33.y=130;

		
	 var p33C = new Sprite(40, 40);
        p33C.image = game.assets['puC.gif'];
        p33C.frame=0;
		p33C.x=-100;
		p33C.y=-100;

		
		var p34 = new Sprite(40, 40);
        p34.image = game.assets['puti.gif'];
        p34.frame=0;
		p34.x=230;
		p34.y=170;
	
		
	 var p34C = new Sprite(40, 40);
        p34C.image = game.assets['puC.gif'];
        p34C.frame=0;
		p34C.x=-100;
		p34C.y=-100;	
		
		
	var p35 = new Sprite(40, 40);
        p35.image = game.assets['puti.gif'];
        p35.frame=0;
		p35.x=230;
		p35.y=210;
	
		
	 var p35C = new Sprite(40, 40);
        p35C.image = game.assets['puC.gif'];
        p35C.frame=0;
		p35C.x=-100;
		p35C.y=-100;	
		 
		 
	var p36 = new Sprite(40, 40);
        p36.image = game.assets['puti.gif'];
        p36.frame=0;
		p36.x=230;
		p36.y=250;
	 var p36C = new Sprite(40, 40);
        p36C.image = game.assets['puC.gif'];
        p36C.frame=0;
		p36C.x=-100;
		p36C.y=-100;	
		 
		
	
	
	
	  game.time = 10;	//ゲーム時間  
	    var timeLabel = new Label();
         timeLabel.text = 'Time: ' + game.time;
         timeLabel.x=10;
		 timeLabel.y=30;
	     timeLabel.addEventListener('enterframe',function(e){
	    if(game.frame % game.fps == 0){
		    game.time -=1;
		this.text = 'Time: ' + game.time;
		if(game.time <= 0){//ゲームオーバー判定
		      game.pushScene(pRS);
			  }
			   }
           });
	
	
	var pRS=new Scene();//1P結果画面
	    //pRS.backgroundColor='white';
	   
	var score1 = new Label("GameOver");
		score1.x=90;
		score1.y=150;
		score1.color = 'red';
		score1.font = "bold 20px 'Impact'";
	   
	 pRS.addChild(score1);
	
	
	
	
	
	game.pushScene(gameStartScene);//gameStart画面呼び出し
		
		start2.addEventListener('touchstart',function(){//ﾀｲﾄﾙにてｽﾀｰﾄがｸyﾘｯｸされたら始まる
		game.assets['botan.wav'].play();
		game.popScene(gameStartScene);
		game.pushScene(game1Scene);
		});
		
	
		
		  

		p1.addEventListener('touchstart',function(){
		
		  p1C.x=30;
		  p1C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p2.addEventListener('touchstart',function(){
		
		  p2C.x=30;
		  p2C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p3.addEventListener('touchstart',function(){
		
		  p3C.x=30;
		  p3C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p4.addEventListener('touchstart',function(){
		
		  p4C.x=30;
		  p4C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p5.addEventListener('touchstart',function(){
		
		  p5C.x=30;
		  p5C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p6.addEventListener('touchstart',function(){
		
		  p6C.x=30;
		  p6C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
	
		p7.addEventListener('touchstart',function(){
		
		  p7C.x=70;
		  p7C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p8.addEventListener('touchstart',function(){
		
		  p8C.x=70;
		  p8C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p9.addEventListener('touchstart',function(){
		
		  p9C.x=70;
		  p9C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p10.addEventListener('touchstart',function(){
		
		  p10C.x=70;
		  p10C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p11.addEventListener('touchstart',function(){
		
		  p11C.x=70;
		  p11C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p12.addEventListener('touchstart',function(){
		
		  p12C.x=70;
		  p12C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
	
		p13.addEventListener('touchstart',function(){
		
		  p13C.x=110;
		  p13C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p14.addEventListener('touchstart',function(){
		
		  p14C.x=110;
		  p14C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p15.addEventListener('touchstart',function(){
		
		  p15C.x=110;
		  p15C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p16.addEventListener('touchstart',function(){
		
		  p16C.x=110;
		  p16C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p17.addEventListener('touchstart',function(){
		
		  p17C.x=110;
		  p17C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p18.addEventListener('touchstart',function(){
		
		  p18C.x=110;
		  p18C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
	
		p19.addEventListener('touchstart',function(){
		
		  p19C.x=150;
		  p19C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p20.addEventListener('touchstart',function(){
		
		  p20C.x=150;
		  p20C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p21.addEventListener('touchstart',function(){
		
		  p21C.x=150;
		  p21C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p22.addEventListener('touchstart',function(){
		
		  p22C.x=150;
		  p22C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p23.addEventListener('touchstart',function(){
		
		  p23C.x=150;
		  p23C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p24.addEventListener('touchstart',function(){
		
		  p24C.x=150;
		  p24C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p25.addEventListener('touchstart',function(){
		
		  p25C.x=190;
		  p25C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p26.addEventListener('touchstart',function(){
		
		  p26C.x=190;
		  p26C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
     	p27.addEventListener('touchstart',function(){
		
		  p27C.x=190;
		  p27C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p28.addEventListener('touchstart',function(){
		
		  p28C.x=190;
		  p28C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p29.addEventListener('touchstart',function(){
		
		  p29C.x=190;
		  p29C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p30.addEventListener('touchstart',function(){
		
		  p30C.x=190;
		  p30C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
	
		p31.addEventListener('touchstart',function(){
		
		  p31C.x=230;
		  p31C.y=50;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p32.addEventListener('touchstart',function(){
		
		  p32C.x=230;
		  p32C.y=90;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
	
		p33.addEventListener('touchstart',function(){
		
		  p33C.x=230;
		  p33C.y=130;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p34.addEventListener('touchstart',function(){
		
		  p34C.x=230;
		  p34C.y=170;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p35.addEventListener('touchstart',function(){
		
		  p35C.x=230;
		  p35C.y=210;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});
		
		
		p36.addEventListener('touchstart',function(){
		
		  p36C.x=230;
		  p36C.y=250;
		  game.assets['tubusu.wav'].play();
		  game.score = game.score + 1;
         label2.text = "SCORE:"+game.score+"/36";
		});

		
	
	  






		game.rootScene.addChild(p1);
		game.rootScene.addChild(p1C);
		game.rootScene.addChild(p2);
		game.rootScene.addChild(p2C);
		game.rootScene.addChild(p3);
		game.rootScene.addChild(p3C);
		game.rootScene.addChild(p4);
		game.rootScene.addChild(p4C);
		game.rootScene.addChild(p5);
	    game.rootScene.addChild(p5C);
		game.rootScene.addChild(p6);
		game.rootScene.addChild(p6C);
		game.rootScene.addChild(p7);
		game.rootScene.addChild(p7C);
		game.rootScene.addChild(p8);
		game.rootScene.addChild(p8C);
		game.rootScene.addChild(p9);
		game.rootScene.addChild(p9C);
		game.rootScene.addChild(p10);
		game.rootScene.addChild(p10C);
		game.rootScene.addChild(p11);
		game.rootScene.addChild(p11C);
		game.rootScene.addChild(p12);
		game.rootScene.addChild(p12C);
		game.rootScene.addChild(p13);
		game.rootScene.addChild(p13C);
		game.rootScene.addChild(p14);
		game.rootScene.addChild(p14C);
		game.rootScene.addChild(p15);
		game.rootScene.addChild(p15C);
		game.rootScene.addChild(p16);
		game.rootScene.addChild(p16C);
		
		game.rootScene.addChild(p17);
		game.rootScene.addChild(p17C);
		game.rootScene.addChild(p18);
		game.rootScene.addChild(p18C);
	    game.rootScene.addChild(p19);
		game.rootScene.addChild(p19C);
		game.rootScene.addChild(p20);
		game.rootScene.addChild(p20C);
		game.rootScene.addChild(p21);
		game.rootScene.addChild(p21C);
		game.rootScene.addChild(p22);
		game.rootScene.addChild(p22C);
		game.rootScene.addChild(p23);
		game.rootScene.addChild(p23C);
    	game.rootScene.addChild(p24);
		game.rootScene.addChild(p24C);

        game.rootScene.addChild(p25);
		game.rootScene.addChild(p25C);
		game.rootScene.addChild(p26);
		game.rootScene.addChild(p26C);
	    game.rootScene.addChild(p27);
		game.rootScene.addChild(p27C);
		game.rootScene.addChild(p28);
		game.rootScene.addChild(p28C);
		game.rootScene.addChild(p29);
		game.rootScene.addChild(p29C);
		game.rootScene.addChild(p30);
		game.rootScene.addChild(p30C);
		game.rootScene.addChild(p31);
		game.rootScene.addChild(p31C);
    	game.rootScene.addChild(p32);
		game.rootScene.addChild(p32C);
		
		game.rootScene.addChild(p33);
		game.rootScene.addChild(p33C);
		game.rootScene.addChild(p34);
		game.rootScene.addChild(p34C);
		game.rootScene.addChild(p35);
		game.rootScene.addChild(p35C);
    	game.rootScene.addChild(p36);
		game.rootScene.addChild(p36C);

        game.rootScene.addChild(label);
		game.rootScene.addChild(label2);
	    game.rootScene.addChild(timeLabel);
		game.rootScene.addChild(st1);
		game.rootScene.addChild(start);
		game.rootScene.addChild(over);
		game.rootScene.addChild(score1);
		
		
		};
		
		
    
    game.start();


};