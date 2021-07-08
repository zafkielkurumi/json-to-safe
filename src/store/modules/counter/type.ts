import { createNamespacedHelpers } from "vuex";

export type CounterState = {
    count: number
}

export const counterHelper = createNamespacedHelpers('counter');

// getter
export const Count = 'count';


// action 
export const Decrease  = 'Decrease';
export const Increase = 'Increase';