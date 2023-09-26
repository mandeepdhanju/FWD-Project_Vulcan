import { NavLink } from 'react-router-dom';
//import "../styles/styles.scss"


function Nav() {

    function closeMenu(){
        document.body.classList.remove('show');
    }

    return(
        <nav onClick={closeMenu}>
            <ul id="nav" class="list-unstyled text-uppercase">
			<li>
				<a href="/about"><span>ABOUT</span></a>
				<ul class="dropdown list-unstyled">
					<li><a href="/about/our-commitment">Our Commitment</a></li>
					<li><a href="/about/our-team">Our Team</a></li>
                    <li><a href="/careers">Careers</a></li>
				</ul>
			</li>
			<li>
				<a href="/products"><span>PRODUCTS</span></a>
			</li>
			<li>
				<a href="/services"><span>SERVICES</span></a>
				<ul class="dropdown list-unstyled">
					<li><a href="/services/engineering">Engineering</a></li>
					<li><a href="/services/manufacturing">Manufacturing</a></li>
				</ul>
			</li>
			<li><a href="/parts"><span>PARTS</span></a></li>
			<li class="  "><a href="/news"><span>NEWS</span></a></li>
			<li class=" ">
				<a href="/contact"><span>CONTACT</span></a>
				<ul class="dropdown list-unstyled">
					<li><a href="/contact/find-sales-rep">Find Sales Rep</a></li>
				</ul>
			</li>
			<li class="visible-xs"><a href="/installation-map"><span>INSTALLATION MAP</span></a></li>
			<li class="visible-xs"><a href="/product-literature"><span>PRODUCT LITERATURE</span></a></li>
		</ul>
       
        </nav>
    )

}
export default Nav;


