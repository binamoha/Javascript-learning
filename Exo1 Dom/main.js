
//  var article = document.getElementById("main-content")
//  console.log("article")

//  var important = document.getElementsByClassName("important")
// for(i in important){
//   console.log(important[i])
// }

// var bal = document.getElementsByTagName("li")
// for(i in bal){
//   console.log(bal[i])
// }
// function afficheTab(tabli){
// for (var i = 0 ; i < tabli.length; i++)
// console.log(i)
// }
// // Exercice 1: 
// // Dans le fichier "exemple.html" (Celui avec les liens )
// // 1-Récupérer tout les balises de types span 
// // 2-Leur ajouter les classes " test" et " important "
// // 3- Modifier le contenu des 5 premières Balises en remplacant leur contenu par "J'ai été modifié + numéro de la balise " en gras ( balise <b></b>) 
// // 4- Modifier le contenu des 4 dernières balises en écrivant " Nous ne sommes pas en gras "
// // 5-Se mettre sur la 3 ème balise p , à partir de là retrouver la 6 ème balise span 
// // 6-Vérifier si elle contient la classe important , si oui la remplacer par la classe "inutile "
// Correction:
// //1-
// let spans = document.getElementsByTagName("span");
// console.log(spans)

// //2-
// for(let span of spans){
//     span.classList.add("test","important")
//     // span.classList.add("test")
//     // span.classList.add("important")
// }
// console.log(spans)


// //3-
// for(let i=0;i<5;i++){
//     spans[i].innerHTML = "<b> J'ai été modifié "+ i +" </b>"
// }

// //4- 

// for(let i=spans.length-4; i<spans.length; i++){
//     spans[i].textContent = "Je ne suis pas en gras"
// }


// //5-

// let p3 = document.getElementsByTagName("p")[2];
// let span6 = p3.lastElementChild;
// // let span6 = p3.children[p3.children.length-1];
// console.log(span6)


// //6-

// if(span6.classList.contains("important") == true){
//     span6.classList.replace("important","inutile")
// }
// console.log(span6)



// // //Trouver l'élement parent 
// // let ul1 = document.getElementsByTagName("ul")[0];

// // //Création de l'élement ( et de son contenu eventuellement)
// // let li = document.createElement("li");
// // li.textContent = "Element 3.5"

// // //Ajout de l'élement à l'élement parent
// // ul1.appendChild(li); // Ajouter à la fin 
// // // ul1.prepend(li); // Ajouter au début



// // Supprimer un élement

//Trouver l'élement parent 

let ul4 = document.getElementsByTagName("ul")[3];

//Trouver l'enfant qu'on veut supprimer
let li12 = ul4.lastElementChild;
// let li12 = ul4.querySelectorAll("li")[ul4.querySelectorAll("li").length-1];

//Parent supprime son enfant
ul4.removeChild(li12); //
console.log(ul14)