import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "./request";

export const login = async (values) => {
    try {
        const response = await request({
            url: '/user/login',
            method: 'post',
            data: values,
        });

        if (response?.data?.token) {
            await AsyncStorage.setItem('auth_token', response?.data?.token)
            return response?.data?.token;
        }
    } catch (error) {
        console.log('Error in signIn', error);
    }
}

export const singUp = async (values) => {
    try {
        const response = await request({
            url: '/user/register',
            method: 'post',
            data: values,
        });

        if (response) {
            const { email, password } = values
            const loginResponse = await login({ email, password });
            return loginResponse;
        }
    } catch (error) {
        console.log('Error in signUp', error);
    }
}

export const getProfile = async () => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get',
        });

        if (response) {
            return response?.data;
        }
    } catch (error) {
        console.log('Error in get profile', error);
    }
}

export const updateProfile = async (data) => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'patch',
            data,
        });

        if (response) {
            const profile = await getProfile()
            return profile;
        }
    } catch (error) {
        console.log('Error in updateProfile', error);
    }
}