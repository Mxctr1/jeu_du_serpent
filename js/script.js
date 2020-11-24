document.addEventListener("DOMContentLoaded", function (event) {

    //Objet pour le jeu
    class Jeu {

        constructor(_idSvg, _idPointage) {

            this.s = Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);
            this.grandeurCarre = 20;
            this.grandeurGrille = 15;

        }

        nouvellePartie() {
            this.affichagePointage(1);
            this.pomme = new Pomme();
            this.serpent = new Serpent();
        }

        finPartie() {


        }

        affichagePointage(_lePointage) {

            this.sortiePointage.innerHTML = _lePointage;

        }
    }


//Objet Le serpent
    class Serpent {
        constructor() {
            console.log("serpent");
        }
    }


//Objet La pomme
    class Pomme {
        constructor() {
            console.log("pomme");
        }
    }


    let unePartie = new Jeu("#jeu", "#pointage");

    let btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie() {
        unePartie.nouvellePartie();
    }


});
