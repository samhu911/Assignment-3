let counter = 0;
let color;
document.getElementById("addRow").addEventListener("click", function(event){
    let grid = document.getElementById("grid");
    let createRow =  document.createElement('tr');
    if(counter === 0)
    {
    
     grid.appendChild(createRow).setAttribute("class", "Row");
     createRow.classList.add(color);
     let createColumn = document.createElement('th');
     createRow.appendChild(createColumn);
     changedColor(createColumn);
    }
    else{
        for(i = 0; i< counter; i++)
        {
            grid.appendChild(createRow).setAttribute("class", "Row");
            createRow.classList.add(color)
             let createColumn = document.createElement('th');
             createRow.appendChild(createColumn);
             changedColor(createColumn);
        }
    }
});

// Add Column
const addColumn = document.getElementById("addColumn");
const row = grid.getElementsByTagName("tr");
addColumn.addEventListener("click", function (e) {
    for (let i = 0; i < row.length; i++)
    {
        let createColumn = document.createElement("th");
        changedColor(createColumn);
        row[i].appendChild(createColumn);
    }
});
// Remove Row
const removeRow = document.getElementById("removeRow");
removeRow.addEventListener("click", function(e){
    if (grid.getElementsByTagName("tr").length === 0) {
        alert("The grid have no rows");
    }
    else {
        row[row.length - 1].remove();
    }
});

// Remove Column
const removeColumn = document.getElementById("removeColumn");
removeColumn.addEventListener("click", function(e){
    if (grid.getElementsByTagName("th").length === 0) {
        for (let i = row.length - 1; i >= 0; i--)
        {
            row[i].remove();
        }
        alert("The grid have no columns");
    }
    else {
        for (let i = 0; i < row.length; i++)
        {
            row[i].removeChild(row[i].lastChild);
        }
    }
});

// Select a color
document.getElementById("addColor").addEventListener("click",function(){
    let e = document.getElementById("color");
    color = e.options[e.selectedIndex].text;
}) 

 // Fill all cell with the selected color
 document.getElementById("addAllColor").addEventListener("click", function(event){
    let columns = document.getElementsByTagName("th");
    let collectionOfColumn = [...columns];
    collectionOfColumn.forEach((tableColumn) =>{
        tableColumn.classList.add(color);
    });
});

// Clear all cell to their initial color
document.getElementById("clearAllColor").addEventListener("click", function(event){
    
    let columns = document.getElementsByTagName("th");
    let collectionOfColumn = [...columns];
    collectionOfColumn.forEach((tableColumn) =>{
        tableColumn.classList.remove(color);
    });
});

// Click on a single cell to change the color or click and hold to change color
let isColor = false;
function changedColor(column)
{
    column.classList.add(color);
    column.addEventListener("click", (e) => {
        column.classList.add(color);
    });
    column.addEventListener("mousedown", (e) => {
        isColor = true;
    });
    column.addEventListener("mousemove", (e) => {
        if (isColor) {
            column.classList.add(color);
        }
    });
    column.addEventListener("mouseup", (e) =>{
        if(isColor) {
            isColor = false;
        }
    });
}
