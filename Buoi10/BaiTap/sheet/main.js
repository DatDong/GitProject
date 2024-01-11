let arrS = [];

function addProduct() {
  let txtValue = document.getElementById("txtProduct").value;
  arrS.push(txtValue);
  console.log("@@@arrS", arrS.toString());
  count_Product();
  populateProduct();
}

function count_Product() {
  let count = arrS.length;
  document.getElementById("countProduct").innerHTML = `${count} product`;
}

function populateProduct() {
  let table = document.querySelector("table");
  table.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Chinh sua</th>
            <th>Xoa</th>
        </tr>
    `;

  for (let i = 0; i < arrS.length; i++) {
    table.innerHTML += `
        <tr>
            <td>${arrS[i]}</td>
            <td><input type="submit" value="Edit" class="btnEdit" onclick ="editProduct(${i})"></td>
            <td><input type="submit" value="Delete" class="btnDelete" onclick="deleteProduct(${i})"></td>
        </tr>
        `;
  }
}


function editProduct(index) {
    let newValue = prompt("Enter new product name");
    if (newValue) {
        arrS[index] = newValue;
        populateProduct();
    }
}
function deleteProduct(index) {
    arrS.splice(index, 1);
    populateProduct();
}
