<template>
  <div>
    <header class="header1">
      <p class="header-font">研修生編集</p>
    </header>
    <main>
      <div class="top-wrapper">
        
        <div class="top1-wrapper">
          <p>ID</p>
          <p>名前</p>
          <p>メールアドレス</p>
          <p class="profile">プロフィール画像</p>
        </div>

        <div class="top2-wrapper">
          <p class="class1">{{ inputValue1 }}</p>
          <input type="text" id="name" v-model="name" class="class2">
          <p v-if="!isEmailValid" class="error">※メールアドレスに使用不可な文字が含まれています</p>
          <input type="text" id="email" v-model="email" @input="checkValidity" class="class3">
          <img :src="inputValue4" alt="プロフィール画像" class="class4">
        </div>
      </div>  



        <div class="button-wrapper">
          
          <button @click="register"  :disabled="!isEmailValid" class="valification">確認</button>
          <button @click="cancel" class="cancel">キャンセル</button>
        </div>
      
    </main>
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
  display:flex;
  height: 270px;
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  font-weight:bold;
}
.top1-wrapper{
  text-align: right;
}
.top2-wrapper {
  text-align:left;
  margin-left: 20px;
}

.top2-wrapper input{
  display :block;
  margin-top: 20px;
}
.class4{
  height: 80px;
  line-height: 80px;
}
.profile{
  margin-top: 35px;
}
.valification{
  width:150px;
  height: 40px;
  border-radius: 40px;
  color:white;
  background-color: black;
  margin-right: 10px;
  font-size:18px;
}
.cancel{
  width:150px;
  height: 40px;
  border-radius: 40px;
  color:white;
  background-color: black;
  font-size:18px;
}
.error{
  position: absolute;
  top:210px;
  font-size: 10px;
  color:red;
}

img{
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
}

</style>


<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      name: '',
      email: '',
      isEmailValid: true,
    };
  },
  computed: {
    inputValue1() {
      const store = useStore();
      return store.inputValue1;
    },
    inputValue4() {
      const store = useStore();
      return store.inputValue4;
    },
  },
  methods: {
    register() {
      const store = useStore();
      store.setInputValues(this.inputValue1, this.name, this.email, this.inputValue4, '');
      this.$router.push('/update_confirm');
    },
    cancel() {
      this.$router.push('/users');
    },
    checkValidity() {
      const regex = /^[A-Za-z0-9@.]+$/;
      this.isEmailValid = regex.test(this.email);
    },
  },
};
</script>


<!--
<template>
  <div>
    <header>
      <p class="top">研修生編集</p>
    </header>
    <main>
      <div class="aaa">
        <div>
          <span class="ggg">ID</span>
          <span>{{ inputValue1 }}</span>
        </div>

        <div class="eee">
          <label class="ggg">名前</label>
          <input type="text" id="name" v-model="name">
        </div>

        <div class="fff">
          <p v-if="!isEmailValid" class="error-message">※メールアドレスに使用不可な文字が含まれています</p>
          <label class="ggg">メールアドレス</label>
          <input type="text" id="email" v-model="email" @input="checkValidity">
        </div>

        <div class="eee">
          <label class="ggg">プロフィール画像</label>
          <input type="text" id="icon" v-model="icon">
        </div>

        <div class="bbb">
          <button @click="register" class="ccc" :disabled="!isEmailValid">確認</button>
          <button @click="cancel" class="ddd">キャンセル</button>
        </div>
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
      isEmailValid: true,
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
      store.setInputValues(this.inputValue1, this.name, this.email, this.icon, '');
      this.$router.push('/update_confirm');
    },
    cancel() {
      this.$router.push('/users');
    },
    checkValidity() {
      const regex = /^[A-Za-z0-9@.]+$/;
      this.isEmailValid = regex.test(this.email);
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

.ccc {
  margin-right: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
}

.ddd {
  background-color: black;
  color: white;
  border-radius: 10px;
}

main {
  margin-top: 30px;
}

.aaa {
  height: 300px;
  width: 300px;
  margin: 0 auto;
}

.bbb {
  margin-top: 30px;
}

.eee {
  text-align: right;
}

.fff {
  text-align: right;
}

.ggg {
  margin-right: 5px;
}

.error-message {
  color: red;
  font-size: 10px;
}
</style>
-->

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

