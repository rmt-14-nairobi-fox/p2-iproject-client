<template>
  <div class="my-2.5 w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <img class=" object-fill h-72" :src="pet.imageUrl" alt="">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{pet.title}}</div>
        <p class="text-gray-700 text-base">{{pet.description}}</p>
      </div>
        <div class="text-sm">
          <p class="text-gray-900 my-1">By: {{pet.User.username}}</p>
          <p class="text-gray-900 my-1">Sign: {{pet.signCount}}</p>
          <p class="text-gray-900 my-1">Until Reach {{pet.maxCount}}</p>
          <p class="text-gray-600 my-1">Source: <a class=" text-nightBlue-3" :href="pet.source">Link</a></p>
          <button
            @click.prevent="signPet(pet.id)"
            class="
              my-1
              p-1.5
              rounded
              bg-nightBlue-2
              text-gray-50
              hover:bg-nightBlue-4">
            Sign
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetitionCard',
  props: {
    pet: Object
  },
  methods: {
    signPet (id) {
      this.$store.dispatch('signPet', id)
    }
  }
}
</script>

<style>

</style>
