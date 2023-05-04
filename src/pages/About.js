import styled from 'styled-components'
import img1 from '../images/g1-img1.png'
import img2 from '../images/g1-img2.png'
import img3 from '../images/g1-img3.png'
import img4 from '../images/g2-img1.png'
import img5 from '../images/g2-img2.png'
import img6 from '../images/g2-img3.png'

const About = () => {
    return (
        <Abo>
            <div className="AboutUsHeader">
            <div className="AboutUs container ">
                <div className="text">
                    <h2>About Us</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud <br /> amet. Amet minim mollit non deserunt</p>
                </div>
                <div className="images">
                    <div className="img-group1">
                      <img src={img1} className="img-fluid" alt="rasm" />
                      <img className='img-transfrom img-fluid' src={img2} alt="rasm" />
                      <img className='img-transfrom  img-fluid' src={img3} alt="rasm" />
                    </div>
                    <div className="img-group1">
                    <img className='img-transfrom img-fluid' src={img4} alt="rasm" />
                      <img className='img-transfrom img-fluid ' src={img5} alt="rasm" />
                      <img src={img6} className="img-fluid" alt="rasm" />
                    </div>
                </div>
                <div className="buttons">
                    <a className='btnn-1' href="#">Our masters and their masterpieces</a>
                    <a className='btnn-2' href="#">Our Instagram</a>
                </div>
            </div>
            </div>
          
        </Abo>
    )
}

const Abo = styled.div`
.AboutUsHeader {
    background: #3B322D;
}
.text h2 {
    
font-family: 'Fira Sans';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 125%;
text-align: center;
color: #FFFFFF;
} .text p {
    font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 160%;
text-align: center;
color: #EFE7E2;
} .images {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    flex-wrap: wrap;
}
.img-group1 {
    width: 550px;
    height: auto;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    padding: 30px 0px;
} .img-group1 > img {
    width: 100%;
    height: auto;
} .img-transfrom {
    height: auto;
    width: 40% !important;
} .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 60px;
     a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 20px;
     } .btnn-1 {
        background: #FF6E40;
        padding: 10px 30px;
     } .btnn-2 {
        border: 1px solid gray;
        padding: 10px 30px;
     } 
}

`
export default About