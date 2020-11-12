const config = require('./config');
const Twit = require('twit');
const bot = new Twit(config);

(function () {

  let a = 0;
  let b = 1;
  let aux;
  function fib() {
    aux = b;
    if (a === Infinity) {
      twetta(`É isso, o Javascript só me permite escrever números até: ` + aux);
      process.exit();
    }
    twetta(a);
    b = a + b;
    a = aux;
    setTimeout(fib, 1500000);
  }
  fib();

  function twetta(status) {
    bot.post('statuses/update', { status })
  }
})();  
