<template>
  <div>
    <header class="header1">
      <p class="header-font">研修生 新規登録 確認</p>
    </header>

    <main>
      <div class="top-wrapper">
        <p>下記の情報で新規登録します。よろしいですか？</p>
      </div>

      <div class="middle-wrapper">
        <div class="middle1-wrapper">
          <p class="name">名前</p>
          <p class="email">メールアドレス</p>
          <p class="profile">プロフィール画像</p>
        </div>
        <div class="middle2-wrapper">
          <p class="name">{{ store.inputValue1 }}</p>
          <p class="email">{{ store.inputValue2 }}</p>
          <img :src="store.inputValue3" alt="プロフィール画像" v-if="store.inputValue3" class="profile">
        </div>
      </div>  

      <div class="button-wrapper">
        <button @click="register" class="varification">確認</button>
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
  width:600px;
  height: 70px;
  margin: 0 auto;
  padding-top:30px;
  font-weight: bold;
}
.middle-wrapper{
  display: flex;
  width:600px;
  height: 300px;
  margin: 0 auto;
  font-weight: bold;
}
.middle1-wrapper{
  text-align: right;
}
.middle2-wrapper{
  text-align: left;
  margin-left: 20px;
}
.name{
height: 50px;
}
.email{
height: 50px;
}
.profile{
height: 50px;
line-height: 50px;
}


.varification{
width: 150px;
height: 50px;
border-radius: 40px;
font-size:20px;
color:white;
background-color: blue;
margin-right: 30px;
}
.cancel{
width: 150px;
height: 50px;
border-radius: 40px;
font-size:20px;
color:white;
background-color: black;
}
img{
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}


</style>

<script>
import { useStore } from '../stores/counter.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const register = () => {
      const name = store.inputValue1;
      const email = store.inputValue2;
      const icon = store.inputValue3;

      // データベースにレコードを追加
      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&icon=${encodeURIComponent(icon)}`
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then(jsonData => {
        // データベースへの追加が成功した場合の処理を記述します
        console.log(jsonData);
        // ルーターリンクを実行して/usersページに移動
        router.push('/users');
      })
      .catch(err => console.error(err));
    };

    const cancel = () => {
      router.push('/users');
    };

    return {
      store,
      register,
      cancel,
    };
  },
};
</script>



<!--
<template>
  <div>
    <header>
      <p class="top">研修生 新規登録 確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します。よろしいですか？</p>
      </div>

     <div class="aaa">
      <div class="bbb">
        <label for="name" class="ddd">名前</label>
        <span>{{ store.inputValue1 }}</span>
      </div>
      <div class="ccc">
        <label for="email" class="ddd">メールアドレス</label>
        <span>{{ store.inputValue2 }}</span>
      </div>
      <div class="ggg">
        <label for="icon" class="ddd">プロフィール画像</label>
        <span>{{ store.inputValue3 }}</span>
      </div>
      
      </div>

      <div>
        <button @click="register" class="eee">確認</button>
        <button @click="cancel" class="fff">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from '../stores/counter.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const register = () => {
      const name = store.inputValue1;
      const email = store.inputValue2;
      const icon = store.inputValue3;

      // データベースにレコードを追加
      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&icon=${encodeURIComponent(icon)}`
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then(jsonData => {
        // データベースへの追加が成功した場合の処理を記述します
        console.log(jsonData);
        // ルーターリンクを実行して/usersページに移動
        router.push('/users');
      })
      .catch(err => console.error(err));
    };

    const cancel = () => {
      router.push('/users');
    };

    return {
      store,
      register,
      cancel,
    };
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
  height: 150px;
  width: 400px;
  margin: 0 auto;
  position: relative;
}
.bbb{
  position: absolute;
  margin-bottom: 10px;
  top:40px;
  left: 77px;
}
.ccc{
  position: absolute;
  top:80px;
}
.ddd{
  margin-right: 20px;
}
.eee{
background-color: blue;
color: white;
margin-right: 10px;
border-radius: 10px;
}

.fff{
  background-color: black;
  color: white;
  border-radius: 10px;
}


