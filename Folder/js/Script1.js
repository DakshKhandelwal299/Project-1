function Load_Data_HomePage() {

    let Data_Home = new XMLHttpRequest();

    Data_Home.open('GET', 'Data/HomPage.json', true)
    Data_Home.onload = function () {
       

            

        let data_got = JSON.parse(this.responseText)
        let str = '';
        for (key in data_got) {



            str += `
        <div class="card m-4" style="width: 18rem;">
          <img src="${data_got[key].image}" class="card-img-top" alt="..." height="200px">
          <div class="card-body">
            <h5 class="card-title">${data_got[key].name}</h5>
            <p class="card-text">${data_got[key].desc}</p>
           
          </div>
        </div>     
        
        
        `
        document.getElementById('loader1').style.display = "none";
        
            document.getElementById('content').innerHTML = str;

        }




    }
    Data_Home.send()


    const agency = new XMLHttpRequest();
    agency.open('GET','Data/Agencies.txt',true);
agency.onload = function (){

        let Agency = this.responseText
        document.getElementById('center_').innerHTML =
        Agency;
    }

    agency.send()

}
