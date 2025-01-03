import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const useErrorHandler = (error: Error | undefined) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(error) {
            navigate('/error');
        }
    }, [error])
};

export default useErrorHandler;