<template>
  <div>
    <header>
      <div class="header1">
       <p class="top">研修生 削除</p>
      </div>
    </header>

    <main>
      
        <div class="top-wrapper">
          
           <div>
            <label for="id">ID:</label>
            <span>{{ store.inputValue1 }}</span> <!-- counter.jsからデータを取得 -->
           </div>
           <div>
            <label for="name">名前:</label>
            <span>{{ store.inputValue2 }}</span> <!-- counter.jsからデータを取得 -->
          </div>
          <div>
            <label for="email">メールアドレス:</label>
            <span>{{ store.inputValue3 }}</span> <!-- counter.jsからデータを取得 -->
          </div>
          <div class="profile">
            <label for="icon" class="icon">プロフィール画像:</label>
            <img :src="store.inputValue4" class="dog">
          </div>

        </div>

        <div class="middle-wrapper">
          <div>
           <p>こちらのデータを削除します。本当によろしいですか？</p>
          </div>
        </div>  
      
      <div class="bottom-wrapper">
       <div>
        <button class="delete-button" @click="deleteEmployee">削除</button>
        <button class="cancel-button" @click="cancel">キャンセル</button>
       </div>
      </div>


    </main>
    <footer>

    </footer>




  </div>
</template>

<style scoped>

.header1 {
  height: 70px;
  border-bottom: 1px solid black;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
}
.top-wrapper{
  margin: 0 auto;
  height: 200px;
  width: 400px;
  text-align: left;
  padding-top: 60px;
}
.middle-wrapper{
  height: 60px;
}
.bottom-wrapper{
  margin: 0 auto;
}
.delete-button{
height:60px;
width: 150px;
border-radius: 40px;
color:white;
background-color: red;
font-size: 20px;
}
.cancel-button{
height:60px;
width: 150px;
margin: 10px;
border-radius: 40px;
color:white;
background-color: black;
font-size: 15px;
}
.icon{
  display: block;
  position: relative;
  top:60px;
}
.dog{
  position: relative;
  max-width:150px ;
  max-height: 150px;
  margin-left: 130px;
}


</style>


<script>
// counter.jsをインポート
import { useStore } from '../stores/counter';

export default {
  setup() {
    const store = useStore();

    const deleteEmployee = () => {
      const employeeId = store.inputValue1; // 削除するレコードのIDを取得
      const apiUrl = `http://localhost:8080/api/employees/${employeeId}`;

      // DELETEリクエストを送信
      fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            console.log('削除が成功しました'); // 削除成功時の処理
            // $routerを直接使用せずに、windowオブジェクトからルーターにアクセスします
            window.location.href = '/users';
          } else {
            console.error('削除に失敗しました'); // 削除失敗時の処理
          }
        })
        .catch(error => {
          console.error(error); // エラーハンドリング
        });
    };

    const cancel = () => {
      // $routerを直接使用せずに、windowオブジェクトからルーターにアクセスします
      window.location.href = '/users';
    };
    
    return {
      store,
      deleteEmployee,
      cancel,
    };
  },
};
</script>





<!--
<template>
  <div>
    <header>
      <p class="top">研修生削除</p>
    </header>

    <main>
      <div>
        <label for="id">ID</label>
        <p>{{ store.inputValue1 }}</p> 
      </div>
      <div>
        <label for="name">名前</label>
        <p>{{ store.inputValue2 }}</p> 
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <p>{{ store.inputValue3 }}</p> 
      </div>
      <div>
        <p>こちらのデータを削除します。本当によろしいですか？</p>
      </div>
      <div>
        <button @click="deleteEmployee">削除</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
// counter.jsをインポート
import { useStore } from '../stores/counter';

export default {
  setup() {
    const store = useStore();

    const deleteEmployee = () => {
      const employeeId = store.inputValue1; // 削除するレコードのIDを取得
      const apiUrl = `http://localhost:8080/api/employees/${employeeId}`;

      // DELETEリクエストを送信
      fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            console.log('削除が成功しました'); // 削除成功時の処理
          } else {
            console.error('削除に失敗しました'); // 削除失敗時の処理
          }
        })
        .catch(error => {
          console.error(error); // エラーハンドリング
        });
    };

    const cancel = () => {
      this.$router.push('/users');
    };
    
    return {
      store,
      deleteEmployee,
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
      <p class="top">研修生削除</p>
    </header>

    <main>
      <div>
        <label for="id">ID</label>
        <p>{{ store.inputValue1 }}</p> 
      </div>
      <div>
        <label for="name">名前</label>
        <p>{{ store.inputValue2 }}</p> 
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <p>{{ store.inputValue3 }}</p> 
      </div>
      <div>
        <p>こちらのデータを削除します。本当に宜しいですか？</p>
      </div>
      <div>
        <button @click="register">削除</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
// counter.jsをインポート
import { useStore } from '../stores/counter';

export default {
  setup() {
    const store = useStore();
    
    return {
      store,
    };
  },
  methods: {
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
      <p class="top">研修生削除</p>
    </header>

    <main>
        <div>
        <label for="id">ID</label>
      </div>
      <div>
        <label for="name">名前</label>
      </div>
      <div>
        <label for="email">メールアドレス</label>
      </div>
      <div>
        <p>こちらのデータを削除します。本当に宜しいですか？</p>
      </div>
      <div>
        <button @click="register">削除</button>
        <button @click="cancel">キャンセル</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  
  methods: {
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