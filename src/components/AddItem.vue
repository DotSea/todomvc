<template>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    v-model="this.temp"
    @keyup.enter="emit"
  />
</template>
<style></style>
<script>
export default {
  name: 'AddItem',
  emits: {
    emitText: (item) => typeof item === 'object',
  },
  data() {
    return {
      temp: '',
    };
  },
  methods: {
    emit() {
      if (this.message.text !== '') {
        this.$emit('emitText', this.message);
        this.temp = '';
      }
    },
  },
  computed: {
    message() {
      const message = {};
      message.text = this.temp;
      message.isCompleted = false;
      message.editStatus = false;
      return message;
    },
  },
};
</script>
