<template>
  <div style="position: sticky;">
    <div style="display: flex; align-items:center;">
     <div style="margin-left: 10px; margin-top: 10px;">
       <img alt="Inter nation logo" loading="lazy" width="200" height="50" decoding="async" data-nimg="1" class="style_logo__835xg" style="color:transparent" src="../assets/photo_2024-01-16_10-00-27.jpg">
     </div>
     <div style="margin-left:450px; display: flex; justify-content: space-between; width:350px">
       <button style="font-size: 18px;">About</button>
       <button style="font-size: 18px;">Team</button>
       <button style="font-size: 18px;">Order</button>
     </div>
     <div style="margin-left:100px; display: flex; align-items:center">
       <img style="width: 30px; height:30px" src="../assets/photo_2024-01-16_10-11-53.jpg" alt="">
       <h3 style="margin-left: 20px;">78 777 77 07</h3>
       <button @click="goToLoginPage()" style="margin-left:110px; font-size: 18px; background-color: orange; border-radius:5px; padding: 5px; padding-left: 10px; padding-right: 10px;">Login</button>
     </div>
    </div>
  </div>
  <div style="margin-top:20px">
    <img style="width: 1600px; height:700px" src="../assets/photo_2024-01-16_10-22-45.jpg" alt="">
 </div>
 <div style="margin-top: 60px; margin-left:20px; display: flex;">
    <video style="width: 750px; border-radius: 20px" src="../assets/Welcome to INTER NATION SCHOOL📚.mp4"></video>
    <div style="margin-left: 40px; margin-top: 5px;">
      <h1>О НАШЕМ УЧЕБНОМ ЦЕНТРЕ АНГЛИЙСКОГО ЯЗЫКА</h1>
      <div style="margin-top: 40px;">
        <h4>УЧЕБНЫЙ ЦЕНТР английского языка INTER NATION SCHOOL</h4>
        <p>был основан 22 июля 2013 года и на данный момент оперируют 10 больших филиалов учебного центра в самых удобных локациях Ташкента и оборудованы передовыми технологиями, созданы лучшие условия для обучения на высоком уровне. Обучение ведётся по специальной программе, разработанной Оксфордским университетом (Oxford University Press), являющейся одной из лучших! Наш УЧЕБНЫЙ ЦЕНТР – первый в Узбекистане, который использует данную программу в лицензионном формате.</p>
        <div style="display: flex; margin-top: 30px; justify-content: space-around;">
          <p>У нас</p>
          <p>На наших курсах обучаются более</p>
          <p>Более</p>
        </div>
        <div style="display: flex; justify-content: space-around;">
          <h1>10</h1>
          <h1>15,000</h1>
          <h1>400</h1>
        </div>
        <div style="display: flex; justify-content: space-around;">
          <p>филиалов</p>
          <p>студентов</p>
          <p>сотрудников</p>
        </div>
      </div>
    </div>
 </div>
 <div style="margin-top: 50px; margin-left:20px">
  <h1>НАШИ УЧИТЕЛЯ</h1>
  <div style="margin-top: 50px; display: flex;">
    <div>
      <div style="border: 1px solid gray; width: 300px; padding: 10px;">
        <div>
          <img src="../assets/photo_2024-01-16_10-58-05.jpg" alt="Ms.Madina">
        </div>
        <div style="display: flex; margin-left: 50px;">
          <p style="background-color: orange; color:orange; border-radius:10px">..</p>
          <h2 style="margin-left: 10px;">Ms.Madina</h2>
        </div>
      </div>
    </div>
    <div>
      <div style="border: 1px solid gray; width: 300px; padding: 10px">
        <div>
          <img src="../assets/photo_2024-01-16_10-58-05.jpg" alt="Ms.Madina">
        </div>
        <div style="display: flex; margin-left: 50px;">
          <p style="background-color: orange; color:orange; border-radius:10px">..</p>
          <h2 style="margin-left: 10px;">Ms.Madina</h2>
        </div>
      </div>
    </div>
    <div>
      <div style="border: 1px solid gray; width: 300px; padding: 10px">
        <div>
          <img src="../assets/photo_2024-01-16_10-58-05.jpg" alt="Ms.Madina">
        </div>
        <div style="display: flex; margin-left: 50px;">
          <p style="background-color: orange; color:orange; border-radius:10px">..</p>
          <h2 style="margin-left: 10px;">Ms.Madina</h2>
        </div>
      </div>
    </div>
    <div>
      <div style="border: 1px solid gray; width: 300px; padding: 10px">
        <div>
          <img src="../assets/photo_2024-01-16_10-58-05.jpg" alt="Ms.Madina">
        </div>
        <div style="display: flex; margin-left: 50px;">
          <p style="background-color: orange; color:orange; border-radius:10px">..</p>
          <h2 style="margin-left: 10px;">Ms.Madina</h2>
        </div>
      </div>
    </div>
    <div>
      <div style="border: 1px solid gray; width: 300px; padding: 10px">
        <div>
          <img src="../assets/photo_2024-01-16_10-58-05.jpg" alt="Ms.Madina">
        </div>
        <div style="display: flex; margin-left: 50px;">
          <p style="background-color: orange; color:orange; border-radius:10px">..</p>
          <h2 style="margin-left: 10px;">Ms.Madina</h2>
        </div>
      </div>
    </div>
  </div>
 </div>
 <div style="padding: 50px; background-color:#fac105; margin-top:80px;">
  <div style="display:flex; justify-content: space-between;">
    <h1>ЗАПИШИТЕСЬ НА ПЕРВОЕ ЗАНЯТИЕ</h1>
    <div style="width: 500px;">
      <p>Мы приглашаем вас на первый урок на курсы английского языка для комфортного знакомства с преподавателем и выбора подходящей программы обучения. Оставьте заявку и мы свяжемся с вами в ближайшее время!</p>
    </div>
  </div>
  <form @submit.prevent="submitForm" style="display:flex; justify-content:space-between; margin-top:30px">
  <input v-model="form.name" style="border: 1px solid black; width:400px; padding: 20px; font-size: 18px;" type="text" placeholder="Name">
  <input v-model="form.phone" style="border: 1px solid black; width:400px; padding: 20px; font-size: 18px;" type="text" placeholder="Phone Number">
  <button type="submit" style="border: 1px solid black; width:400px; padding: 20px; background-color: black; color:#fac105; font-size: 22px;">Записаться</button>
</form>
 </div>
</template>

<script lang="ts">
import { RT_LOGIN } from "@/constants/user";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
  },
}
},methods: {
  goToLoginPage(): void {
    this.$router.push({ name: RT_LOGIN });
  },
  async submitForm(): Promise<void> {
  if (!this.form.name || !this.form.phone) {    
    toast.warning("Data error");
  } else {
    try {
      const response = await axios.post("http://localhost:4000/api/order/create", this.form);

      if (response.status === 201) {
        toast.success("Data successful");
        this.form.name = "";
        this.form.phone = "";
      } else {
        console.error(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
}
}
}
</script>
<style scoped>
</style>
