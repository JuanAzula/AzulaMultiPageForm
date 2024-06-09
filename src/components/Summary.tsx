import useGlobalStore from '../store/globalStore';

const Summary = () => {
  const {
    name, email, phoneNumber, salary,
  } = useGlobalStore();
  return (
    <div className="mt-2">
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
    </div>
  );
};

export default Summary;
