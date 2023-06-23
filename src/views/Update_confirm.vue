<template>
  <div>

    <header class="header1">
      <p class="header-font">研修生 編集 確認</p>
    </header>

    <main>

      <div class="top-wrapper">
        <p>下記の情報に編集します。よろしいですか？</p>
      </div>

      <div class="middle-wrapper">

        <div class="middle1-wrapper">
          <p>ID</p>
          <p>名前</p>
          <p>メールアドレス</p>
          <p class="profile">プロフィール画像</p>
        </div>

        <div class="middle2-wrapper">
          <p>{{ inputValue1 }}</p>
          <p>{{ inputValue2 }}</p>
          <p>{{ inputValue3 }}</p>
          <img :src="inputValue4" alt="プロフィール画像">
        </div>

      </div>
      

      <div class="button-wrapper">
        <button @click="register" class="valification">確認</button>
        <button @click="cancel" class="cancel">キャンセル</button>
      </div>

    </main>

    <footer>

    </footer>

  </div>
</template>

<style scoped>
.header1{
  height:80px;
  line-height: 80px;
  border-bottom:3px solid  ;
}
.header-font{
  font-size:30px;
  font-weight: bold;
}
.top-wrapper{
  height: 50px;
  font-size:18px;
  font-weight:bold;
}
.middle-wrapper{
  display: flex;
  width:300px;
  margin: 0 auto;
  font-weight: bold;
}
.middle1-wrapper{
  text-align:right;
}
.middle2-wrapper{
  text-align:left;
  margin-left: 15px;
}
.profile{
  position: relative;
  top: 45px;
}
.button-wrapper{
  margin-top: 50px;
}
.valification{
  width:150px;
  height: 40px;
  color: white;
  background-color: blue;
  border-radius: 40px;
  font-size: 18px;
  margin-right: 15px;
}
.cancel{
  width:150px;
  height: 40px;
  color: white;
  background-color: black;
  border-radius: 40px;
  font-size: 18px;
}

img{
  max-width: 150px;
  max-width: 150px;
}



</style>

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
    inputValue4() {
      const store = useStore();
      return store.inputValue4;
    },
  },
  methods: {
    async register() {
      const store = useStore();
      const id = store.inputValue1;
      const name = store.inputValue2;
      const email = store.inputValue3;
      const icon = store.inputValue4;

      try {
        const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email,icon }),
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