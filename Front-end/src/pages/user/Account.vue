<template>
    <div class="content-area flex flex-col text-main_blue gap-y-6 w-full">
        <div class="top-0 sticky font-bold text-2xl py-2 bg-white">Edit Profil</div>
        <div class="flex flex-row gap-x-8 w-full">
            <img src="/src/assets/Ellipse (1).png" alt="" class="profile-pic rounded-full w-24 h-24">
            <div class="flex flex-col gap-1 w-full">
                <label class="text-xl">Nama</label>
                <input type="text" v-model="userInputData.name"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
        </div>
        <div class="flex flex-col gap-1 w-full">
            <label class="text-xl">Email</label>
            <input type="text" v-model="userInputData.email"
                class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3"
                disabled>
        </div>
        <div class="flex flex-col gap-1 w-full">
            <div class="flex flex-row justify-between">
                <label class="flex text-xl">Kata Sandi</label>
                <div class="flex text-lg text-gray-400 cursor-pointer">Ubah kata sandi</div>
            </div>
            <input type="password" v-model="userInputData.password"
                class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3"
                disabled>
        </div>
        <div class="flex flex-col gap-1  w-full">
            <label class="text-xl">Nomor Telepon</label>
            <input type="number" v-model="userInputData.phoneNumber"
                class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
        </div>
        <div class="flex flex-row gap-6">
            <div class="flex flex-col gap-1  w-full">
                <label class="text-xl">Kota / Kabupaten</label>
                <input type="text" v-model="userInputData.city"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
            <div class="flex flex-col gap-1  w-full">
                <label class="text-xl">Provinsi</label>
                <input type="text" v-model="userInputData.province"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
        </div>
        <div class="flex flex-row gap-6">
            <div class="flex flex-1 flex-col gap-1 ">
                <label class="text-xl">Jenis Kelamin</label>
                <select v-model="userInputData.gender"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                </select>
            </div>
            <div class="flex flex-1 flex-col gap-1">
                <label class="text-xl">Tanggal Lahir</label>
                <div class="flex flex-row gap-3">
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.dateOfBirth.day"
                            class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.dateOfBirth.month"
                            class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                    <div class="flex-1">
                        <input type="number" v-model="userInputData.dateOfBirth.year"
                            class="flex w-full focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-1">
            <div class="bg-main_blue text-white font-semibold rounded-lg text-lg px-4 py-2 cursor-pointer"
                @click="updateProfile">Simpan</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store';
import router from '@/router';

const userStore = useUserStore();

const user = JSON.parse(localStorage.getItem('user'));
const userBirthObject = ref({
    day: null,
    month: null,
    year: null
})
if (user.dateOfBirth) {
    const userBirthIso = new Date(user.dateOfBirth);
    userBirthObject.value.day = userBirthIso.getDate(),
    userBirthObject.value.month = userBirthIso.getMonth() + 1,
    userBirthObject.value.year = userBirthIso.getFullYear()
}

const userInputData = ref({
    name: user.name,
    email: user.email,
    password: '**********',
    phoneNumber: user.phoneNumber,
    city: user.city,
    province: user.province,
    gender: user.gender,
    dateOfBirth: userBirthObject
});

const updateProfile = () => {
    let update = {};
    const date = userInputData.value.dateOfBirth;

    if (userInputData.value.name !== user.name) {
        update.name = userInputData.value.name;
    }
    if (userInputData.value.phoneNumber !== user.phoneNumber) {
        update.phoneNumber = userInputData.value.phoneNumber;
    }
    if (userInputData.value.city !== user.city) {
        update.city = userInputData.value.city;
    }
    if (userInputData.value.province !== user.province) {
        update.province = userInputData.value.province;
    }
    if (userInputData.value.gender !== user.gender) {
        update.gender = userInputData.value.gender
    }
    if (date.day !== userBirthObject.value.day || date.month !== userBirthObject.value.month || date.year !== userBirthObject.value.year) {
        const dateOfBirth = dateToIso(userInputData.value.dateOfBirth);
        update.dateOfBirth = dateOfBirth;
    }
    else if (Object.keys(update).length === 0) {
        return;
    }
    console.log(update)
    // userStore.updateProfile(update)
}


//Helpers
function isoToDate(isoDate) {
    const date = new Date(isoDate);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const customFormat = `${day} ${month} ${year} - ${hours}:${minutes}`;
    return customFormat;
}

function dateToIso(dateObj) {
    const day = dateObj.day;
    const month = dateObj.month;
    const year = dateObj.year;

    const isoDate = new Date(year, month, day);
    return isoDate;
}
</script>
