<template>
  <div>
    <header>
      <p class="top">研修生新規登録</p>
    </header>

    <main>
      <div>
        <label for="name">名前</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <button @click="register">確認</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from '../stores/counter.js';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    register() {
      const store = useStore();
      store.setInputValues(this.name, this.email);
      
      this.$router.push({
        path: '/create_confirm'
      });
    },
    cancel() {
      this.$router.push('/users');
    },
  },
};
</script>

<style scoped>
header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}
</style>


<!--
<template>
  <div>
    <header>
      <p class="top">研修生新規登録</p>
    </header>

    <main>
      <div>
        <label for="name">名前</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <button @click="register">確認</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    register() {
      this.$router.push({
        path: '/create_confirm',
        query: { name: this.name, email: this.email }
      });
    },
    cancel() {
      this.$router.push('/users');
    },
  },
};
</script>

<style scoped>
header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}
</style>
-->