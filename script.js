function toogleMode() {
  // Document é toda a nossa página do html.
  const html = document.documentElement
  // Podemos fazer de maneira mais simples ainda, todo esse comando do IF ELSE. VEJA :
  html.classList.toggle("light")

  // Le se :
  // Se a lista de classe do HTML conter a STRING light, Remova ela
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // Se a lista de classe do HTML não conter a STRING light, adicione ela
  // } else {
  //   html.classList.add("light")
  // }

  // Pegar a tag IMG
  const img = document.querySelector("#profile img")

  // Substituir a IMG
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se tiver sem light mode, adicionar img dark
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
