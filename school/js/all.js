//提示框觸發， 點擊ID=countId的按鈕，觸發一個事件 事件內容: 顯示 你已經點擊了!
//onclick hover focus clip mouseHolder......很多事件
//document.getElementById('countId').onclick = function(){
//    alert('你已經點擊了!');
//}

//建立一個變數儲存 "輸入在hamNum的值"，並觸發此事件時，顯示
//document.getElementById('countId').onclick = function(){
//    var hamNum = document.getElementById('hamNumId').value;//值
//    var hamNumType = document.getElementById('hamNumId').type;//形態
//    var cokeNum = document.getElementById('cokeNumId').value;
//   alert(hamNum);
//    alert(cokeNum);
//    alert('漢堡類型' + hamNumType );
//}

//取得數量
document.getElementById('countId').onclick = function(){
    var hamNum = parseInt(document.getElementById('hamNumId').value);//使字串變成數字
    var cokeNum = parseInt(document.getElementById('cokeNumId').value);//使字串變成數字
    console.log(hamNum + cokeNum);//兩者是字串，若hamNum=10 ，cokeNum=5，則相加"105"形態為String 相乘則75 形態為number
    var allMoney = hamNum + cokeNum
    
//    console.log(typeof(hamNum * cokeNum));75 number
}

//取得價格
document.getElementById('countId').onclick = function(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;//使字串變成數字
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;//使字串變成數字
    console.log(hamNum + cokeNum);//兩者是字串，若hamNum=10 ，cokeNum=5，則相加"105"形態為String 相乘則75 形態為number
    var allMoney = hamNum + cokeNum

    document.getElementById('totalId').textContent = hamNum + cokeNum;
    //typeof() 確認形態 parseInt() 字串轉數字
//    console.log(typeof(hamNum * cokeNum));75 number
}





//"10"+"5"="105"
//"10" * "5" = 75
//利用function求出a的型別
//typeof(function(){
//    alert('a');
//})
//typeof({tom:'john'});