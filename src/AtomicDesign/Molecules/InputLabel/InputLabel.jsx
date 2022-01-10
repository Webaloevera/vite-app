import React from 'react';
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label'
import ResponseMessage from '../../Atoms/ResponseMessage/ResponseMessage';
import './inputLabel.css'




const InputLabel = ({labelText, inputValue, onChange, name}) => {


    return (
        <div className="validate-input">
            <Label htmlFor={name} text={labelText}/>
            <Input name={name} onChange={onChange} value={inputValue}/>
            <ResponseMessage/>   
        </div>
    );
}

export default InputLabel;