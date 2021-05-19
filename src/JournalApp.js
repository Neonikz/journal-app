import React from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './components/routers/AppRouter'
import { store } from './components/store/store';

export const JournalApp = () => {
    return (

        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
