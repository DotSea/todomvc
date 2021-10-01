<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      :checked="this.isAllCompleted"
      type="checkbox"
      @click="completeAllItems"
    />
    <label for="toggle-all" v-if="this.messages.length !== 0">Mark all as complete</label>
    <ul class="todo-list">
      <SingleItem
        :messages="messages"
        :completeSingleItem="completeSingleItem"
        :deleteSingleItem="deleteSingleItem"
        :openEditMode="openEditMode"
        :closeEditMode="closeEditMode"
      ></SingleItem>
    </ul>
  </section>
</template>

<script>
import SingleItem from '@/components/SingleItem.vue';

export default {
  name: 'ListContainer',
  props: [
    'messages',
    'completeAllItems',
    'completeSingleItem',
    'deleteSingleItem',
    'openEditMode',
    'closeEditMode',
    'isAllCompleted',
  ],
  components: {
    SingleItem,
  },
};
</script>
