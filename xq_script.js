var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var text = document.getElementById("text");

btn1.addEventListener("click", function(){
    text.innerHTML = `
    <p>
    叉酷航空成立於2023年<br/>創辦人小綺想去大阪玩，但是發現機票價格非常昂貴。<br/>
    小綺認為一定有很多人也為此所苦，因此創立了主打｢低成本、低費用｣的叉酷航空。
    </p>
    `;
})

btn2.addEventListener("click", function(){
    text.innerHTML = `
    <p>
    機長：碩恩爸爸<br/>副機長：碩恩<br/>
    空服員：小綺、露比、孫瑜<br/>
    技師：偉哥、Tommy
    </p>
    `;
})

btn3.addEventListener("click", function(){
    text.innerHTML = `
    <p style="color:red;">
    機長請假，暫時無航班可選擇！
    </p>
    `;
})