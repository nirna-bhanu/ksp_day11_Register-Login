import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isSubmitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <form className="form" onSubmit={handleSubmit}>
                {isSubmitted ? (
                    <div>
                        <p>Thank you for registering!</p>
                        <p>Go to <Link to="../SignIn">SignIn</Link></p>
                    </div>
                ) : (
                    <>
                        <p className="title">Register</p>
                        <p className="message">Signup now and get full access to our app.</p>
                        <div className="flex">
                            <label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder=""
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder=""
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Lastname</span>
                            </label>
                        </div>

                        <label>
                            <input
                                className="input"
                                type="email"
                                placeholder=""
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <span>Email</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="password"
                                placeholder=""
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span>Password</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="password"
                                placeholder=""
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <span>Confirm password</span>
                        </label>

                        <button className="submit" type="submit">
                            Submit
                        </button>

                        <p className="signin">
                            Already have an account? <Link to="../SignIn">Signin</Link>
                        </p>
                    </>
                )}
            </form>
        </div>
    );
};

export default RegisterForm;
