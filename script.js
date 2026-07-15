let history = JSON.parse(localStorage.getItem("history")) || [];

function save() {
    localStorage.setItem("history", JSON.stringify(history));
}

function render() {

    const list = document.getElementById("history");

    list.innerHTML = "";

    let tai = 0;
    let xiu = 0;

    history.forEach(item => {

        if(item.type=="Tài") tai++;
        else xiu++;

        const li=document.createElement("li");

        li.innerHTML=
        `${item.d1} - ${item.d2} - ${item.d3}
        = <b>${item.total}</b>
        <span class="${item.type=="Tài"?"tai":"xiu"}">
        ${item.type}
        </span>`;

        list.prepend(li);

    });

    document.getElementById("total").innerText=history.length;
    document.getElementById("tai").innerText=tai;
    document.getElementById("xiu").innerText=xiu;

}

function addResult(){

    let d1=parseInt(document.getElementById("d1").value);
    let d2=parseInt(document.getElementById("d2").value);
    let d3=parseInt(document.getElementById("d3").value);

    if(
        isNaN(d1)||isNaN(d2)||isNaN(d3)||
        d1<1||d1>6||
        d2<1||d2>6||
        d3<1||d3>6
    ){
        alert("Vui lòng nhập số từ 1 đến 6");
        return;
    }

    const total=d1+d2+d3;

    let type="";

    if(total>=11 && total<=17){
        type="Tài";
    }else{
        type="Xỉu";
    }

    history.push({
        d1,
        d2,
        d3,
        total,
        type
    });

    save();
    render();

    document.getElementById("d1").value="";
    document.getElementById("d2").value="";
    document.getElementById("d3").value="";
}

render();
