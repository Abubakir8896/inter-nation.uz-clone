import App from "./App.vue";
import Toast from "vue-toastification";
import { createApp } from "vue";
import "vue-toastification/dist/index.css";
import socket from "./socket";
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
app.use(Toast);
app.mount("#app");
