import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .scanner span {
    color: transparent;
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
  }

  .scanner span::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid #17FEFF;
    overflow: hidden;
    color: #17FEFF;
    animation: load91371 2s linear infinite;
  }

  @keyframes load91371 {
    0%, 10%, 100% {
      width: 0;
    }

    10%,20%,30%,40%,50%,60%,70%,80%,90%,100% {
      border-right-color: transparent;
    }

    11%,21%,31%,41%,51%,61%,71%,81%,91% {
      border-right-color: #17FEFF;
    }

    60%, 80% {
      width: 100%;
    }
  }
`;

export default Loading;
