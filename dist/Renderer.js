class Renderer{

    constructor(){
        this.source = $(`#container-template`).html()
        this.template = Handlebars.compile(this.source)
    }

    render(data){
        const newHtml = this.template({recipe: data})
        $(`#container`).append(newHtml)
    }
}