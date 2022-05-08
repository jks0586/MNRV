import letscmsrest from "./rest";
const  suburl="/category";
class CategoryService{
    allCategories(){ 
        return letscmsrest.get(suburl);
    }
    creteCategory(data){
        // console.log(data);
        // return data;
        return letscmsrest.post(suburl+'/create',data);
    }
    edit(id){
        return letscmsrest.get(suburl+'/'+id);
    }
    parent(id){
        return letscmsrest.get(suburl+'/parent/'+id);
    }
    editCategory(id,data){
        return letscmsrest.put(suburl+'/'+id,data);
    }

}


export default new CategoryService();