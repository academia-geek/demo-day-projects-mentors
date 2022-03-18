import styled from "styled-components";

export const RegisterBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding:0px 10px ;

    .register{
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
            flex-direction: row;
            align-items:center;
            margin: 5px 5px;

            label{
                font-weight: 500;
                font-size:18px;
            }
            input{
                width: 15vw;
                padding: 10px 5px;
                margin: 10px 0px;
                border-radius: 4px;
            }
            button{
                background-color:#32959B;
                color: white;
                font-size:14px;
                width: 10vw;
                padding: 10px 5px;
                background-color:#32959B;
                border: solid 1px #32959B;
                border-radius: 4px;
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

        }
    }
`