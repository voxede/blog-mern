import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`

export const Button = styled.button`
    padding: 0.75rem;
    background:${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    &:disabled {
        opacity: 0.7;
    }
`

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.error};
    margin: 0;
`