print("charAt", true)
print("Pega caractere de uma posição específica")

let nome = "Verônica"; 
let primeira = nome.charAt(0)
print( primeira )
print ( nome.charAt(3) )
print( nome.charAt( nome.length-1 )) // Ultima

print("endswith", true)
print("Verifica se uma string termina com um texto especifico")
let texto = "João Ribeiro da Silva"
if ( texto.endsWith("Silva")) {
    print("Termina com Silva")
} else {
    print("Não termina com Silva")

}

print("includes", true)
print("Verifica se uma string possui um texto específico dentro dela")
texto = "Instituo Federal do Triângulo Mineiro";
if ( texto.includes("Federal", 20) ) {
    print("Inclui o texto")
} else {
    print ("Não inclui")
}

print("indexOf", true)
print("Verifica se uma string contém um texto específico e, se tiver, retorna a sua posição de início")
texto = "Um caminhão partiu com destino ao Maranhão";
let pos = texto.lastIndexOf("nhão")
print(pos)

print("replace". true)
print("Substitui parte de uma string por outro texto")
texto = "Instituto Federal do Triângulo Minero";
let substituido = texto.replace("Triângulo", "Quadrado")
print(substituido)

print("split", true)
print("Separa uma string em pedaços, usando um separador e os transforma em um Array")
texto = "Isy| 17| Ituiutaba | Informática"
let info = texto.split("|") 
print(info)
print(info[0])

print("substring", true)
print("Retorna parte de uma string. Requer a posição de início e a posição de fim")
texto = "Instituo Federal do Triângulo Mineiro"; 
let parte = texto.substring(10, 17);
print(parte)


function print(msg, titulo) {
    let box = document.querySelector("#box")

    if ( titulo != undefined ) {
       box.innerHTML += "<h4>" + msg + "</h4>";
    } else {
        box.innerHTML += msg + "<br />";
    }
  
}

print("toLowerCase", true)
print("Transforma todo o texto em minúsculo")
texto = "Instituto Federal do Trinângulo Mineiro";
print(texto.toLowerCase())

print("toUpperCase", true)
print("Transforma todo o texto em maiúsculo")
texto = "Instituto Federal do Triângulo Mineiro";
print(texto.toUpperCase())

print("trim", true)
print("Retira espaços e quebras de linha das extremidas de um texto")
texto = "Maria"
let sobrenome = "Silva"
let nomeCompleto = nome.trim() + sobrenome;
print(nomeCompleto)








