let menuVisible = false;

//Funcion que pculta o muestra el menu, Auxilio :'(

function mostrarOcultarMenu(){
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciono la opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

/*modal*/

/*Modal 1 */
const modalIntro = document.getElementById("intro");
const modal1 = document.getElementById("modal1");
const closeModal = document.getElementById("closeModal");

const showRegisterModal = () => {
    modal1.classList.toggle('is-active')
};

modalIntro.addEventListener('click', showRegisterModal);
closeModal.addEventListener('click', showRegisterModal);

/*Modal 2 */
const card1 = document.getElementById("card1");
const modal2 = document.getElementById("modal2");
const closeModal2 = document.getElementById("closeModal2")

const modalUniverso = () => {
    modal2.classList.toggle('is-active')
};

card1.addEventListener("click", modalUniverso);
closeModal2.addEventListener("click", modalUniverso);

/*Modal 3*/
const card2 = document.getElementById("card2");
const modal3 = document.getElementById("modal3");
const closeModal3 = document.getElementById("closeModal3")

const modalPlaneta = () => {
    modal3.classList.toggle('is-active')
};

card2.addEventListener("click", modalPlaneta);
closeModal3.addEventListener("click", modalPlaneta);

/*Modal 4*/
const card3 = document.getElementById("card3");
const modal4 = document.getElementById("modal4");
const closeModal4 = document.getElementById("closeModal4")

const modalEstrella = () => {
    modal4.classList.toggle('is-active')
};

card3.addEventListener("click", modalEstrella);
closeModal4.addEventListener("click", modalEstrella);

/*Modal 5*/
const conclu = document.getElementById("conclu");
const modal5 = document.getElementById("modal5");
const closeModal5 = document.getElementById("closeModal5")

const modalConclusion = () => {
    modal5.classList.toggle('is-active')
};

conclu.addEventListener("click", modalConclusion);
closeModal5.addEventListener("click", modalConclusion);