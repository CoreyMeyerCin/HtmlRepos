$().ready(
    ()=>{console.log("JQuery is Ready!");},

    $("#addBtn").on("click",()=>{
        add();
    })

    );

class Customer{
    id;
    name;
    sales;

    constructor(id,name,sales){
        this.id = id;
        this.name = name;
        this.sales=sales;
    }

    log(){
        console.log(this.id,this.name,this.sales);
    }
}

let customers = [
    new Customer(1,"MAX",1000),
    new Customer(2,"PNG",100000),
    new Customer(3,"Microsoft",500000)
]

// for(let customer of customers){
//     customer.log();
// }
// const loaded=()=>{
//     console.log("loaded is activated")
// }



const renderTableBody=()=>{
    console.log("renderTableBody is activated");
    const tbodyCtrl = document.getElementById("tableBody");
    tbodyCtrl.innerHTML="";
    for(let customer of customers){
        let tr= "<tr>";
            tr+= `<td> ${customer.id}</td>`;
            tr+= `<td> ${customer.name}</td>`;
            tr+= `<td> ${customer.sales}</td>`;
            tr+="</tr>";
        tbodyCtrl.innerHTML += tr;
        
    }
    
}

const add =()=>{
    let inpIdCtrl = document.getElementById("pId");
    let inpNameCtrl = document.getElementById("pName");
    let inpSalesCtrl = document.getElementById("pSales");
    let cust=new Customer();
        cust.id = +inpIdCtrl.value;
        cust.name = inpNameCtrl.value;
        cust.sales = +inpSalesCtrl.value;
        customers.push(cust)
        renderTableBody(customers);
}



//still working on connecting this appropriately by the genereated id
// const table = () =>{
//     let inpCtrl = document.getElementById(`sales${idgen}`);
//     let val = inpCtrl.value;
//     val=Number(val);
//     format(val,inpCtrl);
// }


// const format=(nbr, ctrl)=>{
//     ctrl.value=nbr;
//     ctrl.style.color=(nbr >= 5000) ? "green" : "red";
// }