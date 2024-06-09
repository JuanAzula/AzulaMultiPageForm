import useGlobalStore from "../store/globalStore"
import '../styles/progressBar.css'



const ProgressBar = () => {
    const {
        name,
        email,
        phoneNumber,
        salary } = useGlobalStore()

    let width = 0
    name !== '' ? width = width + 25 : null
    email !== '' ? width = width + 25 : null
    phoneNumber !== '' ? width = width + 25 : null
    salary !== '' ? width = width + 25 : null

    const progressBar = document.getElementById('progress') as HTMLDivElement
    if (progressBar) {
        progressBar.style.width = `${width}%`
    }
    return (
        <div className="progress-loader">
            <div id='progress' className="progress"></div>
        </div>
    )
}

export default ProgressBar