</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生 新規登録 確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します。よろしいですか？</p>
      </div>

     <div class="aaa">
      <div class="bbb">
        <label for="name" class="ddd">名前</label>
        <span>{{ store.inputValue1 }}</span>
      </div>
      <div class="ccc">
        <label for="email" class="ddd">メールアドレス</label>
        <span>{{ store.inputValue2 }}</span>
      </div>
      
      </div>

      <div>
        <button @click="register" class="eee">確認</button>
        <button @click="cancel" class="fff">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from '../stores/counter.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const register = () => {
      const name = store.inputValue1;
      const email = store.inputValue2;
      

      // データベースにレコードを追加
      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then(jsonData => {
        // データベースへの追加が成功した場合の処理を記述します
        console.log(jsonData);
        // ルーターリンクを実行して/usersページに移動
        router.push('/users');
      })
      .catch(err => console.error(err));
    };

    const cancel = () => {
      router.push('/users');
    };

    return {
      store,
      register,
      cancel,
    };
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
  height: 150px;
  width: 400px;
  margin: 0 auto;
  position: relative;
}
.bbb{
  position: absolute;
  margin-bottom: 10px;
  top:40px;
  left: 77px;
}
.ccc{
  position: absolute;
  top:80px;
}
.ddd{
  margin-right: 20px;
}
.eee{
background-color: blue;
color: white;
margin-right: 10px;
border-radius: 10px;
}

.fff{
  background-color: black;
  color: white;
  border-radius: 10px;
}


</style>-->
<!--

<template>
  <div>
    <header>
      <p class="top">研修生 新規登録 確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します。よろしいですか？</p>
      </div>

     <div class="aaa">
      <div class="bbb">
        <label for="name" class="ddd">名前</label>
        <span>{{ store.inputValue1 }}</span>
      </div>
      <div class="ccc">
        <label for="email" class="ddd">メールアドレス</label>
        <span>{{ store.inputValue2 }}</span>
      </div>
      <div class="ccc">
        <label for="icon" class="ddd">プロフィール画像</label>
        <span>{{ store.inputValue3 }}</span>
      </div>
      </div>

      <div>
        <button @click="register" class="eee">確認</button>
        <button @click="cancel" class="fff">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from '../stores/counter.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const register = () => {
      const name = store.inputValue1;
      const email = store.inputValue2;
      const icon = store.inputValue3;

      // データベースにレコードを追加
      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&icon=${encodeURIComponent(icon)}`
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then(jsonData => {
        // データベースへの追加が成功した場合の処理を記述します
        console.log(jsonData);
        // ルーターリンクを実行して/usersページに移動
        router.push('/users');
      })
      .catch(err => console.error(err));
    };

    const cancel = () => {
      router.push('/users');
    };

    return {
      store,
      register,
      cancel,
    };
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
  height: 150px;
  width: 400px;
  margin: 0 auto;
  position: relative;
}
.bbb{
  position: absolute;
  margin-bottom: 10px;
  top:40px;
  left: 77px;
}
.ccc{
  position: absolute;
  top:80px;
}
.ddd{
  margin-right: 20px;
}
.eee{
background-color: blue;
color: white;
margin-right: 10px;
border-radius: 10px;
}

.fff{
  background-color: black;
  color: white;
  border-radius: 10px;
}


</style>




<template>
  <div>
    <header>
      <p class="top">研修生新規登録確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します</p>
      </div>
      <div>
        <label for="name">名前</label>
        <span>{{ store.inputValue1 }}</span>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <span>{{ store.inputValue2 }}</span>
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
  setup() {
    const store = useStore();

    const register = () => {
      const name = store.inputValue1;
      const email = store.inputValue2;

      // 保存の処理を行う

      this.$router.push('/users');
    };

    const cancel = () => {
      this.$router.push('/users');
    };

    return {
      store,
      register,
      cancel,
    };
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
      <p class="top">研修生新規登録確認</p>
    </header>

    <main>
      <div>
        <p>下記の情報で新規登録します</p>
      </div>
      <div>
        <label for="name">名前</label>
        <span>{{ $route.query.name }}</span>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <span>{{ $route.query.email }}</span>
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
  methods: {
    register() {
      const name = this.$route.query.name;
      const email = this.$route.query.email;

      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("network error. we couldn't call the API.");
        }
        return res.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        // データベースへの追加が成功した場合の処理を記述します
        this.$router.push('/users');
      })
      .catch(err => console.error(err));
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