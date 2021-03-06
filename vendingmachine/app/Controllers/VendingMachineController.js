import { ProxyState } from "../SnacksState.js";
import { valuesService } from "../Services/VendingMachineService.js";

//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.VendingMachineController.makeCoin()">$<span id="coin">0</span></button>
  <button className="btn btn-info" onclick="app.VendingMachineController.addValue()">Return Change</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  makeCoin() {
    valuesService.makeCoin()
  }
}
