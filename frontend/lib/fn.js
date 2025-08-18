export const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(value);
};
export const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(value);
};

export const priceCalculate = (products) => {
    return products.reduce((acc, cur) => {
        return acc + cur.price * cur.qty;
    }, 0);
};
