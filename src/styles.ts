import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: block;
    --state-inactive-color: var(--paper-item-icon-color);
  }
  ha-card {
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Opera and Firefox */
  }
  ha-card.disabled {
    pointer-events: none;
    cursor: default;
  }
  :host(.tooltip) .tooltiptext {
    pointer-events: none;
    opacity: 0;
    text-align: center;
    padding: 4px;
    border-radius: var(--ha-card-border-radius, 4px);
    box-shadow: var(
      --ha-card-box-shadow,
      0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12)
    );
    background: var(--ha-card-background, var(--card-background-color, white));
    border: 1px solid var(--primary-text-color);
    color: var(--primary-text-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :host(.tooltip:hover) span.tooltiptext {
    opacity: 1;
    transition-delay: 1.5s;
  }
  :not(ha-state-icon) ha-icon,
  ha-state-icon {
    display: inline-block;
    margin: auto;
    --mdc-icon-size: 100%;
    --iron-icon-width: 100%;
    --iron-icon-height: 100%;
  }
  ha-card.button-card-main {
    padding: 4% 0px;
    text-transform: none;
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
    text-align: center;
    letter-spacing: normal;
    width: 100%;
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  #overlay {
    align-items: flex-start;
    justify-content: flex-end;
    padding: 8px 7px;
    opacity: 0.5;
    /* DO NOT override items below */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }
  #lock {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    margin: unset;
    width: 24px;
  }
  .invalid {
    animation: blink 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  [rotating] {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }
    @-webkit-keyframes rotateIn {
      0% {
          -webkit-transform: rotate(-200deg);
          transform: rotate(-200deg);
          opacity: 0
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          opacity: 1
      }
  }

  @keyframes rotateIn {
      0% {
          -webkit-transform: rotate(-200deg);
          transform: rotate(-200deg);
          opacity: 0
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          opacity: 1
      }
  }

  [rotateIn] {
    -webkit-animation: rotateIn 5s linear infinite;
    -moz-animation: rotateIn 5s linear infinite;
    -ms-animation: rotateIn 5s linear infinite;
    -o-animation: rotateIn 5s linear infinite;
    animation: rotateIn 5s linear 4 4s;
  }
  @-webkit-keyframes zoomIn {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      50% {
          opacity: 1
      }
  }

  @keyframes zoomIn {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      50% {
          opacity: 1
      }
  }

  [zoomIn] {
    -webkit-animation: zoomIn 7s linear infinite;
    -moz-animation: zoomIn 7s linear infinite;
    -ms-animation: zoomIn 7s linear infinite;
    -o-animation: zoomIn 7s linear infinite;
    animation: zoomIn 7s linear 2 2s;
  }

  @-webkit-keyframes zoomInDown {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomInDown {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomInDown] {
    -webkit-animation: zoomInDown 7s linear infinite;
    -moz-animation: zoomInDown 7s linear infinite;
    -ms-animation: zoomInDown 7s linear infinite;
    -o-animation: zoomInDown 7s linear infinite;
    animation: zoomInDown 7s linear 2 2s;
  }

  @-webkit-keyframes zoomInLeft {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
          transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }
      40% {
          -webkit-transform: perspective(400px) rotateY(-20deg);
          transform: perspective(400px) rotateY(-20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in
      }

      60% {
          -webkit-transform: perspective(400px) rotateY(10deg);
          transform: perspective(400px) rotateY(10deg);
          opacity: 1
      }
      80% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomInLeft {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
          transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomInLeft] {
    -webkit-animation: zoomInLeft 7s linear infinite;
    -moz-animation: zoomInLeft 7s linear infinite;
    -ms-animation: zoomInLeft 7s linear infinite;
    -o-animation: zoomInLeft 7s linear infinite;
    animation: zoomInLeft 7s linear 2 2s;
  }

  @-webkit-keyframes zoomInRight {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
          transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomInRight {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
          transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomInRight] {
    -webkit-animation: zoomInRight 7s linear infinite;
    -moz-animation: zoomInRight 7s linear infinite;
    -ms-animation: zoomInRight 7s linear infinite;
    -o-animation: zoomInRight 7s linear infinite;
    animation: zoomInRight 7s linear 2 2s;
  }

  @-webkit-keyframes zoomInUp {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomInUp {
      0% {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomInUp] {
    -webkit-animation: zoomInUp 7s linear infinite;
    -moz-animation: zoomInUp 7s linear infinite;
    -ms-animation: zoomInUp 7s linear infinite;
    -o-animation: zoomInUp 7s linear infinite;
    animation: zoomInUp 7s linear 2 2s;
  }

  @-webkit-keyframes zoomOut {
      0% {
          opacity: 1
      }

      50% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      to {
          opacity: 0
      }
  }

  @keyframes zoomOut {
      0% {
          opacity: 1
      }

      50% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      to {
          opacity: 0
      }
  }

  [zoomOut] {
    -webkit-animation: zoomOut 5s linear infinite;
    -moz-animation: zoomOut 5s linear infinite;
    -ms-animation: zoomOut 5s linear infinite;
    -o-animation: zoomOut 5s linear infinite;
    animation: zoomOut 5s linear 2 2s;
  }

  @-webkit-keyframes zoomOutDown {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomOutDown {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomOutDown] {
    -webkit-animation: zoomOutDown 5s linear infinite;
    -moz-animation: zoomOutDown 5s linear infinite;
    -ms-animation: zoomOutDown 5s linear infinite;
    -o-animation: zoomOutDown 5s linear infinite;
    animation: zoomOutDown 5s linear 2 2s;
  }

  @-webkit-keyframes zoomOutLeft {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(42px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(42px,0,0)
      }

      to {
          opacity: 0;
          -webkit-transform: scale(.1) translate3d(-2000px,0,0);
          transform: scale(.1) translate3d(-2000px,0,0)
      }
  }

  @keyframes zoomOutLeft {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(42px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(42px,0,0)
      }

      to {
          opacity: 0;
          -webkit-transform: scale(.1) translate3d(-2000px,0,0);
          transform: scale(.1) translate3d(-2000px,0,0)
      }
  }

  [zoomOutLeft] {
    -webkit-animation: zoomOutLeft 5s linear infinite;
    -moz-animation: zoomOutLeft 5s linear infinite;
    -ms-animation: zoomOutLeft 5s linear infinite;
    -o-animation: zoomOutLeft 5s linear infinite;
    animation: zoomOutLeft 5s linear 2 2s;
  }

  @-webkit-keyframes zoomOutRight {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(-42px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(-42px,0,0)
      }

      to {
          opacity: 0;
          -webkit-transform: scale(.1) translate3d(2000px,0,0);
          transform: scale(.1) translate3d(2000px,0,0)
      }
  }

  @keyframes zoomOutRight {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(-42px,0,0);
          transform: scale3d(.475,.475,.475) translate3d(-42px,0,0)
      }

      to {
          opacity: 0;
          -webkit-transform: scale(.1) translate3d(2000px,0,0);
          transform: scale(.1) translate3d(2000px,0,0)
      }
  }

  [zoomOutRight] {
    -webkit-animation: zoomOutRight 5s linear infinite;
    -moz-animation: zoomOutRight 5s linear infinite;
    -ms-animation: zoomOutRight 5s linear infinite;
    -o-animation: zoomOutRight 5s linear infinite;
    animation: zoomOutRight 5s linear 2 2s;
  }

  @-webkit-keyframes zoomOutUp {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  @keyframes zoomOutUp {
      40% {
          opacity: 1;
          -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
          -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
          animation-timing-function: cubic-bezier(.55,.055,.675,.19)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
          transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
          -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
          animation-timing-function: cubic-bezier(.175,.885,.32,1)
      }
  }

  [zoomOutUp] {
    -webkit-animation: zoomOutUp 5s linear infinite;
    -moz-animation: zoomOutUp 5s linear infinite;
    -ms-animation: zoomOutUp 5s linear infinite;
    -o-animation: zoomOutUp 5s linear infinite;
    animation: zoomOutUp 5s linear 2 2s;
  }

  @-webkit-keyframes slideInDown {
      0% {
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes slideInDown {
      0% {
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [slideInDown] {
    -webkit-animation: slideInDown 5s linear infinite;
    -moz-animation: slideInDown 5s linear infinite;
    -ms-animation: slideInDown 5s linear infinite;
    -o-animation: slideInDown 5s linear infinite;
    animation: slideInDown 5s linear 2 2s;
  }

  @-webkit-keyframes slideInLeft {
      0% {
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes slideInLeft {
      0% {
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [slideInLeft] {
    -webkit-animation: slideInLeft 5s linear infinite;
    -moz-animation: slideInLeft 5s linear infinite;
    -ms-animation: slideInLeft 5s linear infinite;
    -o-animation: slideInLeft 5s linear infinite;
    animation: slideInLeft 5s linear 2 2s;
  }

  @-webkit-keyframes slideInRight {
      0% {
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes slideInRight {
      0% {
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [slideInRight] {
    -webkit-animation: slideInRight 5s linear infinite;
    -moz-animation: slideInRight 5s linear infinite;
    -ms-animation: slideInRight 5s linear infinite;
    -o-animation: slideInRight 5s linear infinite;
    animation: slideInRight 5s linear 2 2s;
  }

  @-webkit-keyframes slideInUp {
      0% {
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes slideInUp {
      0% {
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0);
          visibility: visible
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [slideInUp] {
    -webkit-animation: slideInUp 5s linear infinite;
    -moz-animation: slideInUp 5s linear infinite;
    -ms-animation: slideInUp 5s linear infinite;
    -o-animation: slideInUp 5s linear infinite;
    animation: slideInUp 5s linear 2 2s;
  }  
    @-webkit-keyframes lightSpeedInRight {
      0% {
          -webkit-transform: translate3d(100%,0,0) skewX(-30deg);
          transform: translate3d(100%,0,0) skewX(-30deg);
          opacity: 0
      }

      60% {
          -webkit-transform: skewX(20deg);
          transform: skewX(20deg);
          opacity: 1
      }

      80% {
          -webkit-transform: skewX(-5deg);
          transform: skewX(-5deg)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }
  @-webkit-keyframes slideOutDown {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }
  }

  @keyframes slideOutDown {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }
  }
  [slideOutDown] {
    -webkit-animation: slideOutDown 5s linear infinite;
    -moz-animation: slideOutDown 5s linear infinite;
    -ms-animation: slideOutDown 5s linear infinite;
    -o-animation: slideOutDown 5s linear infinite;
    animation: slideOutDown 5s linear 2 2s;
  }
  @-webkit-keyframes slideOutUp {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0)
      }
  }

  @keyframes slideOutUp {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0)
      }
  }
  [slideOutUp] {
    -webkit-animation: slideOutUp 12s linear infinite;
    -moz-animation: slideOutUp 12s linear infinite;
    -ms-animation: slideOutUp 12s linear infinite;
    -o-animation: slideOutUp 12s linear infinite;
    animation: slideOutUp 12s linear 2 2s;
  }  
  @-webkit-keyframes slideOutRight {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0)
      }
  }
  @-webkit-keyframes slideOutLeft {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0)
      }
  }

  @keyframes slideOutLeft {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0)
      }
  }

  [slideOutLeft] {
    -webkit-animation: slideOutLeft 12s linear infinite;
    -moz-animation: slideOutLeft 12s linear infinite;
    -ms-animation: slideOutLeft 12s linear infinite;
    -o-animation: slideOutLeft 12s linear infinite;
    animation: slideOutLeft 12s linear 2 2s;
  }  
  @keyframes slideOutRight {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          visibility: hidden;
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0)
      }
  }
  [slideOutRight] {
    -webkit-animation: slideOutRight 12s linear infinite;
    -moz-animation: slideOutRight 12s linear infinite;
    -ms-animation: slideOutRight 12s linear infinite;
    -o-animation: slideOutRight 12s linear infinite;
    animation: slideOutRight 12s linear 2 2s;
  }
  
  @-webkit-keyframes heartBeat {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }

      14% {
          -webkit-transform: scale(1.3);
          transform: scale(1.3)
      }

      28% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }

      42% {
          -webkit-transform: scale(1.3);
          transform: scale(1.3)
      }

      70% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
  }

  @keyframes heartBeat {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }

      14% {
          -webkit-transform: scale(1.3);
          transform: scale(1.3)
      }

      28% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }

      42% {
          -webkit-transform: scale(1.3);
          transform: scale(1.3)
      }

      70% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
  }
  [heartBeat] {
    -webkit-animation: heartBeat 5s ease-out infinite;
    -moz-animation: heartBeat 5s ease-out infinite;
    -ms-animation: heartBeat 5s ease-out infinite;
    -o-animation: heartBeat 5s ease-out infinite;
    animation: heartBeat 5s ease-out 2 2s;
  }
    @-webkit-keyframes backInDown {
      0% {
          -webkit-transform: translateY(-1200px) scale(.7);
          transform: translateY(-1200px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }

  @keyframes backInDown {
      0% {
          -webkit-transform: translateY(-1200px) scale(.7);
          transform: translateY(-1200px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }
  [backInDown] {
    -webkit-animation: backInDown 5s ease-out infinite;
    -moz-animation: backInDown 5s ease-out infinite;
    -ms-animation: backInDown 5s ease-out infinite;
    -o-animation: backInDown 5s ease-out infinite;
    animation: backInDown 5s ease-out 2 2s;
  }
  @-webkit-keyframes backInLeft {
      0% {
          -webkit-transform: translateX(-2000px) scale(.7);
          transform: translateX(-2000px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }

  @keyframes backInLeft {
      0% {
          -webkit-transform: translateX(-2000px) scale(.7);
          transform: translateX(-2000px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }
  [backInLeft] {
    -webkit-animation: backInLeft 9s linear infinite;
    -moz-animation: backInLeft 9s linear infinite;
    -ms-animation: backInLeft 9s linear infinite;
    -o-animation: backInLeft 9s linear infinite;
    animation: backInLeft 9s linear 2 2s;
  }  

  @-webkit-keyframes backInRight {
      0% {
          -webkit-transform: translateX(2000px) scale(.7);
          transform: translateX(2000px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }

  @keyframes backInRight {
      0% {
          -webkit-transform: translateX(2000px) scale(.7);
          transform: translateX(2000px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }
  [backInRight] {
    -webkit-animation: backInRight 9s linear infinite;
    -moz-animation: backInRight 9s linear infinite;
    -ms-animation: backInRight 9s linear infinite;
    -o-animation: backInRight 9s linear infinite;
    animation: backInRight 9s linear 2 2s;
  }

  @-webkit-keyframes backInUp {
      0% {
          -webkit-transform: translateY(1200px) scale(.7);
          transform: translateY(1200px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }

  @keyframes backInUp {
      0% {
          -webkit-transform: translateY(1200px) scale(.7);
          transform: translateY(1200px) scale(.7);
          opacity: .7
      }

      80% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }
  }  
  [backInUp] {
    -webkit-animation: backInUp 9s linear infinite;
    -moz-animation: backInUp 9s linear infinite;
    -ms-animation: backInUp 9s linear infinite;
    -o-animation: backInUp 9s linear infinite;
    animation: backInUp 9s linear 2 2s;
  }
  @-webkit-keyframes backOutDown {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateY(700px) scale(.7);
          transform: translateY(700px) scale(.7);
          opacity: .7
      }
  }

  @keyframes backOutDown {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateY(700px) scale(.7);
          transform: translateY(700px) scale(.7);
          opacity: .7
      }
  }
  [backOutDown] {
    -webkit-animation: backOutDown 9s linear infinite;
    -moz-animation: backOutDown 9s linear infinite;
    -ms-animation: backOutDown 9s linear infinite;
    -o-animation: backOutDown 9s linear infinite;
    animation: backOutDown 9s linear 2 2s;
  }

  @-webkit-keyframes backOutLeft {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateX(-2000px) scale(.7);
          transform: translateX(-2000px) scale(.7);
          opacity: .7
      }
  }

  @keyframes backOutLeft {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateX(-2000px) scale(.7);
          transform: translateX(-2000px) scale(.7);
          opacity: .7
      }
  }  
  [backOutLeft] {
    -webkit-animation: backOutLeft 12s linear infinite;
    -moz-animation: backOutLeft 12s linear infinite;
    -ms-animation: backOutLeft 12s linear infinite;
    -o-animation: backOutLeft 12s linear infinite;
    animation: backOutLeft 12s linear 2 2s;
  }

  @-webkit-keyframes backOutRight {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateX(2000px) scale(.7);
          transform: translateX(2000px) scale(.7);
          opacity: .7
      }
  }

  @keyframes backOutRight {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateX(0) scale(.7);
          transform: translateX(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateX(2000px) scale(.7);
          transform: translateX(2000px) scale(.7);
          opacity: .7
      }
  }
  [backOutRight] {
    -webkit-animation: backOutRight 12s linear infinite;
    -moz-animation: backOutRight 12s linear infinite;
    -ms-animation: backOutRight 12s linear infinite;
    -o-animation: backOutRight 12s linear infinite;
    animation: backOutRight 12s linear 2 2s;
  }
  @-webkit-keyframes backOutUp {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateY(-700px) scale(.7);
          transform: translateY(-700px) scale(.7);
          opacity: .7
      }
  }

  @keyframes backOutUp {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      20% {
          -webkit-transform: translateY(0) scale(.7);
          transform: translateY(0) scale(.7);
          opacity: .7
      }

      to {
          -webkit-transform: translateY(-700px) scale(.7);
          transform: translateY(-700px) scale(.7);
          opacity: .7
      }
  }
  [backOutUp] {
    -webkit-animation: backOutUp 12s linear infinite;
    -moz-animation: backOutUp 12s linear infinite;
    -ms-animation: backOutUp 12s linear infinite;
    -o-animation: backOutUp 12s linear infinite;
    animation: backOutUp 12s linear 2 2s;
  }  
  @keyframes lightSpeedInRight {
      0% {
          -webkit-transform: translate3d(100%,0,0) skewX(-30deg);
          transform: translate3d(100%,0,0) skewX(-30deg);
          opacity: 0
      }

      60% {
          -webkit-transform: skewX(20deg);
          transform: skewX(20deg);
          opacity: 1
      }

      80% {
          -webkit-transform: skewX(-5deg);
          transform: skewX(-5deg)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [lightSpeedInRight] {
    -webkit-animation: lightSpeedInRight 5s ease-out infinite;
    -moz-animation: lightSpeedInRight 5s ease-out infinite;
    -ms-animation: lightSpeedInRight 5s ease-out infinite;
    -o-animation: lightSpeedInRight 5s ease-out infinite;
    animation: lightSpeedInRight 5s ease-out 2 2s;
  }
  
  @-webkit-keyframes lightSpeedOutRight {
      0% {
          opacity: 1

      to {
          -webkit-transform: translate3d(100%,0,0) skewX(30deg);
          transform: translate3d(100%,0,0) skewX(30deg);
          opacity: 0
      }
  }

  @keyframes lightSpeedOutRight {
      0% {
          opacity: 1
      }

      to {
          -webkit-transform: translate3d(100%,0,0) skewX(30deg);
          transform: translate3d(100%,0,0) skewX(30deg);
          opacity: 0
      }
  }

  [lightSpeedOutRight] {
    -webkit-animation: lightSpeedOutRight 5s ease-in 1;
    -moz-animation: lightSpeedOutRight 5s ease-in 1;
    -ms-animation: lightSpeedOutRight 5s ease-in 1 5s;
    -o-animation: lightSpeedOutRight 5s ease-in 2 5s;
    animation: lightSpeedOutRight 5s ease-in 2 5s;
  }
    @-webkit-keyframes lightSpeedInLeft {
      0% {
          -webkit-transform: translate3d(-100%,0,0) skewX(30deg);
          transform: translate3d(-100%,0,0) skewX(30deg);
          opacity: 0
      }

      60% {
          -webkit-transform: skewX(-20deg);
          transform: skewX(-20deg);
          opacity: 1
      }

      80% {
          -webkit-transform: skewX(5deg);
          transform: skewX(5deg)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes lightSpeedInLeft {
      0% {
          -webkit-transform: translate3d(-100%,0,0) skewX(30deg);
          transform: translate3d(-100%,0,0) skewX(30deg);
          opacity: 0
      }

      60% {
          -webkit-transform: skewX(-20deg);
          transform: skewX(-20deg);
          opacity: 1
      }

      80% {
          -webkit-transform: skewX(5deg);
          transform: skewX(5deg)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [lightSpeedInLeft] {
    -webkit-animation: lightSpeedInLeft 5s ease-out infinite;
    -moz-animation: lightSpeedInLeft 5s ease-out infinite;
    -ms-animation: lightSpeedInLeft 5s ease-out infinite;
    -o-animation: lightSpeedInLeft 5s ease-out infinite;
    animation: lightSpeedInLeft 5s ease-out infinite;
  }
    @-webkit-keyframes lightSpeedOutLeft {
      0% {
          opacity: 1
      }

      to {
          -webkit-transform: translate3d(-100%,0,0) skewX(-30deg);
          transform: translate3d(-100%,0,0) skewX(-30deg);
          opacity: 0
      }
  }

  @keyframes lightSpeedOutLeft {
      0% {
          opacity: 1
      }

      to {
          -webkit-transform: translate3d(-100%,0,0) skewX(-30deg);
          transform: translate3d(-100%,0,0) skewX(-30deg);
          opacity: 0
      }
  }

  [lightSpeedOutLeft] {
    -webkit-animation: lightSpeedOutLeft 5s ease-in infinite;
    -moz-animation: lightSpeedOutLeft 5s ease-in infinite;
    -ms-animation: lightSpeedOutLeft 5s ease-in infinite;
    -o-animation: lightSpeedOutLeft 5s ease-in infinite;
    animation: lightSpeedOutLeft 5s ease-in infinite;
  }
  @-webkit-keyframes jello {
    0%,11.1%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg)
    }
    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg)
    }
    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg)
    }
    55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg)
    }
    6.6% {
        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
        transform: skewX(-.78125deg) skewY(-.78125deg)
    }
    77.7% {
        -webkit-transform: skewX(.390625deg) skewY(.390625deg);
        transform: skewX(.390625deg) skewY(.390625deg)
    }
    88.8% {
        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);
        transform: skewX(-.1953125deg) skewY(-.1953125deg)
    }
}
@keyframes jello {
    0%,11.1%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg)
    }
    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg)
    }
    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg)
    }
    55.5% {
          -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
          transform: skewX(1.5625deg) skewY(1.5625deg)
    }
    66.6% {
          -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
          transform: skewX(-.78125deg) skewY(-.78125deg)
    }
    77.7% {
          -webkit-transform: skewX(.390625deg) skewY(.390625deg);
          transform: skewX(.390625deg) skewY(.390625deg)
    }
    88.8% {
          -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);
          transform: skewX(-.1953125deg) skewY(-.1953125deg)
    }
}
[jello] {
  -webkit-animation: jello 6s linear infinite;
  -moz-animation: jello 6s linear infinite;
  -ms-animation: jello 6s linear infinite;
  -o-animation: jello 6s linear infinite;
  animation: jello 6s linear infinite;
  }
  @-webkit-keyframes fadeInTopLeft {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%,-100%,0);
          transform: translate3d(-100%,-100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes fadeInTopLeft {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%,-100%,0);
          transform: translate3d(-100%,-100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

 [fadeInTopLeft] {
    -webkit-animation: fadeInTopLeft 4s ease-out 1 1s;
    -moz-animation: fadeInTopLeft 4s ease-out 1 1s;
    -ms-animation: fadeInTopLeft 4s ease-out 1 1s;
    -o-animation: fadeInTopLeft 4s ease-out 1 1s;
    animation: fadeInTopLeft 4s ease-out 1 1s;
  }

  @-webkit-keyframes fadeInTopRight {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(100%,-100%,0);
          transform: translate3d(100%,-100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes fadeInTopRight {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(100%,-100%,0);
          transform: translate3d(100%,-100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

 [fadeInTopRight] {
    -webkit-animation: fadeInTopRight 4s ease-out 1 1s;
    -moz-animation: fadeInTopRight 4s ease-out 1 1s;
    -ms-animation: fadeInTopRight 4s ease-out 1 1s;
    -o-animation: fadeInTopRight 4s ease-out 1 1s;
    animation: fadeInTopRight 4s ease-out 1 1s;
  }

  @-webkit-keyframes fadeInBottomLeft {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%,100%,0);
          transform: translate3d(-100%,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes fadeInBottomLeft {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(-100%,100%,0);
          transform: translate3d(-100%,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

[fadeInBottomLeft] {
    -webkit-animation: fadeInBottomLeft 4s ease-out 1 1s;
    -moz-animation: fadeInBottomLeft 4s ease-out 1 1s;
    -ms-animation: fadeInBottomLeft 4s ease-out 1 1s;
    -o-animation: fadeInBottomLeft 4s ease-out 1 1s;
    animation: fadeInBottomLeft 4s ease-out 1 1s;
  }

  @-webkit-keyframes fadeInBottomRight {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(100%,100%,0);
          transform: translate3d(100%,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }
  @keyframes fadeInBottomRight {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(100%,100%,0);
          transform: translate3d(100%,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [fadeInBottomRight] {
    -webkit-animation: fadeInBottomRight 4s ease-out 1 1s;
    -moz-animation: fadeInBottomRight 4s ease-out 1 1s;
    -ms-animation: fadeInBottomRight 4s ease-out 1 1s;
    -o-animation: fadeInBottomRight 4s ease-out 1 1s;
    animation: fadeInBottomRight 4s ease-out 1 1s;
  }
  @-webkit-keyframes fadeOut {
      0% {
          opacity: 1
      }

      to {
          opacity: 0
      }
  }

  @keyframes fadeOut {
      0% {
          opacity: 1
      }

      to {
          opacity: 0
      }
  }

  [fadeOut] {
      -webkit-animation: fadeOut 6s linear infinite;
      -moz-animation: fadeOut 6s linear infinite;
      -ms-animation: fadeOut 6s linear infinite;
      -o-animation: fadeOut 6s linear infinite;
      animation: fadeOut 6s linear infinite;
    }

  @-webkit-keyframes fadeOutDown {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }
  }

  @keyframes fadeOutDown {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }
  }

  [fadeOutDown] {
      -webkit-animation: fadeOutDown 6s linear infinite;
      -moz-animation: fadeOutDown 6s linear infinite;
      -ms-animation: fadeOutDown 6s linear infinite;
      -o-animation: fadeOutDown 6s linear infinite;
      animation: fadeOutDown 6s linear infinite;
    }

  @-webkit-keyframes fadeOutDownBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0);
          transform: translate3d(0,2000px,0)
      }
  }

  @keyframes fadeOutDownBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0);
          transform: translate3d(0,2000px,0)
      }
  }

  [fadeOutDownBig] {
      -webkit-animation: fadeOutDownBig 6s linear infinite;
      -moz-animation: fadeOutDownBig 6s linear infinite;
      -ms-animation: fadeOutDownBig 6s linear infinite;
      -o-animation: fadeOutDownBig 6s linear infinite;
      animation: fadeOutDownBig 6s linear infinite;
    }

  @-webkit-keyframes fadeOutLeft {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0)
      }
  }

  @keyframes fadeOutLeft {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,0,0);
          transform: translate3d(-100%,0,0)
      }
  }

  [fadeOutLeft] {
      -webkit-animation: fadeOutLeft 6s linear infinite;
      -moz-animation: fadeOutLeft 6s linear infinite;
      -ms-animation: fadeOutLeft 6s linear infinite;
      -o-animation: fadeOutLeft 6s linear infinite;
      animation: fadeOutLeft 6s linear infinite;
    }

  @-webkit-keyframes fadeOutLeftBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-2000px,0,0);
          transform: translate3d(-2000px,0,0)
      }
  }

  @keyframes fadeOutLeftBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-2000px,0,0);
          transform: translate3d(-2000px,0,0)
      }
  }

  [fadeOutLeftBig] {
      -webkit-animation: fadeOutLeftBig 6s linear infinite;
      -moz-animation: fadeOutLeftBig 6s linear infinite;
      -ms-animation: fadeOutLeftBig 6s linear infinite;
      -o-animation: fadeOutLeftBig 6s linear infinite;
      animation: fadeOutLeftBig 6s linear infinite;
    }

  @-webkit-keyframes fadeOutRight {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0)
      }
  }

  @keyframes fadeOutRight {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,0,0);
          transform: translate3d(100%,0,0)
      }
  }

  [fadeOutRight] {
      -webkit-animation: fadeOutRight 6s linear infinite;
      -moz-animation: fadeOutRight 6s linear infinite;
      -ms-animation: fadeOutRight 6s linear infinite;
      -o-animation: fadeOutRight 6s linear infinite;
      animation: fadeOutRight 6s linear infinite;
    }

  @-webkit-keyframes fadeOutRightBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(2000px,0,0);
          transform: translate3d(2000px,0,0)
      }
  }

  @keyframes fadeOutRightBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(2000px,0,0);
          transform: translate3d(2000px,0,0)
      }
  }

  [fadeOutRightBig] {
      -webkit-animation: fadeOutRightBig 6s linear infinite;
      -moz-animation: fadeOutRightBig 6s linear infinite;
      -ms-animation: fadeOutRightBig 6s linear infinite;
      -o-animation: fadeOutRightBig 6s linear infinite;
      animation: fadeOutRightBig 6s linear infinite;
    }

  @-webkit-keyframes fadeOutUp {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0)
      }
  }

  @keyframes fadeOutUp {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0)
      }
  }

  [fadeOutUp] {
      -webkit-animation: fadeOutUp 6s linear infinite;
      -moz-animation: fadeOutUp 6s linear infinite;
      -ms-animation: fadeOutUp 6s linear infinite;
      -o-animation: fadeOutUp 6s linear infinite;
      animation: fadeOutUp 6s linear infinite;
    }

  @-webkit-keyframes fadeOutUpBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-2000px,0);
          transform: translate3d(0,-2000px,0)
      }
  }

  @keyframes fadeOutUpBig {
      0% {
          opacity: 1
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-2000px,0);
          transform: translate3d(0,-2000px,0)
      }
  }

  [fadeOutUpBig] {
      -webkit-animation: fadeOutUpBig 12s ease-out 12 8s;
      -moz-animation: fadeOutUpBig 12s ease-out 12 8s;
      -ms-animation: fadeOutUpBig 12s ease-out 12 8s;
      -o-animation: fadeOutUpBig 12s ease-out 12 8s;
      animation: fadeOutUpBig 12s ease-out 12 8s;
    }

  @-webkit-keyframes fadeOutTopLeft {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,-100%,0);
          transform: translate3d(-100%,-100%,0)
      }
  }

  @keyframes fadeOutTopLeft {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,-100%,0);
          transform: translate3d(-100%,-100%,0)
      }
  }

  [fadeOutTopLeft] {
      -webkit-animation: fadeOutTopLeft 12s ease-out 12 8s;
      -moz-animation: fadeOutTopLeft 12s ease-out 12 8s;
      -ms-animation: fadeOutTopLeft 12s ease-out 12 8s;
      -o-animation: fadeOutTopLeft 12s ease-out 12 8s;
      animation: fadeOutTopLeft 12s ease-out 12 8s;
    }

  @-webkit-keyframes fadeOutTopRight {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,-100%,0);
          transform: translate3d(100%,-100%,0)
      }
  }

  @keyframes fadeOutTopRight {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,-100%,0);
          transform: translate3d(100%,-100%,0)
      }
  }

  [fadeOutTopRight] {
      -webkit-animation: fadeOutTopRight 12s ease-out 12 8s;
      -moz-animation: fadeOutTopRight 12s ease-out 12 8s;
      -ms-animation: fadeOutTopRight 12s ease-out 12 8s;
      -o-animation: fadeOutTopRight 12s ease-out 12 8s;
      animation: fadeOutTopRight 12s ease-out 12 8s;
    }

  @-webkit-keyframes fadeOutBottomRight {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,100%,0);
          transform: translate3d(100%,100%,0)
      }
  }

  @keyframes fadeOutBottomRight {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(100%,100%,0);
          transform: translate3d(100%,100%,0)
      }
  }

  [fadeOutBottomRight] {
      -webkit-animation: fadeOutBottomRight 12s ease-out 12 8s;
      -moz-animation: fadeOutBottomRight 12s ease-out 12 8s;
      -ms-animation: fadeOutBottomRight 12s ease-out 12 8s;
      -o-animation: fadeOutBottomRight 12s ease-out 12 8s;
      animation: fadeOutBottomRight 12s ease-out 12 8s;
    }

  @-webkit-keyframes fadeOutBottomLeft {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,100%,0);
          transform: translate3d(-100%,100%,0)
      }
  }

  @keyframes fadeOutBottomLeft {
      0% {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-100%,100%,0);
          transform: translate3d(-100%,100%,0)
      }
  }

  [fadeOutBottomLeft] {
      -webkit-animation: fadeOutBottomLeft 12s ease-out 12 1s;
      -moz-animation: fadeOutBottomLeft 12s ease-out 12 1s;
      -ms-animation: fadeOutBottomLeft 12s ease-out 12 1s;
      -o-animation: fadeOutBottomLeft 12s ease-out 12 1s;
      animation: fadeOutBottomLeft 12s ease-out 12 1s;
    }
    
