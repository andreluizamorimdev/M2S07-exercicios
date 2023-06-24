import { createContext, useState } from "react";

export const FormContext = createContext({
    formData: {
        nickname: '',
        age: '',
        email: '',
        password: '',
    },
    setFormData: () => {},
});

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        nickname: '',
        age: '',
        email: '',
        password: '',
    });

    

    return (
        <FormContext.Provider value={{formData, setFormData}}>
            { children }
        </FormContext.Provider>
    )
}