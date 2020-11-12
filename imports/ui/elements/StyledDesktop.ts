import styled from "styled-components";

export const StyledDesktop = styled.div`
  ion-router-outlet {
    margin-top: 56px;
    margin-bottom: 56px;
  }

  .logo {
    max-height: 40px;
  }

  .navbar {
    --color: var(--ion-color-light);
    --background: #374168;
  }

  ion-toolbar {
    text-align: center;
    --color: var(--ion-color-primary);
  }

  ion-header {
    &.header-md:after {
      background: none;
    }
  }

  .link {
    --color: var(--ion-color-light);
  }

  .active-link {
    --color: var(--ion-color-primary);
  }

  .footer {
    background: #374168;
    width: 100%;
    color: #fff;
    font-weight: bold;
    height: 56px;
    line-height: 56px;
    text-align: center;
    position: fixed;
    bottom: 0px;
  }
`;
