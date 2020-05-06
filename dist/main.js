
const render = new Renderer()
$(`button`).on(`click`, function(data){
    const ingredient = $(`input`).val()
    $.get(`/recipes/${ingredient}`, function(res){
        let recipes = res
        render.render(recipes)
        console.log((recipes));
    })
})