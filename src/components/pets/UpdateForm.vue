<template>
  <div class="col-4">
    <h4 class="text-center">Formulario de edición de mascotas</h4>
    <form @submit="editPet">
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Actualizar nombre"
        v-model="pet.name"
      />
      <div class="d-grid gap-2">
        <button class="btn btn-info" type="submit">Editar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { updatePet } from "@/providers/petProvider";

export default {
  setup() {
    const store = useStore();

    const pet = computed(() => {
      return store.state.petModule.pet;
    });

    const editPet = (e) => {
      e.preventDefault();

      updatePet();
      store.dispatch("petModule/setPetFormInCreationMode");
    };

    return {
      pet,
      editPet,
    };
  },
};
</script>
