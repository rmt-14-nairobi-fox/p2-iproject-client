<template>
  <div style="margin-top: 125px">
    <img
      :src="imageURL"
      class="img-thumbnail"
      alt="..."
      height="420"
      width="370"
      style="float: left"
    />
    <div class="div1">
      <h6>Project Name : {{ name }}</h6><br><hr>
      <h6>Project Position : {{ position }}</h6><br><hr>
      <h6>Project Description : {{ description }}</h6><br><hr>
      <h6>Project Job Description : {{ jobDesc }}</h6>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Talk from "talkjs";
export default {
  data() {
    return {
      name: "",
      imageURL: "",
      position: "",
      jobDesc: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["jobsById"]),
  },
  methods: {
    ...mapActions(["getProjectById"]),
  },
  props: ["id"],
  // currentUser: {
  //   type: Object,
  //   required: true,
  // },
  created() {
    //   console.log(this.id)
    this.getProjectById(this.id);
  },
  async mounted() {
    const API_URL = `https://freelance-app-hacktiv8.herokuapp.com/api/v1/project/`;
    const response = await axios.get(`${API_URL}/${this.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    // console.log(response.data)
    if (response) {
      this.name = response.data.project.name;
      this.imageURL = response.data.project.imageURL;
      this.position = response.data.project.position;
      this.jobDesc = response.data.project.jobDesc;
      this.description = response.data.project.description;
    }

    // const { project, employee } = response.data;
    const decodeToken = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    );
    console.log("decodeToken: ", decodeToken);

    let dataMe = {
      id: response.data.employee.id,
      name: response.data.employee.username,
      email: response.data.employee.email,
    };

    // if (decodeToken.role === "employee") {
    // } else {
    // }

    // console.log("DataMe: ", dataMe);
    // console.log("DataOther: ", dataOther);

    Talk.ready.then(async function () {
      var me = new Talk.User({
        ...dataMe,
        welcomeMessage: "Hey there! How are you? :-)",
        // role: response.data.employee.role,
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tq8XUAZ7",
        me: me,
      });
      const conversation = session.getOrCreateConversation(
        `${response.data.employee}`
      );
      conversation.setParticipant(me);
      //   conversation.setParticipant(other);

      const popup = session.createPopup(conversation, {
        keepOpen: true,
      });
      await popup.mount({ show: true });
    });
  },
};
</script>

<style scoped>
.div1 {
  margin-left: 450px;
  width: 800px;
  height: 250px;
  border: 3px solid black;
  box-sizing: border-box;
}

.div1 h6 {
  margin-top: 10px;
  float: left;
}
</style>