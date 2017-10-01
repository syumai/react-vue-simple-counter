import React, { Component } from 'react';
import Vue, { observer } from 'react-vue';

const store = new Vue({
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
});

@observer
export default class VueCounter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="current-count">
          {store.count}
        </div>
        <div className="button-container">
          <button className="increment" onClick={() => store.increment()}>
            +
          </button>
          <button className="increment" onClick={() => store.decrement()}>
            -
          </button>
        </div>
      </div>
    )
  }
};
