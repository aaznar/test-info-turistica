import React from 'react';
import { Menu } from 'semantic-ui-react'

const Toolbar = ({activeItem}) => {
    return (
      <Menu>
        <Menu.Item name='patrimonio' active={activeItem === 'patrimonio'} href="/patrimonio">
            Patrimonio
        </Menu.Item>

        <Menu.Item name='naturaleza' active={activeItem === 'naturaleza'} href="/naturaleza">
            Naturaleza
        </Menu.Item>
      </Menu>
    )
}

export default Toolbar;
