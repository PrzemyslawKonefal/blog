import React, {useEffect} from "react";
import { Disqus } from 'gatsby-plugin-disqus'
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const globalDocument = typeof document !== 'undefined' && document

const Comments = () => {
    const changeReactionsText = () => {
        let found = false;
        const x = setInterval(() => {
            if(globalDocument) {
                const el = globalDocument.querySelector('#reactions .text-bold')
                if (el) {
                    el.innerHTML = 'Czy podobał Ci się ten artykuł?'
                    found = true;
                }

            }
            if (found) clearInterval(x)
        }, 4000)

    }

    useEffect(changeReactionsText, [])

    return (
        <Wrapper>
            <Disqus  />
        </Wrapper>
    )
}

export default Comments

const Wrapper = styled.div`
  margin: auto;
  max-width: 1140px;
  padding: 0 4em;
  
  ${mediaqueries.tablet`
    padding: 0 1em;
  `}
`
