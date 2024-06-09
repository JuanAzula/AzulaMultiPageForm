import { useState } from 'react'
import useGlobalStore from '../store/globalStore'
import { RegisterOptions } from 'react-hook-form';
import { useForm } from "react-hook-form";
import ProgressBar from './ProgressBar'
import { FieldValues, Path } from 'react-hook-form'
import '../styles/form.css'
import '../styles/progressBar.css'
import '../styles/salary.css'


type CustomRegisterOptions<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = RegisterOptions<TFieldValues, TName> & {
    message?: string;
};

const Form = () => {
    const [page, setPage] = useState(0)

    const { handleSubmit, register, formState: { errors } } = useForm();

    const {
        name,
        email,
        phoneNumber,
        salary,
        setName,
        setEmail,
        setPhoneNumber,
        setSalary
    } = useGlobalStore()

    const getErrorMessage = (error: any) => {
        return typeof error?.message === 'string' ? error.message : null;
    };

    return (
        <div className="form-container w-[65%] relative left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
            <form className="form"
                onSubmit={
                    handleSubmit(() => {
                        setPage(page + 1)
                    })
                }
            >

                {page === 0 || page === 1
                    ?
                    <h6 className="descr">Contact us</h6>
                    :
                    <>
                        <h6 className='descr'>Thank you!</h6>
                    </>}


                <ProgressBar />

                {page === 0 &&
                    <>
                        <div className="input">
                            <input
                                autoComplete="off"
                                type="text"
                                {...register('name',
                                    {
                                        required: "Required",
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: "invalid name",
                                        }
                                    })}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name">Name</label>
                            {errors.name && <span className='error-message'>{getErrorMessage(errors.name)}</span>}
                        </div>

                        <div className="input">
                            <input
                                autoComplete="off"
                                type="text"
                                {...register('email', {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email">E-mail</label>
                            {errors.email && <span className='error-message'>{getErrorMessage(errors.email)}</span>}
                        </div>

                        <div className="input">
                            <input
                                autoComplete="off"
                                type="text"
                                {...register('phoneNumber', {
                                    required: "Required",
                                    pattern: {
                                        value: /^[0-9]{9}$/i,
                                        message: "invalid phone number"
                                    }
                                })}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <label htmlFor="phone-number">Phone number</label>
                            {errors.phoneNumber && <span className='error-message'>{getErrorMessage(errors.phoneNumber)}</span>}
                        </div>


                        <div>
                            <button type='submit' className='right-0'
                            >Next →</button>
                        </div>
                    </>
                }
                {page === 1 &&
                    <>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>Salary indication</p>
                        <div className="salary-container">
                            <div>
                                <label
                                    onClick={() => {
                                        setSalary('0 - 1.000')
                                    }}>
                                    <input {...register('salary',
                                        {
                                            required: "Please select a salary option",
                                            message: "Please select a salary option",
                                            validate: (value) =>
                                                value !== undefined || "Please select a salary option",

                                        } as CustomRegisterOptions)}
                                        {...(salary === '0 - 1.000' ? { checked: true } : {})} type="radio" name="radio" />
                                    <span>0 - 1.000</span>
                                </label>
                                <label
                                    onClick={() =>
                                        setSalary('1.000 - 2.000')
                                    }>
                                    <input {...register('salary')} {...(salary === '1.000 - 2.000' ? { checked: true } : {})} type="radio" name="radio" />
                                    <span>1.000 - 2.000</span>
                                </label>
                                <label
                                    onClick={() =>
                                        setSalary('2.000 - 3.000')
                                    }>
                                    <input {...register('salary')} {...(salary === '2.000 - 3.000' ? { checked: true } : {})} type="radio" name="radio" />
                                    <span>2.000 - 3.000</span>
                                </label>
                                <label onClick={() =>
                                    setSalary('Mehr als 4.000')
                                }>
                                    <input {...register('salary')} {...(salary === 'Mehr als 4.000' ? { checked: true } : {})} type="radio" name="radio" />
                                    <span>Mehr als 4.000</span>
                                </label>
                                {errors.salary && <span className='error-message'>{getErrorMessage(errors.salary)}</span>}
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setPage(0)}>← Back</button>
                            <button className='right-0' type='submit'>Next →</button>
                        </div>
                    </>
                }

                {page === 2 &&
                    <>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>Name: {name}</p>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>E-mail: {email}</p>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>Phone number: {phoneNumber}</p>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>Salary: {salary}</p>
                        <button onClick={() => setPage(1)}>← Back</button>
                    </>
                }

            </form>
        </div >
    )
}

export default Form

// juanazula@gmail.com
// 626422524