import { ProxyState } from "../SnacksState.js";
import Value from "../Models/Snacks.js";
//determines if there is enough $$
class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: (.25) })]
  }

  
  makeCoin() {
    let coin
    console.log(coin)
  }
}

export const valuesService = new ValuesService();

