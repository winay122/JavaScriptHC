const time = document.getElementById('clock')


setInterval(function(){
  let date = new Date().toLocaleTimeString()
  time.innerHTML = date
}, 1000)