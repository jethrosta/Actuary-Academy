import { UserModel } from "../db/users";

export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());

export const getUsers = () => UserModel.find();
export const getUserById = (id: string) => UserModel.findById(id)
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ "authentication.sessionToken.token": sessionToken, });
export const getUserByName = (name: string) => UserModel.findOne({ name });
export const getUserIdByEmail = async (userEmail: string) => {
    try {
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) return "User not found."

        return user._id;
    } catch (err) {
        console.error("Error at service/user: ", err);
        throw err;
    }
}
export const updateUserbyId = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);

export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });

export const UpdateUserStatus = async (userId: string, plan: string, endDate: Date) => {
    try {
        const updateStatus: { is_subscribed: boolean, academy_plan: string, expireAt?: Date } = {
            is_subscribed: true,
            academy_plan: plan,
        };

        if (plan === 'Paket Pembahasan Soal 6 Bulan' && endDate || plan === 'Paket Lengkap 6 Bulan' && endDate) {
            updateStatus.expireAt = endDate;
        }

        const user = await UserModel.findByIdAndUpdate(userId, updateStatus, { new: true });

        if(!user) return "User not found."

        return user;
    } catch (err) {
        console.error("Error at services/user: ", err);
        throw err;
    }
}
