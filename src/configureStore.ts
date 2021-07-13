import { applyMiddleware, Store, StoreEnhancer, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { IApplicationState } from "./interfaces/IApplicationState";
import rootReducer from "./store/reducer/rootReducer";
import rootSaga from "./store/sagas/rootSaga";

export default function configureStore(extrastoreEnhancers: StoreEnhancer[] = []): Store<IApplicationState> {
    const sagaMiddleWare = createSagaMiddleware();
    const middleWare = applyMiddleware(sagaMiddleWare);
    const storeEnhancer = [middleWare, ...extrastoreEnhancers];
    const store = createStore(rootReducer, composeWithDevTools(...storeEnhancer));

    sagaMiddleWare.run(rootSaga)
    return store;
}
export const store = configureStore();
