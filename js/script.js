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
            this.finPartie();
            this.affichagePointage(1);
            this.pomme = new Pomme(this);
            this.serpent = new Serpent();
        }

        finPartie() {

            if (this.pomme !== undefined) {
                this.pomme.supprimePomme();
            }

        }

        affichagePointage(_lePointage) {

            this.sortiePointage.innerHTML = _lePointage;

        }
    }


//Objet Le serpent
    class Serpent {
        constructor(_leJeu) {
            console.log("serpent");

            this.leJeu = _leJeu;

        }

        verifTouche(evt) {

        }

        deplacement(dirCode) {

        }

        controleSerpent(){

        }


        dessineCarre(x,y){

        }

        supprimeSerpent(){


        }
    }


//Objet La pomme


    class Pomme {

        constructor(_leJeu) {
            console.log("pomme");

            this.leJeu = _leJeu
            this.pomme = [];

            this.ajoutePomme();
        }

        ajoutePomme() {

            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: "red"}), posX, posY];

        }

        supprimePomme() {

            this.pomme[0].remove();


        }
    }


    let unePartie = new Jeu("#jeu", "#pointage");

    let btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie() {
        unePartie.nouvellePartie();
    }


});
