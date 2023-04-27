<template>
   <body class=" w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png')">
        <div class=" container mx-auto flex">
            <div class=" w-auto rounded-xl mx-auto overflow-hidden">
                <div class=" mt-16 px-12 font-roboto text-white mr-10">
                    <h1 class="text-3xl font-semibold">Selamat datang kembali!</h1>
                    <p class="pt-0">Masukkan informasi Anda untuk melanjutkan</p>
                    <Form @submit="handleLogin" :validation-schema="schema" class="pt-4">
                        <label class="block">
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <Field name="email" class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]"
                                type="email" placeholder="Masukkan email Anda" />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi</span>
                            <Field name="password" class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]"
                                type="password" placeholder="Masukkan kata sandi Anda" />
                            <ErrorMessage name="password" component="div" className="text-red-500" />
                        </label>
                        <div>
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] mt-10">Masuk</button>
                        </div>
                        <div class=" center my-5">
                            <p class=" text-main_blue font-inter text-lg">atau daftar dengan</p>
                        </div>
                        <div class=" flex text-xl space-x-2">
                            <div class=" center regBut w-1/2 h-14 space-x-3">
                                <img src="src/assets/icon/google-color-svgrepo-com.svg" class=" p-3"/>
                                <button class=" ">Google</button>
                            </div>
                            <div class="center regBut w-1/2 h-14 space-x-3">
                                <img src="src/assets/icon/facebook-svgrepo-com.svg" class=" p-1"/>
                                <button class=" ">Facebook</button>
                            </div>
                        </div>
                        <div class=" center space-x-2 font-bold mt-5">
                            <p class=" text-main_blue">Belum Memiliki akun?</p>
                            <p class=" text-sec_blue underline underline-offset-2 ">Daftar Sekarang</p>
                        </div>
                    </form>
                </div>
                    </div>

            <div class=" pt-16">
                <div class=" h-[40rem] w-[30rem] relative  ">
                    <img src="src/assets/Vector 4.jpg" class=" w-full h-full object-cover rounded-[2.5rem] absolute "/>
                    <div  class=" absolute bottom-20 mx-20 z-20 ">
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

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
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
            email: yup.string().required("Email is required").email("Email is invalid!"),
            password: yup.string().required("Password is required!"),
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
    },
};
</script>