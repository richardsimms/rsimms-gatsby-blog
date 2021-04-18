import { React } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
//import { useTheme } from '../Theming'

const Button = ({ to, }) => {
  //const theme = useTheme()
  
  const shadow = css({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    background: 'hsl(0deg 0% 0% / 0.25)',
    transform: 'translateY(6px)',
    filter: 'blur(4px)',
  })


  const edge = css({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    background: 'hsl(340deg 100% 32%)',
      
  })


  const front = css({
    display: 'block',
    position: 'reletive',
    padding: '12px 42px',
    borderRadius: '12px',
    fontSize: '1.25rem',
    background: 'hsl(345deg 100% 44%)',
    color: 'white',
    willChange: 'transform',
    transform: 'translateY(-6px)' ,
    transition: 'transform 600ms cubic-bezier(.3, .7, .4, 1)',
        '&:hover,&:focus': {
            transform: 'translateY(-8px)',   
            transition: 'transform 625ms cubic-bezier(.3, .7, .4, 1.5) filter 250ms',
            filter: 'brightness(110%)',

            '& $shadow': {
              transform: 'translateY(10px)',
            },
        },
        '&:active': {
            transform: 'translateY(-2px)',   
            transition: 'transform 34ms',
            
            '& $shadow': {
              transform: 'translateY(0px)',
            },
        },
      
  })
  return to ? (
    <Link to={to}>
    </Link>
  ) : (
    <button css={css`
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    border-radius: 12px;
    transition: filter 250ms;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
      &:hover {
          border: none;
         
        },
  `}
    >
        <span css={shadow}></span>
        <span css={edge}></span>
        <span css={front}>
        Start growing!
        </span>
    </button>
  )
}

export default Button