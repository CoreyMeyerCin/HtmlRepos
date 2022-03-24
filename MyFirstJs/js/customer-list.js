const customers = [
    { id: 1, name:"MAX",active :true, sales: 10000},
    { id: 2, name:"P&G",active :true, sales: 200000},
    { id: 3, name:"Kroger",active :true, sales: 50000},
    { id: 4, name:"Target",active :false, sales: 50000}

]

const loaded =() =>{
    display(customers);
}

const display = (customers) =>{
        const tbodyCtrl = document.getElementById("custs");
        for(let cust of customers){
            let tr ="<tr>";
            tr += `<td>${cust.id}</td>`;
            tr += `<td>${cust.name}</td>`;
            tr += `<td>${(cust.active ? "Yes" : "No")}</td>`;
            tr += `<td>${cust.sales}</td>`;
            tr+="</tr>";

            tbodyCtrl.innerHTML += tr;
        }

}