let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes'); 
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let totale = document.getElementById('totale');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;
let searchmood = 'title'

function getTotale() {
    if (price.value !== '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        totale.innerHTML = result;
        totale.style.background = '#040';
    } else {
        totale.innerHTML = '';
        totale.style.background = '#a00d02';
    }
}
let datapro;
if (localStorage.product != null){
     datapro = JSON.parse(localStorage.product)
}else{
    datapro =[];
}
submit.onclick = function(){
     let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        totale:totale.innerHTML,
        count:count.value,
        category:category.value,

        

     }
     if (mood === 'create'){
              datapro.push(newpro);
     }else{
             datapro [  tmp  ] = newpro;
             mood = 'create';
             submit.innerHTML = 'create';
     }
     localStorage.setItem('product',     JSON.stringify(datapro))
     cleardata()
     showdata()
}
function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    totale.innerHTML = '';
    count.value = '';
    category.value = '';
    
}
function showdata()
{
    getTotale()
    let table = '';
    for (let i = 0; i < datapro.length;i++){
        table += `
        <tr> 
        <td>${i}</td>
        <td>${datapro [i].title}</td>
        <td>${datapro [i].price}</td>
        <td>${datapro [i].taxes}</td>
        <td>${datapro [i].ads}</td>
        <td>${datapro [i].discount}</td>
        <td>${datapro [i].totale}</td>
        <td>${datapro [i].category}</td>
        <td><button onclick="updatedata( ${i} )" id="update">update</button></td>
        <td><button  onclick="deletedata( ${i} )" id="delete">delete</button></td>
    </tr>
    `

    }
    document.getElementById('tbody').innerHTML =table;
    let btnDelete = document.getElementById('deleteall');
    if(datapro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteall()">delete All</button>
        `
    } else{
        btnDelete.innerHTML = '';
    }
}
showdata()
function deletedata(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata( )
}
function deleteall()
{
    localStorage.clear()
    datapro.splice(0)
}
function updatedata(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    count.value = datapro[i].count;
    getTotale()
    category.value = datapro[i].category;
    submit.innerHTML = 'Update'
    mood ='update';
    tmp = i;
    scroll({
        top : 0,
        behavior:'smooth'
    })
}
function getsearchmood(id){
    let search = document.getElementById('search')
  if(id == 'searchtitle'){
    searchmood = 'title';
  }else{
    searchmood ='category'
  }
  search.placeholder = 'search by'+searchmood;
  search.focus()
  search.value = '';
  showdata()
}
function searchdata(value){
    let table = '';
    if(searchmood == 'title')
    {
      for(let i = 0; i < datapro.length;i++){
        if(datapro[i].title.includes(value)){
            table += `
            <tr> 
            <td>${i}</td>
            <td>${datapro [i].title}</td>
            <td>${datapro [i].price}</td>
            <td>${datapro [i].taxes}</td>
            <td>${datapro [i].ads}</td>
            <td>${datapro [i].discount}</td>
            <td>${datapro [i].totale}</td>
            <td>${datapro [i].category}</td>
            <td><button onclick="updatedata( ${i} )" id="update">update</button></td>
            <td><button  onclick="deletedata( ${i} )" id="delete">delete</button></td>
        </tr>
        `
        }
      }   
    }else{
        for(let i = 0; i < datapro.length;i++){
            if(datapro[i].category.includes(value)){
                table += `
                <tr> 
                <td>${i}</td>
                <td>${datapro [i].title}</td>
                <td>${datapro [i].price}</td>
                <td>${datapro [i].taxes}</td>
                <td>${datapro [i].ads}</td>
                <td>${datapro [i].discount}</td>
                <td>${datapro [i].totale}</td>
                <td>${datapro [i].category}</td>
                <td><button onclick="updatedata( ${i} )" id="update">update</button></td>
                <td><button  onclick="deletedata( ${i} )" id="delete">delete</button></td>
            </tr>
            `
            }
          }   
    }
     document.getElementById('tbody').innerHTML =table;
}