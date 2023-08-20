import { createContext, useState } from 'react';

const initialUser = {
    loggedIn: false,
};
// const initialMovies = [];

export function UserContextValues() {
    const [user, setUser] = useState(initialUser);
    // const [movies, setMovies] = useState(initialMovies);

    function loginUser() {
        setUser(prev => ({ ...prev, loggedIn: true }));
    }

    // function updateMovies(newMovies) {
    //     setMovies(newMovies);
    // }

    return {
        user,
        // movies,
        loginUser,
        // updateMovies,
    }
}

export const UserContext = createContext(undefined);

export function UserContextProvider({ children }) {
    return (
        <UserContext.Provider value={UserContextValues()}>
            {children}
        </UserContext.Provider>
    );
}