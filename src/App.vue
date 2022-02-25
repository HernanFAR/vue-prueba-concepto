<template>
  <div class="container">
    <h1 class="text-center">CRUD Vue</h1>
    <hr />

    <div class="row">
      <pet-list />
      <create-form v-if="!isInEditMode" />
      <update-form v-if="isInEditMode" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

import PetList from "./components/pets/PetList.vue";
import CreateForm from "./components/pets/CreateForm.vue";
import UpdateForm from "./components/pets/UpdateForm.vue";

import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    PetList,
    CreateForm,
    UpdateForm,
  },
  setup() {
    const store = useStore();

    const isInEditMode = computed(() => {
      console.log(store.state.petModule.isPetFormInEdit);
      return store.state.petModule.isPetFormInEdit;
    });

    return {
      isInEditMode,
    };
  },
};
</script>
