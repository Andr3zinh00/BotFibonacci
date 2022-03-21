import Twit from "twit";
import config from "./config";
const bot = new Twit(config);
// const _30_MIN = 1800000;
const _15_MIN = 9.00000;
const map: { [x: number]: boolean } = {};
(function () {
  let a = 5.150248633448867e+298;
  let b = 8.333277339432965e+298;
  let aux;
  function fib() {
    aux = b;
    if (a === Infinity) {
      twetta(`É isso, o Javascript só me permite escrever números até: ` + aux);
      return process.exit();
    }
    twetta(a);
    b = a + b;
    a = aux;
    setTimeout(fib, _15_MIN);
  }
  fib();
  function twetta(status: number | string) {
    const pos = map[status as number];
    bot
      .post("statuses/update", { status: String(pos ? status + "_" : status) })
      .then(() => {
        map[status as number] = true;
      })
      .catch(console.warn);
  }
})();
