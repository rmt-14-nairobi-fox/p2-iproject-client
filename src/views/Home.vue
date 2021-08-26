<template>
  <div class="flex h-screen">
    <div class="flex flex-col box-border w-1/4 bg-blue-500">
      <header
        class="p-3 border-b border-indigo-100 font-black text-white text-xl"
      >
        Welcome, {{ playerName }}
      </header>
      <div class="flex flex-col items-center px-2 my-5">
        <header class="text-white font-semibold text-lg mb-2">
          Select level
        </header>
        <div class="flex flex-col items-center w-full">
          <a
            class="my-1 text-indigo-900 font-semibold cursor-pointer rounded-lg bg-green-500 w-full flex justify-center p-2"
            @click.prevent="startGame('1')"
            >Level 1</a
          >
          <a
            class="my-1 text-indigo-900 font-semibold cursor-pointer rounded-lg bg-yellow-300 w-full flex justify-center p-2"
            @click.prevent="startGame('2')"
            >Level 2</a
          >
          <a
            class="my-1 text-indigo-900 font-semibold cursor-pointer rounded-lg bg-red-400 w-full flex justify-center p-2"
            @click.prevent="startGame('3')"
            >Level 3</a
          >
        </div>
      </div>
      <div
        class="flex flex-col h-full box-border items-center my-5 mx-2 bg-white rounded-lg"
      >
        <header class="font-semibold text-lg mb-2 text-blue-900">
          Players online
        </header>
        <div class="flex flex-col w-full p-2">
          <users-online
            v-for="user in onlineUsers"
            :key="user.id"
            :user="user"
            @toChat="doingChat"
          ></users-online>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-indigo-100 w-full">
      <div class="flex justify-end py-3 pr-10">
        <a
          @click.prevent="doLogout"
          class="font-bold bg-pink-400 p-2 text-blue-900 rounded-lg cursor-pointer "
          >Change player</a
        >
      </div>
      <div class="flex m-10 h-full">
        <div class="flex flex-col items-center w-2/3 box-border p-2  mr-3">
          <div>
            <p class="text-3xl font-medium mb-4">Guess words....</p>
          </div>
          <div class="flex">
            <letter-box
              v-for="(letter, i) in theLetters"
              :key="i"
              :letter="letter"
              @printLetter="printLetter"
            ></letter-box>
          </div>
          <div class="mt-5 flex flex-col">
            <p
              v-text="word"
              class="mb-3 h-10 w-44 text-2xl bg-gray-400 text-black pt-1 pb-3 px-3 rounded-xl flex justify-center font-medium"
            ></p>
            <div class="flex justify-around">
              <a
                @click.prevent="doFindWord"
                class="bg-green-600 text-white cursor-pointer rounded-lg font-semibold pt-1 pb-2 px-3"
                >Guess</a
              >
              <a
                @click.prevent="doClear"
                class="bg-red-600 text-white cursor-pointer rounded-lg font-semibold pt-1 pb-2 px-3"
                >Clear</a
              >
            </div>
            <div
              class="flex flex-col bg-yellow-100 px-3 pt-1 pb-2 rounded-lg my-5"
            >
              <p class="font-semibold">Score: {{ score }}</p>
              <p class="font-semibold">Total Score: {{ totalScore }}</p>
              <a
                @click.prevent="saveScore"
                class="bg-blue-600 text-white rounded-md pb-1 px-3 my-3 flex justify-center cursor-pointer"
                >Submit</a
              >
            </div>
          </div>
        </div>
        <div
          v-if="!doChat"
          class="w-1/3 rounded-xl bg-white shadow-xl box-border max-h-96 overflow-scroll"
        >
          <header class="m-3 text-xl font-medium text-green-900">
            Word definition: {{ wordToDefine }}
          </header>
          <p class="mx-3 text-justify text-sm">
            {{ wordDefinition }}
          </p>
        </div>
        <div
          v-else
          class="w-1/3 rounded-xl bg-white shadow-xl box-border max-h-96 overflow-scroll"
        >
          <div class="h-3/4 p-2">
            <incoming-messages
              v-for="(msg, index) in messages"
              :key="index"
              :msg="msg"
            ></incoming-messages>
          </div>
          <div class="typeMessage">
            <div class="writtenMessage row mt-3 d-flex">
              <input
                type="text"
                class="border border-blue-900 px-5"
                placeholder="Type a message"
                v-model="inputMsg"
                @keyup.enter="sendMessage"
              />
              <button
                @click.prevent="sendMessage"
                type="button"
                class="bg-blue-800 text-white px-2 cursor-pointer rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UsersOnline from "../components/usersOnline.vue";
import LetterBox from "../components/letterBox.vue";
import IncomingMessages from "../components/IncomingMessages.vue";

export default {
  name: "Home",
  data() {
    return {
      word: "",
      currentScore: 0,
      wordToDefine: "",
      doChat: false,
      inputMsg: ""
    };
  },
  components: {
    LetterBox,
    UsersOnline,
    IncomingMessages
  },
  computed: {
    ...mapState([
      "playerName",
      "letters",
      "wordDefinition",
      "score",
      "onlineUsers",
      "messages"
    ]),
    theLetters() {
      return this.letters.split("");
    },
    totalScore() {
      this.currentScore += +this.score;
      return this.currentScore;
    }
  },
  sockets: {
    broadcastMsg(data) {
      this.$store.commit("PUSH_MESSAGE", data);
    }
  },
  methods: {
    ...mapActions([
      "getLetters",
      "findWord",
      "userLogout",
      "getUsers",
      "saveScores"
    ]),
    doLogout() {
      this.userLogout(localStorage.id)
        .then(() => {
          localStorage.clear();
          this.$router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    startGame(level) {
      this.doChat = false;
      localStorage.level = level;
      this.currentScore = 0;
      this.getLetters(level)
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    },
    printLetter(letter) {
      this.word += letter;
    },
    doClear() {
      this.word = "";
    },
    doFindWord() {
      this.findWord(this.word)
        .then(() => {
          this.wordToDefine = this.word;
          this.word = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    doingChat(data) {
      this.doChat = data;
    },
    sendMessage() {
      const data = {
        username: "abah",
        message: this.inputMsg
      };
      this.$socket.client.emit("sendMessage", data);
      this.inputMsg = "";
    },
    saveScore() {
      this.saveScores({
        score: this.currentScore,
        level: localStorage.level
      })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getUsers()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
