import * as React from 'react';
import { Subscribe } from 'unstated';

import {
  Navbar as ReactNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import AuthContainer from '../../containers/AuthContainer';

const Navbar = (): JSX.Element => (
  <div>
    <ReactNavbar color="light" light expand="md">
      <NavbarBrand href="/">NGZ</NavbarBrand>
      <Subscribe to={[AuthContainer]}>
        {(authContainer: AuthContainer) => (
          <Nav className="ml-auto" navbar>
            <NavItem>
              {authContainer.state.user &&
                <NavLink>{authContainer.state.user.email}</NavLink>
              }
            </NavItem>
            {authContainer.state.isAuthenticated &&
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={(): Promise<void> => authContainer.logout()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            }
          </Nav>
        )}
      </Subscribe>
    </ReactNavbar>
  </div>
);

export default Navbar;