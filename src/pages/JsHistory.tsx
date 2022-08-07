import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import React from 'react'

const JsHistory = () => {
  return (
    <div>
      <ImgHeader />
      <Head1 />
      <Text />
      <Gallery />
    </div>
  )
}
const ImgHeader = () => {
  const ImgHeaderStyles = {
    position: 'relative',
    width: 'auto',
    height: '450px',
    marginTop: '0px',
    background: 'url(/image/img0.png) no-repeat center center',
    backgroundSize: 'cover',
  } as const

  return <div style={ImgHeaderStyles}></div>
}
const Head1 = () => {
  const h1Styles = {
    background: 'rgba(255, 218, 67, 1) 65%',
    color: 'black',
    fontFamily: 'Dancing Script, cursive',
    margin: 'auto',
    fontSize: '73px',
    textAlign: 'center',
    padding: '20px',
  } as const
  return (
    <div>
      <h1 style={h1Styles}>JavaScript history</h1>
    </div>
  )
}

const Text = () => {
  const pStyles = {
    fontFamily: 'Finlandica, sans-serif',
    fontSize: '25px',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    padding: '10px',
    textAlign: 'center',
  } as const
  return (
    <p style={pStyles}>
      JavaScript language comes from the times when early web browsers were being developed.
      Netscape Communications company in 1994 created Netscape Navigator that became the most
      popular web browser in the 90s.
      <br />
      <br />
      Company’s board quickly realized that browsers should allow create more dynamic websites and
      do some activities that do server-side languages, like input validation. First Netscape
      Communications cooperate with Sun Microsystems to use in Netscape Navigator Sun’s programming
      language Java. Then they wanted adopting and embedding a existing programming language like
      Scheme, Perl or Python. Eventually they decided to create scripting language that would
      complement Java and has a similar syntax.
      <br />
      <br />
      In 1995 Netscape Communications employed
      <strong> Brendan Eich</strong> to develop scripting language for web browser. Eich prepared it
      in a very short time. First version of new language had Mocha name, whereas official version
      used in Netscape Navigator 2 beta version was called LiveScript. In the same 1995 year new
      developed scripting language was renamed to JavaScript and used in next beta version of
      Netscape Navigator 2. LiveScript followed a lot of Java features. This, but above all the
      desire to use the growing popularity of Java to call positive associations with a new language
      where reasons that it was finally called JavaScript. Also implementation of the language for
      server-side was introduced.
      <br />
      <br />
      JavaScript 1.0 was a success and helped Netscape Navigator’s to hold the leader position of
      the market. Soon JavaScript 1.1 was released in Netscape Navigator 3.In this time Microsoft to
      compete with Netscape decided to include scripting technologies in their browser. In 1996 they
      released Internet Explorer 3 with their own implementation of JavaScript called JScript.
      <br />
      <br />
      Since that time there were two versions of JavaScript. This brought a compatibility issues.
      Industry needs caused that decided to standardize language. Netscape submitted JavaScript to
      Ecma International to “standardize the syntax and semantics of a general purpose,
      cross-platform, vendor-neutral scripting language”. In 1997 was published the language
      specification called ECMAScript as a ECMA-262 standard. Other browser vendors could use this
      specification to prepare their implementation.
      <br />
      <br />
      In the following years, the development of JavaScript was continued and in cycles were
      released new versions of specification. Responsible for the development of JavaScript are
      Mozilla Fundation (which is successor of Netscape Navigator) and Ecma International.
    </p>
  )
}

export default JsHistory
