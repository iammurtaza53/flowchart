<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <span class="lstick"></span>
      <h3 class="title font-weight-regular">Recent Chats</h3>
      <!-- Chatting -->
      <div class="d-md-flex align-items-center mt-7">
        <div class="w-100">
          <div v-bar class="vs-scrollable" style="height: 510px">
            <div>
              <ul ref="chatLog" class="pa-3">
                <li
                  class="d-flex align-start"
                  :class="{ 'flex-row-reverse': chat.fromMe, 'mt-4': index }"
                  v-for="(chat, index) in chatConversation"
                  :key="index"
                >
                  <img
                    class="m-0 flex-no-shrink rounded-circle"
                    :class="chat.fromMe ? 'mx-3' : 'mx-3'"
                    width="45"
                    :src="
                      require(`@/assets/images/users/${chat.conversationImg}`)
                    "
                  />
                  <v-chip
                    class="chat pa-3 py-7 text-wrap mb-2 body-2"
                    label
                    :class="{
                      'chat-sent-chat blue lighten-5 blue-grey--text lighten-1--text':
                        chat.fromMe,
                      'green lighten-5 blue-grey--text lighten-1--text': !chat.fromMe,
                    }"
                  >
                    <span>{{ chat.chat }}</span>
                  </v-chip>
                </li>
              </ul>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="d-flex pt-3">
            <v-text-field
              class="mr-4"
              placeholder="Type Your Message Here"
              v-model="newMessage"
              type="text"
              @keyup.enter="addMessage"
            ></v-text-field>
            <v-btn
              radius
              color="info"
              fab
              class="elevation-0 body-1"
              @click="addMessage"
            >
              <i class="far fa-paper-plane"></i>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheRecentChats",
  data: () => ({
    newMessage: "",
    chatConversation: [
      {
        conversationImg: "1.jpg",
        chat:
          "Lorem Ipsum is simply dummy text of the printing & type setting industry.",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "It’s Great opportunity to work.",
        fromMe: false,
      },
      { conversationImg: "1.jpg", chat: "Yes", fromMe: true },
      {
        conversationImg: "2.jpg",
        chat: "I would love to join the team.",
        fromMe: false,
      },
      {
        conversationImg: "1.jpg",
        chat: "Whats budget of the new project.",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "Well we have good budget for the project",
        fromMe: false,
      },
      {
        conversationImg: "1.jpg",
        chat: "okay",
        fromMe: true,
      },
      {
        conversationImg: "1.jpg",
        chat: "When we'll start this project?",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "From Tomorrow, Is it okay with you ?",
        fromMe: false,
      },
      {
        conversationImg: "1.jpg",
        chat: "Yeah, Sure",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "And From where we will start?",
        fromMe: false,
      },
      {
        conversationImg: "1.jpg",
        chat: "Let's schedule the meeting for it.",
        fromMe: true,
      },
    ],
  }),
  methods: {
    addMessage() {
      if (this.newMessage) {
        this.chatConversation.push({
          conversationImg: "1.jpg",
          chat: this.newMessage,
          fromMe: true,
        });
        this.newMessage = "";
      }
    },
  },
};
</script>