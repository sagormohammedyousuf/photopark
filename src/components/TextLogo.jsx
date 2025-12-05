
import { Link } from 'react-router-dom'
const TextLogo = () => {
    return (
        <>
            <div className='logo-text'>
                <Link className='logo-link' to="/">
                    <p className='mb-0'>The</p>
                    <p className='mb-0'>Photo</p>
                    <p className='park-text'>Park</p>
                </Link>
            </div>
        </>
    )
}

export default TextLogo