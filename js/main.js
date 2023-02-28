// fetch
// GET POST PUT DELETE
// CRUD
// Create = POST
// Read = GET
// Update = PUT , PATCH
// Delete = DELETE
// alert('hello')

// get all chair

// fetch("http://localhost:5000/chairs")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



async function getChair() {
    const response =  await fetch("http://localhost:5000/chairs")
    const data = await  response.json()
    readHTML (data)
}
getChair();

function readHTML (chairs) {
      let result = ''
      chairs.forEach((chair , index) => {
          result += ` 
               
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3" key="${chair.id}">
              <div class="card border-0" style="padding-top: 15vh;">
                  <div class="card-header border-0" style="background-color: #FAFAFA;" style="height: 200px;">
                      <img 
                       height="280"
                      src="${chair.img}" 
                      class="card-img-top chair-img"
                       alt="error" 
                       style="transform: translateY(-80px)"
                       
                       >
                  </div>
                  <div class="card-body">
                      <h6 class="chair-title">${chair.title}</h6>
                      <h4 class="chair-name">${chair.name}</h4>
                      <div class="d-flex justify-content-between">
                          <span class="chair-price">
                              <sup>$</sup> ${chair.price}
                          </span>
                          <span class="add-cart">+</span>
                      </div>
                  </div>
              </div>
          </div>
                
           `
      })
    document.querySelector('#result').innerHTML = result

}



// function f1(word){
//     console.log(word)
// }
//
// function f2(f2){
//     console.log(f2)
//     f1('f1')
// }
//
// function f3(){
//     console.log('f3')
//     f2('f2')
// }
// f3()









