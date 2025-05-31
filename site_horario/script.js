window.addEventListener("load", carregar)

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'modelo/img/fotomanha.png'
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "modelo/img/fototarde.png"
        document.body.style.background = "#b9846f"
    } else {
        img.src = "modelo/img/fotonoite.png"
        document.body.style.background = "#515154"
    }
}

