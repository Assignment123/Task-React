import React from 'react'
import { Menu } from 'semantic-ui-react'

    const items = [
        { key: 'role',  name: 'Roles' },
        { key: 'policy', name: 'Policy' },
        { key: 'news', name: 'News' },
      ]
      
      const General = () => <Menu items={items} />
    
export default General;
