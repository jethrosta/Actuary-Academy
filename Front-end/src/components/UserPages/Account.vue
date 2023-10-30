<script setup>
import { ref } from 'vue';

const userInputData = ref({
    name: null,
    email: null,
    password: '**********',
    phone: null,
    city: null,
    province: null,
    gender: null,
    birth: {
        day: null,
        month: null,
        year: null
    }
});

const storedProfileDetails = localStorage.getItem('profileDetails')

if (storedProfileDetails) {
    userInputData.value = JSON.parse(storedProfileDetails);
}

function onEditSave () {
    localStorage.setItem('profileDetails', JSON.stringify(userInputData.value));
}

</script>
<template>
    <div class="content-area flex flex-col text-main_blue gap-y-6 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Edit Profil</div>
        <div class="flex flex-row gap-x-8 w-full">
            <img src="/src/assets/Ellipse (1).png" alt="" class="profile-pic rounded-full w-24 h-24">
            <div class="flex flex-col gap-1 w-full">
                <label class="text-xl">Nama</label>
                <input type="text" v-model="userInputData.name" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
        </div>
        <div class="flex flex-col gap-1 w-full">
            <label class="text-xl">Email</label>
            <input type="text" v-model="userInputData.email" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
        </div>
        <div class="flex flex-col gap-1 w-full">
            <div class="flex flex-row justify-between">
                <label class="flex text-xl">Kata Sandi</label>
                <div class="flex text-lg text-gray-400 cursor-pointer">Ubah kata sandi</div>
            </div>
            <input type="password" v-model="userInputData.password" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" disabled>
        </div>
        <div class="flex flex-col gap-1  w-full">
            <label class="text-xl">Nomor Telepon</label>
            <input type="number" v-model="userInputData.phone" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
        </div>
        <div class="flex flex-row gap-6">
            <div class="flex flex-col gap-1  w-full">
                <label class="text-xl">Kota / Kabupaten</label>
                <input type="text" v-model="userInputData.city" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
            <div class="flex flex-col gap-1  w-full">
                <label class="text-xl">Provinsi</label>
                <input type="text" v-model="userInputData.province" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
        </div>
        <div class="flex flex-row gap-6">
            <div class="flex flex-1 flex-col gap-1 ">
                <label class="text-xl">Jenis Kelamin</label>
                <select v-model="userInputData.gender" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                </select>
            </div>
            <div class="flex flex-1 flex-col gap-1">
                <label class="text-xl">Tanggal Lahir</label>
                <div class="flex flex-row gap-3">
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.birth.day" class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.birth.month" class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.birth.year" class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-1">
            <div class="bg-main_blue text-white font-semibold rounded-lg text-lg px-4 py-2 cursor-pointer" @click="onEditSave">Simpan</div>
        </div>
    </div>
</template>
