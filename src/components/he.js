<div class="item">
          <div>{{item.name}}</div>
          <div class="fonts">
            <button @click="deletedShoppingList(item._id)">
              <font-awesome-icon class="trash" icon="trash" />
            </button>

            <button>
              <font-awesome-icon icon="edit" />
            </button>
          </div>
        </div>