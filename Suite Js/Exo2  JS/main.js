//boucle sur Tableau
// const marque = [
// "bmw", "volvo", "peugeot", "mini"]
// let text = ""

// for (let x of marque){
// text += x + ""
// }
// console.log(marque)
// console.log(text)

// //Boucle sur chaine de caractere
// let language ="javascript"
// //let text = ""

// for (let x of language) {
// text += x + ""
// console.log(language)
// }


// 1-    Ecrire une fonction qui permet de retrouver une balise par rapport à son id ( vous donnerez en paramètre la chaine de caractère de l'id ) .
// 2-    Ecrire une fonction qui prends en paramètre un element et un tableau de 2 couleurs , la première couleur sera celle du texte et l'autre celle du background

//1- Retrouver une balise par rapport à son ID
function findID(id){
    return document.getElementById(id)
}

let p = findID("main-content")
console.log(p)


//2-

function ChangerCouleur(elt,tabCouleur){
    elt.style.color = tabCouleur[0];
    elt.style.backgroundColor = tabCouleur[1];
}

ChangerCouleur(p,["red","green"])


//3-
function ajouterAttr(nomAttr,valAttr,nomClass){
    let elts = document.getElementsByClassName(nomClass)

    // for(let i in elts){
    //     console.log("for in")
    //     console.log(i)
    //     elts[i].setAttribute(nomAttr,valAttr)
    // }

    for(let i of elts){
        // console.log("for of")
        // console.log(i)
        i.setAttribute(nomAttr,valAttr)
    }


}

ajouterAttr("style","background-color:blue","important")


//4-
function textEnfant(elt){
    let enfants = elt.children;

    for(let i in enfants){
        console.log(enfants[i].textContent)
    }

}
var ul2 = document.getElementsByTagName("ul")[1];
textEnfant(ul2)
