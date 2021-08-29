<template>
    <main class="main">
        <div class="container">
            <div class="addcategory">
                <h1>Select Product Categories</h1>
                <p>Choosing the best products ensure that you see the most apporpiate fields for your products. Browse the products directoly or use search</p>
                <form>
                    <label>Favourites</label>
                    <input type="text" placeholder="You haven't added any favourite categories yet" v-model="favouriteCat" />
                    <label>Search</label>
                    <input type="text" v-model="categoryKey" placeholder="Search for a category" class="search"/>
                    <button class="productsearch" @click.prevent="findCategory"><i class="fa fa-search" aria-hidden="true"></i></button>
                     <label>Browse</label>
                    <select v-model="selectCat" v-if="categories">
                        <option value="">Select a category</option>
                        <option v-for="option in categories.DATA" :value="option._id" :key="option._id">{{option.name}}</option>
                    </select>
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import UserService from '../../services/user.service.js';
export default {
    data(){
        return {
            categories : '',
            selectCat: '',
            categoryKey:''
        }
    },
    mounted(){
        UserService.getCategories().then(
        (response) => {
         if(response.data.DATA.length > 0){
            this.categories = response.data;
          }
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    methods:{
        findCategory(){
           
             let catname = this.categories.DATA.find(cat=>{
                 console.log(cat.name, this.categoryKey)
                 return cat.name.toLowerCase() == this.categoryKey
             })
            console.log(this.categoryKey, this.selectCat, catname)
        }
    }
}
</script>
<style scoped>
.main{
    padding: 10vw 0;
}
.addcategory{
    width: 70%;
    margin: 0 auto;
}
p{
    font-size: 18px;
}
form label{
    display: block;
    font-size: 24px;
    margin: 40px 0 10px 0;
}
form input, form select{
    width: 92%;
    padding: 10px 20px;
    border: 1px solid #EAEDED;
    height: 56px;
}
button.productsearch {
    background: #EAEDED;
    height: 56px;
    width: 8%;
    border: 1px solid #C8CACA;
    color: #000;
    color: #C8CACA;
    font-size: 24px;
    line-height: 10px;
    box-sizing: border-box;
    position: relative;
    top: 4px;
    cursor: pointer;
}
.search{
    width: 84%;
}
</style>