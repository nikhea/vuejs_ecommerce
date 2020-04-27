<template>
  <div>
    <div class="container">
      <h1 class="shoppinglist_header">ShoppingLists</h1>
      <div class="rout__flex">
        <button class="add-list" to="#" @click="model = !model, mbb = !mbb">Add to list</button>
        <router-link class="col__3-7 link" to="/cart">Go back</router-link>
      </div>
      
 
      <div class="move_form" :class="changeClasses">
        <form @submit="addList">
          <textarea v-model="name" placeholder="add to list" required></textarea>
          <button class="button">add</button>
        </form>
      </div>

      <div class="mb">
        <div class="items" v-for="item in AllShoppingLists" :key="item._id">
          <div class="item">
            <div class="item__name">{{item.name}}</div>

            <div class="fonts">
              <!-- <div class="checkbox">
             <input  type="checkbox"/>
              </div>-->
              <div class="fonts">
                <button @click="deletedShoppingList(item._id)">
                  <font-awesome-icon class="icon trash" icon="trash" />
                </button>

                <button disabled>
                  <font-awesome-icon class="icon edit" icon="edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShoppingList",
  data() {
    return {
      model: true,
      mbb: false,
      name:''
    };
  },
  methods: {
    ...mapActions(["fetchShoppingLists", "deletedShoppingList", "addShoppingList"]),
    addList: function(e) {
      e.preventDefault();
      if (this.name === '' || this.name === undefined || this.name === null) {
          alert('can not be empty')
      } else {
           this.addShoppingList(this.name);
      (this.name = "")
      }
   
     
    },
  },
  computed: {
    ...mapGetters(["AllShoppingLists"]),
    changeClasses: function() {
      return {
        model: this.model,
        mbb: this.mbb,
        name: ""
      };
    }
  },
  created() {
    this.fetchShoppingLists();
  }
};
</script>



<style scoped>
.shoppinglist_header {
  margin-top: 50px;
  text-align: center;
  font-weight: normal;
  color: var(--primary-color);
  letter-spacing: 9.2px;
}
.link {
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid rgb(158, 149, 149);
  text-align: center;
  color: var(--semiPrimary-color);

  margin-top: 30px;
  display: inline-block;
  cursor: pointer;
}
.trash {
  color: red;
}
.edit {
  color: blue;
}
.icon:hover {
  color: #333;
  transform: scale(1.1);
}
.fonts {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  top: 50%;
  /* background: rebeccapurple; */
  width: 280px;
  font-size: 20px;
}
.fonts > button {
  margin: 0px 7px;
}
.item__name {
  /* color:red; */
  padding-top: 5px;
  padding-left: 10px;
  text-transform: capitalize;
  margin-top: 20px;
}
.items {
  display: inline-flex;
  /* grid-column: 3/9; */
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  height: 20vh;
  margin: 0px 50px;
  /* padding: 50px ; */
  margin-top: 50px;
  cursor: pointer;
  transition: background 0.5s, transform 2s;
}
.items:hover {
  background: var(--primary-color);
  transform: scale(0.9);
}
.checkbox {
  margin-left: 10px;
}
.rout__flex {
  display: flex;
  justify-content: space-between;
  margin-top: 4em;
}
.add-list {
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.4em;
  margin: 0.6em;
  background: var(--semiPrimary-color);
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
  background: orange;
}
.model {
  top: 850px;
  animation: fadeIn 3s ease-in-out forwards;
  margin-bottom: 50px;
  display: none;
}
.move_form {
  background: orange;
  padding: 20px;
  width: 50vh;
  height: 40vh;
  border-radius: 20px;
  /* box-shadow: 1px 2px 8px 2px; */
}
form > * {
  display: block;
  margin-top: 40px;
}
textarea {
  background: #fff;
  width: 100%;
  height: 15vh;
}

.button {
  margin: 20px 0px;
  padding: 8px;
  border: none;
  font-size: 19px;
  background: #fff;
  display: block;
  width: 100%;
}
.button:hover {
  background: #d88f08;
  color: #fff;
}
</style>





// form {
//   position: absolute;
//   top: 232px;
//   z-index: 1;
//   right: 650px;
//   /* background: #333 */
//   display: block
// }
// textarea {
//   border: 1px solid #333;
//   width: 20vw;
//   height: 15vh;
// }
// .button{
//   display: block;
//   text-align: center;
//   background: #1f1d1d;
//   padding: 10px;
//   width: 100%;
//   color:#fff
// }