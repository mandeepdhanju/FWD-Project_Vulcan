import "../styles/styles.scss"

function Hamburger(){

    function openMenu(){
        document.body.classList.toggle('show');
      }


    return (

        <button onClick={openMenu} class="hamburger-menu" id="btn-menu">
          <span class="hamburger-menu-content" tabindex="-1">      
	      <span class="sr-only">Menu</span>
	      <span class="bar" id="bar"></span>
          </span>
        </button>
 
      )
  }
  
  export default Hamburger;
