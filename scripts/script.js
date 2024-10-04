var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCat = document.getElementById("productCat")
var productDesc = document.getElementById("productDesc")
var tableRow = document.getElementById("tableRow")
var mainBtn = document.getElementById("mainBtn")

var arrProduct



if (localStorage.getItem("data") == null){
    arrProduct = []
}
else{
    arrProduct = JSON.parse(localStorage.getItem("data"))
    display(arrProduct)
}

function display(arrp){
    var box= ""
    for( var i = 0; i < arrp.length; i++){
        box += `
        <tr>
            <td>${i + 1}</td>
            <td>${arrp[i].pName}</td>
            <td>${arrp[i].pPrice}</td>
            <td>${arrp[i].pCat}</td>
            <td>${arrp[i].pDesc}</td>
            <td><button class="btn btn-danger" onclick="deleteFunc(${i})">delete</button></td>
            <td><button class="btn btn-info" onclick="updateFun(${i})">update</button></td>
        </tr>`

        tableRow.innerHTML = box
        
    }
}

function addProduct(){
    var product = {
    pName: productName.value,
    pPrice: productPrice.value,
    pCat: productCat.value,
    pDesc: productDesc.value
    }

    arrProduct.push(product)
    localStorage.setItem("data", JSON.stringify(arrProduct))
    display(arrProduct)
    clearForm()

}

function clearForm(){
    productName.value = ""
    productPrice.value = ""
    productCat.value = ""
    productDesc.value = ""
}


function deleteFunc (index){
    arrProduct.splice(index,1)
    localStorage.setItem("data", JSON.stringify(arrProduct))
    display(arrProduct)
}

mainBtn.onclick = function () {
  if (mainBtn.innerHTML == "update") {
    finalUpdate();}
  else {
    addProduct()}
}

var globalIndex 
function updateFun(index){
    globalIndex = index

    console.log("j")
    productName.value = arrProduct[index].pName;
    productPrice.value = arrProduct[index].pPrice;
    productCat.value = arrProduct[index].pCat;
    productDesc.value = arrProduct[index].pDesc;
    mainBtn.innerHTML = "update";
}
function finalUpdate (){
    arrProduct[globalIndex].pName = productName.value;
    arrProduct[globalIndex].pPrice = productPrice.value;
    arrProduct[globalIndex].pCat = productCat.value;
    arrProduct[globalIndex].pDesc = productDesc.value;
    mainBtn.innerHTML = "add Product";
    localStorage.setItem("data", JSON.stringify(arrProduct));
    display(arrProduct);
    clearForm()
}

function search (term){
    
    var arrsearch=[]
    for (var i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i].pName.toLowerCase().includes(term.toLowerCase())) {
          arrsearch.push(arrProduct[i]);
        }
    }
    console.log(arrsearch)
    display(arrsearch)
}
