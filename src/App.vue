<template>
  <div>
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="createTodo">Create Todo</button>
    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <button v-on:click="deleteItem(item)">delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import { API } from 'aws-amplify';
import { createTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { onCreateTodo, onDeleteTodo } from './graphql/subscriptions';
import { Todo } from './API';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  name = '';
  description = '';
  todos: Partial<Todo>[] = [];

  mounted() {
    this.getTodos();
    this.subscribe();
  }

  async createTodo() {
    const { name, description } = this;
    if (!name || !description) return;
    const todo = { name, description };
    await API.graphql({
      query: createTodo,
      variables: { input: todo },
    });
    this.name = '';
    this.description = '';
  }

  async getTodos() {
    const todos = await <any>API.graphql({
      query: listTodos,
    });
    this.todos = todos.data.listTodos.items;
  }

  deleteItem(item: Todo) {
    API.graphql({
      query: deleteTodo,
      variables: { input: { id: item.id } },
    });
  }

  subscribe() {
    API.graphql({ query: onCreateTodo })
      //@ts-ignore
      .subscribe({
        next: (eventData: any) => {
          let todo = eventData.value.data.onCreateTodo;
          if (this.todos.some((item) => item.name === todo.name)) return; // remove duplications
          this.todos = [...this.todos, todo];
        },
      });
    API.graphql({ query: onDeleteTodo })
      //@ts-ignore
      .subscribe({
        next: (eventData: any) => {
          let todo = eventData.value.data.onDeleteTodo;
          console.log('delete', todo, this.todos);
          this.todos = this.todos.filter((item) => todo.id !== item.id);
        },
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
