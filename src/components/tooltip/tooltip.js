import React from 'react'
import styled from 'styled-components'
import { usePopperTooltip } from 'react-popper-tooltip'

import { ReactComponent as QuestionIcon } from '../../assets/icons/QuestionIcon.svg'
import { palette } from '../../data/palette'

export const Tooltip = ({ data }) => {
  const { getTooltipProps, getArrowProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip()

  return (
    <Container ref={setTriggerRef}>
      <span>
        <Icon />
      </span>
      {data && visible && (
        <TooltipContainer ref={setTooltipRef} {...getTooltipProps()}>
          <Title>{data}</Title>
          <TooltipArrow {...getArrowProps()} />
        </TooltipContainer>
      )}
    </Container>
  )
}

Tooltip.defaultProps = {
  data: {
    strong: '',
    message: '',
    link: '',
  },
}

const Container = styled.span`
  position: relative;
  cursor: pointer;

  &:hover > span > svg > path:first-of-type,
  &:hover > span > svg > path:last-of-type {
    stroke: ${palette.orange};
  }

  &:hover > span > svg > path:nth-of-type(2) {
    fill: ${palette.orange};
  }
`

const Icon = styled(QuestionIcon)`
  position: relative;
  top: 3px;
  min-width: 14px;
  height: 14px;

  @media (max-width: 768px) {
    top: 0;
    min-width: 12px;
    height: 12px;
  }
`

const TooltipContainer = styled.div`
  min-width: 200px;
  padding: 12px;
  background-color: ${palette.mainBackground};
  border-radius: 15px;
  box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  transition: opacity 0.3s;
  z-index: 1;

  &[data-popper-placement*='bottom'] > div {
    left: 0;
    top: 0;
    margin-top: -5px;

    &:before {
      border-color: transparent transparent ${palette.mainBackground} transparent;
      border-width: 0 0.5rem 0.4rem 0.5rem;
      position: absolute;
      top: -1px;
    }

    &:after {
      border-color: transparent transparent ${palette.mainBackground} transparent;
      border-width: 0 0.5rem 0.4rem 0.5rem;
    }
  }

  &[data-popper-placement*='top'] > div {
    bottom: 0;
    left: 0;
    margin-bottom: -15px;

    &:before {
      border-color: ${palette.mainBackground} transparent transparent transparent;
      border-width: 0.4rem 0.5rem 0 0.5rem;
      position: absolute;
      top: 1px;
    }

    &:after {
      border-color: ${palette.mainBackground} transparent transparent transparent;
      border-width: 0.4rem 0.5rem 0 0.5rem;
    }
  }

  &[data-popper-placement*='right'] > div {
    left: 0;
    margin-left: -0.7rem;

    &:before {
      border-color: transparent ${palette.mainBackground} transparent transparent;
      border-width: 0.5rem 0.4rem 0.5rem 0;
    }

    &:after {
      border-color: transparent ${palette.mainBackground} transparent transparent;
      border-width: 0.5rem 0.4rem 0.5rem 0;
      left: 6px;
      top: 0;
    }
  }

  &[data-popper-placement*='left'] > div {
    margin-right: -0.7rem;
    right: 0;

    &:before {
      border-color: transparent transparent transparent ${palette.mainBackground};
      border-width: 0.5rem 0 0.5rem 0.4em;
    }

    &:after {
      border-color: transparent transparent transparent ${palette.mainBackground};
      border-width: 0.5rem 0 0.5rem 0.4em;
      left: 3px;
      top: 0;
    }
  }
`

const TooltipArrow = styled.div`
  height: 1rem;
  width: 1rem;
  position: absolute;
  pointer-events: none;

  &:before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &:after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }
`

const Title = styled.span`
  color: ${palette.green};
  text-align: start;
  font-size: 12px;
`
