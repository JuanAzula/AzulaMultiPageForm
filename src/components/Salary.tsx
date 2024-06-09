import useGlobalStore from '../store/globalStore'

import '../styles/salary.css'

const Salary = ({ register }: any) => {
    const { salary, setSalary } = useGlobalStore()
    return (
        <div className="salary-container">
            <div>
                <label
                    onClick={() => {
                        setSalary('0 - 1.000')
                    }}>
                    <input {...register('salary',
                        {
                            required: "Required",

                        })} {...(salary === '0 - 1.000' ? { checked: true } : {})} type="radio" name="radio" />
                    <span>0 - 1.000</span>
                </label>
                {/* {errors.salary && <span>{errors.salary.message}</span>} */}
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
            </div>
        </div>
    )
}

export default Salary