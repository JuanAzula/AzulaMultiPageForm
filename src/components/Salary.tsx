import useGlobalStore from '../store/globalStore';
import getErrorMessage from '../utils/const';

import '../styles/salary.css';
import { SelectProps } from '../types/types';

const Salary = ({ register, errors }: SelectProps) => {
  const { salary, setSalary } = useGlobalStore();
  return (
    <>
      <p className="text-[#e8e8e8] mb-4 uppercase font-[500]">Salary indication</p>
      <div className="salary-container">
        <div>
          <label
            onClick={() => {
              setSalary('0 - 1.000');
            }}
          >
            <input
              {...register(
                'salary',
                {
                  required: 'Required',

                },
              )}
              {...(salary === '0 - 1.000' ? { checked: true } : {})}
              type="radio"
            />
            <span>0 - 1.000</span>
          </label>
          <label
            onClick={() => setSalary('1.000 - 2.000')}
          >
            <input
              {...register('salary')}
              {...(salary === '1.000 - 2.000' ? { checked: true } : {})}
              type="radio"
            />
            <span>1.000 - 2.000</span>
          </label>
          <label
            data-testid="salary"
            onClick={() => setSalary('2.000 - 3.000')}
          >
            <input
              {...register('salary')}
              {...(salary === '2.000 - 3.000' ? { checked: true } : {})}
              type="radio"
            />
            <span>2.000 - 3.000</span>
          </label>
          <label onClick={() => setSalary('Mehr als 4.000')}>
            <input
              {...register('salary')}
              {...(salary === 'Mehr als 4.000' ? { checked: true } : {})}
              type="radio"
            />
            <span>Mehr als 4.000</span>
          </label>
        </div>
      </div>
      {errors.salary && <span className="error-message">{getErrorMessage(errors.salary)}</span>}
    </>
  );
};

export default Salary;
