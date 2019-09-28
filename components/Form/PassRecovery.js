import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

const PassRecovery = (props) => {
    const { t } = useTranslation();

    useEffect(() => {
        const title = document.title;
        document.title = t('pass_recovery');
        return () => document.title = title;
    });   

    return (
        <div>
            <h1 className="form__header">{ t('pass_recovery') }</h1>
            <input type="text" 
                placeholder={ t('email') } 
                className="form__input" 
                defaultValue={ props.email } 
            />
            <button className="form__btn">{ t('restore') }</button>
        </div>
    );
}

export default PassRecovery;
