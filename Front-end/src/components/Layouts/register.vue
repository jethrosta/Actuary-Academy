<template>
    <body class=" p- w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png');">
        <div class=" container mx-auto flex ">
            <div class=" mx-auto">
                <div class=" py-8 font-roboto text-white ">
                    <h1 class="text-3xl font-semibold">Siap untuk bergabung?</h1>
                    <p class="pt-0">Silahkan masukkan identitas Anda</p>
                    <Form @submit="handleRegister" :validation-schema="schema" class="pt-4">
                        <label class="block">
                            <span
                                class=" my-2 block font-inter after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Nama</span>
                            <Field name="name" class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[50px]" type="text"
                                placeholder="Masukkan nama Anda" />
                            <ErrorMessage name="name" component="div" className=" text-red-500" />

                            <span
                                class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <Field name="email" class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[50px]"
                                type="email" placeholder="Masukkan email Anda" />
                            <ErrorMessage name="email" component="div" className=" text-red-500" />

                            <span
                                class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata
                                Sandi</span>
                            <Field name="password" class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[50px]"
                                v-model="password" type="password" validate-on-input placeholder="Buat kata sandi Anda" />
                        </label>
                        <div class="mt-5">
                            <input type="checkbox" class="border-gray-400">
                            <span class="text-zinc-400 ml-4">Saya menyetujui Ketentuan & Kebijakan Privasi</span>
                        </div>
                        <div class="mt-5">
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] font-inter font-bold text-xl">Daftar</button>
                        </div>
                    </form>
                    <div class=" center my-5 items-center space-x-3">
                        <hr class=" bg-main_blue w-[33.3%] h-[2px] ">
                        <p class=" text-main_blue font-inter text-lg">atau daftar dengan</p>
                        <hr class=" bg-main_blue w-[33.3%] h-[2px] ">
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
                        <p class=" text-main_blue">Sudah Memiliki akun?</p>
                        <p class=" text-sec_blue underline underline-offset-2 ">Masuk</p>
                    </div>
                </div>
            </div>
            <div class=" pt-20">
                <div class=" h-[40rem] w-[30rem] relative  ">
                    <img src="src/assets/Vector 3.jpg" class=" w-full h-full object-cover rounded-[2.5rem] absolute "/>
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
    name: "Register",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup.string().required("Email is required").email("Email is invalid!"),
            password: yup.string().required("Password is required!")
        });

        return {
            loading: false,
            message: "",
            password: "",
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
        handleRegister(user) {
            console.log('Registering');
            this.loading = true;
            this.$store.dispatch("auth/register", user).then(
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
    }
}
</script>
