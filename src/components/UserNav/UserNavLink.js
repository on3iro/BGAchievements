import styled from 'styled-components'

import NavLink from 'components/NavLink'

const UserNavLink = styled(NavLink)`
  margin-top: 5px;
  padding: 0;

  .accounts {
    background-image: url(${props => props.icon});
  }

  &:hover .accounts,
  &.active .accounts {
    background-position: -25px;
  }

  .logout {
    background-image: url(${props => props.icon});
  }

  &:hover .logout,
  &.active .logout {
    background-position: -20px;
  }
`

export default UserNavLink
