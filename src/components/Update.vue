<template>
  <div>
    <header>
      <p class="top">研修生編集</p>
    </header>
    <main>
      <div>
        <p>ID</p>
        <p>{{ inputValue1 }}</p>
        <p>名前</p>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <p>メールアドレス</p>
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
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  computed: {
    inputValue1() {
      const store = useStore();
      return store.inputValue1;
    },
  },
  methods: {
    register() {
      const store = useStore();
      store.setInputValues(this.inputValue1, this.name, this.email, '');
      this.$router.push('/update_confirm');
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
      <p class="top">研修生編集</p>
    </header>
    <main>
      <div>
        <p>{{ inputValue1 }}</p>
        <p>名前</p>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <p>メールアドレス</p>
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
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  computed: {
    inputValue1() {
      const store = useStore();
      return store.inputValue1;
    },
  },
  methods: {
    register() {
      // 確認ボタンの処理を追加
    },
    cancel() {
      // キャンセルボタンの処理を追加
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

