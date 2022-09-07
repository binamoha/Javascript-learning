//Boucle for : Je sais à l'avance le nombre d'itérations que je veux faire
// for (let i=0;i<=10;i++){ //i est ma variable compteur : elle me permet de controler ma boucle
//     /*3 instructions dans les parenthèses :
//         - Déclaration et initilaisation de la variable compteur 
//         - Définition de la condition d'arret 
//         - Le pas d'évolution de la variable compteur : commment elle va évoluer ( + ou -)
//         */
    
//     console.log(i)
//     }

//     for (let i=0;i<=100;i++){
//         console.log(i)
//     }
//     for (let i=100;i>=0;i--){
//         console.log(i)
//     }
    
//     let x = parseInt(prompt("ecrire une valeur"))

//     for (var i = 0; i <=12; i++){
//     console.log("x",x*i)
// }
// let tb = ["raouf",true,45,12,87,"chiboub"]

// // console.log(tab[0])
// // console.log(tab[1])
// // console.log(tab[2])



// for(let i=0;i<tab.length;i++){
//     console.log(tab[i])
// }

// for(let i=0;i<tab.length;i++){
//     tab[i] = 2
//     console.log(tab)
// }


// var tab = []
// for(let i=0;i<3;i++){
//     let x = prompt("Donnez une valeur")
//     tab.push(x) 
// }
// console.log(tab)

// var table = ["binta",16, 08, "amel", 79, 66]
// for (i = 0; i<table.length; i++){
//     console.log(table[i])
//     console.log("supprime", table[i])
//     table.shift()
// }
// let x= 0


// while(x<=10) {
//     console.log(x)
//     x++
// }

// let string = prompt("Donnez une chaine de caractère dont la taille est supèrieur à 20 et commence par B ")

// while(string.length < 20 || string[0]!="B" ){

//     string = prompt("Phrase eronnée: Veuillez donner une nouvelle phrase")


// }

// alert("Merci")


// let i = 0 

// while( i<10){
//     console.log(i)
//     i++
// }


// for(i=0;i<10;i++){
//     console.log(i)
// }
// //Dans le for , la variable compteur s'incrémente automatiquement
// // Dans le while , il faut le faire manuellement

// //Afficher les nombres de 0 à 10
// // let i = 0;


// // do {
// //     console.log(i)
// //     i++
// // }
// // while(i<=10)

// // while(i<=10){
// //     console.log(i)
// //     i++

// // }
// //Afficher les nombres de 10 à 0
// tab = [14,54,78,9,632,554,1.325]

// for (let i=0;i<tab.length;i++){
//     console.log(tab[i])
//     console.log(i)
// }
// console.log("#################################")

// for (let i in tab){
//     console.log(tab[i])
//     console.log(i)
// }

// //EXACTEMENT LA MEME CHOSE

// //La première méthode procure plus de liberté


// i = 10;

// do {
//     console.log(i)
//     i--
// }
// while(i>=0)

// i = 10

// while(i>=0){
//     console.log(i)
//     i--
// }
// let tabEleve = ["Chems","Florine","Binta","Sébastien","Jean-luc"]

// console.log("#################################")

// for (let i in tabEleve){
//     //Affiche les indexs des éléments
//     console.log(i)
// }

// console.log("################################")
// for (let i of tabEleve){
//     //Affiche les valeurs des éléments
//     console.log(i)

// }

// let Eleve = ["Chems","Florine","Binta","Sébastien","Jean-luc"]

// console.log("#################################")

// //Afficher la taille des éléments 


// for (let i in tabEleve){
    
//     console.log(tabEleve[i].length)

    
// }

// console.log("################################")
// for (let i of tabEleve){

//     console.log(i.length)

// }

// function monManuel(){
//     console.log("Je vous presente monManuel")
// }

// function addition(x,y) {
//     console.log("je suis le x :"+x)
//     console.log("je suis le y :"+y)
//     console.log(x+y)
     
// }

// let val1 = 5 
// let val2 = 10//

// addition(val1,val2)

// addition(5,10)

// function addition(x,y) {
//     console.log("je suis le x :"+x)
//     console.log("je suis le y :"+y)
//     console.log(x+y)
     
// }

//  prix1 = 20 
//  prix2 = 10

// soustraction(prix2,prix1)

// soustraction(20,10)
// function soustraction(x,y) {
//     console.log("je suis le x :"+x)
//     console.log("je suis le y :"+y)
//     console.log(x-y)
// }

// function multiple(x,y){
//     return(x*y)
//   }
  
//   total = multiple(15,20)
//   console.log(total)

//   function affichageTableau(tableau) {

//     for (let i in tableau){
//         console.log(tableau[i])
//     }
        
// }


// tab = [45,58,6,7,52,465,245]

// tab2 = ["raouf",true,false,[45,58,58]]

// affichageTableau(tab)
// affichageTableau(tab2)

// //Définition de fonction
// function affichageTableau(tableau) {

//     for (let i in tableau){
//         console.log(tableau[i])
//     }
        
// }


// tab = [45,58,6,7,52,465,245]

// tab2 = ["raouf",true,false,[45,58,58]]

// affichageTableau(tab)
// affichageTableau(tab2)

// function calculatrice()

//Méthode 1
function calculatrice(op1,op2,opr) {

    switch(opr){
        case "+":
            res = parseInt(op1) + parseInt(op2) 
            break;
        
        case "-" :
            res = op1 - op2
            break;
        
        case "*":
            res = op1 * op2
            break;
    
    
        case "/":
            if (op2!=0){
                res = op1/op2
            }
            else {
                alert("Erreur Division par zéro")
            }
        break;
    
        default:
            alert("Opérateur non reconnu")
    
    }
    return res
    }
    
    var resultat = calculatrice(245,27,"/")
    console.log(resultat)
    // [16:44]

    //Méthode 2
    function addition(x, y) {
        return x + y;
      }
      function subtraction(x, y) {
        return x - y;
      }
      function multiplication(x, y) {
        return x * y;
      }
      function division(x, y) {
        return x / y;
      }
    
    
    
    function calculatrice(op1,op2,opr) {
    
    switch(opr){
        case "+":
            res = addition(op1,op2) 
            break;
        
        case "-" :
            res = subtraction(op1,op2)
            break;
        
        case "*":
            res = multiplication(op1,op2)
            break;
    
    
        case "/":
            if (op2!=0){
                res = division(op1,op2)
            }
            else {
                alert("Erreur Division par zéro")
            }
        break;
    
        default:
            alert("Opérateur non reconnu")
    
    }
    return res
    }
    
    var resultat = calculatrice(245,27,"/")
    console.log(resultat)