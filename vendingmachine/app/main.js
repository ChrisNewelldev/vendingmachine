import VendingMachineController from "./Controllers/VendingMachineController.js";

class App {
  VendingMachineController = new VendingMachineController();
}

window["app"] = new App();


