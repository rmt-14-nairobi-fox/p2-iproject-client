<template>
  <div class="incoming_msg pr-100">
    <div class="received_msg">
      <span class="time_date">
        {{ message.username }}: {{ message.message }}
      </span>
      <div class="received_withd_msg mb-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
