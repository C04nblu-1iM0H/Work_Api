const image = document.querySelector(".img");
fetch('https://randomuser.me/api/?key=BJBB-AWKU-US28-BVMQ')
  .then(function(resp){return resp.json()})
  .then(function(data){
    console.log(data);
    image.src = data.results[0].picture['large'];

    let date = new Date(data.results[0].dob['date']);
    document.querySelector('.fistName').textContent = data.results[0].name['first'];
    document.querySelector('.lastName').textContent = data.results[0].name['last'];
    document.querySelector('.age').textContent = data.results[0].dob['age'];
    document.querySelector('.NewDate').textContent = date.toLocaleDateString();
    document.querySelector('.floor').textContent = data.results[0]['gender'];
    document.querySelector('.adress').textContent = data.results[0].location['city'];
    document.querySelector('.phone').textContent = data.results[0]['phone'];
    document.querySelector('.mail').textContent = data.results[0]['email'];
  })
  .catch(function(){

  })