import styled from "styled-components";

export const LoginBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding:0px 10px ;

    .login{
        border: 0.2px solid black;
        border-radius: 4px;
        padding:20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        div{
            display: flex;
            flex-direction: column;
            align-items:center;
            margin: 10px 5px;

          
            label{
                font-size:18px;
            }
            input{
                width: 20vw;
                padding: 10px 5px;
                margin: 10px 0px;
                border-radius:4px;
            }
            button{
                background-color:#32959B;
                color: white;
                font-size:14px;
                width: 10vw;
                padding: 10px 5px;
                border-radius: 4px;
                border: solid 1px #32959B;
                border-radius:4px;
                @media screen and (max-width: 768px) {
                    width: 20vw;
                }
            }
            .link{
                color:#32959B;
            }
        }
        .redes{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            button{
                margin: 0px 10px;
                display: flex;
                flex-direction: row;
                justify-content:space-evenly;
                align-items: center;
            }
            .google{
                background-color: #AF0000;
                border: solid 1px #AF0000;
            }
            .facebook{
                background-color: #0254F2;
                border: solid 1px #0254F2;
            }
            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;            
                justify-content: center;
                align-items: center;
                
                button{
                    margin: 10px;
                }
            }
           
        }
        @media screen and (max-width: 768px) {
            width: 375px;
        }
    }
`