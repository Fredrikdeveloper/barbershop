import styled from 'styled-components'
import img from '../images/bg.png'

const Main = () => {
    return(
        <Mai>
            <div className="Main">
            <div className='container Header'>
              <div className="text container">
                <h1>Men’s Barbershop <br /> in The Middle East</h1>
                <div className="text-main">
                <a href="#">THE HIGHEST RATED</a>
                <p>Text that is placed at the bottom <br /> of the heading to reveal details</p>
                </div>
                
              </div>
          </div>
            </div>
        </Mai>
    )
}

const Mai = styled.div`
.Header{
    background: url(${img}) no-repeat center center/cover;
    height: 100vh;
} .Main {
    background: #3B322D;
}
 .text{
    padding-top: 40px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
} .text h1 {
    font-family: 'Playfair Display';
font-style: normal;
font-weight: 900;
font-size: 70px;
line-height: 110%;
color: #FFFFFF;
} .text-main a {
    font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 14px;
display: flex;
align-items: center;
text-decoration: none;
letter-spacing: 0.1em;
color: #FFFFFF;
border: 1px solid #EFE7E2;
} .text-main p {
    font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #EFE7E2;
}


`
export default Main