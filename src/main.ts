import Amplify from 'aws-amplify';
import { createApp } from 'vue'
import aws_exports from './aws-exports';
import App from './App.vue'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faCheckDouble, faTrashAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

library.add(faPhone);
library.add(faCheckCircle);
library.add(faCheckDouble);
library.add(faTrashAlt);

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Tailwind setup
import './styles/app.css';

createApp(App)
  .component('QuillEditor', QuillEditor)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
