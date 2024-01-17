<template>
    <div style="display: flex; justify-content:center; font-size: 20px;">
        <h1>Admin Page</h1>
    </div>
    <h1 style="margin-left: 10px; font-size: 38px;">Users</h1>
    <div>
        <div style="display: flex; border:1px solid gray; justify-content:space-around; padding: 30px; background-color: orange;">
            <h3>Name</h3>
            <h3>Phone</h3>
        </div>
        <div style="border: 1px solid black;">            
            <div style="display: flex; border:1px solid gray; justify-content:space-around; padding: 30px;" v-for="user in users.order" :key="user.order_id">
                <h4>{{ user.name }}</h4>
                <h4>{{ user.phone }}</h4>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import axios from "axios";
import { log } from "console";
  import { useToast } from "vue-toastification";
  const toast = useToast();
  export default {
    name: "AdminPage",
    data() {
      return {
        texte: [],
        users: [],
        loading: false
      };
    },    
    mounted: async function () {
      this.loading = true;
      const response = await axios.get("http://localhost:4000/api/order/find");
      if (response.status === 200) {
      this.users = await response.data;
      console.log(this.users);
      
    }else {
        console.error(`Serverdan xato: ${response.status}`);
      }
      this.loading = false;
      const response1 = await axios.get("http://localhost:4000/api/order/find");
      if (response.status==200) {
        this.texte = await response1.data
      } else {
        console.error(`Serverdan xato: ${response1.status}`);
      }
    },
  };
  </script>
  