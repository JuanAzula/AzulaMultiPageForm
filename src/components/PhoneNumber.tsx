import getErrorMessage from '../utils/const';
import useGlobalStore from '../store/globalStore';
import '../styles/phoneNumber.css';
import { SelectProps } from '../types/types';

const PhoneNumber = ({ register, errors }: SelectProps) => {
  const { phoneNumber, setPhoneNumber } = useGlobalStore();

  return (
    <>
      <div className="ui-wrapper">
        <input id="Austria" name="flag" type="radio" />
        <input id="Belgium" name="flag" type="radio" />
        <input id="Bulgaria" name="flag" type="radio" />
        <input id="Croatia" name="flag" type="radio" />
        <input id="Cyprus" name="flag" type="radio" />
        <input id="Czech" name="flag" type="radio" />
        <input id="Denmark" name="flag" type="radio" />
        <input id="Estonia" name="flag" type="radio" />
        <input id="Finland" name="flag" type="radio" />
        <input id="France" name="flag" type="radio" />
        <input id="Germany" name="flag" type="radio" />
        <input id="Greece" name="flag" type="radio" />
        <input id="Hungary" name="flag" type="radio" />
        <input id="Iceland" name="flag" type="radio" />
        <input id="Ireland" name="flag" type="radio" />
        <input id="Italy" name="flag" type="radio" />
        <input id="Latvia" name="flag" type="radio" />
        <input id="Liechtenstein" name="flag" type="radio" />
        <input id="Lithuania" name="flag" type="radio" />
        <input id="Luxembourg" name="flag" type="radio" />
        <input id="Malta" name="flag" type="radio" />
        <input id="Netherlands" name="flag" type="radio" />
        <input id="Norway" name="flag" type="radio" />
        <input id="Poland" name="flag" type="radio" />
        <input id="Portugal" name="flag" type="radio" />
        <input id="Romania" name="flag" type="radio" />
        <input id="Slovakia" name="flag" type="radio" />
        <input id="Slovenia" name="flag" type="radio" />
        <input id="Spain" name="flag" type="radio" />
        <input id="Sweden" name="flag" type="radio" />
        <input className="dropdown-checkbox" name="dropdown" id="dropdown" type="checkbox" />
        <label className="dropdown-container" htmlFor="dropdown" />
        <div className="input-wrapper">
          <div className="textfield">
            <input
              {...register('phonenumber', {
                required: 'Required',
                pattern: {
                  value: /^\d+$/,
                  message: 'This is not a valid phone number',
                },
              })}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="\d+"
              maxLength={11}
              id="phonenumber"
              type="text"
            />
            <span className="invalid-msg">This is not a valid phone number</span>
          </div>
        </div>
        <div className="select-wrapper">
          <ul>
            <li className="Austria">
              <label htmlFor="Austria">
                <span>🇦🇹</span>
                Austria (+43)
              </label>
            </li>
            <li className="Belgium">
              <label htmlFor="Belgium">
                <span>🇧🇪</span>
                Belgium (+32)
              </label>
            </li>
            <li className="Bulgaria">
              <label htmlFor="Bulgaria">
                <span>🇧🇬</span>
                Bulgaria (+359)
              </label>
            </li>
            <li className="Croatia">
              <label htmlFor="Croatia">
                <span>🇭🇷</span>
                Croatia (+385)
              </label>
            </li>
            <li className="Cyprus">
              <label htmlFor="Cyprus">
                <span>🇨🇾</span>
                Cyprus (+357)
              </label>
            </li>
            <li className="Czech">
              <label htmlFor="Czech">
                <span>🇨🇿</span>
                Czech Republic (+420)
              </label>
            </li>
            <li className="Denmark">
              <label htmlFor="Denmark">
                <span>🇩🇰</span>
                Denmark (+45)
              </label>
            </li>
            <li className="Estonia">
              <label htmlFor="Estonia">
                <span>🇪🇪</span>
                Estonia (+372)
              </label>
            </li>
            <li className="Finland">
              <label htmlFor="Finland">
                <span>🇫🇮</span>
                Finland (+358)
              </label>
            </li>
            <li className="France">
              <label htmlFor="France">
                <span>🇫🇷</span>
                France (+33)
              </label>
            </li>
            <li className="Germany">
              <label htmlFor="Germany">
                <span>🇩🇪</span>
                Germany (+49)
              </label>
            </li>
            <li className="Greece">
              <label htmlFor="Greece">
                <span>🇬🇷</span>
                Greece (+30)
              </label>
            </li>
            <li className="Hungary">
              <label htmlFor="Hungary">
                <span>🇭🇺</span>
                Hungary (+36)
              </label>
            </li>
            <li className="Iceland">
              <label htmlFor="Iceland">
                <span>🇮🇸</span>
                Iceland (+354)
              </label>
            </li>
            <li className="Ireland">
              <label htmlFor="Ireland">
                <span>🇮🇪</span>
                Republic of Ireland (+353)
              </label>
            </li>
            <li className="Italy">
              <label htmlFor="Italy">
                <span>🇮🇹</span>
                Italy (+39)
              </label>
            </li>
            <li className="Latvia">
              <label htmlFor="Latvia">
                <span>🇱🇻</span>
                Latvia (+371)
              </label>
            </li>
            <li className="Liechtenstein">
              <label htmlFor="Liechtenstein">
                <span>🇱🇮</span>
                Liechtenstein (+423)
              </label>
            </li>
            <li className="Lithuania">
              <label htmlFor="Lithuania">
                <span>🇱🇹</span>
                Lithuania (+370)
              </label>
            </li>
            <li className="Luxembourg">
              <label htmlFor="Luxembourg">
                <span>🇱🇺</span>
                Luxembourg (+352)
              </label>
            </li>
            <li className="Malta">
              <label htmlFor="Malta">
                <span>🇲🇹</span>
                Malta (+356)
              </label>
            </li>
            <li className="Netherlands">
              <label htmlFor="Netherlands">
                <span>🇳🇱</span>
                Netherlands (+31)
              </label>
            </li>
            <li className="Norway">
              <label htmlFor="Norway">
                <span>🇳🇴</span>
                Norway (+47)
              </label>
            </li>
            <li className="Poland">
              <label htmlFor="Poland">
                <span>🇵🇱</span>
                Poland (+48)
              </label>
            </li>
            <li className="Portugal">
              <label htmlFor="Portugal">
                <span>🇵🇹</span>
                Portugal (+351)
              </label>
            </li>
            <li className="Romania">
              <label htmlFor="Romania">
                <span>🇷🇴</span>
                Romania (+40)
              </label>
            </li>
            <li className="Slovakia">
              <label htmlFor="Slovakia">
                <span>🇸🇰</span>
                Slovakia (+421)
              </label>
            </li>
            <li className="Slovenia">
              <label htmlFor="Slovenia">
                <span>🇸🇮</span>
                Slovenia (+386)
              </label>
            </li>
            <li className="Spain">
              <label htmlFor="Spain">
                <span>🇪🇸</span>
                Spain (+34)
              </label>
            </li>
            <li className="Sweden">
              <label htmlFor="Sweden">
                <span>🇸🇪</span>
                Sweden (+46)
              </label>
            </li>
          </ul>
        </div>
      </div>
      {errors.phonenumber && <span className="error-message">{getErrorMessage(errors.phonenumber)}</span>}
    </>
  );
};

export default PhoneNumber;
