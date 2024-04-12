function togglemode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    
    if(html.classList.contains ('light')) {
        img.setAttribute('src', './avatar-light.png')
        Text.setAttribute('alt', 'foto de perfil de um cara de oculos escuro num fundo azul')
    } else {
        img.setAttribute('src', './avatar.png')
        Text.setAttribute('alt', 'foto de perfil de um cara de oculos num fundo laranja')
    }


}