<template>
  <div>
    <header>
      <p class="top">研修生編集確認</p>
    </header>

    <main>

      <div>
        <p>下記の情報に編集します。よろしいですか？</p>
      </div>

      <div class="eee">
      <div class="fff">
        <label for="id" class="iii">ID</label>
        <span class="lll">{{ inputValue1 }}</span>
      </div>
      <div class="ggg">
        <label for="name" class="jjj">名前</label>
        <span class="mmm">{{ inputValue2 }}</span>
      </div>
      <div class="hhh">
        <label for="email" class="kkk">メールアドレス</label>
        <span class="nnn">{{ inputValue3 }}</span>
      </div>
      <div class="hhh">
        <label for="email" class="kkk">プロフィール画像</label>
        <span class="nnn">{{ inputValue4 }}</span>
      </div>
      </div>

      <div class="ccc">
        <button @click="register" class="aaa">確認</button>
        <button @click="cancel" class="bbb">キャンセル</button>
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

<style scoped>
header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}
.aaa{
  margin-right: 10px;
  color: white;
  background-color: blue;
  border-radius: 10px;
}
.bbb{
  margin-right: 10px;
  color: white;
  background-color: black;
  border-radius: 10px;
}
.ccc{
  margin-top: 150px;
}
main{
  position: relative;
  height: 300px;
  width:400px;
  margin: 0 auto;
}
.eee{
  position: relative;
}
.fff{
  position: relative;
position: absolute;
top:30px;
}
.ggg{
  position: relative;
position: absolute;
top:60px;
}
.hhh{
  position: relative;
position: absolute;
top:90px;
}



.iii{
  position: absolute;
  left:30px;
  width: 200px;
  text-align: right;
}
.jjj{
  position: absolute;
  left:30px;
 width: 200px;
 text-align: right;
}
.kkk{
  position: absolute;
  left:30px;
  width: 200px;
  text-align: right;
}
.lll{
  position: absolute;
  left:250px;
  width: 100px;
  text-align: left;
}
.mmm{
  position: absolute;
  left:250px;
  width: 100px;
  text-align: left;
}
.nnn{
  position: absolute;
  left:250px;
  width: 100px;
  text-align: left;
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