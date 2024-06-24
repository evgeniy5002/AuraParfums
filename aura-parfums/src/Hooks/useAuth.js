import { useSelector } from "react-redux";

export function useAuth() {
    const email = useSelector(state => state.email);
    console.log("in useAuth: ", !!email);

    return {
        isAuth: !!email,
        email,
    }
}
