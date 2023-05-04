import styled from 'styled-components'
import img1 from '../images/group-img-start.png'
import ph1 from '../images/photo1.png'
import ph2 from '../images/photo2.png'
import ph3 from '../images/photo3.png'
import ph4 from '../images/photo4.png'
import ph5 from '../images/photo5.png'
import ph6 from '../images/photo6.png'
import ph7 from '../images/photo7.png'
import ph8 from '../images/photo8.png'
import button from '../images/button-i.png'



const CardGroup = () => {
   return(
    <GROUP>
      <div className="container">
        <div className="cards-text">
            <div className='first-img'>
             <img src={img1} alt="rasm" />
            </div>
            <div className='text-tr'>
            <h2>Devon <br /> Lane</h2>
           <p>Description of the master, his <br /> education, achievements and <br /> merits</p>
           <p>Description of the styles and <br /> specializations of the master</p>
            </div>
        </div>
        <div className='cards-img'>
        <img src={ph1} alt="rasm" />
        <img src={ph2} alt="rasm" />
        <img src={ph3} alt="rasm" />
        <img src={ph4} alt="rasm" />
        <img src={ph5} alt="rasm" />
        <img src={ph6} alt="rasm" />
        <img src={ph7} alt="rasm" />
        <img src={ph8} alt="rasm" />
        </div>
        <div className='last-button'>
            <a> <img src={button} /> See all works</a>
        </div>
        
      </div>
    </GROUP>
   )
}

const GROUP = styled.div`
.cards-text {
    display: flex;
    background: #251D1A;
    align-items: center;
    justify-content: space-around;

   
} 
}
.cards-img {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 30px;

} .last-button {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 30px;
     a {
        background: #FF6E40;
        padding: 10px 50px;
        border: none;
        text-decoration: none;
        font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 152%;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
     }
}

`
export default CardGroup
