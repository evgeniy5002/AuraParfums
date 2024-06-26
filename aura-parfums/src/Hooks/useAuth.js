import { useSelector } from "react-redux";

// Проверка на то, вошел пользователь или нет
// Берется как {isAuth} = useAuth();
export function useAuth() {
    const email = useSelector(state => state.user.email);
    console.log("in useAuth: ", !!email);

    return {
        isAuth: !!email,
        email,
    }
}
