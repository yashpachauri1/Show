import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const[validEmail, setValidEmail] =useState(false);
    const [formState, setFormState] = useState({
        fName: '',
        lName: '',
        email: '',
        qType: [],
        message: '',
        term: false,
        touched: {
            fName: false,
            lName: false,
            email: false,
            qType: false,
            message: false,
            term: false
        },
        errors: {}
    });

    const validate = () => {
        const errors = {};
        if (!formState.fName) errors.fName = 'First Name is required';
        if (!formState.lName) errors.lName = 'Last Name is required';
        if (!formState.email) errors.email = 'Email Address is required';
        if (!formState.qType.length) errors.qType = 'Query Type is required';
        if (!formState.message) errors.message = 'Message is required';
        if (!formState.term) errors.term = 'You must accept the terms';
        return errors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? (name === 'qType' ? 
                checked ? [...formState.qType, value] : formState.qType.filter(q => q !== value) 
                : checked) : value,
            errors: {
                ...formState.errors,
                [name]: ''
            }
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setFormState({
            ...formState,
            touched: {
                ...formState.touched,
                [name]: true
            }
        });

        if(name=='email'){
        setValidEmail(isValidEmail(e.target.value));  
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormState({
                ...formState,
                errors
            });
        } else {
            // Form is valid, submit the form or do further processing
            alert('Form submitted successfully');
            console.log(formState);
        }
    };

    const message = 'This field is required';
    const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    return (
        <div className='container'>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <div className="name">
                    <p>
                        <label htmlFor="fName" className='required'>First Name</label>
                        <input
                            type="text"
                            onBlur={handleBlur}
                            className={formState.touched.fName && !formState.fName ? 'error' : 'textInput'}
                            name="fName"
                            id="fName"
                            onChange={handleChange}
                            required
                        />
                        {formState.touched.fName && !formState.fName && (<p className='errorPara'>{message}</p>)}
                    </p>
                    <p>
                        <label htmlFor="lName" className='required'>Last Name</label>
                        <input
                            type="text"
                            onBlur={handleBlur}
                            className={formState.touched.lName && !formState.lName ? 'error' : 'textInput'}
                            name="lName"
                            id="lName"
                            onChange={handleChange}
                            required
                        />
                        {formState.touched.lName && !formState.lName && (<p className='errorPara'>{message}</p>)}
                    </p>
                </div>

                <p>
                    <label htmlFor="email" className='required' >Email Address</label>
                    <input
                        type="email"
                        onBlur={handleBlur}
                        className={formState.touched.email && !formState.email ||formState.touched.email && !validEmail ? 'error' : 'textInput'}
                        name="email"
                        id="email"
                        onChange={handleChange}
                        required
                    />
                    {formState.touched.email && !formState.email && (<p className='errorPara'>{message}</p>)}
                    {formState.touched.email && !validEmail && (<p className='errorPara'>Please enter a valid email</p>)}
                </p>
                <label className='queryMainHeading required' htmlFor="qType">Query Type</label>
                <div className='query'>
                    <p>
                        <input
                            type="checkbox"
                            onBlur={handleBlur}
                            name='qType'
                            id='qType1'
                            onChange={handleChange}
                            value='GeneralEnquiry'
                        />
                        <label htmlFor="qType1">General Enquiry</label>
                    </p>

                    <p>
                        <input
                            type="checkbox"
                            name='qType'
                            onBlur={handleBlur}
                            id='qType2'
                            onChange={handleChange}
                            value='SupportRequest'
                        />
                        <label htmlFor="qType2">Support Request</label>
                    </p>
                </div>

                <p>
                    <label htmlFor="message" className='required' >Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows='5'
                        style={formState.touched.message && !formState.message ? { border: '1px solid hsl(0, 66%, 54%)' } : { display: 'block' }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {formState.touched.message && !formState.message && (<p className='errorPara'>{message}</p>)}
                </p>

                <p className='term'>
                    <input
                        type="checkbox"
                        name='term'
                        className={formState.touched.term && !formState.term ? 'error' : ''}
                        id='term'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="term" className='required'>I consent to being contacted by the term</label>
                </p>
                <div className="action">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
