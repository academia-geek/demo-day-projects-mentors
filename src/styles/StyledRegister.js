import styled from "styled-components";

export const RegisterBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    margin:50px 10px ;

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
            }
            button{
                background-color:#32959B;
                color: white;
                font-size:14px;
                width: 10vw;
                padding: 10px 5px;
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