@-webkit-keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    20%,60% {
        -webkit-transform: rotate(80deg);
        transform: rotate(80deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    40%,80% {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,700px,0);
        transform: translate3d(0,700px,0);
        opacity: 0
    }
}

@keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    20%,60% {
        -webkit-transform: rotate(80deg);
        transform: rotate(80deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    40%,80% {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,700px,0);
        transform: translate3d(0,700px,0);
        opacity: 0
    }
}

[hinge] {
    -webkit-animation: hinge 5s linear infinite;
    -moz-animation: hinge 5s linear infinite;
    -ms-animation: hinge 5s linear infinite;
    -o-animation: hinge 5s linear infinite;
    animation: hinge 5s linear infinite;
  }
@-webkit-keyframes flip {
    0% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    40% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    50% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    to {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}
@keyframes flip {
    0% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    40% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }
    50% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }

    to {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}
[flip] {
  -webkit-animation: flip 7s linear infinite;
  -moz-animation: flip 7s linear infinite;
  -ms-animation: flip 7s linear infinite;
  -o-animation: flip 7s linear infinite;
  animation: flip 7s linear infinite;
  }

    @-webkit-keyframes swing {
      20% {
          -webkit-transform: rotate(15deg);
          transform: rotate(15deg)
      }
      40% {
          -webkit-transform: rotate(-10deg);
          transform: rotate(-10deg)
      }
      60% {
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg)
      }
      80% {
          -webkit-transform: rotate(-5deg);
          transform: rotate(-5deg)
      }
      to {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg)
      }
  }

  @keyframes swing {
      20% {
          -webkit-transform: rotate(15deg);
          transform: rotate(15deg)
      }
      40% {
          -webkit-transform: rotate(-10deg);
          transform: rotate(-10deg)
      }
      60% {
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg)
      }
      80% {
          -webkit-transform: rotate(-5deg);
          transform: rotate(-5deg)
      }
      to {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg)
      }
  }

  [swing] {
    -webkit-animation: swing 9s linear infinite;
    -moz-animation: swing 9s linear infinite;
    -ms-animation: swing 9s linear infinite;
    -o-animation: swing 9s linear infinite;
    animation: swing 9s linear infinite;
  }
      @-webkit-keyframes bounce {
      0%,20%,53%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1);
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      40%,43% {
          -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          -webkit-transform: translate3d(0,-30px,0) scaleY(1.1);
          transform: translate3d(0,-30px,0) scaleY(1.1)
      }

      70% {
          -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          -webkit-transform: translate3d(0,-15px,0) scaleY(1.05);
          transform: translate3d(0,-15px,0) scaleY(1.05)
      }

      80% {
          -webkit-transition-timing-function: cubic-bezier(.215,.61,.355,1);
          transition-timing-function: cubic-bezier(.215,.61,.355,1);
          -webkit-transform: translateZ(0) scaleY(.95);
          transform: translateZ(0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,-4px,0) scaleY(1.02);
          transform: translate3d(0,-4px,0) scaleY(1.02)
      }
  }

  @keyframes bounce {
      0%,20%,53%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1);
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }

      40%,43% {
          -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          -webkit-transform: translate3d(0,-30px,0) scaleY(1.1);
          transform: translate3d(0,-30px,0) scaleY(1.1)
      }

      70% {
          -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          animation-timing-function: cubic-bezier(.755,.05,.855,.06);
          -webkit-transform: translate3d(0,-15px,0) scaleY(1.05);
          transform: translate3d(0,-15px,0) scaleY(1.05)
      }

      80% {
          -webkit-transition-timing-function: cubic-bezier(.215,.61,.355,1);
          transition-timing-function: cubic-bezier(.215,.61,.355,1);
          -webkit-transform: translateZ(0) scaleY(.95);
          transform: translateZ(0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,-4px,0) scaleY(1.02);
          transform: translate3d(0,-4px,0) scaleY(1.02)
      }
  }

  [bounce] {
    -webkit-animation: bounce 12s linear infinite;
    -moz-animation: bounce 12s linear infinite;
    -ms-animation: bounce 12s linear infinite;
    -o-animation: bounce 12s linear infinite;
    animation: bounce 12s linear infinite;
  }
  @-webkit-keyframes bounceIn {
      0%,20%,40%,60%,80%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      20% {
          -webkit-transform: scale3d(1.1,1.1,1.1);
          transform: scale3d(1.1,1.1,1.1)
      }

      40% {
          -webkit-transform: scale3d(.9,.9,.9);
          transform: scale3d(.9,.9,.9)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(1.03,1.03,1.03);
          transform: scale3d(1.03,1.03,1.03)
      }

      80% {
          -webkit-transform: scale3d(.97,.97,.97);
          transform: scale3d(.97,.97,.97)
      }

      to {
          opacity: 1;
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }

  @keyframes bounceIn {
      0%,20%,40%,60%,80%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }

      20% {
          -webkit-transform: scale3d(1.1,1.1,1.1);
          transform: scale3d(1.1,1.1,1.1)
      }

      40% {
          -webkit-transform: scale3d(.9,.9,.9);
          transform: scale3d(.9,.9,.9)
      }

      60% {
          opacity: 1;
          -webkit-transform: scale3d(1.03,1.03,1.03);
          transform: scale3d(1.03,1.03,1.03)
      }

      80% {
          -webkit-transform: scale3d(.97,.97,.97);
          transform: scale3d(.97,.97,.97)
      }

      to {
          opacity: 1;
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }
  [bounceIn] {
    -webkit-animation: bounceIn 12s linear infinite;
    -moz-animation: bounceIn 12s linear infinite;
    -ms-animation: bounceIn 12s linear infinite;
    -o-animation: bounceIn 12s linear infinite;
    animation: bounceIn 12s linear infinite;
  }
  @-webkit-keyframes bounceInDown {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,-3000px,0) scaleY(3);
          transform: translate3d(0,-3000px,0) scaleY(3)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(0,25px,0) scaleY(.9);
          transform: translate3d(0,25px,0) scaleY(.9)
      }

      75% {
          -webkit-transform: translate3d(0,-10px,0) scaleY(.95);
          transform: translate3d(0,-10px,0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,5px,0) scaleY(.985);
          transform: translate3d(0,5px,0) scaleY(.985)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes bounceInDown {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,-3000px,0) scaleY(3);
          transform: translate3d(0,-3000px,0) scaleY(3)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(0,25px,0) scaleY(.9);
          transform: translate3d(0,25px,0) scaleY(.9)
      }

      75% {
          -webkit-transform: translate3d(0,-10px,0) scaleY(.95);
          transform: translate3d(0,-10px,0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,5px,0) scaleY(.985);
          transform: translate3d(0,5px,0) scaleY(.985)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [bounceInDown] {
      -webkit-animation-name: bounceInDown;
      animation-name: bounceInDown
  }
 
   @keyframes bounceInLeft {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(-3000px,0,0) scaleX(3);
          transform: translate3d(-3000px,0,0) scaleX(3)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(25px,0,0) scaleX(1);
          transform: translate3d(25px,0,0) scaleX(1)
      }

      75% {
          -webkit-transform: translate3d(-10px,0,0) scaleX(.98);
          transform: translate3d(-10px,0,0) scaleX(.98)
      }

      90% {
          -webkit-transform: translate3d(5px,0,0) scaleX(.995);
          transform: translate3d(5px,0,0) scaleX(.995)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [bounceInLeft] {
    -webkit-animation: bounceInLeft 4s linear infinite;
    -moz-animation: bounceInLeft 4s linear infinite;
    -ms-animation: bounceInLeft 4s linear infinite;
    -o-animation: bounceInLeft 4s linear infinite;
    animation: bounceInLeft 4s linear infinite;
  }

  @-webkit-keyframes bounceInRight {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(3000px,0,0) scaleX(3);
          transform: translate3d(3000px,0,0) scaleX(3)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(-25px,0,0) scaleX(1);
          transform: translate3d(-25px,0,0) scaleX(1)
      }

      75% {
          -webkit-transform: translate3d(10px,0,0) scaleX(.98);
          transform: translate3d(10px,0,0) scaleX(.98)
      }

      90% {
          -webkit-transform: translate3d(-5px,0,0) scaleX(.995);
          transform: translate3d(-5px,0,0) scaleX(.995)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes bounceInRight {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(3000px,0,0) scaleX(3);
          transform: translate3d(3000px,0,0) scaleX(3)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(-25px,0,0) scaleX(1);
          transform: translate3d(-25px,0,0) scaleX(1)
      }

      75% {
          -webkit-transform: translate3d(10px,0,0) scaleX(.98);
          transform: translate3d(10px,0,0) scaleX(.98)
      }

      90% {
          -webkit-transform: translate3d(-5px,0,0) scaleX(.995);
          transform: translate3d(-5px,0,0) scaleX(.995)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [bounceInRight] {
    -webkit-animation: bounceInRight 4s linear infinite;
    -moz-animation: bounceInRight 4s linear infinite;
    -ms-animation: bounceInRight 4s linear infinite;
    -o-animation: bounceInRight 4s linear infinite;
    animation: bounceInRight 4s linear infinite;
  }

  @-webkit-keyframes bounceInUp {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,3000px,0) scaleY(5);
          transform: translate3d(0,3000px,0) scaleY(5)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(0,-20px,0) scaleY(.9);
          transform: translate3d(0,-20px,0) scaleY(.9)
      }

      75% {
          -webkit-transform: translate3d(0,10px,0) scaleY(.95);
          transform: translate3d(0,10px,0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,-5px,0) scaleY(.985);
          transform: translate3d(0,-5px,0) scaleY(.985)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes bounceInUp {
      0%,60%,75%,90%,to {
          -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
          animation-timing-function: cubic-bezier(.215,.61,.355,1)
      }

      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,3000px,0) scaleY(5);
          transform: translate3d(0,3000px,0) scaleY(5)
      }

      60% {
          opacity: 1;
          -webkit-transform: translate3d(0,-20px,0) scaleY(.9);
          transform: translate3d(0,-20px,0) scaleY(.9)
      }

      75% {
          -webkit-transform: translate3d(0,10px,0) scaleY(.95);
          transform: translate3d(0,10px,0) scaleY(.95)
      }

      90% {
          -webkit-transform: translate3d(0,-5px,0) scaleY(.985);
          transform: translate3d(0,-5px,0) scaleY(.985)
      }

      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }
 
  [bounceInUp] {
    -webkit-animation: bounceInUp 4s linear infinite;
    -moz-animation: bounceInUp 4s linear infinite;
    -ms-animation: bounceInUp 4s linear infinite;
    -o-animation: bounceInUp 4s linear infinite;
    animation: bounceInUp 4s linear infinite;
  }
  
  
  
  @-webkit-keyframes bounceOut {
      20% {
          -webkit-transform: scale3d(.9,.9,.9);
          transform: scale3d(.9,.9,.9)
      }

      50%,55% {
          opacity: 1;
          -webkit-transform: scale3d(1.1,1.1,1.1);
          transform: scale3d(1.1,1.1,1.1)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }
  }

  @keyframes bounceOut {
      20% {
          -webkit-transform: scale3d(.9,.9,.9);
          transform: scale3d(.9,.9,.9)
      }

      50%,55% {
          opacity: 1;
          -webkit-transform: scale3d(1.1,1.1,1.1);
          transform: scale3d(1.1,1.1,1.1)
      }

      to {
          opacity: 0;
          -webkit-transform: scale3d(.3,.3,.3);
          transform: scale3d(.3,.3,.3)
      }
  }
  
  [bounceOut] {
    -webkit-animation: bounceOut .75s linear infinite;
    -moz-animation: bounceOut .75s linear infinite;
    -ms-animation: bounceOut .75s linear infinite;
    -o-animation: bounceOut .75s linear infinite;
    animation: bounceOut .75s linear infinite;
  }
  
  @-webkit-keyframes bounceOutDown {
      20% {
          -webkit-transform: translate3d(0,10px,0) scaleY(.985);
          transform: translate3d(0,10px,0) scaleY(.985)
      }

      40%,45% {
          opacity: 1;
          -webkit-transform: translate3d(0,-20px,0) scaleY(.9);
          transform: translate3d(0,-20px,0) scaleY(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0) scaleY(3);
          transform: translate3d(0,2000px,0) scaleY(3)
      }
  }

  @keyframes bounceOutDown {
      20% {
          -webkit-transform: translate3d(0,10px,0) scaleY(.985);
          transform: translate3d(0,10px,0) scaleY(.985)
      }

      40%,45% {
          opacity: 1;
          -webkit-transform: translate3d(0,-20px,0) scaleY(.9);
          transform: translate3d(0,-20px,0) scaleY(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0) scaleY(3);
          transform: translate3d(0,2000px,0) scaleY(3)
      }
  }

  [bounceOutDown] {
    -webkit-animation: bounceOutDown .75s linear infinite;
    -moz-animation: bounceOutDown .75s linear infinite;
    -ms-animation: bounceOutDown .75s linear infinite;
    -o-animation: bounceOutDown .75s linear infinite;
    animation: bounceOutDown .75s linear infinite;
  }
  

  @-webkit-keyframes bounceOutLeft {
      20% {
          opacity: 1;
          -webkit-transform: translate3d(20px,0,0) scaleX(.9);
          transform: translate3d(20px,0,0) scaleX(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-2000px,0,0) scaleX(2);
          transform: translate3d(-2000px,0,0) scaleX(2)
      }
  }

  @keyframes bounceOutLeft {
      20% {
          opacity: 1;
          -webkit-transform: translate3d(20px,0,0) scaleX(.9);
          transform: translate3d(20px,0,0) scaleX(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(-2000px,0,0) scaleX(2);
          transform: translate3d(-2000px,0,0) scaleX(2)
      }
  }

  [bounceOutLeft] {
    -webkit-animation: bounceOutLeft .75s linear infinite;
    -moz-animation: bounceOutLeft .75s linear infinite;
    -ms-animation: bounceOutLeft .75s linear infinite;
    -o-animation: bounceOutLeft .75s linear infinite;
    animation: bounceOutLeft .75s linear infinite;
  }

  @-webkit-keyframes bounceOutRight {
      20% {
          opacity: 1;
          -webkit-transform: translate3d(-20px,0,0) scaleX(.9);
          transform: translate3d(-20px,0,0) scaleX(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(2000px,0,0) scaleX(2);
          transform: translate3d(2000px,0,0) scaleX(2)
      }
  }

  @keyframes bounceOutRight {
      20% {
          opacity: 1;
          -webkit-transform: translate3d(-20px,0,0) scaleX(.9);
          transform: translate3d(-20px,0,0) scaleX(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(2000px,0,0) scaleX(2);
          transform: translate3d(2000px,0,0) scaleX(2)
      }
  }

  [bounceOutRight] {
    -webkit-animation: bounceOutRight .75s linear infinite;
    -moz-animation: bounceOutRight .75s linear infinite;
    -ms-animation: bounceOutRight .75s linear infinite;
    -o-animation: bounceOutRight .75s linear infinite;
    animation: bounceOutRight .75s linear infinite;
  }

  @-webkit-keyframes bounceOutUp {
      20% {
          -webkit-transform: translate3d(0,-10px,0) scaleY(.985);
          transform: translate3d(0,-10px,0) scaleY(.985)
      }

      40%,45% {
          opacity: 1;
          -webkit-transform: translate3d(0,20px,0) scaleY(.9);
          transform: translate3d(0,20px,0) scaleY(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-2000px,0) scaleY(3);
          transform: translate3d(0,-2000px,0) scaleY(3)
      }
  }

  @keyframes bounceOutUp {
      20% {
          -webkit-transform: translate3d(0,-10px,0) scaleY(.985);
          transform: translate3d(0,-10px,0) scaleY(.985)
      }

      40%,45% {
          opacity: 1;
          -webkit-transform: translate3d(0,20px,0) scaleY(.9);
          transform: translate3d(0,20px,0) scaleY(.9)
      }

      to {
          opacity: 0;
          -webkit-transform: translate3d(0,-2000px,0) scaleY(3);
          transform: translate3d(0,-2000px,0) scaleY(3)
      }
  }

  [bounceOutUp] {
    -webkit-animation: bounceOutUp .75s linear infinite;
    -moz-animation: bounceOutUp .75s linear infinite;
    -ms-animation: bounceOutUp .75s linear infinite;
    -o-animation: bounceOutUp .75s linear infinite;
    animation: bounceOutUp .75s linear infinite;
  }

  @-webkit-keyframes flash {
      0%,50%,to {
          opacity: 1
      }

      25%,75% {
          opacity: 0
      }
  }

  @keyframes flash {
      0%,50%,to {
          opacity: 1
      }

      25%,75% {
          opacity: 0
      }
  }

  [flash] {
    -webkit-animation: flash 3s linear infinite;
    -moz-animation: flash 3s linear infinite;
    -ms-animation: flash 3s linear infinite;
    -o-animation: flash 3s linear infinite;
    animation: flash 3s linear infinite;
  }

  @-webkit-keyframes pulse {-
      0% {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }

      50% {
          -webkit-transform: scale3d(1.05,1.05,1.05);
          transform: scale3d(1.05,1.05,1.05)
      }

      to {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }

  @-webkit-keyframes fadeInUpBig {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0);
          transform: translate3d(0,2000px,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes fadeInUpBig {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,2000px,0);
          transform: translate3d(0,2000px,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [fadeInUpBig] {
    -webkit-animation: fadeInUpBig 8s linear 1 4s;
    -moz-animation: fadeInUpBig 8s linear 1 4s;
    -ms-animation: fadeInUpBig 8s linear 1 4s;
    -o-animation: fadeInUpBig 8s linear 1 4s;
    animation: fadeInUpBig 8s linear 1 4s;
  }
    @-webkit-keyframes fadeInUp {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes fadeInUp {
      0% {
          opacity: 0;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0)
      }

      to {
          opacity: 1;
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [fadeInUp] {
    -webkit-animation: fadeInUp 8s linear 1 4s;
    -moz-animation: fadeInUp 8s linear 1 4s;
    -ms-animation: fadeInUp 8s linear 1 4s;
    -o-animation: fadeInUp 8s linear 1 4s;
    animation: fadeInUp 8s linear 1 4s;
  }
  @keyframes pulse {
      0% {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }

      50% {
          -webkit-transform: scale3d(1.05,1.05,1.05);
          transform: scale3d(2.05,2.05,2.05)
      }

      to {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }

  [pulse] {
    -webkit-animation: pulse 3s ease-in-out infinite;
    -moz-animation: pulse 3s ease-in-out infinite;
    -ms-animation: pulse 3s ease-in-out infinite;
    -o-animation: pulse 3s ease-in-out infinite;
    animation: pulse 3s ease-in-out infinite;
  }

  @-webkit-keyframes rubberBand {
      0% {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }

      30% {
          -webkit-transform: scale3d(1.25,.75,1);
          transform: scale3d(1.25,.75,1)
      }

      40% {
          -webkit-transform: scale3d(.75,1.25,1);
          transform: scale3d(.75,1.25,1)
      }

      50% {
          -webkit-transform: scale3d(1.15,.85,1);
          transform: scale3d(1.15,.85,1)
      }

      65% {
          -webkit-transform: scale3d(.95,1.05,1);
          transform: scale3d(.95,1.05,1)
      }

      75% {
          -webkit-transform: scale3d(1.05,.95,1);
          transform: scale3d(1.05,.95,1)
      }

      to {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }

  @keyframes rubberBand {
      0% {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }

      30% {
          -webkit-transform: scale3d(1.25,.75,1);
          transform: scale3d(1.25,.75,1)
      }

      40% {
          -webkit-transform: scale3d(.75,1.25,1);
          transform: scale3d(.75,1.25,1)
      }

      50% {
          -webkit-transform: scale3d(1.15,.85,1);
          transform: scale3d(1.15,.85,1)
      }

      65% {
          -webkit-transform: scale3d(.95,1.05,1);
          transform: scale3d(.95,1.05,1)
      }

      75% {
          -webkit-transform: scale3d(1.05,.95,1);
          transform: scale3d(1.05,.95,1)
      }

      to {
          -webkit-transform: scaleX(1);
          transform: scaleX(1)
      }
  }

  [rubberBand] {
    -webkit-animation: rubberBand 9s linear infinite;
    -moz-animation: rubberBand 9s linear infinite;
    -ms-animation: rubberBand 9s linear infinite;
    -o-animation: rubberBand 9s linear infinite;
    animation: rubberBand 9s linear infinite;
  }
  @-webkit-keyframes wobble /* Safari and Chrome */ {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
      15% {
          -webkit-transform: translate3d(-25%,0,0) rotate(-5deg);
          transform: translate3d(-25%,0,0) rotate(-5deg)
      }
      30% {
          -webkit-transform: translate3d(20%,0,0) rotate(3deg);
          transform: translate3d(20%,0,0) rotate(3deg)
      }
      45% {
          -webkit-transform: translate3d(-15%,0,0) rotate(-3deg);
          transform: translate3d(-15%,0,0) rotate(-3deg)
      }
      60% {
          -webkit-transform: translate3d(10%,0,0) rotate(2deg);
          transform: translate3d(10%,0,0) rotate(2deg)
      }
      75% {
          -webkit-transform: translate3d(-5%,0,0) rotate(-1deg);
          transform: translate3d(-5%,0,0) rotate(-1deg)
      }
      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  @keyframes wobble {
      0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
      15% {
          -webkit-transform: translate3d(-25%,0,0) rotate(-5deg);
          transform: translate3d(-25%,0,0) rotate(-5deg)
      }
      30% {
          -webkit-transform: translate3d(20%,0,0) rotate(3deg);
          transform: translate3d(20%,0,0) rotate(3deg)
      }
      45% {
          -webkit-transform: translate3d(-15%,0,0) rotate(-3deg);
          transform: translate3d(-15%,0,0) rotate(-3deg)
      }
      60% {
          -webkit-transform: translate3d(10%,0,0) rotate(2deg);
          transform: translate3d(10%,0,0) rotate(2deg)
      }
      75% {
          -webkit-transform: translate3d(-5%,0,0) rotate(-1deg);
          transform: translate3d(-5%,0,0) rotate(-1deg)
      }
      to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  }

  [wobble] {
    -webkit-animation: wobble 9s linear infinite;
    -moz-animation: wobble 9s linear infinite;
    -ms-animation: wobble 9s linear infinite;
    -o-animation: wobble 9s linear infinite;
    animation: wobble 9s linear infinite;
  }
  
  #container {
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
  }
  #img-cell {
    display: flex;
    grid-area: i;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    justify-self: center;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  ha-state-icon#icon {
    height: 100%;
    width: 100%;
    max-height: 100%;
    position: absolute;
  }
  img#icon {
    display: block;
    height: auto;
    width: 100%;
    position: absolute;
  }
  #name {
    grid-area: n;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }
  #state {
    grid-area: s;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }

  #label {
    grid-area: l;
    max-width: 100%;
    align-self: center;
    justify-self: center;
  }

  #container.vertical {
    grid-template-areas: 'i' 'n' 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content min-content;
  }
  /* Vertical No Icon */
  #container.vertical.no-icon {
    grid-template-areas: 'n' 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.vertical.no-icon #state {
    align-self: center;
  }
  #container.vertical.no-icon #name {
    align-self: end;
  }
  #container.vertical.no-icon #label {
    align-self: start;
  }

  /* Vertical No Icon No Name */
  #container.vertical.no-icon.no-name {
    grid-template-areas: 's' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-name #state {
    align-self: end;
  }
  #container.vertical.no-icon.no-name #label {
    align-self: start;
  }

  /* Vertical No Icon No State */
  #container.vertical.no-icon.no-state {
    grid-template-areas: 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-state #name {
    align-self: end;
  }
  #container.vertical.no-icon.no-state #label {
    align-self: start;
  }

  /* Vertical No Icon No Label */
  #container.vertical.no-icon.no-label {
    grid-template-areas: 'n' 's';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.vertical.no-icon.no-label #name {
    align-self: end;
  }
  #container.vertical.no-icon.no-label #state {
    align-self: start;
  }

  /* Vertical No Icon No Label No Name */
  #container.vertical.no-icon.no-label.no-name {
    grid-template-areas: 's';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-label.no-name #state {
    align-self: center;
  }
  /* Vertical No Icon No Label No State */
  #container.vertical.no-icon.no-label.no-state {
    grid-template-areas: 'n';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-label.no-state #name {
    align-self: center;
  }

  /* Vertical No Icon No Name No State */
  #container.vertical.no-icon.no-name.no-state {
    grid-template-areas: 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.vertical.no-icon.no-name.no-state #label {
    align-self: center;
  }

  #container.icon_name_state {
    grid-template-areas: 'i n' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content;
  }

  #container.icon_name {
    grid-template-areas: 'i n' 's s' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  #container.icon_state {
    grid-template-areas: 'i s' 'n n' 'l l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  #container.name_state {
    grid-template-areas: 'i' 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
  #container.name_state.no-icon {
    grid-template-areas: 'n' 'l';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.name_state.no-icon #name {
    align-self: end;
  }
  #container.name_state.no-icon #label {
    align-self: start;
  }

  #container.name_state.no-icon.no-label {
    grid-template-areas: 'n';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  #container.name_state.no-icon.no-label #name {
    align-self: center;
  }

  /* icon_name_state2nd default */
  #container.icon_name_state2nd {
    grid-template-areas: 'i n' 'i s' 'i l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.icon_name_state2nd #name {
    align-self: end;
  }
  #container.icon_name_state2nd #state {
    align-self: center;
  }
  #container.icon_name_state2nd #label {
    align-self: start;
  }

  /* icon_name_state2nd No Label */
  #container.icon_name_state2nd.no-label {
    grid-template-areas: 'i n' 'i s';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.icon_name_state2nd #name {
    align-self: end;
  }
  #container.icon_name_state2nd #state {
    align-self: start;
  }

  /* icon_state_name2nd Default */
  #container.icon_state_name2nd {
    grid-template-areas: 'i s' 'i n' 'i l';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  #container.icon_state_name2nd #state {
    align-self: end;
  }
  #container.icon_state_name2nd #name {
    align-self: center;
  }
  #container.icon_state_name2nd #label {
    align-self: start;
  }

  /* icon_state_name2nd No Label */
  #container.icon_state_name2nd.no-label {
    grid-template-areas: 'i s' 'i n';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  #container.icon_state_name2nd #state {
    align-self: end;
  }
  #container.icon_state_name2nd #name {
    align-self: start;
  }

  #container.icon_label {
    grid-template-areas: 'i l' 'n n' 's s';
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  [style*='--aspect-ratio'] > :first-child {
    width: 100%;
  }
  [style*='--aspect-ratio'] > img {
    height: auto;
  }
  @supports (--custom: property) {
    [style*='--aspect-ratio'] {
      position: relative;
    }
    [style*='--aspect-ratio']::before {
      content: '';
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*='--aspect-ratio'] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
`;

export default styles;
