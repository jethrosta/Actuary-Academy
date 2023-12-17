<script setup>
import { useAuthStore } from "../../store";
import router from "../../router/index.js";
import { ref, computed, onBeforeMount } from 'vue';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup"
import { RouterLink } from 'vue-router';
import { getGoogleUrl } from "../../services/google-url.service";
import { getFacebookUrl } from "../../services/facebook-url.service";

//Validations
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid!"),
  password: yup.string().required("Password is required!").min(6, "Password is too short - should be 6 chars minimum!"),
  confirm: yup.string().required("Konfirmasi password anda!").oneOf([yup.ref('password'), null], 'Passwords must match')
});

//Constants
const store = useAuthStore()
const loading = ref(false)
const message = ref("")

const user = ref({
  name: "",
  email: "",
  password: ""
});

const loginStatus = computed(() => store.loginState.status.loggedIn);

const currentUrl = window.location.href;

onBeforeMount(() => {
    if (loginStatus.value) {
        router.push("/");
    }
});

function handleRegister() {
    console.log('Registering!');
    loading.value = true;

    store.register(user.value)
        .then(() => {
            loading.value = false;
            router.push({name:"login"}).then(() => {
                router.go(0);
            });
        })
        .catch(error => {
            loading.value = false;
            message.value =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
        );
}

function goBack() {
    router.go(-1);
}

</script>
<template>
    <body class="font-inter py-10 bg-cover bg-main_blue" style="background-image: url('src/assets/Background.png');">
        <div class="flex sm:px-20 md:py-10 items-center justify-center mx-auto">
            <div class="w-full xl:max-w-2xl p-10">
                <div class="text-white">
                    <button class="flex flex-row py-2 text-sm" @click="goBack">
                        <svg class="translate-x-[-5px]" width="20" height="20"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071Z"  fill="white" />
                        </svg>
                        Kembali
                    </button>
                    <h1 class="lg:text-4xl md:text-3xl font-semibold">Siap untuk bergabung?</h1>
                    <p class="pt-0">Silahkan masukkan identitas Anda</p>

                    <Form @submit="handleRegister" :validation-schema="schema" class="pt-4">
                        <label class="flex flex-col">
                            <span class=" mt-4 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Nama</span>
                            <Field name="name" v-model="user.name" class=" text-black pl-8 shadow-2xl rounded-md h-14"
                                type="text" placeholder="Masukkan nama Anda" />
                            <ErrorMessage name="name" component="div" className="text-red-500" />

                            <span class=" mt-4 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <Field name="email" v-model="user.email" class=" text-black pl-8 shadow-2xl rounded-md h-14" 
                                type="email" placeholder="Masukkan email Anda" />
                            <ErrorMessage name="email" component="div" className="text-red-500" />

                            <span class=" mt-4 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi</span>
                            <Field name="password" v-model="user.password" class=" text-black pl-8 shadow-2xl rounded-md h-14"
                                type="password" placeholder="Masukkan kata sandi Anda" />
                            <ErrorMessage name="password" component="div" className="text-red-500" />

                            <Field name="confirm" class=" text-black pl-8 mt-4 shadow-2xl rounded-md h-14"
                                type="password" placeholder="Konfirmasi Kata Sandi" />
                            <ErrorMessage name="confirm" component="div" className="text-red-500" />
                        </label>
                        <div class="mt-5 flex pl-1">
                            <input type="checkbox" class="border-gray-400 scale-125 ">
                            <div class=" text-slate-600 px-3 flex gap-1">
                                <span>Saya menyetujui</span>
                                <a href="javascript:void(0)" class="hover:cursor-pointer underline">Ketentuan & Kebijakan Privasi</a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="bg-sec_blue text-white font-bold w-full h-[59px] rounded-[10px] mt-6">Daftar</button>
                        </div>
                        <div class=" center my-5 items-center space-x-3">
                            <hr class=" bg-main_blue w-full h-[2px]  ">
                            <p class=" w-full text-center text-main_blue font-inter text-md">atau daftar dengan</p>
                            <hr class=" bg-main_blue w-full h-[2px]  ">
                        </div>
                        <div class="flex text-xl space-x-2 " >
                            <a :href="getGoogleUrl(currentUrl)"
                                class=" center regBut w-1/2 h-14 space-x-2 justify-center flex">
                                <img src="/src/assets/icon/google-color-svgrepo-com.svg" class="py-4" />
                                <span class="self-center">Google</span>
                            </a>
                            <a :href="getFacebookUrl(currentUrl)"
                                class="center regBut w-1/2 h-14 space-x-2 justify-center flex">
                                <img src="/src/assets/icon/facebook-svgrepo-com.svg" class="py-3" />
                                <span class="self-center">Facebook</span>
                            </a>
                        </div>
                        <div class=" center space-x-2 font-bold mt-5">
                            <p class=" text-main_blue">Sudah Memiliki akun?</p>
                            <RouterLink to="/login" class=" text-sec_blue underline underline-offset-2 ">Masuk</RouterLink>
                        </div>
                    </Form>
                </div>
            </div>
            <div class="py-10 px-8 hidden xl:block">
                <div class=" h-[50rem] w-[30rem] relative">
                    <img src="/src/assets/Vector 3.jpg" class=" w-full h-full object-cover rounded-[2.5rem] absolute "/>
                    <div  class=" absolute bottom-16 mx-16 z-20 ">
                        <p class=" text-white font-inter text-xl">Jadilah bagian Actuary Academy</p>
                        <p class=" text-5xl font-bold text-white">From Zero to Fellow</p>
                    </div>
                    <div class=" bg-gradient-to-t from-main_blue to-transparent w-full h-full absolute z-10 rounded-[2.5rem]">

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
