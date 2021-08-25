<template>
  <div class="home">
        <!-- Header-->
        <header class="bg-primary bg-gradient text-white">
            <div class="container px-4 text-center">
                <h1 class="fw-bolder">Cari Obat Mudah Dan Cepat</h1>
                <p class="lead">Website Pencarian Obat Terbaik di Indonesia</p>
                <form class=" justify-content-center row g-1">
                <div class="col-4">
                <div v-for="(word, index) in transcription_" :key="index">
                    {{ word }}
                </div>
                <input v-model="cari" type="text" class="form-control" placeholder="Cari obat .....">
                </div>
                 <div class="col-auto">
                <button @click.prevent="startTxtToSpeech" class="btn btn-light mb-3 mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
                    </svg>
                </button>
                <button class="btn btn-warning mb-3" type="submit">Cari</button>
                </div>
                </form>
                <div class="speech-to-txt" @click="startTxtToSpeech">Speech to txt</div>
                    <div class="speech-transciption">
                    <div v-for="(word, index) in transcription_" :key="index">
                        {{ word }}
                    </div>
                    <div>{{ runtimeTranscription_ }}</div>
                    </div>
            </div>
        </header>
        <div class="container p-4">
            <h2 class="text-start">Obat & Vitamin Berdasarkan Kategori</h2>
            <div class="p-3 row">
                <CategoryCard v-for="category in categories" :key="category.id" :category="category"></CategoryCard>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import CategoryCard from "../components/CategoryCard.vue"
export default {
  name: 'Home',
  data(){
      return{
        cari:"",
        runtimeTranscription_: "",
        transcription_: [],
        lang_: "id-ID"
      }
  },
  methods:{
    startTxtToSpeech() {
        // initialisation of voicereco
        window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new window.SpeechRecognition();
        recognition.lang = this.lang_;
        recognition.interimResults = true;
        // event current voice reco word
        recognition.addEventListener("result", event => {
        const text = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");
        this.runtimeTranscription_ = text;
    });
    // end of transcription
    recognition.addEventListener("end", () => {
        this.transcription_.push(this.runtimeTranscription_);
        this.runtimeTranscription_ = "";
        recognition.stop();
    });
    recognition.start();
    },
    startSpeechToTxt() {
        // start speech to txt
        var utterance = new SpeechSynthesisUtterance("Message Envoyé");
        window.speechSynthesis.speak(utterance);
    }
  },
  components: {
    CategoryCard
  },
  created(){
    this.$store.dispatch("fetchCategories")
  },
  computed:{
    categories(){
      return this.$store.state.categories
    }
  }
}
</script>
<style >
.speech-to-txt,
.txt-to-speech {
  display: grid;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid grey;
  background-color: rgb(248, 245, 245);
  font-size: 38px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  place-items: center;
}
.speech-transciption {
  width: 500px;
  padding: 20px;
  border: 2px solid grey;
  background-color: rgb(211, 228, 253);
  border-radius: 20px;
}
</style>
