import styled from "styled-components";

export const Mentors = styled.div`
    .cardshawos{
        box-shadow: 0px 2px 10px 2px #807d7d;
        border-radius: 4px;  
        &:hover{
            box-shadow: 0px 5px 15px 10px #807d7d;
            border-radius: 4px;  
        }
    }
    @media screen and (max-width: 768px) {
        width: 375px;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
        .list{
            display: flex;
            flex-direction: column;
            justify-content:flex-start;
            align-items:flex-start;
            h5{
                    font-size: 18px;
                }
            .info{
                width: 10vw;
                font-size: 14px;
                text-align:left;
            }
            img{
                width: 250px;
                height: 200px;
            }
        }
    }
`