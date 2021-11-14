<template>
  <div>
    <RoadLine :lines="lines" box-class="flex-auto" @onBoxClick="alert" single-line>
      <template v-slot:default="slotProps">
        <div>My textsssss {{slotProps.title}}</div>
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
      </template>
    </RoadLine>
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="createTodo">Create Todo</button>
    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <button v-on:click="deleteItem(item)">delete</button>
    </div>

    <div class="justify-center flex bg-yellow-300 items-center h-screen">
      <div class="text-4xl">Hello 👋🏼</div>
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
import RoadLine from './components/molecules/RoadLine/index.vue';
import Diamond from './components/atoms/Diamond/index.vue';

@Options({
  components: {
    HelloWorld,
    RoadLine,
    Diamond
  },
})
export default class App extends Vue {
  name = '';
  description = '';
  todos: Partial<Todo>[] = [];
  lines = [
    {title: 'title 1'},
    {title: 'title 2'},
    {title: 'title 3'},
    ]

  mounted() {
    this.getTodos();
    this.subscribe();
  }

  alert(data: any){
    console.log('data', data)
    alert(2222)
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