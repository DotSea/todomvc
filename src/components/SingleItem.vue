<template>
  <li
    v-for="(item, key) in messages"
    :key="key"
    :data-key="key"
    :class="{ completed: item.isCompleted, editing: item.editStatus }"
    @dblclick="openEditMode($event)"
    @focusout="closeEditMode($event)"
    @keyup.enter="closeEditMode($event)"
  >
    <div
      class="view"
      :data-key="key"
      v-if="this.inWhichPage === '/all' || item.isCompleted === (this.inWhichPage === '/completed')"
    >
      <input
        :data-key="key"
        class="toggle"
        :checked="item.isCompleted"
        type="checkbox"
        @click="completeSingleItem($event)"
      />
      <label :data-key="key">{{ key + 1 }}. {{ item.text }}</label>
      <button :data-key="key" class="destroy" @click="deleteSingleItem($event)"></button>
    </div>
    <input :data-key="key" class="edit" v-model="item.text" />
  </li>
</template>

<script>
export default {
  name: 'SingleItem',
  props: ['messages', 'completeSingleItem', 'deleteSingleItem', 'openEditMode', 'closeEditMode'],
  computed: {
    inWhichPage() {
      let inWhichPage = '/all';
      if (this.$route.path === '/active') {
        inWhichPage = '/active';
      } else if (this.$route.path === '/completed') {
        inWhichPage = '/completed';
      }
      return inWhichPage;
    },
  },
};
</script>
