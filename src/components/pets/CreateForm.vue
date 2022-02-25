<template>
  <div class="col-4">
    <h4 class="text-center">Formulario de creación de mascotas</h4>
    <form @submit="agregarPet">
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Ingrese mascota"
        v-model="pet.name"
      />
      <div class="d-grid gap-2">
        <button class="btn btn-success" type="submit">Agregar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { createPet } from "@/providers/petProvider";

export default {
  setup() {
    const store = useStore();

    const pet = computed(() => {
      return store.state.petModule.pet;
    });

    const agregarPet = (e) => {
      e.preventDefault();

      createPet();
    };

    return {
      pet,
      agregarPet,
    };
  },
};
</script>
