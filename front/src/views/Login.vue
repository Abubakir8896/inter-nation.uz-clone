<template>
    <form>
        <div style="display: flex;">
            <div class="login11">
                <img class="image2" src="../assets/Frame.svg" alt="">
            </div>
            <div class="login22">
                <h1 style="font-family: Arial Black; font-size: 36px; font-weight: 900; text-align: left; padding-bottom: 10px;">Sign In</h1>
                <p style="font-family: Roboto; font-size: 14px; font-weight: 400;">Do not you have an account? <a style="color:#549FF9; text-decoration: none;" href="/login">Sign up</a></p>
                <form @submit.prevent="save">
                    <input v-model="form.username" class='input1' type="text" placeholder="Username"  required><br>
                    <input v-model="form.password" class='input2' type="password" placeholder="Password" required>
                </form>
                <button @click="save" type="submit" class="btn">Next step</button>
            </div>
        </div>
    </form>
</template>
  
  <script lang="ts">
  import { RT_ADMIN } from "@/constants/admin";
  import { RT_HOME } from "@/constants/user";
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { useToast } from "vue-toastification";
  const toast = useToast();
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      async save() {
        if (this.form.username === "admin" && this.form.password === "qwerty") {
          await this.$router.push({ name: RT_ADMIN });
        } else {
          toast.warning("Error");
          await this.$router.push({ name: RT_HOME });
        }
      },
    },
  };
  </script>
  <style>
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .login11{
      width: 700px;
      height: 703px;
      padding: 20px;
      padding-left: 50px;
      background-color: #C9AC8C;
  }
  .login22{
      margin-left: 250px;
      width: 750px;
      justify-content: center;
      padding-top: 180px;
  }
  .input1{
      margin-top: 30px;
      border: 1px solid #B4B4BB;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 55px;
      border-radius: 8px;
  }
  .input2{
      margin-top: 15px;
      border: 1px solid #B4B4BB;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      border-radius: 8px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 55px;
  }
  .btn{
      margin-top: 30px;
      padding: 10px 100px;
      border-radius: 99px;
      background-color: #152540;
      font-family: Red Hat Display;
      font-size: 18px;
      font-weight: 500;
      color: white;
  }
  .image2{
      margin-top: 50px;
  }
  </style>