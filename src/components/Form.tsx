import { useState } from 'react'
import Salary from './Salary'
import useGlobalStore from '../store/globalStore'
import '../styles/Form.css'

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
                {page === 0 || page === 1 ? <h6 className="descr">Contact us</h6> : null}

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
                            {/* <button onClick={(e) => e.preventDefault()} >← Back</button> */}
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
                        <h6 className='descr'>Thank you</h6>
                        <h6 className='descr'>Here is your information</h6>
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



{/* <div className="input"> */ }
{/* <label htmlFor="phone-number">Salary indication</label> */ }
{/* </div> */ }

{/* <div className="input">
    <label htmlFor="salary">Salary indication</label>
    <select className='bg-zinc-300' autoComplete="off" name="email">
        <option value="0 - 1.000">0 - 1.000</option>
        <option value="1.000 - 2.000">1.000 - 2.000</option>
        <option value="2.000 - 3.000">2.000 - 3.000</option>
        <option value="3.000 - 4.000">3.000 - 4.000</option>
        <option value="Mehr als 4.000">Mehr als 4.000</option>
    </select>
</div> */}