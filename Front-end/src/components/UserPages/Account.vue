<template>
    <div class="content-area flex flex-col text-main_blue gap-y-6 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Edit Profil</div>
        <div class="flex flex-row gap-x-8 w-full">
            <img src="../../assets/Ellipse (1).png" alt="" class="profile-pic rounded-full w-24 h-24">
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
                <label class="flex text-xl text-gray-400">Ubah kata sandi</label>
            </div>
            <input type="password" v-model="userInputData.password" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
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
                <input type="text" v-model="userInputData.gender" class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
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
    </div>
</template>

<script setup>
import {ref} from 'vue';

const userInputData = {
    name: 'nama',
    email: 'email',
    password: 'password',
    phone: '1234567890',
    city: 'kota',
    province: 'provinsi',
    gender: 'jenis kelamin',
    birth: {
        day: 1,
        month: 1,
        year: 2000
    }
};


</script>
