
// Déplacements non opti

//Lignes 1, 3, 5: 

putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();

//Changements de direction:

//Gauche
turnLeft();
move();
turnLeft();

//Droite
turnRight();
move();
turnRight();

//Lignes 2 & 4 :

move();
putBeeper();
move();
move();
putBeeper();
move();



function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }