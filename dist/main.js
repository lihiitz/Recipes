$(`button`).on(`click`, function(data){
    const ingredient = $(`input`).val()
    $.get(`/recipes/${ingredient}`, function(res){
        let recipes = res
        console.log((recipes));
    })
})