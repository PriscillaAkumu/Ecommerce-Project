import {createGlobalStyle} from "styled-components";


const GlobalStyles =createGlobalStyle`

a {
  text-decoration: none;
  color:black;
  
}


li{
  list-style-type:none;
}

/* div with links  */
footer {
   width:100%;
    margin: 0 auto;
    padding: 98px clamp(0.625rem, -5.7857rem + 13.373vw, 6.25rem) 38px;
    
  }
  footer div:first-child {
    padding-bottom: 48px;
  }
  @media screen and (max-width: 1024px) {
    footer div:first-child {
      flex-wrap: wrap;
    }
  }
  footer > div {
    display: flex;
    gap: clamp(5rem, -4.2308rem + 14.4231vw, 8.75rem);
  }
  footer > div > div {
    display: flex;
    flex-direction: column;
    gap: 55px;
  }
  footer .address {
    font-size: 16px;
    line-height: 24px;
    color: #9F9F9F;
    align-self: center;
    font-weight: 400;
    max-width: 285px;
    width: 100%;
  }
  footer h6 {
    font-size: 16px;
    line-height: 24px;
    color: #9F9F9F;
    font-weight: 500;
  }
  footer nav {
    font-size: 16px;
    line-height: 24px;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 46px;
  }
  footer > div:last-child {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #000;
    padding-top: 35px;
    border-top: 1px solid #D9D9D9;
  }/*# sourceMappingURL=footer.css.map */


/* form part for the footer */
footer {
    max-width: 1440px;
    margin: 0 auto;
    padding: 98px clamp(0.625rem, -5.7857rem + 13.373vw, 6.25rem) 38px;
  }
  footer div:first-child {
    padding-bottom: 48px;
  }
  @media screen and (max-width: 1024px) {
    footer div:first-child {
      flex-wrap: wrap;
    }
  }
  footer > div {
    display: flex;
    gap: clamp(5rem, -4.2308rem + 14.4231vw, 8.75rem);
  }
  footer > div > div {
    display: flex;
    flex-direction: column;
    gap: 55px;
  }
  footer .address {
    font-size: 16px;
    line-height: 24px;
    color: #9F9F9F;
    align-self: center;
    font-weight: 400;
    max-width: 285px;
    width: 100%;
  }
  footer h6 {
    font-size: 16px;
    line-height: 24px;
    color: #9F9F9F;
    font-weight: 500;
  }
  footer nav {
    font-size: 16px;
    line-height: 24px;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 46px;
  }
  footer > div:last-child {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #000;
    padding-top: 35px;
    border-top: 1px solid #D9D9D9;
  }/*# sourceMappingURL=footer.css.map */


  /* Newsletter */
  .newsletter-component {
    display: flex;
    gap: 11px;
  }
  .newsletter-component form input {
    width: 200px;
    border: none;
    border-bottom: 1px solid #000;
  }
  .newsletter-component form input:focus {
    outline: none;
  }
  .newsletter-component form input::-moz-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #9F9F9F;
  }
  .newsletter-component form input::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #9F9F9F;
  }
  .newsletter-component button {
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000;
    font-weight: 500;
  }
  li{ 
    list-style: none;
  }
  
  // forms
  // AuthLogin
  // .form-container{
  // display: 'flex',
  // padding:"63px 100px",
  // alignItems:"center",
  // justifyContent: 'center'
  // }





`;
export default GlobalStyles;