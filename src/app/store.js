import { configureStore } from "@reduxjs/toolkit";

// const reducerLogger = require("redux-logger");

// const logger = reducerLogger.createLogger();

import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/iceCreamSlice";
import  userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
});

export default store;