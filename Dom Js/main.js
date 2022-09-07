//Récupérer les éléments selon leur attributs ID
var elt = document.getElementById("myId")

console.log(elt)

var elt2 = document.getElementById("raouf")
console.log(elt2)

var exo = document.getElementById("myjs")
console.log(exo)

var exo1 = document.getElementById("moncode")
console.log(exo1)

//Récupérer tout les élements ayant la classe donnée en paramètre
var articles = document.getElementsByClassName("articles")
console.log(articles[0])


//Le getElementsByClassName retourne toujours une liste, meme si elle contient un seul élément seulement
var flex = document.getElementsByClassName("flex")
console.log(flex[0])

//Récupérer les élements selon leur nom de balise 
//Ici on récupère tout les spans
var spans = document.getElementsByTagName("span")
console.log(spans)

//Afficher le dernier span
console.log(spans[spans.length-1])
// Retourne le premier élement trouvé
var nouille = document.querySelector(" div#myId.article > p > span > a#raouf")

console.log(nouille)

//Retourne un tableau de tout les éléments qui correspondent
var nouilles = document.querySelectorAll("p > span")

console.log(nouilles)

var nouille = document.querySelector(" a[href]")

console.log(nouille)

// Démonstration : 
// - Retourner la balise contenant le Lien 9 avec le querySelector 
//( en étant le plus précis possible )Retourner toutes les balises 
//a contenant un href (avec le querySelectorALL) et les afficher
//UNE PAR UNE ( utiliser la fonction codé précédemment :p)
// var lienNeuf = document.querySelector("body > div#myId.article.important > p > span > a.article[href]")
// console.log(lienNeuf)

// var balises = document.querySelectorAll("a[href]")

// for(i in balises){
//     console.log(balises[i])
// }
 
// let div = document.getElementsByTagName("div")[0];

// let divEnfant = div.children //Liste contenant tout les enfants de la balise div 
// console.log(divEnfant);

// let premierEnfant = div.firstElementChild
// console.log(premierEnfant)

// let dernierEnfant = div.lastElementChild
// console.log(dernierEnfant)
// Moi à Tout le monde (14:22)
// Je reviens ds 10mn
// Nadia à Tout le monde (14:25)
// oui
// Raouf Chiboub à Tout le monde (14:36)
// let p2 = div.children[1]
// //let p2 = document.querySelector("div > p.article") 
// //let p2 = document.querySelectorAll("p")[1]
// //let p2 = document.querySelectorAll("p.article")[0]
// //let p2 = document.getElementsByTagName("p")[1]
// //let p2 = document.getElementsByClassName("article")[1]
// Raouf Chiboub à Tout le monde (14:38)
// let div = document.getElementsByTagName("div")[0];
// console.log(div)

// let divEnfant = div.children //Liste contenant tout les enfants de la balise div 
// console.log(divEnfant);

// let premierEnfant = div.firstElementChild
// console.log(premierEnfant)

// let dernierEnfant = div.lastElementChild
// console.log(dernierEnfant)


// console.log(premierEnfant.parentElement) // retour vers la div 


// let p2 = div.children[1]
// //let p2 = document.querySelector("div > p.article") 
// //let p2 = document.querySelectorAll("p")[1]
// //let p2 = document.querySelectorAll("p.article")[0]
// //let p2 = document.getElementsByTagName("p")[1]
// //let p2 = document.getElementsByClassName("article")[1]

// let p1 = p2.previousElementSibling //Grand frère : Element du meme degrés qui vient avant
// let p3 = p2.nextElementSibling // Petit frère : Element du meme degrés qui vient aprés

// console.log(p1)
// console.log(p3)

// let div = document.getElementsByTagName("div")[0];
// let p2 = div.children[1]
// //let p2 = document.querySelector("div > p.article") 
// //let p2 = document.querySelectorAll("p")[1]
// //let p2 = document.querySelectorAll("p.article")[0]
// //let p2 = document.getElementsByTagName("p")[1]
// //let p2 = document.getElementsByClassName("article")[1]

// Raouf - JavaScript — Aujourd’hui à 14:56
// let premierA = document.querySelectorAll(" div > p.article > span > a[href]")[1];
// console.log(premierA)

// let span1 = premierA.parentElement
// console.log(span1)

// let p2 = span1.parentElement
// console.log(p2)

// let p1 = p2.previousElementSibling
// console.log(p1)

// let dernierSpan = p1.lastElementChild
// console.log(dernierSpan)

// let monA = dernierSpan.children[0]
// console.log(monA)

// Raouf - JavaScript — Aujourd’hui à 15:22
// ###########################
// Récupérer contenu textuel : 
// let tombouctou = document.getElementsByTagName("a")[0];

// let contenuTextuel = tombouctou.textContent //Récupère le contenu textuel

// console.log(contenuTextuel);

// //console.log(document.getElementsByTagName("a")[0].textContent)


// //On peut modifier le contenu textuel
// tombouctou.textContent = " Magie ! Ca a changé"
//  (modifié)

// Raouf - JavaScript — Aujourd’hui à 15:30
// Récupérer le contenu HTML : 
// let tombouctou = document.getElementsByTagName("span")[0];

// let contenuTextuel = tombouctou.textContent //Récupère le contenu textuel

// console.log(contenuTextuel);

// //console.log(document.getElementsByTagName("a")[0].textContent)


// console.log(tombouctou.innerHTML) //Affiche le contenu HTML
// tombouctou.innerHTML = "<div><a style=\"color:red\" href=\"#\">Lien 1</a></div>"

// console.log(tombouctou.innerHTML)

// let span2 =  document.getElementsByTagName("span")[1];

// //Changer la couleur du background du span 2 en vert
// span2.style.backgroundColor = "green"
// //span2.style.backgroundColor = rgb(0,128,0)
// //span2.style.backgroundColor = "#008000"

// //Changer la couleur du texte en rouge
// span2.style.color = "red"

// //Changer la taille du texte
// span2.style.fontSize = "100px"

 let newButton = document.createElement("button");
 newButton.textContent = "Yellow";

document.body.append(newButton);

 let yellowButton = document.querySelector("button:nth-of-type(4)");

 yellowButton.addEventListener("click", () => {
   document.querySelector("div").style.color = "yellow";
 });


// newButton = document.createElement("button")
// newButton.textContent = "red"

// document.body.append(newButton)

// let redButton = document.querySelector("button:nth-of-type(5)")

// redButton.addEventListener("click",() => {
//     document.querySelector("div").style.color = "red"
// })

