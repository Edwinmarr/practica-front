import { type FC, type PropsWithChildren, type HTMLInputTypeAttribute } from 'react';


interface Props extends PropsWithChildren {
  type?: HTMLInputTypeAttribute
}   

const TextField: FC<Props> = ({ children, type }) => <label>{children}<input type={type} /></label>

export default TextField;