import { cart } from "../db.js";
import { toRaw } from 'vue';
import axios from 'axios';
import UserService from '../services/user.service.js';

const user = JSON.parse(localStorage.getItem('user'));

export const userStore = {
    id: 'userStore',
    state: () => ({
        allCourses: null,
        notifications: null,
        
    }),

    getters: {
        getAllCourses: (state) => {
            return state.allCourses;
        },

    },

    actions: {
        async setAllcourses() {
            try {
                const res = await UserService.getAllCourses(user._id);
                this.allCourses = res.data;
                console.log(res.data);
            } catch (error) {
                this.allCourses = null;
                console.log(error);
            }
        },

        async setNotifications() {
            try {
                const res = await UserService.getNotifications(user._id);
                this.notifications = res.data;
                console.log(res.data);
            } catch (error) {
                this.notifications = null;
                console.log(error);
            }
        },

    }
};
