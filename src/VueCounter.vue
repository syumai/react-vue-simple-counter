<template>
  <div class="counter">
    <div class="current-count">
      {{count}}
    </div>
    <div class="button-container">
      <button class="increment" @click="increment">
        +
      </button>
      <button class="increment" @click="decrement">
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    }
  }
};
</script>

