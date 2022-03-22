import styled from "styled-components";

export const Bghome = styled.div`
    @media screen and (max-width: 768px){    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 375px;
    }
    .head{
        @media screen and (max-width: 768px) {
            width: 375px;
            display: flex;
            flex-direction: column;
        }
    }
    .head2{
        @media screen and (max-width: 768px) {
            width: 375px;
            display: flex;
            flex-direction: column-reverse;
        }
    }
    .section{
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 375px;
        }
    }
`

export const Form = styled.form`
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 375px;
            select{
                margin-bottom: 20px;
            }
            button{
                width: 30vw;
            }
            
        }
`

export const BgFooter = styled.footer`
    @media screen and (max-width: 768px) {
        display: flex;
            flex-direction: column;
            justify-content: center;
            width: 375px;
        .header{
            display: flex;
            flex-direction: column;
            p, h5{
                width: 50vw;
            }
        }
        .section{
            flex-direction: column;
            justify-content: center;
            margin: 0;
            margin-left: 30px;
        }
        .footer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            input, button{
                width: 50vw;
            }
        }
        .foot{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            ul{
                display: flex;
                flex-direction: column;
            }
        }
    }
`

export const Coment = styled.div`
    @media screen and (max-width: 768px) {
        width: 300px;
        margin: 0 20px;
}
`

export const BgOpinion = styled.div`
    @media screen and (max-width: 768px) {
        width: 350px;
        margin: 0 20px;
        .buttons{
            button{
                padding: 10px 5px;
                width: 30vw;
                font-size: 12px;
            }
        }
}
`