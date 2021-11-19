<template>
  <div>
    <div class="justify-center flex bg-yellow-300 items-center h-screen">
      <div class="text-4xlk absolute top-5 left-5">Hello 👋🏼</div>

      <statuses-bar :statuses="statuses" @select="alert"></statuses-bar>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import { API } from 'aws-amplify';
//import { createTodo, deleteTodo } from './graphql/mutations';
//import { listTodos } from './graphql/queries';
//import { onCreateTodo, onDeleteTodo } from './graphql/subscriptions';
//import { Todo } from './API';
import StatusesBar from './components/organisms/StatusesBar/index.vue';

@Options({
  components: {
    StatusesBar,
  },
})
export default class App extends Vue {
  name = '';
  description = '';
  //todos: Partial<Todo>[] = [];

  mounted() {
    this.getTodos();
    this.subscribe();
  }

  get statuses(){
    return [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }] 
  }

  alert(data: any) {
    console.log('data', data);
  }

  async createTodo() {
    /*
    const { name, description } = this;
    if (!name || !description) return;
    const todo = { name, description };
    await API.graphql({
      query: createTodo,
      variables: { input: todo },
    });
    this.name = '';
    this.description = '';
    */
  }

  async getTodos() {
    /*
    const todos = await <any>API.graphql({
      query: listTodos,
    });
    this.todos = todos.data.listTodos.items;
    */
  }

  deleteItem() {
    /*
    API.graphql({
      query: deleteTodo,
      variables: { input: { id: item.id } },
    });
    */
  }

  subscribe() {
    /*
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
      */
  }
}
</script>
