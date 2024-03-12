const {USER_NAME, PASSWORD} = process.env;

export const connectProduct = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.smzztiz.mongodb.net/productDB?retryWrites=true&w=majority`;
