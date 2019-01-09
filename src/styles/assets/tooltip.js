export default `
  .rc-tooltip.tooltip {
    opacity: 1;
    
    .rc-tooltip-inner {
      background: #242729;
      border-color: #1C1F21;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 10rem;
      padding: 0.7rem 1rem;
      width: 20rem;
    }

    .rc-tooltip-arrow {
      border-top-color: #1C1F21;
      
      .rc-tooltip-arrow-inner {
        border-top-color: #242729;
      }
    }
  }
`
