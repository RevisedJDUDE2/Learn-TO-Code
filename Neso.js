class Neso extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<h1>1.0.76.788</h1>";
        this.style.color = black;

    }
}
customElements.define("Neso", Neso);