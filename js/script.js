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

            this.currentX = -1;
            this.currentY = 0;
            this.nextMoveX = 1;
            this.nextMoveY = 0;

            this.serpentLongueur = 1;
            this.tblCarreSerpent = [];
            this.vitesse = 250;
            this.timing = setInterval(this.controleSerpent.bind(this),this.vitesse);

            document.addEventListener("keydown", this.verifTouche.bind(this));


        }

        verifTouche(_evt) {

            var evt = _evt
            this.deplacement(evt.keyCode);
        }

        deplacement(dirCode) {

            switch (dirCode){
                case 37:
                    this.nextMoveX = -1;
                    this.nextMoveY = 0;
                    break;
                case 38:
                    this.nextMoveX = 0;
                    this.nextMoveY = -1;
                    break;
                case 39:
                    this.nextMoveX = 1;
                    this.nextMoveY = 0;
                    break;
                case 40:
                    this.nextMoveX = 0;
                    this.nextMoveY = 1;
                    break;

            }

        }

        controleSerpent() {

            var nextX = this.currentX + this.nextMoveX;
            var nextY = this.currentY + this.nextMoveY;

            this.dessineCarre(nextX,nextY);
            this.currentX = nextX;
            this.currentY = nextY;
        }


        dessineCarre(x, y) {

          var unCarre =   [this.leJeu.s.rect(x * this.leJeu.grandeurCarre, y * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre),x , y];

          this.tblCarreSerpent.push(unCarre);

          if(this.tblCarreSerpent.length > this.serpentLongueur){
              this.tblCarreSerpent[0][0].remove();
              this.tblCarreSerpent.shift();
          }
        }

        supprimeSerpent() {


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
