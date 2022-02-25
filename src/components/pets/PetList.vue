<template>
  <div class="col-8">
    <h4 class="text-center">Lista de mascotas</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="pet in pets" :key="pet.id">
        <span class="lead">{{ pet.name }}</span>
        <div class="btn-group-vertical float-end">
          <button class="btn btn-danger btn-sm" @click="deletePet(pet.id)">
            Eliminar
          </button>
          <button class="btn btn-success btn-sm" @click="setEditForm(pet.id)">
            Editar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { readAllPets, readOnePet, deletePet } from "@/providers/petProvider";

import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const pets = computed(() => {
      return store.state.petModule.pets;
    });

    onMounted(() => {
      readAllPets();
    });

    const setEditForm = (id) => {
      readOnePet(id);
      store.dispatch("petModule/setPetFormInEditMode");
    };

    return {
      pets,
      deletePet,
      setEditForm,
    };
  },
};
</script>
