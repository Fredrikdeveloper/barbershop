import styled from "styled-components"
import img from "../images/head-bg.png"
const Header = () => {
    return (
        <Head>
         <div className="container">
            <div className="heads">
              <div className="heads-body">
                <h1>Our craftsmen make <br /> visitors  beautiful <br /> and happier</h1>
                <p>Text placed at the bottom <br /> of the title to reveal details</p>
              </div>
            </div>
         </div>
        </Head>
    
    )
}

const Head = styled.div`
.heads {
 background: url(${img}) no-repeat center center/cover ;
 height: 100vh;
} .heads-body {
    padding: 100px;
}
.heads-body h1 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 120%;
    color: #FFFFFF;
} .heads-body p {
    padding-top: 32px;
    font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #EFE7E2;
}

`

export default Header

