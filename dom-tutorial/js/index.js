const clicked=()=>{
    const inpCtrl = document.getElementById("fred");
    let contents = inpCtrl.value;
    const lblCtrl = document.getElementById("lbl");
    lblCtrl.innerText = contents;
}


const setZero = () => {
    console.log("set zero button clicked");
    const inpCtrl = document.getElementById("textBox");
    inpCtrl.value = 0;
    format();
}
const change=(chg) =>{
    let inpCtrl = document.getElementById("textBox");
    let val = inpCtrl.value;
    val = Number(val);
    val = val + chg;
    format(val, inpCtrl);
}

const format=(nbr,ctrl)=>{
    ctrl.value=nbr;
    ctrl.style.color =(nbr %2==0) ? "red" : "black";
    ctrl.style.fontWeight =(nbr %3==0) ? "bold":"normal";
    ctrl.style.fontStyle =(nbr %5==0) ?"italic" : "normal";
}