const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `

<link href="css/other.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap.min.css.map" rel="stylesheet">
<script type="text/javascript" src="js/colour.js"></script>
<script type="text/javascript" src="js/navbar.js"></script>

<footer class="container-fluid text-bg-dark">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top">
            <div class="col mb-3">
                <a href="#" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src="img/logo.png" alt="Logo" style="max-width: 150px; max-height: 150px;">
                </a>
                <p class="text-body-secondary">&copy; 2023</p>
            </div>


            <div class="col mb-3">
                <h5>Contact Us</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">Churches Action for the Homeless,
                        188-190 High Street,
                        Perth, PH1 5PA</li>
                    <li class="nav-item mb-2"> </li>
                    <li class="nav-item mb-2">Main Number: 01738 580188</li>
                    <li class="nav-item mb-2">Day Centre: 01738 633077</li>
                    <li class="nav-item mb-2">Tayview House: 01738 479606</li>
                    <li class="nav-item mb-2">Charity Shop: 01738 580665</li>
                    <li class="nav-item mb-2"> </li>
                    <li class="nav-item mb-2">CATH is a registered charity: SC021740</li>
                </ul>
            </div>
            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5>Legalities</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="link p-0 text-body-secondary">Cookies</a>
                    </li>
                    <li class="nav-item mb-2"><a href="#" class="link p-0 text-body-secondary">Privacy Policy</a>
                    </li>
                    <li class="nav-item mb-2"><a href="#" class="link p-0 text-body-secondary"></a>
                    </li>
                </ul>
            </div>

            <div class="col mb-3">

            </div>
        </div>
    </footer>`;

class Footer extends HTMLElement {
  constructor() {
    super();   
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
