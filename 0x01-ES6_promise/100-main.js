import asyncUploadUser from "/alx-frontend-javascript/0x01-ES6_promise/100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
