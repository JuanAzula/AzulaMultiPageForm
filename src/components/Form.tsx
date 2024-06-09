import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useGlobalStore from '../store/globalStore';
import ProgressBar from './ProgressBar';
import '../styles/form.css';
import '../styles/progressBar.css';
import '../styles/salary.css';
import PhoneNumber from './PhoneNumber';
import Salary from './Salary';

const Form = () => {
  const [page, setPage] = useState(0);

  const { handleSubmit, register, formState: { errors } } = useForm();

  const {
    name,
    email,
    phoneNumber,
    salary,
    setName,
    setEmail,
  } = useGlobalStore();

  const getErrorMessage = (error: any) => (typeof error?.message === 'string' ? error.message : null);

  return (
    <div className="form-container w-[65%] relative left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
      <form
        className="form"
        onSubmit={
                    handleSubmit(() => {
                      setPage(page + 1);
                    })
                }
      >

        {page === 0 || page === 1
          ? <h6 className="descr">Contact us</h6>
          : (
            <h6 className="descr">Thank you!</h6>
          )}

        <ProgressBar />

        {page === 0
                    && (
                    <>
                      <div className="input">
                        <input
                          autoComplete="off"
                          type="text"
                          {...register(
                            'name',
                            {
                              required: 'Required',
                              pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'invalid name',
                              },
                            },
                          )}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                        {errors.name && <span className="error-message">{getErrorMessage(errors.name)}</span>}
                      </div>

                      <div className="input">
                        <input
                          autoComplete="off"
                          type="text"
                          {...register('email', {
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'invalid email address',
                            },
                          })}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">E-mail</label>
                        {errors.email && <span className="error-message">{getErrorMessage(errors.email)}</span>}
                      </div>

                      <div className="input">
                        <label htmlFor="phone-number">Phone number</label>
                      </div>
                      <div className="mt-0.5 flex flex-col">
                        <PhoneNumber
                          register={register}
                          errors={errors}
                          getErrorMessage={getErrorMessage}
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="right-0"
                        >
                          Next →
                        </button>
                      </div>
                    </>
                    )}
        {page === 1
                    && (
                    <>
                      <Salary
                        register={register}
                        errors={errors}
                        getErrorMessage={getErrorMessage}
                      />
                      <div>
                        <button type="submit" onClick={() => setPage(0)}>← Back</button>
                        <button className="right-0" type="submit">Finish →</button>
                      </div>
                    </>
                    )}

        {page === 2
                    && (
                    <>
                      <p className="text-[#e8e8e8] mb-4 uppercase font-[500]">
                        Name:
                        {name}
                      </p>
                      <p className="text-[#e8e8e8] mb-4 uppercase font-[500]">
                        E-mail:
                        {email}
                      </p>
                      <p className="text-[#e8e8e8] mb-4 uppercase font-[500]">
                        Phone number:
                        {phoneNumber}
                      </p>
                      <p className="text-[#e8e8e8] mb-4 uppercase font-[500]">
                        Salary:
                        {salary}
                      </p>
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(0);
                        }}
                      >
                        ← Back
                      </button>
                    </>
                    )}

      </form>
    </div>
  );
};

export default Form;
