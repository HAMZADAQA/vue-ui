
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <TextEditor id="myeditor"/> -->
        <ckeditor value="Hello, World!"/>
        <button type="Submit" v-model="d" class="btn btn-primary">Submit</button>
            <!-- <ckeditor v-model="editorData" :config="editorConfig"></ckeditor> -->

  </div>
</template>

<script>

// import CKEditor from 'ckeditor4-vue';
import HelloWorld from './components/HelloWorld.vue'

// import TextEditor from './components/TextEditor.vue'

// import CKEditor from 'ckeditor4-vue';

    export default {
        name: 'app',
  components:{
    HelloWorld
  },
        data() {
            return {
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>



<style>


</style>
