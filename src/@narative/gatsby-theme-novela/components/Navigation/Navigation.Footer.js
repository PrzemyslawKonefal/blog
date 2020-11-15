import React, {useState} from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";
import { useColorMode } from 'theme-ui';

import mediaqueries from "@styles/media";
import ExIcon from "@narative/gatsby-theme-novela/src/icons/ui/Ex.Icon";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const globalWindow = typeof window !== 'undefined' && window

const CookiesInfoBlock = () => {
  const [colorMode]  = useColorMode();
  const [termsConfirmed, setTermsConfirmed] = useState(globalWindow ? globalWindow.localStorage.getItem("terms_confirmed") === "true" : false)
  const onTermsConfirm = () => {
    if(globalWindow) globalWindow.localStorage.setItem("terms_confirmed", "true");
    setTermsConfirmed(true)
  }
  const policyPageUrl = `${window.location.origin}/polityka-prywatnosci`
  const fill = colorMode === "dark" ? "#000" : "#fff";

  return <CookieBlock hidden={termsConfirmed}>
    <CookieText>
      Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
    </CookieText>
    <ActionButtons>
      <Button onClick={onTermsConfirm}>
        ZGODA
      </Button>
      <Anchor href={policyPageUrl} target="_blank">
        <Button>
          POLITYKA PRYWATNOŚCI
        </Button>
      </Anchor>
    </ActionButtons>
    <DeleteButton onClick={onTermsConfirm}><ExIcon fill={fill}/></DeleteButton>
  </CookieBlock>
}

const Footer = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <>
      <FooterGradient />
      <Section narrow>
        <HoritzontalRule />
        <FooterContainer>
          <FooterText>
            © {copyrightDate} {name}
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
      <CookiesInfoBlock/>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const CookieBlock = styled.div`
  z-index: 100;
  position:fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 0.5em 3em;
  width: 100vw;
  background: ${p => p.theme.colors.primary};
  transition: .3s ease;
  transform: ${p => p.hidden ? 'translateY(100%)' : 'none' };
  
  ${mediaqueries.phablet`
     padding: 0.5em 1em;
  `}
`

const CookieText = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors.background};
  padding: 0.5em 0;
  text-align: center;
`
const ActionButtons = styled.div`
  margin-left: 1em;
  padding: 0.5em 0;
  display: flex;
  
    ${mediaqueries.phablet`
     flex-direction: column;
     
     & button:first-of-type {
      margin-bottom: 1em;
     }
  `}
`
const Anchor = styled.a`
  color: inherit;
`
const Button = styled.button`
  margin-right: 12px;
  padding: 8.5px 10px;
  border-radius: 5px;
  background: ${ p => p.theme.colors.accent };
  color: #fff;
  font-family: 'Merriweather Sans', sans-serif;
  max-height: 37px;
`
const DeleteButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1.5em;
  background: ${p => p.theme.colors.primary};
  
  ${mediaqueries.phablet`
     display: none;
  `}
`
