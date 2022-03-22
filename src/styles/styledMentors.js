import styled from "styled-components";

export const Mentors = styled.div`
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
                width: 200px;
                height: 200px;
            }
        }
    }
`