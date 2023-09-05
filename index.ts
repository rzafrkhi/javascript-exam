import {randomNumberEvent,primeNumbersEvent,clearInputValueEvent} from "./src/events.js";
import { randomNumberBtn,primeNumbersBtn, clearInputBtn} from "./src/importer.js";

randomNumberBtn?.addEventListener("click", randomNumberEvent);

primeNumbersBtn?.addEventListener("click", primeNumbersEvent);

clearInputBtn?.addEventListener("click", clearInputValueEvent);
