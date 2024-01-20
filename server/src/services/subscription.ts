import { SubscriptionModel } from "../db/subscription";

export const Subscription = () => SubscriptionModel.find();

export const SubscriptionById = (order_id: string) => SubscriptionModel.findById(order_id);

export const SubscriptionByUserId = async (user_id: string) => SubscriptionModel.find({ subscribers: user_id })

export const createSubscription = async (values: Record<string, any>) => new SubscriptionModel(values)
    .save()
    .then((course) => {
      course.toObject();
    })