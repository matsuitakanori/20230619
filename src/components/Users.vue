<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <button class="create" @click="goToCreate">
        <i class="fas fa-plus"></i>
      </button>
      <table style="color: #404040; text-align: center; margin: 0 auto; margin-top: 100px; background: #f4f4f4">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>画像</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in displayedEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <img :src="employee.icon" alt="アイコン" width="50" height="50">
          </td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id, employee.name, employee.email,employee.icon)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === currentPage }" @click="goToPage(pageNumber)">
          <template v-if="pageNumber === currentPage || pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1">
            {{ pageNumber }}
          </template>
          <template v-else-if="Math.abs(pageNumber - currentPage) === 2">
            ...
          </template>
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.employees.length / this.itemsPerPage);
    },
    displayedEmployees() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.employees.slice(startIndex, endIndex);
    }
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId, name, email, icon) {
      const store = useStore();
      store.setInputValues(employeeId, name, email, icon);
      this.$router.push('/update');
    },
    deleteEmployee(employee) {
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email, employee.icon);
      this.$router.push('/delete');
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    }
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: blue;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
}

.create:hover {
  opacity: 0.8;
}

table {
  margin: 0 auto;
  margin-top: 20px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}

.pagination button i {
  font-size: 18px;
  color: blue;
}

.pagination span {
  cursor: pointer;
}

.pagination span.active {
  color: red;
  font-weight: bold;
}
</style>


<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <button class="create" @click="goToCreate">
        <i class="fas fa-plus"></i>
      </button>
      <table style="color: #404040; text-align: center; margin: 0 auto; margin-top: 100px; background: #f4f4f4">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in displayedEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id, employee.name, employee.email)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === currentPage }" @click="goToPage(pageNumber)">
          <template v-if="pageNumber === currentPage || pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1">
            {{ pageNumber }}
          </template>
          <template v-else-if="Math.abs(pageNumber - currentPage) === 2">
            ...
          </template>
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.employees.length / this.itemsPerPage);
    },
    displayedEmployees() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.employees.slice(startIndex, endIndex);
    }
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId, name, email) {
      const store = useStore();
      store.setInputValues(employeeId, name, email);
      this.$router.push('/update');
    },
    deleteEmployee(employee) {
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email);
      this.$router.push('/delete');
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    }
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: blue;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
}

.create:hover {
  opacity: 0.8;
}

table {
  margin: 0 auto;
  margin-top: 20px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}

.pagination button i {
  font-size: 18px;
  color: blue;
}

.pagination span {
  cursor: pointer;
}

.pagination span.active {
  color: red;
  font-weight: bold;
}
</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <button class="create" @click="goToCreate">
        <i class="fas fa-plus"></i>
      </button>
      <table style="color: #404040; text-align: center; margin: 0 auto; margin-top: 100px; background: #f4f4f4">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in displayedEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id, employee.name, employee.email)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === currentPage }" @click="goToPage(pageNumber)">
          <template v-if="pageNumber === currentPage || pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1">
            {{ pageNumber }}
          </template>
          <template v-else-if="Math.abs(pageNumber - currentPage) === 2">
            ...
          </template>
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.employees.length / this.itemsPerPage);
    },
    displayedEmployees() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.employees.slice(startIndex, endIndex);
    }
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId, name, email) {
      const store = useStore();
      store.setInputValues(employeeId, name, email);
      this.$router.push('/update');
    },
    deleteEmployee(employee) {
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email);
      this.$router.push('/delete');
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    }
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: blue;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
}

.create:hover {
  opacity: 0.8;
}

table {
  margin: 0 auto;
  margin-top: 20px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}

.pagination button i {
  font-size: 18px;
  color: blue;
}

.pagination span {
  cursor: pointer;
}

.pagination span.active {
  color: red;
  font-weight: bold;
}
</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <button class="create" @click="goToCreate">
        <i class="fas fa-plus"></i>
      </button>
      <table style="color: #404040; text-align: center; margin: 0 auto; margin-top: 100px;; background: #f4f4f4" >
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id, employee.name, employee.email)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId, name, email) {
      const store = useStore();
      store.setInputValues(employeeId, name, email);
      this.$router.push('/update');
    },
    deleteEmployee(employee) {
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email);
      this.$router.push('/delete');
    },
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: blue;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
}

.create:hover {
  opacity: 0.8;
}

table {
  margin: 0 auto;
  margin-top: 20px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}
.create{
  top:100px;
}

</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <a href="#" @click="goToCreate">+</a>
      <table border="1" style="color: #404040; background: #f4f4f4; text-align: center;">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id, employee.name, employee.email)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId, name, email) {
      const store = useStore();
      store.setInputValues(employeeId, name, email);
      this.$router.push('/update');
    },
    deleteEmployee(employee) {
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email);
      this.$router.push('/delete');
    },
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  width: 20px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: blue;
  border-radius: 40px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}
</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <a href="#" @click="goToCreate">+</a>
      <table border="1" style="color: #404040; background: #f4f4f4; text-align: center;">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#" @click="deleteEmployee(employee)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </main>

    <footer></footer>
  </div>
</template>

<script>
// counter.jsをインポート
import { useStore } from '../stores/counter';

export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId) {
      this.$router.push({ path: '/update', params: { id: employeeId } });
    },
    deleteEmployee(employee) {
      // counter.jsのアクションを呼び出し、データを保存
      const store = useStore();
      store.setInputValues(employee.id, employee.name, employee.email);
      
      // Delete.vueに移動
      this.$router.push('/delete');
    },
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  width: 20px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: blue;
  border-radius: 40px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}
</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <a href="#" @click="goToCreate">+</a>
      <table border="1" style="color: #404040; background: #f4f4f4; text-align: center;">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId) {
      this.$router.push({ path: '/update', params: { id: employeeId } });
    },
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  width: 20px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: blue;
  border-radius: 40px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}
</style>
-->

<!--
<template>
  <div>
    <header>
      <p class="top">研修生一覧</p>
    </header>

    <main>
      <a href="#" @click="goToCreate">+</a>
      <table border="1" style="color: #404040; background: #f4f4f4; text-align: center;">
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <a href="#">
              <i class="fa fa-trash"></i>
            </a>
          </td>
          <td>
            <button class="edit-button" @click="editEmployee(employee.id)">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    editEmployee(employeeId) {
      // 編集処理を行うコードを追加してください
    },
  },
  mounted() {
    fetch("http://localhost:8080/api/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ネットワークエラー。APIを呼び出せませんでした。");
        }
        return res.json();
      })
      .then((jsonData) => {
        this.employees = jsonData;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

header {
  height: 50px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.top {
  font-size: 25px;
}

.create {
  width: 20px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: blue;
  border-radius: 40px;
}

.edit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  color: blue;
}
</style>
-->
