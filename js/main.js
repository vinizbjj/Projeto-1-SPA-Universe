import { home, about, explorer } from "./elements.js";

export default class Starting {
    menu(ValuePath) {
        if (ValuePath == "/") {
            home.classList.add("active");
        } else {
            home.classList.remove("active");
        }

        if (ValuePath == "/about") {
            about.classList.add("active");
        } else {
            about.classList.remove("active");
        }

        if (ValuePath == "/explorer") {
            explorer.classList.add("active");
        } else {
            explorer.classList.remove("active");
        }
    }
}