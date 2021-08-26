<template>
  <div class="incoming_msg">
    <div class="incoming_msg_img"></div>
    <div class="received_msg">
      <span class="time_date"></span>
      <div class="received_msg">
        <p class="d-inline">
          {{ msg.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingMessages",
  props: ["msg"]
};
</script>

<style></style>
