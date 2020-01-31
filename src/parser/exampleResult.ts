export const leafExample = JSON.stringify({
  kind: 'leaf',
  name: 'retry-interval',
  qname: 'mdsif:retry-interval',
  info: {
    string:
      'Time (secs) that must pass after the client has determined that\nthere is no DHCP server present before it tries again to\ncontact a DHCP server'
  },
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  },
  type: {
    namespace: 'com:gemds:mds-interfaces',
    name: 't13'
  },
  default: '60'
})

export const leafExample1 = JSON.stringify({
  kind: 'leaf',
  name: 'retry-interval',
  qname: 'mdsif:retry-interval',
  info: {
    string:
      'Time (secs) that must pass after the client has determined that\nthere is no DHCP server present before it tries again to\ncontact a DHCP server'
  },
  access: {
    create: true,
    read: true,
    update: false,
    delete: false,
    execute: false
  },
  type: {
    namespace: 'com:gemds:mds-interfaces',
    name: 't13'
  },
  default: '60'
})

export const emptyListExample = JSON.stringify({
  kind: 'list',
  name: 'interface',
  qname: 'mdsif:interface',
  info: {
    string: 'The interface to which the prefix is delegated.'
  },
  mandatory: true,
  min_elements: 1,
  max_elements: 'unbounded',
  key: ['name'],
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  leafrefGroups: [['name']],
  leafref_groups: [['name']],
  children: []
})

export const unboundedListExample = JSON.stringify({
  kind: 'list',
  name: 'interface',
  qname: 'mdsif:interface',
  info: {
    string: 'The interface to which the prefix is delegated.'
  },
  mandatory: true,
  min_elements: 1,
  max_elements: 'unbounded',
  key: ['name'],
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  leafrefGroups: [['name']],
  leafref_groups: [['name']],
  children: []
})

export const boundedListExample = JSON.stringify({
  kind: 'list',
  name: 'interface',
  qname: 'mdsif:interface',
  info: {
    string: 'The interface to which the prefix is delegated.'
  },
  mandatory: true,
  min_elements: 1,
  max_elements: 10,
  key: ['name'],
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  leafrefGroups: [['name']],
  leafref_groups: [['name']],
  children: []
})

export const listExample = JSON.stringify({
  kind: 'list',
  name: 'interface',
  qname: 'mdsif:interface',
  info: {
    string: 'The interface to which the prefix is delegated.'
  },
  mandatory: true,
  min_elements: 1,
  max_elements: 'unbounded',
  key: ['name'],
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  leafrefGroups: [['name']],
  leafref_groups: [['name']],
  children: [
    {
      kind: 'leaf',
      name: 'sub-prefix',
      qname: 'mdsif:sub-prefix',
      info: {
        string:
          'This sub-prefix is combined with the prefix received to\ncreate the delegated prefix for the interface.'
      },
      mandatory: true,
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: {
        name: 'ipv6-address',
        primitive: true
      }
    },
    {
      kind: 'leaf',
      name: 'sub-prefix-len',
      qname: 'mdsif:sub-prefix-len',
      info: { string: 'Length of the sub-prefix.' },
      mandatory: true,
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: {
        namespace: 'com:gemds:mds-interfaces',
        name: 't12'
      }
    }
  ]
})

export const listWithKeyExample = JSON.stringify({
  kind: 'list',
  name: 'interface',
  qname: 'mdsif:interface',
  info: {
    string: 'The interface to which the prefix is delegated.'
  },
  mandatory: true,
  min_elements: 1,
  max_elements: 'unbounded',
  key: ['name'],
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  leafrefGroups: [['name']],
  leafref_groups: [['name']],
  children: [
    {
      kind: 'key',
      name: 'name',
      qname: 'mdsif:name',
      mandatory: true,
      access: {
        create: false,
        read: true,
        update: false,
        delete: false,
        execute: false
      },
      is_leafref: true,
      leafref_target: '/if:interfaces/interface/name',
      type: {
        namespace: 'com:gemds:mds-interfaces',
        name: 't11'
      },
      deps: ['/if:interfaces/interface']
    },
    {
      kind: 'leaf',
      name: 'sub-prefix',
      qname: 'mdsif:sub-prefix',
      info: {
        string:
          'This sub-prefix is combined with the prefix received to\ncreate the delegated prefix for the interface.'
      },
      mandatory: true,
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: {
        name: 'ipv6-address',
        primitive: true
      }
    },
    {
      kind: 'leaf',
      name: 'sub-prefix-len',
      qname: 'mdsif:sub-prefix-len',
      info: { string: 'Length of the sub-prefix.' },
      mandatory: true,
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: {
        namespace: 'com:gemds:mds-interfaces',
        name: 't12'
      }
    }
  ]
})

export const emptyContainerExample = JSON.stringify({
  kind: 'container',
  name: 'prefix-delegation',
  qname: 'mdsif:prefix-delegation',
  presence: true,
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  }
})

