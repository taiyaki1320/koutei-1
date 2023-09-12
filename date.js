
    const date =document.getElementById("date");    //日付の宣言
    const days =["(日)","(月)","(火)","(水)","(木)","(金)","(土)"];     //曜日の宣言
    
    //日付を取得//
    const drawClock =()=>{
    const today =new Date();
    const year =today.getFullYear();
    const mon =today.getMonth()+1;
    const day =today.getDate();
    const dNo =today.getDay();
    const week =days[dNo];
    date.innerHTML = year + "/" + mon + "/" +day + " " + week;

    
    };
    drawClock();    //日付取得処理実行


             //canvasを使うためのお決まりの2行
	const canvas = document.getElementById("canvas");	//お絵描きセットを取得
	const context = canvas.getContext("2d")			//その筆を取得

        //泡の準備
    class Enemy{
        //コンストラクタ（生成時に実行される特別なメソッド）
        constructor(){
            this.x =Math.random() * 400;
            this.y =Math.random() * 400 + 400;
            this.r =Math.random() * 8 + 1;
            this.s =Math.random() * 4 + 1;
        }
        //泡の位置を更新して描画
        update(){
            context.beginPath();
            this.y -= this.s;
            context.arc(this.x,this.y,this.r,0,2 * Math.PI);
            context.fillStyle = "rgba(" + [0,200,240,0.3] +")";
            context.fill();
            context.stroke();
            context.strokeStyle ="rgba(" + [0,200,240,0.35] +")";
            context.lineWidth = 2;
        }
    }

    //クリックでキャラクターを変える
    let pics_src = new Array("https://3.bp.blogspot.com/-LD7eWXxJDWc/Wat2JYWIm1I/AAAAAAABGVY/QrzmfD7ayigOx65TyW0Y_UHTAKogQ_-KgCLcBGAs/s800/animal_stand_penguin.png",
    "https://1.bp.blogspot.com/-WmUXJg20MAs/X5umbEoQASI/AAAAAAABcD4/XmRRp2otok8KC0IbnwZO-AambYgys8DkgCNcBGAsYHQ/s858/fashion_nekomimi_woman.png",
    "https://1.bp.blogspot.com/-fyYoL91_tQo/Wp0Nn-VLocI/AAAAAAABKiI/3J2ywEvlbwIhjFNsmF8qpluPOg2it_HAQCLcBGAs/s800/ai_kanabou_buki.png");
    let illust_num = 0;

    function slideshow(){
        if (illust_num == 2){
            illust_num = 0;
        }else{
            illust_num ++;
        }
        document.getElementById("illust").src=pics_src[illust_num];
    }

    //泡を生成
    let enemy = [];
    const enemyNum = 50;
    for (let i = 0; i < enemyNum; i++){
        enemy[i] = new Enemy();
    }

    const timer = setInterval( ()=>{
    //canvas全体を消去
    context.clearRect(0,0,canvas.width,canvas.height);

    //泡を動かす
    for (let i =0; i< enemyNum; i++){
        enemy[i].update();
        if(enemy[i].y < -20){
            enemy[i] = new Enemy();
        }
    } 
}     ,33);                              //33ミリ秒ごとに実行（約30fps）
