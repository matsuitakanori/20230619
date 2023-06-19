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
      store.setInputValues(this.inputValue1, this.name, this.email, '');
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