export const containerSimpleExample = JSON.stringify({
  kind: 'container',
  name: 'prefix-delegation',
  qname: 'mdsif:prefix-delegation',
  presence: true,
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  children: [
    {
      kind: 'leaf',
      name: 'request-prefix-exclude',
      qname: 'mdsif:request-prefix-exclude',
      info: {
        string: 'Request prefix-exclude option.'
      },
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: { name: 'boolean', primitive: true },
      default: true
    }
  ]
})

export const containerMixedExample = JSON.stringify({
  kind: 'container',
  name: 'prefix-delegation',
  qname: 'mdsif:prefix-delegation',
  presence: true,
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  children: [
    {
      kind: 'leaf',
      name: 'request-prefix-exclude',
      qname: 'mdsif:request-prefix-exclude',
      info: {
        string: 'Request prefix-exclude option.'
      },
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: { name: 'boolean', primitive: true },
      default: true
    },
    {
      kind: 'list',
      name: 'interface',
      qname: 'mdsif:interface',
      info: {
        string: 'The interface to which the prefix is delegated.'
      },
      mandatory: true,
      min_elements: 1,
      max_elements: 'unbounded',
      key: ['name'],
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      leafrefGroups: [['name']],
      leafref_groups: [['name']],
      children: [
        {
          kind: 'leaf',
          name: 'sub-prefix',
          qname: 'mdsif:sub-prefix',
          info: {
            string:
              'This sub-prefix is combined with the prefix received to\ncreate the delegated prefix for the interface.'
          },
          mandatory: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'ipv6-address',
            primitive: true
          }
        }
      ]
    }
  ]
})

export const choiceWithOneChild = JSON.stringify({
  kind: 'choice',
  name: 'which-image',
  qname: 'mds_cell:which-image',
  is_action_input: true,
  cases: [
    {
      kind: 'case',
      name: 'id',
      qname: 'mds_cell:id',
      is_action_input: true,
      children: [
        {
          kind: 'leaf',
          name: 'id',
          qname: 'mds_cell:id',
          info: {
            string: 'Select the specified firmware location'
          },
          is_action_input: true,
          access: {
            create: false,
            read: false,
            update: true,
            delete: false,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces-state/interface/mds_cell:firmware/versions/id',
          type: { name: 'uint8', primitive: true },
          deps: [
            '/if:interfaces-state/interface',
            '/if:interfaces-state/interface/mds_cell:firmware/versions'
          ]
        }
      ]
    }
  ]
})
export const choiceWithNoChild = JSON.stringify({
  kind: 'choice',
  name: 'which-image',
  qname: 'mds_cell:which-image',
  is_action_input: true,
  cases: []
})

export const choiceWithCaseThatHasNoChildren = JSON.stringify({
  kind: 'choice',
  name: 'which-image',
  qname: 'mds_cell:which-image',
  is_action_input: true,
  cases: [
    {
      kind: 'case',
      name: 'id',
      qname: 'mds_cell:id',
      is_action_input: true,
      children: ''
    }
  ]
})

export const fullExample = JSON.stringify({
  kind: 'container',
  name: 'prefix-delegation',
  qname: 'mdsif:prefix-delegation',
  presence: true,
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  children: [
    {
      kind: 'leaf',
      name: 'request-prefix',
      qname: 'mdsif:request-prefix',
      info: { string: 'Request this specific prefix.' },
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: { name: 'ipv6-prefix', primitive: true }
    },
    {
      kind: 'leaf',
      name: 'request-prefix-exclude',
      qname: 'mdsif:request-prefix-exclude',
      info: {
        string: 'Request prefix-exclude option.'
      },
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      type: { name: 'boolean', primitive: true },
      default: true
    },
    {
      kind: 'list',
      name: 'interface',
      qname: 'mdsif:interface',
      info: {
        string: 'The interface to which the prefix is delegated.'
      },
      mandatory: true,
      min_elements: 1,
      max_elements: 'unbounded',
      key: ['name'],
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      leafrefGroups: [['name']],
      leafref_groups: [['name']],
      children: [
        {
          kind: 'key',
          name: 'name',
          qname: 'mdsif:name',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: false,
            delete: false,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/name',
          type: {
            namespace: 'com:gemds:mds-interfaces',
            name: 't11'
          },
          deps: ['/if:interfaces/interface']
        },
        {
          kind: 'leaf',
          name: 'sub-prefix',
          qname: 'mdsif:sub-prefix',
          info: {
            string:
              'This sub-prefix is combined with the prefix received to\ncreate the delegated prefix for the interface.'
          },
          mandatory: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'ipv6-address',
            primitive: true
          }
        },
        {
          kind: 'leaf',
          name: 'sub-prefix-len',
          qname: 'mdsif:sub-prefix-len',
          info: { string: 'Length of the sub-prefix.' },
          mandatory: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:mds-interfaces',
            name: 't12'
          }
        }
      ]
    }
  ]
})
