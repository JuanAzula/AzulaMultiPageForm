import { useState } from 'react'
import Salary from './Salary'
import useGlobalStore from '../store/globalStore'
import '../styles/form.css'
import '../styles/progressBar.css'
import ProgressBar from './ProgressBar'

const Form = () => {
    const [page, setPage] = useState(0)
    const {
        name,
        email,
        phoneNumber,
        salary,
        setName,
        setEmail,
        setPhoneNumber
    } = useGlobalStore()



    return (
        <div className="form-container w-[65%] relative left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
            <form className="form">

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
                            <input autoComplete="off" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="input">
                            <input autoComplete="off" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">E-mail</label>
                        </div>

                        <div className="input">
                            <input autoComplete="off" name="email" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <label htmlFor="phone-number">Phone number</label>
                        </div>


                        <div>
                            <button className=' right-0' onClick={() => setPage(1)}>Next →</button>
                        </div>
                    </>
                }
                {page === 1 &&
                    <>
                        <p className='text-[#e8e8e8] mb-4 uppercase font-[500]'>Salary indication</p>
                        <Salary />
                        <div>
                            <button onClick={() => setPage(0)}>← Back</button>
                            <button className='right-0' onClick={() => setPage(2)}>Next →</button>
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
        </div>
    )
}

export default Form