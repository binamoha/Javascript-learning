console.log("Hello world");
    let tab = [1,2,3,4]
    console.log(tab)

    tab = [15,5,87,"binta",false,true,["abdoul","baba"],12.6]
    console.log(tab)

    //Extraire un sous tableau , deux attributs : index de début , index de fin 
    let soustab = tab.slice(3.6)

    //Supprimer au milieu
    tab.splice(3.3) //Supprimer à partir de l'élement avec index 3 : 3 éléments

    console.log(tab)
    console.log(soustab)

    var x = tab.indexOf("baba")
    // Si "raouf" est dans mon tableau , il me retourne son index
    // Sinon il me retourne la valeur -1

console.log(x)


console.log(tab.indexOf(false))

console.log(tab.indexOf("salut"))

console.log(tab.indexOf("binta")) // -1 car il n'existe pas dans mon tableau principal

tablo = [1,2,3]
console.log(tab)

var item = tablo.slice(1)
console.log(tablo)

tablo[1] = 5
console.log(tablo)

tablo.push(13)
console.log(tablo)

tablo.unshift(14)
console.log(tablo)

tablo.indexOf(3)
console.log(tablo)

tablo[3] = 30
console.log(tablo)

tablo.pop()
console.log(tablo)

console.log(tablo.length)

//Dictionnaire / litéraux d'objet
const monObj = {
    musique : "soul",
   chanteur : "philCollins",
    age : 65,
   ville : "londres"
}


console.log(monObj.chanteur)

console.log(monObj.ville)

console.log(monObj.age)

true && true == true
console.log(true)

//et 
// Le faux qui triomphe toujours
true && true  == true 
true && false == false 
false && true == false 
false && false == false 


//ou 
// Le vrai qui triomphe toujours 
true || true == true 
true || false == true 
false || true == true 
false || false == false

Exercice : 
//Calculer l'opération logique suivant : 
false && ( true || false) && (false || (!true || false)) || true

false && ( true || false) && (false || (!true || false)) || true
false && (true) && (false || (false)) || true
false && (true) && (false) || true
false && true && false || true
false || true
true


//Opérateurs de comparaisons
//>
//>=
//<
//<=
//==
//!=

console.log(5 == "5") //égalité souple : meme valeur , type peut etre différent
//true 

console.log(5 === "5") // égalité stricte : meme valeur, meme type
//false

//Structure conditionnelle if



var x = 10
var y = 20
var z = 30
if(x==y && y==z){
    console.log("Les 3 variables sont identiques")
}
else{
    if(x==y || x==z || y==z){
        console.log("2 des variables sont égales")
    }
    else {
        console.log("les 3 variables sont différentes")
    }
}

const impotRevenu = 18
const assuranceEmploi = 7

var impotTotal = impotRevenu + assuranceEmploi

const individu = {
    nbCharge : 3,
    femme : false, 
    salaireBrut : 28000
}

// var nbEnfantCharge = 3 //
// var femme = true //
// var salaireBrut = 25000 //

if(individu.femme){
    impotTotal -= 2
}

if(individu.nbCharge==3){
    impotTotal -= 1
}
else {
    if (individu.nbCharge==4){
        impotTotal -=2
    }

}
console.log("Impot total :"+impotTotal)

salaireNet = individu.salaireBrut - individu.salaireBrut * impotTotal /100
console.log("Salaire net : "+salaireNet)

var langage = "js"

switch(langage) {
    case "js":
        console.log("Programmation web")
    break;

    case "java":
        console.log("Programmation mobile")
    break;

    case "python":
        console.log("Data science") 
    break; 

    default:
    console.log("Langage non reconnu")

}
let quantity = 2
let unit = "K"
let result

switch(unit){
  case "K":
    result = quantity * (1024)
  break;
console.log("K")

  case "M":
    result = quantity * (1024**2)
  break;
console.log("M")

  case "G":
    result = quantity * (1024**3)
  break;
  console.log("G")

  case "T":
    result = quantity * (1024**4)
  break;
  console.log("T")
}

console.log(result)

//Récupérer une valeur

 x = prompt("Ecrire une valeur")

alert("La valeur de x est : "+x)

//Récupérer une valeur
//Transformer un string en number
 x = parseInt(prompt("Ecrire une valeur"))
console.log(typeof(x))

 y = "12"
console.log(typeof(y))

y = parseInt(y)
console.log(typeof(y))



