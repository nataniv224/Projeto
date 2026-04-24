function toggleMode () {
 const html = document.documentElement
 html.classList.toggle('light')
 // pegar a tag img

 const img = document.querySelector("#profile img") 
  //substituir a imagem
 
  if(html.classList.contains("light")){
    img.setAttribute('src','assets/Avatar-light.png') 
    //mudar alt (descrição da imagem)
    img.setAttribute('alt','foto de Natani')
     //se tiver light mode,adicionar a imagem light
  }
  else{img.setAttribute('src','./assets/Avatar.png')
    //se tiver em dark mode,manter o normal
    //alt alterado
    img.setAttribute('alt','foto de Natani, sorrindo')
  }
}