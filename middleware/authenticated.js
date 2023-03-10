export default defineNuxtRouteMiddleware(()=> {
   // console.log('auth middleware');
   const auth = useState('auth');
   console.log(auth);
   if(!auth.value){
      return navigateTo('micuenta');
   } 
});