import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export function UserContextValuesUpdate(props) {
    const ctx = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:3001/api/login', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => {
                if (res.ok) {
                    ctx.loginUser();
                }
            })
            .catch(err => console.error(err));
    }, [ctx]);

    return <div>{props.children}</div>;
}