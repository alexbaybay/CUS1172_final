const search = document.getElementById('#searchOption')
// const course =

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#single').onclick = load;
  
});

function load(){
  window.location.reload();

  search.style.display = 'block'
}

const request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:3000/courses');
request.send();

request.onload = function() {
  const data = JSON.parse(request.responseText);
  console.log(data);


  var course = data.Course[0].course;
  var title = data.Course[0].title;

  document.get
}


// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('form').onsubmit = () => {
//     let course = document.querySelector('#course').value;
//     let api_endpoint = `127.0.0.1:3000/courses/qcourse/:${course}`
//
//     const get_api = async(api_endpoint) => {
//       const response = await fetch(api_endpoint);
//       const results = await response.json();
//       let html_response = load(results);
//       document.querySelector('#results').innerHTML = html_response;
//     }
//     get_api(api_endpoint);
//     return false;
//   }
// })
//
// function load(data){
//   let course = document.querySelector('#course').value;
//   //let rooms = document.querySelector('#rooms').value;
//   //let room_price = 0;
//     let course_response = `${course}`
//     return course_response
//   }


//
// const searchOption = document.getElementById('searchOption')
// const single = document.getElementById('single');
// const combo = document.getElementById('combo');
// const search = document.getElementById('search');
// let api_endpoint =
//
// single.addEventListener('click', startSearch);
// combo.addEventListener('click', startCombo);
//
// function startSearch(){
//   searchOption.style.display = 'none'
// }
//
// function startCombo(){
//   searchOption.style.display = 'none'
// }
//
// document..addEventListener('DOMContentLoaded', () => {
//   document.querySelector('form').onsubmit = () => {
//
//   }
// })
