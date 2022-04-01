import styled from "styled-components";

export const BgPerfil = styled.div`
    @media screen and (max-width: 768px) {
        width: 375px;
        .perfil{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: flex-start;
            width: 375px;

            .mentor{
                width: 240px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            h2, p{
                font-size: 18px;
                width: 50vw;
            }
            h5{
                font-size: 14px;
                width: 50vw;
            }
            .card-body{
                width: 375px;
                
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                margin: 10px;
                div{
                    h5, p{
                        font-size: 14px;
                    }
                }
            }
        }
    }
`