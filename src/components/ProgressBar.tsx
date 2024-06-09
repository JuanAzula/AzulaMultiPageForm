import useGlobalStore from '../store/globalStore';
import '../styles/progressBar.css';

const ProgressBar = () => {
  const {
    name,
    email,
    phoneNumber,
    salary,
  } = useGlobalStore();

  let width = 0;
  name !== '' ? width += 25 : null;
  email !== '' ? width += 25 : null;
  phoneNumber !== '' ? width += 25 : null;
  salary !== '' ? width += 25 : null;

  const progressBar = document.getElementById('progress') as HTMLDivElement;
  if (progressBar) {
    progressBar.style.width = `${width}%`;
  }
  return (
    <div className="progress-loader">
      <div id="progress" className="progress" />
    </div>
  );
};

export default ProgressBar;
