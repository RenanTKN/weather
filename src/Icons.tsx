interface IconProps {
  children: JSX.Element;
}

const Icon = ({ children }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="512"
    height="512"
  >
    {children}
  </svg>
);

export const Dewpoint = () => (
  <Icon>
    <path d="M10,24A10.048,10.048,0,0,1,0,14C0,8.663,6.5,1.751,6.771,1.459A4.286,4.286,0,0,1,10.006,0h0a4.306,4.306,0,0,1,3.266,1.5c2.771,3.023,11,12.486,3.8,19.573A9.934,9.934,0,0,1,10,24Zm.006-22a2.312,2.312,0,0,0-1.752.8C8.161,2.9,2,9.459,2,14c-.115,7.009,8.783,10.694,13.657,5.657,6.218-6.007-1.944-14.6-3.866-16.819A2.342,2.342,0,0,0,10.007,2ZM21,6a3,3,0,0,1,0-6A3,3,0,0,1,21,6Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,21,2Z" />
  </Icon>
);

export const Tachometer = () => (
  <Icon>
    <path d="M20.445,21.516a3.014,3.014,0,0,1-4.073.128l-1.026-.887a1,1,0,0,1,1.308-1.514l1.027.888a1,1,0,0,0,1.356-.036,10,10,0,1,0-14.113-.039,1.016,1.016,0,0,0,1.395.076l1.027-.889a1,1,0,1,1,1.308,1.514l-1.026.888a3.04,3.04,0,0,1-4.12-.175A12,12,0,0,1,13.383,1.077a11.994,11.994,0,0,1,7.062,20.439ZM12,11a2.01,2.01,0,0,0-.518.068L7.707,7.293A1,1,0,0,0,6.293,8.707l3.775,3.775A2,2,0,1,0,12,11Z" />
  </Icon>
);

export const Pressure = () => (
  <Icon>
    <path d="M0,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H1A1,1,0,0,1,0,12Zm20.886-.893A4.99,4.99,0,1,0,12,8a1,1,0,0,0,2,0,3,3,0,1,1,3,3H11a1,1,0,0,0,0,2h9a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,0,0-1.886.666C17.615,20.415,23.952,19.579,24,15A4,4,0,0,0,20.886,11.107ZM11,16H1a1,1,0,0,0,0,2H11a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,1,0-1.886.666C8.615,25.415,14.952,24.579,15,20A4,4,0,0,0,11,16ZM1,8H7a4,4,0,0,0,4-4C10.952-.581,4.613-1.414,3.057,2.667a1,1,0,0,0,1.886.666C5.72,1.351,8.991,1.663,9,4A2,2,0,0,1,7,6H1A1,1,0,0,0,1,8Z" />
  </Icon>
);