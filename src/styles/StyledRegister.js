import styled from "styled-components";

export const RegisterBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding:0px 10px ;

    .register{
        /* border: 0.2px solid black; */
        box-shadow: 2px 2px 15px 5px #807d7d;
        border-radius: 4px;
        padding:10px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
        @media screen and (max-width: 768px) {
            width: 375px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        div{
            display: flex;
            flex-direction: row;
            align-items:center;
            margin: 0px 5px;

            label{
                font-weight: 500;
                font-size:18px;
            }
            input{
                width: 15vw;
                padding: 10px 5px;
                margin: 10px 0px;
                border-radius: 4px;
                border: 0.5px solid black;
            }
            button{
                background-color:#198754;
                color: white;
                font-size:14px;
                width: 10vw;
                padding: 10px 5px;
                border: solid 1px #32959B;
                border-radius: 4px;
                @media screen and (max-width: 768px) {
                    width: 20vw;
                }
            }
            .link{
                color:#32959B;
            }
        }
        .registrar{
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
        }
        .cuenta{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            @media screen and (max-width: 768px) {
                input{
                    width: 25vw;
                }
            }
        }
        .data{
            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
                input{
                    width: 25vw;
                }
            }
        }
       
    }
`