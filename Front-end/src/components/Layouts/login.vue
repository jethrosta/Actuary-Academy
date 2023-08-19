<template>
   <body class=" w-auto flex justify-center bg-[#0066CC]" style="background-image: url('src/assets/Background.png')">
        <div class="container flex flex-row justify-center align-middle p-4">
            <div class="py-10 px-8">
                <div class="w-[30rem] font-roboto text-white">
                    <button class="flex flex-row py-2 text-sm" @click="goBack">
                        <svg class="translate-x-[-5px]" width="20" height="20"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071Z"  fill="white" />
                        </svg>
                        Kembali
                    </button>
                    <h1 class=" lg:text-4xl md:text-3xl font-semibold">Selamat datang kembali!</h1>
                    <p class="pt-0">Masukkan informasi Anda untuk melanjutkan</p>
                    <Form @submit="handleLogin" :validation-schema="schema" class="pt-4">
                        <label class=" flex flex-col">
                            <span class=" mt-4 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <Field name="email" class=" text-black pl-8 shadow-2xl rounded-md h-14"
                                type="email" placeholder="Masukkan email Anda" />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                            <span class=" mt-4 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi</span>
                            <Field name="password" class=" text-black pl-8 shadow-2xl rounded-md h-14"
                                type="password" placeholder="Masukkan kata sandi Anda" />
                            <ErrorMessage name="password" component="div" className="text-red-500" />
                        </label>
                        <div>
                            <button type="submit" class="bg-[#0D1C9F] text-white font-bold w-full h-[59px] rounded-[10px] mt-6">Masuk</button>
                        </div>
                        <div class="center my-5 items-center space-x-3">
                            <hr class=" bg-main_blue w-full h-[2px] ">
                            <p class=" w-full text-center text-main_blue font-inter text-md">atau masuk dengan</p>
                            <hr class=" bg-main_blue w-full h-[2px]">
                        </div>
                        <div class="flex text-xl space-x-2">
                            <div class=" center regBut w-1/2 h-14 space-x-2 justify-center flex">
                                <img src="src/assets/icon/google-color-svgrepo-com.svg" class="py-4"/>
                                <button class=" "
                                >Google</button>
                            </div>
                            <div class="center regBut w-1/2 h-14 space-x-2 justify-center flex">
                                <img src="src/assets/icon/facebook-svgrepo-com.svg" class="py-3"/>
                                <button class=" ">Facebook</button>
                            </div>
                        </div>
                        <div class=" center space-x-2 font-bold mt-5">
                            <p class=" text-main_blue">Belum Memiliki akun?</p>
                            <a href="./daftar" class=" text-sec_blue underline underline-offset-2 ">Daftar Sekarang</a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="py-10 px-8 hidden xl:block">
                <div class=" h-[34rem] w-[28rem] relative">
                    <img src="src/assets/Vector 4.jpg" class=" w-full h-full object-cover rounded-[2.5rem] absolute "/>
                    <div  class=" absolute bottom-16 mx-16 z-20 ">
                        <p class=" text-white font-inter font-light text-xl">Jadilah bagian Actuary Academy</p>
                        <p class=" text-4xl font-bold text-white">From Zero to Fellow</p>
                    </div>
                    <div class=" bg-gradient-to-t from-main_blue to-transparent w-full h-full absolute z-10 rounded-[2.5rem]">

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
import * as yup from "yup"

export default {
    name: "Login",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required("Email diperlukan!").email("Email tidak valid!"),
            password: yup.string().required("Password diperlukan!"),
        });

        return {
            loading: false,
            message: "",
            schema,
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/user");
        }
    },
    methods: {
        handleLogin(user) {
            this.loading = true;
            this.loggingIn = true;

            this.$store.dispatch("auth/login", user).then(
                () => {
                    this.$router.push("/user");
                },
                (error) => {
                    this.loading = false;
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );

        },
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>