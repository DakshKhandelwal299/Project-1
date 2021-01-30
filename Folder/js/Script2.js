console.log("Loaded");

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