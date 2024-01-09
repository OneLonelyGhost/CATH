const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<link href="css/other.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap.min.css.map" rel="stylesheet">
<script type="text/javascript" src="js/colour.js"></script>
<script type="text/javascript" src="js/navbar.js"></script>

<style>



</style>


<header class="bg-light">
        <nav class="navbar navbar-expand navbar-light bg-light nav-first-row" aria-label="navbar first row">
            <div class="container-xl">
                <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="Logo"
                        style="max-width: 150px; max-height: 150px;"></a>

                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <div class="alert alert-danger mt-3 px-2 hover">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link alert-link" href="#">Donate</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-8">
                    </div>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>

        
    </header>
    
    <script>
        navStick('.nav-second-row', '.nav-items');
    </script>`;

class Header extends HTMLElement {
  constructor() {
    super();   
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
