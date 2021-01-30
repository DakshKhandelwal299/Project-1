console.log("Loaded");

let xhr1 = new XMLHttpRequest();
xhr1.open("GET","Data/Vaccine.json",true)
xhr1.onload = function () {

    let data_got = JSON.parse(this.responseText)
    let str = '';
    for (key in data_got) {



        str += `
    <div class="card m-4" style="width: 18rem;">
      <img src="${data_got[key].image}" class="card-img-top" alt="..." height="200px">
      <div class="card-body">
        <h5 class="card-title">${data_got[key].name}</h5>
        <p class="card-text">${data_got[key].cost}</p>
       
      </div>
    </div>     
    
    
    `
    
    
        document.getElementById('content').innerHTML = str;
        document.getElementById('input_search').style.display = "Block"
    }
    
}
xhr1.send()
// Filter

function Filter(x) {
    let search_value = x.toLowerCase();
    console.log(x);

    let Categorys = document.getElementsByClassName('card-title');

    for (let index = 0; index < Categorys.length; index++) {
        let ParentElement = document.getElementsByClassName('card');

     var Value =  Categorys[index].innerHTML.toLowerCase();

    

      if (Value.includes(search_value)) {
         Categorys[index].style.display = "Block"
         ParentElement[index].style.display = "Block"
        
         
      }
      else{
         Categorys[index].style.display = "none"
         ParentElement[index].style.display = "none"

      }

       
        
        
    }
    
}


