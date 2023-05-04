import styled from 'styled-components'


const Contact = () => {
    return(
        <Contac>
  
            <form className='container'>
                      <div className="form-body">
                        <h2>Get in consultation with our expert barbers</h2>
                        <p>Expand Call-to-Action Details</p>
                        <div className="inputs">
                            <input type="text" placeholder='+1 (___) ___-__-__' />
                            <input type="text" placeholder='Email' />
                            <button>Book now</button>
                        </div>
                        <div className='inputs2'>
                        <input type="checkbox" />
                        <p>By clicking on the button, you agree to the terms of processing personal data</p>
                        </div>
                      </div>
            </form>
        </Contac>
    )
}
const Contac = styled.div`
 form {
    width: auto;
    height: auto;
    background: #FF6E40;
    .form-body {
        padding: 50px;
        h2 {
            text-align: center;
        } p {
          text-align: center;
        } input {
            background: none;
            width: 300px;
            height: 40px;
            border-color: black;
            padding: 30px 15px;
        } 
        .inputs2 {
            display: flex;
            justify-content: center;
            padding-top: 30px;
            
       
            input {
                height: 20px !important;
                width: 30px !important;
            } p {
                font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 134.09%;
            color: #EFE7E2;
            }
        }
        .inputs {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;

            input::placeholder {
                font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 135%;
        color: #FFFFFF;
            } 
            button {
                font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 152%;
padding: 13px 30px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
background: #000000;
            }
        }

    }
}



`
export default Contact