// var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

var number = Math.floor(100*Math.random()) + 1; // случайное число от 1 до 10
console.log(number);

var count = 8; // кол-во попыток

document.getElementById('check').onclick = function() {
 if(count > 0) {
  var usernum = document.getElementById('mynum').value; // получим число введенное пользователем
  usernum = parseInt(usernum); // преобразуем в целое число

  var out = document.getElementById('out');
  if(usernum == number) {
   out.innerHTML = 'Верно! Вы угадали!';
  }
  else if(usernum > number) {
   out.innerHTML = 'Меньше'; 
  }

  else if(usernum < number) {
   out.innerHTML = 'Больше';
  }
  
  document.getElementById('count').innerHTML = 'У вас осталось попыток: ' + count;
  count = count - 1;
 }
 else {
  alert('Вы исчерпали кол-во попыток. Страница будет перезагружена.');
  location.reload(); // перезагрузка страницы
 }
}