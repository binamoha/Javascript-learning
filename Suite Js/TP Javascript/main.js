let op1 = parseInt(prompt("ecrire une valeur"))
console.log(typeof(op1))

let op2 = parseInt(prompt("ecrire une valeur"))
console.log(typeof(op2))

let opr = prompt("Ecrire une valeur")

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

alert("Le résultat de l'opération est : "+ res)