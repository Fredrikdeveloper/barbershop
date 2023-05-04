import styled from "styled-components"
import imgs from '../images/card-img1.png'
import imgs2 from '../images/card-img2.png'
import imgs3 from '../images/card-img3.png'
import imgs4 from '../images/card-img4.png'


const Testimonials = () => {
    return (
        <Tes>
            <div className="Testimion">
            <div className="container">
                  <div className="text">
                    <h2>Testimonials</h2>
                    <p>Подзаголовок, который раскрывает подробности <br /> заголовка и призывает сделать целевое действие</p>
                  </div>
                  <div className="cards">
                    <div className="card-T">
                      <img src={imgs} alt="picture" />
                      <div className="card-body">
                        <h3>Darrell Steward</h3>
                        <p>Describe the feedback or end result <br /> the person received after interacting <br /> with you. What exactly did it give him. <br /> You can describe the result in <br /> numbers to be specific.</p>
                        <span>Read full testimonial</span>
                      </div>
                    </div>
                    <div className="card-T">
                      <img src={imgs2} alt="picture" />
                      <div className="card-body">
                        <h3>Darrell Steward</h3>
                        <p>Describe the feedback or end result <br /> the person received after interacting <br /> with you. What exactly did it give him. <br /> You can describe the result in <br /> numbers to be specific.</p>
                        <span>Read full testimonial</span>
                      </div>
                    </div>
                    <div className="card-T">
                      <img src={imgs3} alt="picture" />
                      <div className="card-body">
                        <h3>Darrell Steward</h3>
                        <p>Describe the feedback or end result <br /> the person received after interacting <br /> with you. What exactly did it give him. <br /> You can describe the result in <br /> numbers to be specific.</p>
                        <span>Read full testimonial</span>
                      </div>
                    </div>
                    <div className="card-T">
                      <img src={imgs4} alt="picture" />
                      <div className="card-body">
                        <h3>Darrell Steward</h3>
                        <p>Describe the feedback or end result <br /> the person received after interacting <br /> with you. What exactly did it give him. <br /> You can describe the result in <br /> numbers to be specific.</p>
                        <span>Read full testimonial</span>
                      </div>
                    </div>
                  </div>
            </div>
            </div> 
        </Tes>
    )
}

const Tes = styled.div`
.Testimion {
    background: #3B322D;
} .text {
   
   h2 {
    font-family: 'Fira Sans';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 125%;
text-align: center;
padding: 30px 0px;
color: #FFFFFF;
   } p {
    padding: 30px 0px;
    font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 160%;
text-align: center;
color: #EFE7E2;
   }
} 
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
} .card-T {
   width: 280px;
   height: auto;
    img {
        width: 100%;
    } .card-body {
        padding: 10px 0px;

        h3 {
            font-family: 'Fira Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
display: flex;
align-items: flex-end;
color: #FFFFFF;
        } p {
            font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
        } span {
            font-family: 'Fira Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 135%;
color: #FF6E40;
        }
    }
} 



`
export default Testimonials