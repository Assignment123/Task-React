import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

class User extends Component {
  state = { activeItem: 'role' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large' vertical>
      <Menu.Item>
        <Input icon={<Icon name='search' inverted circular link /> }placeholder='Search...' />
        </Menu.Item>
        <Menu.Item name='role' active={activeItem === 'role'} onClick={this.handleItemClick}>
          Role
        </Menu.Item>
        <Menu.Item name='policy' active={activeItem === 'policy'} onClick={this.handleItemClick}>
          Policy
        </Menu.Item>
      </Menu>
    )
  }
}
export default User;