<template>
  <div>
    <header>
      <p class="top">研修生編集確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します</p>
      </div>
      <div>
        <label for="id">ID</label>
        <span>{{ inputValue1 }}</span>
      </div>
      <div>
        <label for="name">名前</label>
        <span>{{ inputValue2 }}</span>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <span>{{ inputValue3 }}</span>
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
  computed: {
    inputValue1() {
      const store = useStore();
      return store.inputValue1;
    },
    inputValue2() {
      const store = useStore();
      return store.inputValue2;
    },
    inputValue3() {
      const store = useStore();
      return store.inputValue3;
    },
  },
  methods: {
    async register() {
      const store = useStore();
      const id = store.inputValue1;
      const name = store.inputValue2;
      const email = store.inputValue3;

      try {
        const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });

        // 成功した場合の処理を追加

        // Users.vueファイルに戻る
        this.$router.push('/users');

      } catch (error) {
        // エラーが発生した場合の処理を追加
      }
    },
    cancel() {
      // Users.vueファイルに戻る
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
      <p class="top">研修生編集確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します</p>
      </div>
      <div>
        <label for="id">ID</label>
        <span>{{ inputValue1 }}</span>
      </div>
      <div>
        <label for="name">名前</label>
        <span>{{ inputValue2 }}</span>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <span>{{ inputValue3 }}</span>
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
  computed: {
    inputValue1() {
      const store = useStore();
      return store.inputValue1;
    },
    inputValue2() {
      const store = useStore();
      return store.inputValue2;
    },
    inputValue3() {
      const store = useStore();
      return store.inputValue3;
    },
  },
  methods: {
    register() {
      // 確認ボタンの処理を追加
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


<!--
<template>
  <div>
    <header>
      <p class="top">研修生編集確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します</p>
      </div>
      <div>
        <label for="id">ID</label>
        <span>あいうえお</span>
      </div>
      <div>
        <label for="name">名前</label>
        <span>かきくけこ</span>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <span>さしすせそ</span>
      </div>
      <div>
        <button @click="register">確認</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>



<style scoped>
header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}
</style>
-->