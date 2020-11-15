import React from "react";
import { Disqus } from 'gatsby-plugin-disqus'
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const Comments = () => {
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
