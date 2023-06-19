<template>
  <div>
    <header>
      <p class="top">研修生 新規登録</p>
    </header>

    <main>
      <div class="ddd">
        <div class="eee">
          <label for="name" class="ccc">名前</label>
          <input type="text" id="name" v-model="name">
        </div>
        <div class="fff">
          <p v-if="!isEmailValid" class="error-message">※メールアドレスに使用不可な文字が含まれています</p>
          <label for="email" class="ccc">メールアドレス</label>
          <input type="text" id="email" v-model="email" @input="checkValidity">
        </div>
      </div>
      <div>
        <button @click="register" class="aaa" :disabled="!isEmailValid">確認</button>
        <button @click="cancel" class="bbb">キャンセル</button>
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
      isEmailValid: true,
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

.aaa {
  color: white;
  background-color: black;
  border-radius: 10px;
  margin-right: 10px;
}

.bbb {
  color: white;
  background-color: black;
  border-radius: 10px;
}

.ccc {
  
}

.ddd {
  position: relative;
  height: 150px;
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;
}

.eee {
  margin-bottom: 10px;
  margin-left: 77px;
  position: absolute;
  top: 30px;
}

.fff {
  position: absolute;
  top: 60px;
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
      <p class="top">研修生 新規登録</p>
    </header>

    <main>
      <div class="ddd">
      <div class="eee">
        <label for="name" class="ccc">名前</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="fff">
        <label for="email" class="ccc">メールアドレス</label>
        <input type="text" id="email" v-model="email">
      </div>
      </div>
      <div>
        <button @click="register" class="aaa">確認</button>
        <button @click="cancel" class="bbb">キャンセル</button>
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


.aaa{
  color:white;
  background-color: black;
  border-radius: 10px;
  margin-right: 10px;
}
.bbb{
  color:white;
  background-color: black;
  border-radius: 10px;
}
.ccc{
  
}
.ddd{
  position: relative;
  height:150px;
  width:300px;
  margin: 0 auto;
  margin-top: 20px;
}
.eee{
  margin-bottom: 10px;
  margin-left: 77px;
  position: absolute;
  top:30px;
 
}
.fff{
position: absolute;
top:60px;

}
</style>-->
<!--
<template>
  <div>
    <header>
      <p class="top">研修生 新規登録</p>
    </header>

    <main>
      <div class="ddd">
      <div class="eee">
        <label for="name" class="ccc">名前</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="fff">
        <label for="email" class="ccc">メールアドレス</label>
        <input type="email" id="email" v-model="email">
      </div>
      </div>
      <div>
        <button @click="register" class="aaa">確認</button>
        <button @click="cancel" class="bbb">キャンセル</button>
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


.aaa{
  color:white;
  background-color: black;
  border-radius: 10px;
  margin-right: 10px;
}
.bbb{
  color:white;
  background-color: black;
  border-radius: 10px;
}
.ccc{
  
}
.ddd{
  position: relative;
  height:150px;
  width:300px;
  margin: 0 auto;
  margin-top: 20px;
}
.eee{
  margin-bottom: 10px;
  margin-left: 77px;
  position: absolute;
  top:30px;
 
}
.fff{
position: absolute;
top:60px;

}
</style>
-->

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