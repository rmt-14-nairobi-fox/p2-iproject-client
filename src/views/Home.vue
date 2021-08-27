<template>
  <div class="home">
    <div class="
      w-full
      flex
      flex-col
      px-8">
      <div>
        <h2
          class="
            text-2xl
            text-white
            text-center
            font-medium
            mb-4">
          List petition
        </h2>
        <div class="mt-2 mb-6">
          <PetitionCard
            v-for="pet in listP"
            :key="pet.id"
            :pet="pet"/>
        </div>
      </div>
      <div>
        <h2
          class="
            text-2xl
            text-white
            text-center
            font-medium
            mb-4">
          Maka a Petition
        </h2>
        <div>
          <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <NewsCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PetitionCard from '../components/PetitionCard.vue'
import NewsCard from '../components/NewsCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['listP'])
  },
  components: {
    PetitionCard,
    NewsCard
  },
  created () {
    this.$store.dispatch('fetchNews')
    this.$store.dispatch('fetchPetition')
  }
}
</script>
