import {categories, contents} from "./data";

export const getCategories = () => {
    return categories;
}
export const getContents = (page, cant) => {
    let response = [];
    let aux = cant;
    for(let i = cant * page; i < contents.length; i ++) {
        if(aux > 0 && contents[i])
        response.push(contents[i])
        aux --;
    }
    return response
}

export const getSingleContent = (id) => {
    return contents.find((elem, index) => {
        if(index == id){
            return true
        }
    })
}

export const getContentsByCategory = (page, cant, category) => {

}