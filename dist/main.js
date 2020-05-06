
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
    let ingredients = $(this).closest(`div`).find(`p`).text()
    ingredients = ingredients.split(`:`)
    console.log(ingredients[1].split(`,`)[0])
})