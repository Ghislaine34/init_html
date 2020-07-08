/**
 * Modal : Gère l'affichage de la boîte modale au clic sur un élément de menu
 */
function openModal(){
    console.log('Je dois ouvrir la boîte modal')

    //récupère le contenu du template #form-template
    const formTemplate = document.getElementById('form-template')
    const templateContent = formTemplate.content.cloneNode(true)

    //raccrocher le contenu à l'élément "body" du document HTML
    document.body.appendChild(templateContent)
}
function closeModal(){
    console.log('je dois fermer la modale')
    const modal = document.getElementsByClassName('outer-modal')[0]
    document.body.removeChild(modal)
}