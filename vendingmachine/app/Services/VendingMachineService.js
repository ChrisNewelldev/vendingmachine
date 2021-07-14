import { ProxyState } from "../SnacksState.js";
import Value from "../Models/Snacks.js";
//determines if there is enough $$
let coin = 0
class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: (.25) })]
  }

  
  makeCoin() {
    coin = coin + .25
    document.getElementById('coin').innerText = coin
  }
}

export const valuesService = new ValuesService();

