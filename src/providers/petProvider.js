import Pet from "@/classes/pet";
import store from "@/store";
import { nanoid } from "nanoid";

const PETS_KEY = "PET_KEY";
const PetModule = store.state.petModule;

const readAllPets = () => {
  if (!localStorage.getItem(PETS_KEY)) {
    localStorage.setItem(PETS_KEY, "[]");
  }

  const pets = JSON.parse(localStorage.getItem(PETS_KEY));

  store.dispatch("petModule/setPets", pets);
};

const readOnePet = (id) => {
  const pets = JSON.parse(localStorage.getItem(PETS_KEY));
  const pet = pets.find((e) => e.id == id);

  store.dispatch("petModule/setPet", pet);
};

const createPet = () => {
  if (!PetModule.pet?.name?.trim()) {
    console.log("Mascota sin nombre");

    return;
  }

  const newPets = [...PetModule.pets, new Pet(nanoid(), PetModule.pet.name)];
  localStorage.setItem(PETS_KEY, JSON.stringify(newPets));

  store.dispatch("petModule/setPets", newPets);
  store.dispatch("petModule/setPet", new Pet());
};

const deletePet = (id) => {
  const filteredPets = PetModule.pets.filter((e) => e.id !== id);

  localStorage.setItem(PETS_KEY, JSON.stringify(filteredPets));

  store.dispatch("petModule/setPets", filteredPets);
};

const updatePet = () => {
  if (!PetModule.pet?.name?.trim()) {
    console.log("Mascota sin nombre");

    return;
  }

  const petsEditadas = PetModule.pets.map((item) =>
    item.id === PetModule.pet.id
      ? { id: PetModule.pet.id, name: PetModule.pet.name }
      : item
  );

  localStorage.setItem(PETS_KEY, JSON.stringify(petsEditadas));
  store.dispatch("petModule/setPets", petsEditadas);
  store.dispatch("petModule/setPet", new Pet());
};

export { readAllPets, readOnePet, createPet, updatePet, deletePet };
