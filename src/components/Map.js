import styled from 'styled-components'
import ImgIcon from '../images/icon.svg'
import ImgIcon2 from '../images/icon1.svg'
import ImgIcon3 from '../images/icon2.svg'
import ImgIcon4 from '../images/Icon3.svg'
import MapIMG from '../images/MAP.png'


const Map = () => {
    return(
        <Maps>
          
            <div className='Map-body'>
                <div className="container">
                   <div className="contactss">
                     <div className="contactss-body">
                        <h2>Contacts</h2>
                        <div className="contactss-text">
                            <img src={ImgIcon} alt="img" />
                            <p>8 (800) 000-00-00</p>
                        </div>
                        <div className="contactss-text">
                            <img src={ImgIcon2} alt="img" />
                            <p>8 (800) 000-00-00</p>
                        </div>
                        <div className="contactss-text">
                            <img src={ImgIcon3} alt="img" />
                            <p>8 (800) 000-00-00</p>
                        </div>
                        <div className="contactss-text">
                            <img src={ ImgIcon4} alt="img" />
                            <p>8 (800) 000-00-00</p>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
           
          
        </Maps>
    )
}
const Maps = styled.div`
.Map-body {
    background: url(${MapIMG}) no-repeat center center/cover ;
    height: 100vh;
    display: flex;
    align-items: center;
}
.contactss {
    height: auto;
    width: 480px;
    background: linear-gradient(0deg, #251D1A, #251D1A), url(image.png);
border-radius: 5px;

} .contactss-body {
    padding: 30px;
    h2 {
        font-family: 'Fira Sans';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 125%;
color: #FFFFFF;
    }
} .contactss-text {
    display: flex;
    gap: 30px;
    padding: 15px 0px;
    align-items: flex-end;
} .contactss-text p {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 143%;
color: #FFFFFF;
}
`
export default Map