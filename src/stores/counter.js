// store.js

import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
  }),
  actions: {
    setInputValues(value1, value2, value3, value4) {
      this.inputValue1 = value1;
      this.inputValue2 = value2;
      this.inputValue3 = value3;
      this.inputValue4 = value4;
      console.log(this.inputValue1);
      console.log(this.inputValue2);
      console.log(this.inputValue3);
      console.log(this.inputValue4);
    },
   
  },
});


/*
import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
  }),
  actions: {
    setInputValues(value1, value2,value3) {
      this.inputValue1 = value1;
      this.inputValue2 = value2;
      this.inputValue3 = value3;
      this.inputValue4 = value4;
      console.log(this.inputValue1);
      console.log(this.inputValue2);
      console.log(this.inputValue3);
      console.log(this.inputValue4);
    },
  },
});
*/

/*
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    inputValue1: '',
    inputValue2: '',
  }),
  actions: {
    setInputValues(value1, value2) {
      this.inputValue1 = value1;
      this.inputValue2 = value2;
      console.log(this.inputValue1);
      console.log(this.inputValue2);
    },
  },
});
*/