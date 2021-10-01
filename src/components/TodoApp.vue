<template>
  <AddItem @emit-text="addMessage" />
  <ListContainer
    :messages="messages"
    :completeAllItems="completeAllItems"
    :completeSingleItem="completeSingleItem"
    :deleteSingleItem="deleteSingleItem"
    :openEditMode="openEditMode"
    :closeEditMode="closeEditMode"
    :isAllCompleted="isAllCompleted"
  />
  <footer class="footer" v-if="this.messages.length !== 0">
    <span class="todo-count"
      ><strong>{{ this.ActiveMessage.length }}</strong> item left</span
    >
    <div id="nav">
      <ul class="filters">
        <li><router-link to="/all">All</router-link></li>
        <li><router-link to="/active">Active</router-link></li>
        <li><router-link to="/completed">completed</router-link></li>
      </ul>
    </div>
    <button v-if="!isAllActive" class="clear-completed" @click="deleteCompletedItem">
      Clear completed
    </button>
  </footer>
</template>

<script>
import AddItem from '@/components/AddItem.vue';
import ListContainer from '@/components/ListContainer.vue';

export default {
  name: 'TodoApp',
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    addMessage(temp) {
      this.messages.push(temp);
    },
    completeAllItems() {
      if (this.isAllCompleted === true) {
        this.messages.forEach((item) => {
          item.isCompleted = false;
        });
      } else {
        this.messages.forEach((item) => {
          item.isCompleted = true;
        });
      }
    },
    completeSingleItem(e) {
      this.messages[e.target.dataset.key].isCompleted = !this.messages[e.target.dataset.key]
        .isCompleted;
    },
    deleteSingleItem(e) {
      this.messages.splice(e.target.dataset.key, 1);
    },
    deleteCompletedItem() {
      this.messages = this.ActiveMessage;
    },
    openEditMode(e) {
      this.messages[e.target.dataset.key].editStatus = true;
    },
    closeEditMode(e) {
      this.messages[e.target.dataset.key].editStatus = false;
      if (this.messages[e.target.dataset.key].text === '') {
        this.deleteSingleItem(e);
      }
    },
  },
  watch: {
    messages: {
      handler(newValue) {
        if (localStorage.messages !== null) {
          const parsed = JSON.stringify(newValue);
          localStorage.setItem('messages', parsed);
        }
      },
      deep: true,
    },
  },
  computed: {
    ActiveMessage() {
      return this.messages.filter((item) => item.isCompleted === false);
    },
    isAllCompleted() {
      return this.messages.every((item) => item.isCompleted === true);
    },
    isAllActive() {
      return this.messages.every((item) => item.isCompleted === false);
    },
  },
  mounted() {
    if (localStorage.messages) {
      this.messages = JSON.parse(localStorage.getItem('messages'));
    } else {
      this.messages = [];
    }
  },
  components: {
    AddItem,
    ListContainer,
  },
};
</script>
