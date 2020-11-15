import React, {useEffect} from "react";
import { Disqus } from 'gatsby-plugin-disqus'
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const globalWindow = typeof window !== 'undefined' && window

const Comments = () => {
    const changeReactionsText = () => {
        setTimeout(() => {
            if(globalWindow) {
                const el = globalWindow.querySelector('#reactions .text-bold')
                el.innerHTML = 'Czy podobał Ci się ten artykuł?'
            }
        }, 2000)
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
