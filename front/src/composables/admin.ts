import { useAdminStore } from '@/store/admin';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useAdmin = () => {

  const store = useAdminStore();

  const router = useRouter();


  const route = useRoute();

  const { users } = storeToRefs(store);

  const { getStudentList } = useAdminStore();

 
  onMounted(async () => {
    await getStudentList();
  });

 
  return {
    users,
    getStudentList,
    route,
    router
  };
};
