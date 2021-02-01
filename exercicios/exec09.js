function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
        if (notaCorrigida >= 40) {
            console.log(`Aluno APROVADO com nota ${notaCorrigida}`)
        } else {
            console.log(`Aluno REPROVADO com nota ${notaCorrigida}`)
        }

}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

 classificaAluno(100)
 classificaAluno(30)
 classificaAluno(38)
 classificaAluno(88)
 classificaAluno(33)