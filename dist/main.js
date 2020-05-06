
const render = new Renderer()
$(`button`).on(`click`, function(){
    const ingredient = $(`input`).val()
    $.get(`/recipes/${ingredient}`, function(res){
        let recipes = res
        render.render(recipes)
        console.log((recipes));
    })
})
$(`#container`).on(`click`, `img`, function(){
    let ingredients = $(this).closest(`div`).find(`.ingredients`).children()
    console.log(ingredients[0].innerHTML);
    

})