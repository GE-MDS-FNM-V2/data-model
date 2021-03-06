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

export const actionNoChildren = JSON.stringify({
  kind: 'action',
  name: 'cancel-reprogram',
  qname: 'mds_cell:cancel-reprogram',
  info: {
    string: 'Cancels a reprogramming task, if one is active'
  },
  mandatory: true,
  access: {
    create: false,
    read: false,
    update: false,
    delete: false,
    execute: true
  },
  children: []
})

export const actionWithChildren = JSON.stringify({
  kind: 'action',
  name: 'delete-image',
  qname: 'mds_cell:delete-image',
  info: { string: 'Deletes an image stored on the modem.' },
  mandatory: true,
  access: {
    create: false,
    read: false,
    update: false,
    delete: false,
    execute: true
  },
  children: [
    {
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
    }
  ]
})

export const leafListExample = JSON.stringify({
  kind: 'leaf-list',
  name: 'operation',
  qname: 'netmon:operation',
  info: {
    string: 'The network monitor operation to use for triggering cell modem restart.'
  },
  mandatory: true,
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  },
  is_leafref: true,
  leafref_target: '/serv:services/netmon:netmon/operation/name',
  type: {
    namespace: 'com:gemds:services:netmon',
    name: 't1'
  },
  deps: ['/serv:services/netmon:netmon/operation']
})

export const fullExample = JSON.stringify({
  contains_when_statement: true,
  kind: 'container',
  name: 'interfaces',
  qname: 'if:interfaces',
  info: { string: 'Interface configuration parameters.' },
  mandatory: true,
  access: {
    create: false,
    read: true,
    update: true,
    delete: false,
    execute: false
  },
  children: [
    {
      kind: 'list',
      name: 'interface',
      qname: 'if:interface',
      info: {
        string:
          'The list of configured interfaces on the device.\n\nThe operational state of an interface is available in the\n/interfaces-state/interface list.  If the configuration of a\nsystem-controlled interface cannot be used by the system\n(e.g., the interface hardware present does not match the\ninterface type), then the configuration is not applied to\nthe system-controlled interface shown in the\n/interfaces-state/interface list.  If the configuration\nof a user-controlled interface cannot be used by the system,\nthe configured interface is not instantiated in the\n/interfaces-state/interface list.'
      },
      mandatory: true,
      min_elements: 0,
      max_elements: 'unbounded',
      key: ['name'],
      access: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      },
      leafrefGroups: [['mds_vlan:vlans'], ['mds_vlan:vlan']],
      leafref_groups: [['mds_vlan:vlans'], ['mds_vlan:vlan']],
      children: [
        {
          kind: 'key',
          name: 'name',
          qname: 'if:name',
          info: {
            string:
              "The name of the interface.\n\nA device MAY restrict the allowed values for this leaf,\npossibly depending on the type of the interface.\n\nFor system-controlled interfaces, this leaf is the\ndevice-specific name of the interface.  The 'config false'\nlist /interfaces-state/interface contains the currently\nexisting interfaces on the device.\n\nIf a client tries to create configuration for a\nsystem-controlled interface that is not present in the\n/interfaces-state/interface list, the server MAY reject\nthe request if the implementation does not support\npre-provisioning of interfaces or if the name refers to\nan interface that can never exist in the system.  A\nNETCONF server MUST reply with an rpc-error with the\nerror-tag 'invalid-value' in this case.\n\nIf the device supports pre-provisioning of interface\nconfiguration, the 'pre-provisioning' feature is\nadvertised.\n\nIf the device allows arbitrarily named user-controlled\ninterfaces, the 'arbitrary-names' feature is advertised.\n\nWhen a configured user-controlled interface is created by\nthe system, it is instantiated with the same name in the\n/interface-state/interface list."
          },
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: false,
            delete: false,
            execute: false
          },
          type: { name: 'string', primitive: true }
        },
        {
          kind: 'leaf',
          name: 'description',
          qname: 'if:description',
          info: {
            string:
              "A textual description of the interface.\n\nA server implementation MAY map this leaf to the ifAlias\nMIB object.  Such an implementation needs to use some\nmechanism to handle the differences in size and characters\nallowed between this leaf and ifAlias.  The definition of\nsuch a mechanism is outside the scope of this document.\n\nSince ifAlias is defined to be stored in non-volatile\nstorage, the MIB implementation MUST map ifAlias to the\nvalue of 'description' in the persistently stored\ndatastore.\n\nSpecifically, if the device supports ':startup', when\nifAlias is read the device MUST return the value of\n'description' in the 'startup' datastore, and when it is\nwritten, it MUST be written to the 'running' and 'startup'\ndatastores.  Note that it is up to the implementation to\ndecide whether to modify this single leaf in 'startup' or\nperform an implicit copy-config from 'running' to\n'startup'.\n\nIf the device does not support ':startup', ifAlias MUST\nbe mapped to the 'description' leaf in the 'running'\ndatastore."
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: { name: 'string', primitive: true }
        },
        {
          kind: 'leaf',
          name: 'type',
          qname: 'if:type',
          info: {
            string:
              "The type of the interface.\n\nWhen an interface entry is created, a server MAY\ninitialize the type leaf with a valid value, e.g., if it\nis possible to derive the type from the name of the\ninterface.\n\nIf a client tries to set the type of an interface to a\nvalue that can never be used by the system, e.g., if the\ntype is not supported or if the type does not match the\nname of the interface, the server MUST reject the request.\nA NETCONF server MUST reply with an rpc-error with the\nerror-tag 'invalid-value' in this case."
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
            namespace: 'urn:ietf:params:xml:ns:yang:ietf-interfaces',
            name: 't0'
          }
        },
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'if:enabled',
          info: {
            string:
              "This leaf contains the configured, desired state of the\ninterface.\n\nSystems that implement the IF-MIB use the value of this\nleaf in the 'running' datastore to set\nIF-MIB.ifAdminStatus to 'up' or 'down' after an ifEntry\nhas been initialized, as described in RFC 2863.\n\nChanges in this leaf in the 'running' datastore are\nreflected in ifAdminStatus, but if ifAdminStatus is\nchanged over SNMP, this leaf is not affected."
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: { name: 'boolean', primitive: true },
          default: true,
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'bond-config',
          qname: 'mds_bond:bond-config',
          namespace: 'com:gemds:mds-if-bond',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          leafrefGroups: [['primary-member']],
          leafref_groups: [['primary-member']],
          children: [
            {
              kind: 'leaf',
              name: 'mode',
              qname: 'mds_bond:mode',
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-bond',
                name: 'bond-type'
              }
            },
            {
              kind: 'list',
              name: 'member',
              qname: 'mds_bond:member',
              mandatory: true,
              min_elements: 1,
              max_elements: 'unbounded',
              key: ['interface'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['interface']],
              leafref_groups: [['interface']],
              children: [
                {
                  kind: 'key',
                  name: 'interface',
                  qname: 'mds_bond:interface',
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
                    namespace: 'com:gemds:mds-if-bond',
                    name: 't0'
                  },
                  deps: [
                    '/if:interfaces/interface',
                    '/if:interfaces/interface/mds_bond:bond-config',
                    '/if:interfaces/interface/mds_bond:bond-config/member',
                    '/if:interfaces/interface/mds_bond:bond-config/member/interface',
                    '/if:interfaces/interface/mds_bridge:bridge-settings/members/port',
                    '/if:interfaces/interface/mds_bridge:bridge-settings/members/port/interface',
                    '/if:interfaces/interface/mds_bridge:bridge-settings/members/wifi-station/interface',
                    '/if:interfaces/interface/mds_gre:gre-config',
                    '/if:interfaces/interface/mds_gre:gre-config/mode',
                    '/if:interfaces/interface/mds_vlan:vlan-mode',
                    '/if:interfaces/interface/mds_wifi:wifi-config',
                    '/if:interfaces/interface/mds_wifi:wifi-config/mode',
                    '/if:interfaces/interface/name',
                    '/if:interfaces/interface/type'
                  ]
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'member-monitor-mode',
              qname: 'mds_bond:member-monitor-mode',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-bond',
                name: 'member-monitor-type'
              },
              default: 'link-state'
            },
            {
              kind: 'leaf',
              name: 'member-link-up-delay',
              qname: 'mds_bond:member-link-up-delay',
              info: {
                string:
                  'Time interval (secs) to wait before enabling the\nmember after a link recovery has been detected.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/if:interfaces/interface/mds_bond:bond-config/member-monitor-mode'],
              type: { name: 'uint16', primitive: true },
              default: '5',
              deps: ['/if:interfaces/interface/mds_bond:bond-config/member-monitor-mode']
            },
            {
              kind: 'leaf',
              name: 'member-link-down-delay',
              qname: 'mds_bond:member-link-down-delay',
              info: {
                string:
                  'Time interval (secs) to wait before disabling the\nmember after a link failure has been detected.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/if:interfaces/interface/mds_bond:bond-config/member-monitor-mode'],
              type: { name: 'uint16', primitive: true },
              default: '5',
              deps: ['/if:interfaces/interface/mds_bond:bond-config/member-monitor-mode']
            },
            {
              kind: 'leaf',
              name: 'primary-member',
              qname: 'mds_bond:primary-member',
              info: {
                string: 'An interface that will be made the active member when it is up.'
              },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/name',
              when_targets: ['/if:interfaces/interface/mds_bond:bond-config/mode'],
              type: {
                namespace: 'com:gemds:mds-if-bond',
                name: 't0'
              },
              deps: [
                '/if:interfaces/interface/mds_bond:bond-config/member',
                '/if:interfaces/interface/mds_bond:bond-config/member/interface',
                '/if:interfaces/interface/mds_bond:bond-config/mode',
                '/if:interfaces/interface/mds_bond:bond-config/primary-member'
              ]
            }
          ],
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'bridge-settings',
          qname: 'mds_bridge:bridge-settings',
          namespace: 'com:gemds:mds-if-bridge',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'container',
              name: 'members',
              qname: 'mds_bridge:members',
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'list',
                  name: 'port',
                  qname: 'mds_bridge:port',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['interface'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['interface']],
                  leafref_groups: [['interface']],
                  children: [
                    {
                      kind: 'key',
                      name: 'interface',
                      qname: 'mds_bridge:interface',
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
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't0'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_bridge:bridge-settings/members/port',
                        '/if:interfaces/interface/mds_bridge:bridge-settings/members/port/interface',
                        '/if:interfaces/interface/mds_gre:gre-config',
                        '/if:interfaces/interface/mds_gre:gre-config/mode',
                        '/if:interfaces/interface/mds_vlan:vlan-mode',
                        '/if:interfaces/interface/name',
                        '/if:interfaces/interface/type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'port-priority',
                      qname: 'mds_bridge:port-priority',
                      info: {
                        string:
                          'The value of the priority field that is contained in\nthe first (in network byte order) octet of the (2 octet\nlong) Port ID.  On bridges supporting IEEE 802.1t or IEEE 802.1w,\npermissible values are 0-240, in steps of 16.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't1'
                      },
                      default: '32'
                    },
                    {
                      kind: 'leaf',
                      name: 'port-path-cost',
                      qname: 'mds_bridge:port-path-cost',
                      info: {
                        string:
                          'The contribution of this port to the path cost of\npaths towards the spanning tree root which include\nthis port.  802.1D-1998 recommends that the default\nvalue of this parameter be in inverse proportion to\nthe speed of the attached LAN.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't2'
                      },
                      default: '100'
                    }
                  ]
                },
                {
                  kind: 'list',
                  name: 'wifi-ap',
                  qname: 'mds_bridge:wifi-ap',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['ssid'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['ssid']],
                  leafref_groups: [['ssid']],
                  children: [
                    {
                      kind: 'key',
                      name: 'ssid',
                      qname: 'mds_bridge:ssid',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target:
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/ssid',
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't21'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_bridge:bridge-settings/members/wifi-ap',
                        '/if:interfaces/interface/mds_bridge:bridge-settings/members/wifi-ap/ssid',
                        '/if:interfaces/interface/mds_wifi:wifi-config',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/ssid',
                        '/if:interfaces/interface/name'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'port-priority',
                      qname: 'mds_bridge:port-priority',
                      info: {
                        string:
                          'The value of the priority field that is contained in\nthe first (in network byte order) octet of the (2 octet\nlong) Port ID.  On bridges supporting IEEE 802.1t or IEEE 802.1w,\npermissible values are 0-240, in steps of 16.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't1'
                      },
                      default: '32'
                    },
                    {
                      kind: 'leaf',
                      name: 'port-path-cost',
                      qname: 'mds_bridge:port-path-cost',
                      info: {
                        string:
                          'The contribution of this port to the path cost of\npaths towards the spanning tree root which include\nthis port.  802.1D-1998 recommends that the default\nvalue of this parameter be in inverse proportion to\nthe speed of the attached LAN.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't2'
                      },
                      default: '100'
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'wifi-station',
                  qname: 'mds_bridge:wifi-station',
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  leafrefGroups: [['interface']],
                  leafref_groups: [['interface']],
                  children: [
                    {
                      kind: 'leaf',
                      name: 'interface',
                      qname: 'mds_bridge:interface',
                      info: {
                        string: 'The name of the wifi interface to add to the bridge.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/if:interfaces/interface/name',
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't3'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_bridge:bridge-settings/members/wifi-station/interface',
                        '/if:interfaces/interface/mds_wifi:wifi-config',
                        '/if:interfaces/interface/mds_wifi:wifi-config/mode',
                        '/if:interfaces/interface/name'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'port-priority',
                      qname: 'mds_bridge:port-priority',
                      info: {
                        string:
                          'The value of the priority field that is contained in\nthe first (in network byte order) octet of the (2 octet\nlong) Port ID.  On bridges supporting IEEE 802.1t or IEEE 802.1w,\npermissible values are 0-240, in steps of 16.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't1'
                      },
                      default: '32'
                    },
                    {
                      kind: 'leaf',
                      name: 'port-path-cost',
                      qname: 'mds_bridge:port-path-cost',
                      info: {
                        string:
                          'The contribution of this port to the path cost of\npaths towards the spanning tree root which include\nthis port.  802.1D-1998 recommends that the default\nvalue of this parameter be in inverse proportion to\nthe speed of the attached LAN.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-bridge',
                        name: 't2'
                      },
                      default: '100'
                    }
                  ]
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'stp-mode',
              qname: 'mds_bridge:stp-mode',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't4'
              },
              default: 'stp'
            },
            {
              kind: 'leaf',
              name: 'ageing-time',
              qname: 'mds_bridge:ageing-time',
              info: {
                string:
                  'The timeout period in seconds for aging out\ndynamically-learned forwarding information.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't5'
              },
              default: '300'
            },
            {
              kind: 'leaf',
              name: 'max-age',
              qname: 'mds_bridge:max-age',
              info: {
                string:
                  'The value that all bridges use for MaxAge when this\nbridge is acting as the root.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't6'
              },
              default: '20'
            },
            {
              kind: 'leaf',
              name: 'hello-time',
              qname: 'mds_bridge:hello-time',
              info: {
                string:
                  'The value that all bridges use for HelloTime when this\nbridge is acting as the root'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't7'
              },
              default: '2'
            },
            {
              kind: 'leaf',
              name: 'forward-delay',
              qname: 'mds_bridge:forward-delay',
              info: {
                string:
                  'The value that all bridges use for ForwardDelay when\nthis bridge is acting as the root'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't8'
              },
              default: '15'
            },
            {
              kind: 'leaf',
              name: 'bridge-priority',
              qname: 'mds_bridge:bridge-priority',
              info: {
                string:
                  'The value of the write-able portion of the Bridge ID\n(i.e., the first two octets of the (8 octet long) Bridge\nID).  On bridges supporting IEEE 802.1t or IEEE 802.1w,\npermissible values are 0-61440, in steps of 4096.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-bridge',
                name: 't9'
              },
              default: '32768'
            }
          ],
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'firmware',
          qname: 'mds_cell:firmware',
          namespace: 'com:gemds:mds-if-cell',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/enabled', '/if:interfaces/interface/type'],
          children: [
            {
              kind: 'action',
              name: 'reprogram',
              qname: 'mds_cell:reprogram',
              info: {
                string: 'Download a firmware package and reprogram the Cell modem with it.'
              },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'filename',
                  qname: 'mds_cell:filename',
                  info: { string: 'Path and filename of remote file' },
                  is_action_input: true,
                  mandatory: true,
                  access: {
                    create: false,
                    read: false,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  type: { name: 'string', primitive: true }
                },
                {
                  kind: 'choice',
                  name: 'location',
                  qname: 'mds_cell:location',
                  is_action_input: true,
                  cases: [
                    {
                      kind: 'case',
                      name: 'manual-file-server',
                      qname: 'mds_cell:manual-file-server',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'manual-file-server',
                          qname: 'mds_cell:manual-file-server',
                          is_action_input: true,
                          mandatory: true,
                          access: {
                            create: false,
                            read: false,
                            update: true,
                            delete: false,
                            execute: false
                          },
                          children: [
                            {
                              kind: 'choice',
                              name: 'protocol',
                              qname: 'mds_cell:protocol',
                              is_action_input: true,
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'tftp',
                                  qname: 'mds_cell:tftp',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'tftp',
                                      qname: 'mds_cell:tftp',
                                      is_action_input: true,
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'mds_cell:address',
                                          info: {
                                            string: 'Remote server hostname or IP address'
                                          },
                                          is_action_input: true,
                                          mandatory: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'block-size',
                                          qname: 'mds_cell:block-size',
                                          info: {
                                            string: 'TFTP blocksize as defined in RFC2348'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            namespace: 'com:gemds:mds-if-cell',
                                            name: 't1'
                                          },
                                          default: '1024'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'port',
                                          qname: 'mds_cell:port',
                                          info: {
                                            string: 'UDP port number'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'uint16',
                                            primitive: true
                                          },
                                          default: '69'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'timeout',
                                          qname: 'mds_cell:timeout',
                                          info: {
                                            string: 'TFTP Timeout as defined in RFC2349, in seconds'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          units: 'seconds',
                                          type: {
                                            namespace: 'com:gemds:mds-if-cell',
                                            name: 't2'
                                          },
                                          default: '30'
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'sftp',
                                  qname: 'mds_cell:sftp',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'sftp',
                                      qname: 'mds_cell:sftp',
                                      is_action_input: true,
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'mds_cell:address',
                                          info: {
                                            string: 'Remote server hostname or IP address'
                                          },
                                          is_action_input: true,
                                          mandatory: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'username',
                                          qname: 'mds_cell:username',
                                          info: {
                                            string: 'SFTP username'
                                          },
                                          is_action_input: true,
                                          mandatory: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'password',
                                          qname: 'mds_cell:password',
                                          info: {
                                            string: 'SFTP password'
                                          },
                                          is_action_input: true,
                                          mandatory: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'AESCFB128IVEncryptedString',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'port',
                                          qname: 'mds_cell:port',
                                          info: {
                                            string: 'TCP port number'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'uint16',
                                            primitive: true
                                          },
                                          default: '22'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'timeout',
                                          qname: 'mds_cell:timeout',
                                          info: {
                                            string: 'Timeout, in seconds'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          units: 'seconds',
                                          type: {
                                            name: 'uint32',
                                            primitive: true
                                          },
                                          default: '30'
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'ftp',
                                  qname: 'mds_cell:ftp',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'ftp',
                                      qname: 'mds_cell:ftp',
                                      is_action_input: true,
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'mds_cell:address',
                                          info: {
                                            string: 'Remote server hostname or IP address'
                                          },
                                          is_action_input: true,
                                          mandatory: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'username',
                                          qname: 'mds_cell:username',
                                          info: {
                                            string: 'FTP username'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          },
                                          default: 'anonymous'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'password',
                                          qname: 'mds_cell:password',
                                          info: {
                                            string: 'FTP password'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'AESCFB128IVEncryptedString',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'control-port',
                                          qname: 'mds_cell:control-port',
                                          info: {
                                            string: 'TCP control port number'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'uint16',
                                            primitive: true
                                          },
                                          default: '21'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'data-port',
                                          qname: 'mds_cell:data-port',
                                          info: {
                                            string: 'TCP data port number'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'uint16',
                                            primitive: true
                                          },
                                          default: '20'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'timeout',
                                          qname: 'mds_cell:timeout',
                                          info: {
                                            string: 'Timeout, in seconds'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          units: 'seconds',
                                          type: {
                                            name: 'uint32',
                                            primitive: true
                                          },
                                          default: '30'
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'http',
                                  qname: 'mds_cell:http',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'http',
                                      qname: 'mds_cell:http',
                                      is_action_input: true,
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'mds_cell:address',
                                          info: {
                                            string: 'Remote server hostname or IP address'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'string',
                                            primitive: true
                                          }
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'port',
                                          qname: 'mds_cell:port',
                                          info: {
                                            string: 'TCP data port number'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          type: {
                                            name: 'uint16',
                                            primitive: true
                                          },
                                          default: '80'
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'timeout',
                                          qname: 'mds_cell:timeout',
                                          info: {
                                            string: 'Timeout, in seconds'
                                          },
                                          is_action_input: true,
                                          access: {
                                            create: false,
                                            read: false,
                                            update: true,
                                            delete: false,
                                            execute: false
                                          },
                                          units: 'seconds',
                                          type: {
                                            name: 'uint32',
                                            primitive: true
                                          },
                                          default: '30'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ],
                              mandatory: true
                            }
                          ]
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'preconfigured-file-server',
                      qname: 'mds_cell:preconfigured-file-server',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'preconfigured-file-server',
                          qname: 'mds_cell:preconfigured-file-server',
                          is_action_input: true,
                          mandatory: true,
                          access: {
                            create: false,
                            read: false,
                            update: true,
                            delete: false,
                            execute: false
                          },
                          children: [
                            {
                              kind: 'leaf',
                              name: 'configuration_name',
                              qname: 'mds_cell:configuration_name',
                              is_action_input: true,
                              mandatory: true,
                              access: {
                                create: false,
                                read: false,
                                update: true,
                                delete: false,
                                execute: false
                              },
                              is_leafref: true,
                              leafref_target: '/mds-common:file-servers/configuration-name',
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              deps: ['/mds-common:file-servers']
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  mandatory: true
                }
              ]
            },
            {
              kind: 'action',
              name: 'cancel-reprogram',
              qname: 'mds_cell:cancel-reprogram',
              info: {
                string: 'Cancels a reprogramming task, if one is active'
              },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              children: []
            },
            {
              kind: 'action',
              name: 'delete-image',
              qname: 'mds_cell:delete-image',
              info: { string: 'Deletes an image stored on the modem.' },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              children: [
                {
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
                          leafref_target:
                            '/if:interfaces-state/interface/mds_cell:firmware/versions/id',
                          type: { name: 'uint8', primitive: true },
                          deps: [
                            '/if:interfaces-state/interface',
                            '/if:interfaces-state/interface/mds_cell:firmware/versions'
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'action',
              name: 'restart',
              qname: 'mds_cell:restart',
              info: {
                string:
                  'Request that the modem be restarted immediately.\nThe modem will boot using the specified firmware image.'
              },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              children: [
                {
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
                          leafref_target:
                            '/if:interfaces-state/interface/mds_cell:firmware/versions/id',
                          type: { name: 'uint8', primitive: true },
                          deps: [
                            '/if:interfaces-state/interface',
                            '/if:interfaces-state/interface/mds_cell:firmware/versions'
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          deps: ['/if:interfaces/interface/enabled', '/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'cell-config',
          qname: 'mds_cell:cell-config',
          namespace: 'com:gemds:mds-if-cell',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'list',
              name: 'connection-profile',
              qname: 'mds_cell:connection-profile',
              info: {
                string:
                  'A configuration profile containing parameters\nfor connecting to the cellular network'
              },
              mandatory: true,
              min_elements: 1,
              max_elements: 'unbounded',
              ordered_by: true,
              key: ['name'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'name',
                  qname: 'mds_cell:name',
                  info: { string: 'Connection profile name' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: { name: 'string', primitive: true }
                },
                {
                  kind: 'container',
                  name: 'network-config',
                  qname: 'mds_cell:network-config',
                  info: { string: 'Network configuration' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  children: [
                    {
                      kind: 'leaf',
                      name: 'technology-selection',
                      qname: 'mds_cell:technology-selection',
                      info: { string: 'Network technology selection' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't19'
                      },
                      default: 'automatic'
                    },
                    {
                      kind: 'leaf',
                      name: 'service-domain',
                      qname: 'mds_cell:service-domain',
                      info: { string: 'Network service domain' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't20'
                      },
                      default: 'cs-and-ps'
                    },
                    {
                      kind: 'leaf-list',
                      name: 'disable-utran-bands',
                      qname: 'mds_cell:disable-utran-bands',
                      info: {
                        string: 'UTRAN (3G UMTS) bands to be disabled'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't22'
                      }
                    },
                    {
                      kind: 'leaf-list',
                      name: 'disable-e-utran-bands',
                      qname: 'mds_cell:disable-e-utran-bands',
                      info: {
                        string: 'E-UTRAN (4G LTE) bands to be disabled'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't24'
                      }
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'bearer-config',
                  qname: 'mds_cell:bearer-config',
                  info: {
                    string: 'Data bearer (PDP Context or EPS bearer) configuration'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  children: [
                    {
                      kind: 'leaf',
                      name: 'apn',
                      qname: 'mds_cell:apn',
                      info: { string: 'Access Point Name' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't25'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'clear-apn',
                      qname: 'mds_cell:clear-apn',
                      info: {
                        string:
                          'If this is set to true and if APN is not configured then APN will be cleared out from the modem'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: { name: 'boolean', primitive: true },
                      default: false
                    },
                    {
                      kind: 'leaf',
                      name: 'protocol',
                      qname: 'mds_cell:protocol',
                      info: { string: 'PDP context protocol' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't26'
                      },
                      default: 'ip'
                    },
                    {
                      kind: 'leaf',
                      name: 'auth-type',
                      qname: 'mds_cell:auth-type',
                      info: { string: 'Authentication type' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/sys:system/mdssys:fips-mode'],
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't27'
                      },
                      deps: ['/sys:system/mdssys:fips-mode']
                    },
                    {
                      kind: 'leaf',
                      name: 'username',
                      qname: 'mds_cell:username',
                      info: { string: 'username for authentication' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/bearer-config/auth-type'
                      ],
                      type: { name: 'string', primitive: true },
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/bearer-config/auth-type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'password',
                      qname: 'mds_cell:password',
                      info: { string: 'password for authentication' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/bearer-config/auth-type'
                      ],
                      type: {
                        name: 'AESCFB128IVEncryptedString',
                        primitive: true
                      },
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/bearer-config/auth-type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'mtu',
                      qname: 'mds_cell:mtu',
                      info: {
                        string:
                          'The size, in octets, of the largest IPv4 packet that the\ncellular interface will send and receive. This parameter\ntakes precendence over /interfaces/interface/mtu.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      units: 'octets',
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't28'
                      },
                      default: '1500'
                    },
                    {
                      kind: 'leaf',
                      name: 'request-dns',
                      qname: 'mds_cell:request-dns',
                      info: {
                        string: 'Request DNS search domains, domain names and servers'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/if:interfaces/interface/ip:ipv4/mdsif:dhcp'],
                      type: { name: 'boolean', primitive: true },
                      default: true,
                      deps: ['/if:interfaces/interface/ip:ipv4/mdsif:dhcp']
                    },
                    {
                      kind: 'leaf',
                      name: 'request-routers',
                      qname: 'mds_cell:request-routers',
                      info: { string: 'Request default router(s)' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/if:interfaces/interface/ip:ipv4/mdsif:dhcp'],
                      type: { name: 'boolean', primitive: true },
                      default: true,
                      deps: ['/if:interfaces/interface/ip:ipv4/mdsif:dhcp']
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'keep-alive',
                  qname: 'mds_cell:keep-alive',
                  info: {
                    string:
                      'Keep alive configuration for sending ICMP Echo messages to a\nremote host/server periodically to keep the connection alive'
                  },
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
                      name: 'address',
                      qname: 'mds_cell:address',
                      info: {
                        string: 'destination address or DNS name to ping'
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
                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                        name: 'host'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'interval',
                      qname: 'mds_cell:interval',
                      info: {
                        string: 'time interval (mins) between pings'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't29'
                      },
                      default: '60'
                    },
                    {
                      kind: 'leaf',
                      name: 'recovery-on-timeout',
                      qname: 'mds_cell:recovery-on-timeout',
                      info: {
                        string:
                          'If enabled, modem is reset if pings to the remote destination\ndo not receive a response after num-retries.'
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
                      kind: 'leaf',
                      name: 'max-num-retries',
                      qname: 'mds_cell:max-num-retries',
                      info: {
                        string:
                          'The number of times the ping request is sent to the remote\ndestination before initiating recovery due to no response'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/keep-alive/recovery-on-timeout'
                      ],
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't30'
                      },
                      default: '15',
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/keep-alive/recovery-on-timeout'
                      ]
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'service-recovery',
                  qname: 'mds_cell:service-recovery',
                  info: { string: 'Service recovery configuration' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  children: [
                    {
                      kind: 'leaf',
                      name: 'general-recovery-interval',
                      qname: 'mds_cell:general-recovery-interval',
                      info: {
                        string:
                          'The modem is reset if it stays in "unknown" service-state\nfor longer than this interval (in secs).'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't31'
                      },
                      default: '300'
                    },
                    {
                      kind: 'leaf',
                      name: 'lte-recovery',
                      qname: 'mds_cell:lte-recovery',
                      info: {
                        string:
                          'If enabled, modem is reset if it stays in non-LTE service-state\nfor longer than lte-recovery-interval (in seconds). This should\nbe disabled if the device is going to be deployed in areas that\neither lack or have poor LTE coverage'
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
                      kind: 'leaf',
                      name: 'lte-recovery-interval',
                      qname: 'mds_cell:lte-recovery-interval',
                      info: {
                        string: 'lte recovery interval (in secs)'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/service-recovery/lte-recovery'
                      ],
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't32'
                      },
                      default: '900',
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/service-recovery/lte-recovery'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'netmon',
                      qname: 'netmon:netmon',
                      namespace: 'com:gemds:services:netmon',
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      leafrefGroups: [['operation']],
                      leafref_groups: [['operation']],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'initial-delay',
                          qname: 'netmon:initial-delay',
                          info: {
                            string: 'Delay before netmon status is checked after cell starts.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          units: 'seconds',
                          type: { name: 'uint32', primitive: true },
                          default: '300'
                        },
                        {
                          kind: 'leaf-list',
                          name: 'operation',
                          qname: 'netmon:operation',
                          info: {
                            string:
                              'The network monitor operation to use for triggering cell modem restart.'
                          },
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/serv:services/netmon:netmon/operation/name',
                          type: {
                            namespace: 'com:gemds:services:netmon',
                            name: 't1'
                          },
                          deps: ['/serv:services/netmon:netmon/operation']
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'sim-slot',
                  qname: 'mds_cell:sim-slot',
                  info: {
                    string: 'SIM card slot to use for this connection profile'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  when_targets: ['/mds-common:product-features/mds_cell:cell-dual-sim'],
                  type: {
                    namespace: 'com:gemds:mds-if-cell-common',
                    name: 'sim-slot-type'
                  },
                  default: 'SIM-A',
                  deps: ['/mds-common:product-features/mds_cell:cell-dual-sim']
                },
                {
                  kind: 'list',
                  name: 'extra-pdn',
                  qname: 'mds_cell:extra-pdn',
                  info: {
                    string: 'Data bearer (PDP Context or EPS bearer) configuration'
                  },
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['apn'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['interface']],
                  leafref_groups: [['interface']],
                  children: [
                    {
                      kind: 'key',
                      name: 'apn',
                      qname: 'mds_cell:apn',
                      info: { string: 'Access Point Name' },
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't25'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'interface',
                      qname: 'mds_cell:interface',
                      mandatory: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/if:interfaces/interface/name',
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't33'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/extra-pdn/interface',
                        '/if:interfaces/interface/name',
                        '/if:interfaces/interface/type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'clear-apn',
                      qname: 'mds_cell:clear-apn',
                      info: {
                        string:
                          'If this is set to true and if APN is not configured then APN will be cleared out from the modem'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: { name: 'boolean', primitive: true },
                      default: false
                    },
                    {
                      kind: 'leaf',
                      name: 'protocol',
                      qname: 'mds_cell:protocol',
                      info: { string: 'PDP context protocol' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't26'
                      },
                      default: 'ip'
                    },
                    {
                      kind: 'leaf',
                      name: 'auth-type',
                      qname: 'mds_cell:auth-type',
                      info: { string: 'Authentication type' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/sys:system/mdssys:fips-mode'],
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't27'
                      },
                      deps: ['/sys:system/mdssys:fips-mode']
                    },
                    {
                      kind: 'leaf',
                      name: 'username',
                      qname: 'mds_cell:username',
                      info: { string: 'username for authentication' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/extra-pdn/auth-type'
                      ],
                      type: { name: 'string', primitive: true },
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/extra-pdn/auth-type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'password',
                      qname: 'mds_cell:password',
                      info: { string: 'password for authentication' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/extra-pdn/auth-type'
                      ],
                      type: {
                        name: 'AESCFB128IVEncryptedString',
                        primitive: true
                      },
                      deps: [
                        '/if:interfaces/interface/mds_cell:cell-config/connection-profile/extra-pdn/auth-type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'mtu',
                      qname: 'mds_cell:mtu',
                      info: {
                        string:
                          'The size, in octets, of the largest IPv4 packet that the\ncellular interface will send and receive. This parameter\ntakes precendence over /interfaces/interface/mtu.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      units: 'octets',
                      type: {
                        namespace: 'com:gemds:mds-if-cell',
                        name: 't28'
                      },
                      default: '1500'
                    }
                  ]
                }
              ],
              deps: ['/if:interfaces/interface/mds_cell:cell-config/connection-profile']
            },
            {
              kind: 'container',
              name: 'connection-profile-switching',
              qname: 'mds_cell:connection-profile-switching',
              info: {
                string: 'Parameters for controlling switching between connection profiles'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'switch-to-next-on-failure',
                  qname: 'mds_cell:switch-to-next-on-failure',
                  info: {
                    string:
                      'Switch connection profile to next one in the list\nwhen connection attempt using current profile fails.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-next-on-failure-timeout',
                  qname: 'mds_cell:switch-to-next-on-failure-timeout',
                  info: {
                    string:
                      'Connection profile will be switched to next one in the list\nafter expiry of this timeout if connection is not established\nusing current profile.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  when_targets: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-next-on-failure'
                  ],
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:mds-if-cell',
                    name: 't34'
                  },
                  default: '15',
                  deps: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-next-on-failure'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-next-on-roaming',
                  qname: 'mds_cell:switch-to-next-on-roaming',
                  info: {
                    string:
                      'Switch connection profile to next one in the list\nwhen roaming is detected'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-next-on-roaming-timeout',
                  qname: 'mds_cell:switch-to-next-on-roaming-timeout',
                  info: {
                    string:
                      'Connection profile will be switched to next one in the list\nafter expiry of this timeout if modem is in roaming state using\nthe current profile.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  when_targets: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-next-on-roaming'
                  ],
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:mds-if-cell',
                    name: 't35'
                  },
                  default: '5',
                  deps: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-next-on-roaming'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-next-on-netmon',
                  qname: 'mds_cell:switch-to-next-on-netmon',
                  info: {
                    string:
                      'Switch connection profile to next one in the list\nwhen associated netmon operation is down.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-first-on-timeout',
                  qname: 'mds_cell:switch-to-first-on-timeout',
                  info: {
                    string:
                      'Switch connection profile to first one in the list\nafter predefined timeout.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'switch-to-first-timeout',
                  qname: 'mds_cell:switch-to-first-timeout',
                  info: {
                    string:
                      'Connection profile will be switched to first one in the list\nafter expiry of this timeout.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  when_targets: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-first-on-timeout'
                  ],
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:mds-if-cell',
                    name: 't36'
                  },
                  default: '60',
                  deps: [
                    '/if:interfaces/interface/mds_cell:cell-config/connection-profile-switching/switch-to-first-on-timeout'
                  ]
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'automatic-operator-switching',
              qname: 'mds_cell:automatic-operator-switching',
              info: {
                string:
                  'Automatically switch modem firmware to be compatible with the inserted SIM.'
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
          ],
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'gre-config',
          qname: 'mds_gre:gre-config',
          namespace: 'com:gemds:mds-if-gre',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          leafrefGroups: [['vpn:ipsec-connection']],
          leafref_groups: [['vpn:ipsec-connection']],
          children: [
            {
              kind: 'leaf',
              name: 'mode',
              qname: 'mds_gre:mode',
              info: { string: 'Type of GRE tunnel' },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-gre',
                name: 'gre-mode'
              }
            },
            {
              kind: 'leaf',
              name: 'src-address',
              qname: 'mds_gre:src-address',
              info: { string: 'tunnel source address' },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              }
            },
            {
              kind: 'leaf',
              name: 'dst-address',
              qname: 'mds_gre:dst-address',
              info: { string: 'tunnel destination address' },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              }
            },
            {
              kind: 'leaf',
              name: 'key',
              qname: 'mds_gre:key',
              info: {
                string:
                  'tunnel key (a numeric value). This must match the one configured on the peer'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'uint32', primitive: true }
            },
            {
              kind: 'leaf',
              name: 'ttl',
              qname: 'mds_gre:ttl',
              info: { string: 'tunnel packet time-to-live' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'uint8', primitive: true },
              default: '64'
            },
            {
              kind: 'leaf',
              name: 'ipsec-connection',
              qname: 'vpn:ipsec-connection',
              info: {
                string: 'IPsec connection used to protect this tunnel'
              },
              namespace: 'com:gemds:services:vpn',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/vpn:vpn/ipsec/connection/name',
              type: {
                namespace: 'com:gemds:security',
                name: 'word-string'
              },
              deps: ['/serv:services/vpn:vpn/ipsec', '/serv:services/vpn:vpn/ipsec/connection']
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_gre:gre-config',
            '/if:interfaces/interface/mds_gre:gre-config/dst-address',
            '/if:interfaces/interface/mds_gre:gre-config/key',
            '/if:interfaces/interface/mds_gre:gre-config/mode',
            '/if:interfaces/interface/mds_gre:gre-config/src-address',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'wifi-config',
          qname: 'mds_wifi:wifi-config',
          namespace: 'com:gemds:mds-if-ieee80211',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'leaf',
              name: 'mode',
              qname: 'mds_wifi:mode',
              info: {
                string: 'The mode to operate the Wi-Fi interface'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-ieee80211',
                name: 't4'
              }
            },
            {
              kind: 'leaf',
              name: 'distance',
              qname: 'mds_wifi:distance',
              info: {
                string:
                  'The maximum distance of the transmission path.\nWhen not explicitly set, default is 450m'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'meters',
              type: {
                namespace: 'com:gemds:mds-if-ieee80211',
                name: 't5'
              }
            },
            {
              kind: 'leaf',
              name: 'tx-power',
              qname: 'mds_wifi:tx-power',
              info: {
                string:
                  'The maximum transmission power.\nWhen not explicitly set, default is:\nW51 modem: 16dBm in 2.4Ghz (bgn).\nW52 modem: 26dBm in 2.4Ghz (bgn) and 23dBm in 5Ghz (a/an).'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'dBm',
              type: { name: 'uint32', primitive: true }
            },
            {
              kind: 'leaf',
              name: 'mimo-mode',
              qname: 'mds_wifi:mimo-mode',
              info: {
                string:
                  'Specifies the number of transmit/receive antennas.\nWhen not explicitly specified, default is:\nW51 modem: 1x1 mode\nW52 modem: 2x2 mode'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-ieee80211',
                name: 't6'
              }
            },
            {
              kind: 'container',
              name: 'station-config',
              qname: 'mds_wifi:station-config',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/if:interfaces/interface/mds_wifi:wifi-config/mode'],
              children: [
                {
                  kind: 'list',
                  name: 'ap',
                  qname: 'mds_wifi:ap',
                  info: {
                    string:
                      'List of configured access points to connect to.\nConnection will be attempted in the order that\naccess points are defined in the list.'
                  },
                  mandatory: true,
                  min_elements: 1,
                  max_elements: 10,
                  ordered_by: true,
                  key: ['ssid'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  children: [
                    {
                      kind: 'key',
                      name: 'ssid',
                      qname: 'mds_wifi:ssid',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't7'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'enabled',
                      qname: 'mds_wifi:enabled',
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
                      kind: 'leaf',
                      name: 'privacy-mode',
                      qname: 'mds_wifi:privacy-mode',
                      info: {
                        string: 'The privacy mode to use on this interface.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't8'
                      },
                      default: 'none',
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode',
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/psk-config/psk'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'psk-config',
                      qname: 'mds_wifi:psk-config',
                      info: { string: 'Pre-Shared Key settings' },
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: true,
                        delete: false,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'encryption',
                          qname: 'mds_wifi:encryption',
                          info: {
                            string: 'The encryption mode to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't9'
                          },
                          default: 'ccmp',
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/psk-config/encryption'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'key-mgmt',
                          qname: 'mds_wifi:key-mgmt',
                          info: {
                            string: 'The type of pre-shared key to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't10'
                          },
                          default: 'wpa-psk'
                        },
                        {
                          kind: 'leaf',
                          name: 'psk',
                          qname: 'mds_wifi:psk',
                          info: { string: 'The Pre-Shared Key' },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'AESCFB128IVEncryptedString',
                            primitive: true
                          },
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/psk-config/psk'
                          ]
                        }
                      ],
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'eap-config',
                      qname: 'mds_wifi:eap-config',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: true,
                        delete: false,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'encryption',
                          qname: 'mds_wifi:encryption',
                          info: {
                            string: 'The type of compression used by the EAP connection'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't11'
                          },
                          default: 'ccmp',
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/eap-config/encryption'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'key-mgmt',
                          qname: 'mds_wifi:key-mgmt',
                          info: {
                            string: 'The type of key used by the EAP connection'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't12'
                          },
                          default: 'wpa-eap'
                        },
                        {
                          kind: 'leaf',
                          name: 'eap-method',
                          qname: 'mds_wifi:eap-method',
                          info: {
                            string: 'The type of EAP connection to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't13'
                          },
                          default: 'eap-tls'
                        }
                      ],
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'ieee80211w',
                      qname: 'mds_wifi:ieee80211w',
                      info: {
                        string:
                          "802.11w management frame protection. The 'disabled' setting disables this feature.\nThe 'optional' setting enables this station activate 802.11w for APs that support this feature, while still allowing this sttaion to connect to APs that donot support this feature.\nThe 'required' setting requires this station to only connect to the APs that supports 802.11w"
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't14'
                      },
                      default: 'disabled'
                    },
                    {
                      kind: 'container',
                      name: 'pki',
                      qname: 'mds_wifi:pki',
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ],
                      leafrefGroups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                      leafref_groups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'cert-type',
                          qname: 'mds_wifi:cert-type',
                          info: { string: 'certificate type' },
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't15'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'cert-id',
                          qname: 'mds_wifi:cert-id',
                          info: { string: 'certificate identifier' },
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
                          type: { name: 'string', primitive: true },
                          deps: ['/cm:pki/client-certs/show-all']
                        },
                        {
                          kind: 'leaf',
                          name: 'key-id',
                          qname: 'mds_wifi:key-id',
                          info: { string: 'private key identifier' },
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/cm:pki/private-keys/show-all/key-identity',
                          type: { name: 'string', primitive: true },
                          deps: ['/cm:pki/private-keys/show-all']
                        },
                        {
                          kind: 'leaf',
                          name: 'ca-cert-id',
                          qname: 'mds_wifi:ca-cert-id',
                          info: {
                            string: 'ca-certificate chain identifier'
                          },
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/cm:pki/ca-certs/show-all/cert-identity',
                          type: { name: 'string', primitive: true },
                          deps: ['/cm:pki/ca-certs/show-all']
                        }
                      ],
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'roaming',
                      qname: 'mds_wifi:roaming',
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
                          name: 'bgscan-signal-threshold',
                          qname: 'mds_wifi:bgscan-signal-threshold',
                          info: {
                            string: 'Background scan signal threshold.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          units: 'dBm',
                          type: { name: 'int8', primitive: true },
                          default: '-75'
                        },
                        {
                          kind: 'leaf',
                          name: 'bgscan-short-interval',
                          qname: 'mds_wifi:bgscan-short-interval',
                          info: {
                            string:
                              'Background scan is performed every short interval if signal\nlevel is below the signal threshold.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          units: 'seconds',
                          type: { name: 'uint32', primitive: true },
                          default: '120'
                        },
                        {
                          kind: 'leaf',
                          name: 'bgscan-long-interval',
                          qname: 'mds_wifi:bgscan-long-interval',
                          info: {
                            string:
                              'Background scan is performed every long interval if signal\nlevel is above the signal threshold.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          units: 'seconds',
                          type: { name: 'uint32', primitive: true },
                          default: '900'
                        }
                      ]
                    }
                  ],
                  deps: [
                    '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/pki',
                    '/if:interfaces/interface/mds_wifi:wifi-config/station-config/ap/privacy-mode'
                  ]
                }
              ],
              deps: ['/if:interfaces/interface/mds_wifi:wifi-config/mode']
            },
            {
              kind: 'container',
              name: 'ap-config',
              qname: 'mds_wifi:ap-config',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/if:interfaces/interface/mds_wifi:wifi-config/mode'],
              children: [
                {
                  kind: 'leaf',
                  name: 'operation-mode',
                  qname: 'mds_wifi:operation-mode',
                  info: {
                    string: 'The IEEE 802.11 mode to operate in.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-ieee80211',
                    name: 't16'
                  },
                  default: '80211n'
                },
                {
                  kind: 'leaf',
                  name: 'channel',
                  qname: 'mds_wifi:channel',
                  info: {
                    string:
                      'The IEEE 802.11 channel number to operate on:\n2.4Ghz (HT20): 1-11\n2.4Ghz (HT40-): 5-11\n2.4Ghz (HT40+): 1-7\n5Ghz (HT20): 36,40,44,48,149,153,157,161,165\n5Ghz (HT40-): 40,48,153,161\n5Ghz (HT40+): 36,44,149,157\nSet to 0 for automatic channel selection.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'uint32', primitive: true },
                  default: '6'
                },
                {
                  kind: 'leaf',
                  name: 'channel-width',
                  qname: 'mds_wifi:channel-width',
                  info: {
                    string: 'Supported channel widths for 802.11n/an mode'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-ieee80211',
                    name: 't17'
                  },
                  default: 'HT20'
                },
                {
                  kind: 'leaf',
                  name: 'dtim-period',
                  qname: 'mds_wifi:dtim-period',
                  info: {
                    string:
                      'DTIM (delivery traffic information message) period.  The number\nof beacons between DTIMs.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-ieee80211',
                    name: 't18'
                  },
                  default: '2'
                },
                {
                  kind: 'leaf',
                  name: 'rts-threshold',
                  qname: 'mds_wifi:rts-threshold',
                  info: {
                    string: 'RTS/CTS threshold; Default 2347 = disabled'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-ieee80211',
                    name: 't19'
                  },
                  default: '2347'
                },
                {
                  kind: 'leaf',
                  name: 'fragm-threshold',
                  qname: 'mds_wifi:fragm-threshold',
                  info: {
                    string: 'Fragmentation threshold; Default 2346 = disabled'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-ieee80211',
                    name: 't20'
                  },
                  default: '2346'
                },
                {
                  kind: 'list',
                  name: 'ap',
                  qname: 'mds_wifi:ap',
                  info: {
                    string: 'The list of configured access point SSIDs.'
                  },
                  mandatory: true,
                  min_elements: 1,
                  max_elements: 16,
                  ordered_by: true,
                  key: ['ssid'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['radius-server'], ['mds_vlan:vlans'], ['mds_vlan:vlan']],
                  leafref_groups: [['radius-server'], ['mds_vlan:vlans'], ['mds_vlan:vlan']],
                  children: [
                    {
                      kind: 'key',
                      name: 'ssid',
                      qname: 'mds_wifi:ssid',
                      info: {
                        string: 'The SSID of this wifi access point.'
                      },
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't21'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'broadcast-ssid',
                      qname: 'mds_wifi:broadcast-ssid',
                      info: {
                        string: 'If true, the SSID will be broadcast.'
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
                      kind: 'leaf',
                      name: 'station-isolation',
                      qname: 'mds_wifi:station-isolation',
                      info: {
                        string:
                          'If true, traffic between stations is prevented. Otherwise, it is allowed.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: { name: 'boolean', primitive: true },
                      default: false
                    },
                    {
                      kind: 'leaf',
                      name: 'station-max',
                      qname: 'mds_wifi:station-max',
                      info: {
                        string:
                          'The maximum number of clients that will be allowed\nto connect to this access point.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: { name: 'uint32', primitive: true }
                    },
                    {
                      kind: 'leaf',
                      name: 'station-timeout',
                      qname: 'mds_wifi:station-timeout',
                      info: {
                        string:
                          'The number of seconds a station may be inactive before the\naccess point will verify that the station is still within\nrange.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      units: 'seconds',
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't22'
                      },
                      default: '300'
                    },
                    {
                      kind: 'leaf',
                      name: 'beacon-interval',
                      qname: 'mds_wifi:beacon-interval',
                      info: {
                        string: 'The number of seconds between WiFi beacon transmissions.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      units: 'seconds',
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't23'
                      },
                      default: '100'
                    },
                    {
                      kind: 'leaf',
                      name: 'privacy-mode',
                      qname: 'mds_wifi:privacy-mode',
                      info: {
                        string: 'The privacy mode to use on this interface.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't8'
                      },
                      default: 'none',
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/psk-config/psk'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'psk-config',
                      qname: 'mds_wifi:psk-config',
                      info: { string: 'Pre-Shared Key settings' },
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: true,
                        delete: false,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode'
                      ],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'encryption',
                          qname: 'mds_wifi:encryption',
                          info: {
                            string: 'The encryption mode to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't9'
                          },
                          default: 'ccmp',
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/psk-config/encryption'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'key-mgmt',
                          qname: 'mds_wifi:key-mgmt',
                          info: {
                            string: 'The type of pre-shared key to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't10'
                          },
                          default: 'wpa-psk'
                        },
                        {
                          kind: 'leaf',
                          name: 'psk',
                          qname: 'mds_wifi:psk',
                          info: { string: 'The Pre-Shared Key' },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'AESCFB128IVEncryptedString',
                            primitive: true
                          },
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/psk-config/psk'
                          ]
                        }
                      ],
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'eap-config',
                      qname: 'mds_wifi:eap-config',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: true,
                        delete: false,
                        execute: false
                      },
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode'
                      ],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'encryption',
                          qname: 'mds_wifi:encryption',
                          info: {
                            string: 'The type of compression used by the EAP connection'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't11'
                          },
                          default: 'ccmp',
                          deps: [
                            '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/eap-config/encryption'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'key-mgmt',
                          qname: 'mds_wifi:key-mgmt',
                          info: {
                            string: 'The type of key used by the EAP connection'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't12'
                          },
                          default: 'wpa-eap'
                        },
                        {
                          kind: 'leaf',
                          name: 'eap-method',
                          qname: 'mds_wifi:eap-method',
                          info: {
                            string: 'The type of EAP connection to use'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:mds-if-ieee80211',
                            name: 't13'
                          },
                          default: 'eap-tls'
                        }
                      ],
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'ieee80211w',
                      qname: 'mds_wifi:ieee80211w',
                      info: {
                        string:
                          "802.11w management frame protection. The 'disabled' setting disables this feature.\nThe 'optional' setting enables mixed use, enabling 802.11w for clients that support it,\nwhile still allowing clients that donot support 802.11w to join the network. The 'required'\nsetting allows only clients that support 802.11w to join the network."
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-ieee80211',
                        name: 't14'
                      },
                      default: 'disabled'
                    },
                    {
                      kind: 'leaf',
                      name: 'radius-server',
                      qname: 'mds_wifi:radius-server',
                      info: {
                        string: 'Radius server for eap authentication'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/sys:system/mdssys:mds-radius/servers/name',
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode'
                      ],
                      type: { name: 'string', primitive: true },
                      deps: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode',
                        '/sys:system/mdssys:mds-radius/servers'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'vlan-mode',
                      qname: 'mds_vlan:vlan-mode',
                      namespace: 'com:gemds:mds-if-vlan',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-if-vlan',
                        name: 't0'
                      },
                      default: 'none',
                      deps: [
                        '/if:interfaces/interface/ip:ipv4',
                        '/if:interfaces/interface/ip:ipv4/enabled',
                        '/if:interfaces/interface/ip:ipv6',
                        '/if:interfaces/interface/ip:ipv6/enabled',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlans'
                      ]
                    },
                    {
                      kind: 'leaf-list',
                      name: 'vlans',
                      qname: 'mds_vlan:vlans',
                      info: {
                        string: 'The vlans this trunk-port interface is a member of'
                      },
                      namespace: 'com:gemds:mds-if-vlan',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/if:interfaces/interface/name',
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode'
                      ],
                      type: {
                        namespace: 'com:gemds:mds-if-vlan',
                        name: 't3'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlans',
                        '/if:interfaces/interface/name',
                        '/if:interfaces/interface/type'
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'vlan',
                      qname: 'mds_vlan:vlan',
                      info: {
                        string: 'The vlan this access-port interface is a member of'
                      },
                      namespace: 'com:gemds:mds-if-vlan',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/if:interfaces/interface/name',
                      when_targets: [
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode'
                      ],
                      type: {
                        namespace: 'com:gemds:mds-if-vlan',
                        name: 't4'
                      },
                      deps: [
                        '/if:interfaces/interface',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan',
                        '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/mds_vlan:vlan-mode',
                        '/if:interfaces/interface/name',
                        '/if:interfaces/interface/type'
                      ]
                    }
                  ],
                  deps: [
                    '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/privacy-mode',
                    '/if:interfaces/interface/mds_wifi:wifi-config/ap-config/ap/radius-server'
                  ]
                }
              ],
              deps: ['/if:interfaces/interface/mds_wifi:wifi-config/mode']
            }
          ],
          deps: [
            '/if:interfaces/interface/mds_wifi:wifi-config',
            '/if:interfaces/interface/mds_wifi:wifi-config/ap-config',
            '/if:interfaces/interface/mds_wifi:wifi-config/mode',
            '/if:interfaces/interface/mds_wifi:wifi-config/station-config',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'vlan-config',
          qname: 'mds_vlan:vlan-config',
          info: { string: 'VLAN configuration settings' },
          namespace: 'com:gemds:mds-if-vlan',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'leaf',
              name: 'vlan-id',
              qname: 'mds_vlan:vlan-id',
              info: { string: 'The ID of this vlan' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-vlan',
                name: 'vlan-id'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/mds_vlan:vlan-config/vlan-id',
                '/if:interfaces/interface/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'native-vlan',
              qname: 'mds_vlan:native-vlan',
              info: {
                string:
                  'If true, this is the native vlan of this device.\nNative VLAN packets will not egress as tagged packets'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: false,
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/mds_vlan:vlan-config/native-vlan',
                '/if:interfaces/interface/name'
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_vlan:vlan-config/vlan-id',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'leaf',
          name: 'vlan-mode',
          qname: 'mds_vlan:vlan-mode',
          namespace: 'com:gemds:mds-if-vlan',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          type: { namespace: 'com:gemds:mds-if-vlan', name: 't0' },
          default: 'none',
          deps: [
            '/if:interfaces/interface/ip:ipv4',
            '/if:interfaces/interface/ip:ipv4/enabled',
            '/if:interfaces/interface/ip:ipv6',
            '/if:interfaces/interface/ip:ipv6/enabled',
            '/if:interfaces/interface/mds_vlan:vlan',
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/mds_vlan:vlans',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'leaf-list',
          name: 'vlans',
          qname: 'mds_vlan:vlans',
          info: {
            string: 'The vlans this trunk-port interface is a member of'
          },
          namespace: 'com:gemds:mds-if-vlan',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/name',
          when_targets: [
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/type'
          ],
          type: { namespace: 'com:gemds:mds-if-vlan', name: 't3' },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/mds_vlan:vlans',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'leaf',
          name: 'vlan',
          qname: 'mds_vlan:vlan',
          info: {
            string: 'The vlan this access-port interface is a member of'
          },
          namespace: 'com:gemds:mds-if-vlan',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/name',
          when_targets: [
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/type'
          ],
          type: { namespace: 'com:gemds:mds-if-vlan', name: 't4' },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_vlan:vlan',
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'security',
          qname: 'mdsif:security',
          info: { string: 'Port security settings.' },
          namespace: 'com:gemds:mds-interfaces',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          leafrefGroups: [['radius-server']],
          leafref_groups: [['radius-server']],
          children: [
            {
              kind: 'leaf',
              name: 'security-mode',
              qname: 'mdsif:security-mode',
              info: {
                string: 'The type of port-authentication to use.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-interfaces',
                name: 't7'
              }
            },
            {
              kind: 'leaf',
              name: 'radius-server',
              qname: 'mdsif:radius-server',
              info: {
                string: 'The name of the RADIUS server configuration to use.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/sys:system/mdssys:mds-radius/servers/name',
              type: { name: 'string', primitive: true },
              deps: ['/sys:system/mdssys:mds-radius/servers']
            }
          ],
          deps: [
            '/if:interfaces/interface/mdsif:security/radius-server',
            '/if:interfaces/interface/mdsif:security/security-mode',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'leaf',
          name: 'eth-phy-rate',
          qname: 'mdsif:eth-phy-rate',
          info: { string: 'Sets the data rate of the ethernet port.' },
          namespace: 'com:gemds:mds-interfaces',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          type: { namespace: 'com:gemds:mds-interfaces', name: 't8' },
          default: 'eth10MbHalf eth10MbFull eth100MbHalf eth100MbFull',
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'leaf',
          name: 'ingress-rate-limiting',
          qname: 'mdsif:ingress-rate-limiting',
          info: {
            string: 'Enable Ingress Rate Limiting on this interface.'
          },
          namespace: 'com:gemds:mds-interfaces',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          type: { name: 'boolean', primitive: true },
          default: false,
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'leaf',
          name: 'ingress-rate',
          qname: 'mdsif:ingress-rate',
          info: {
            string:
              'Committed Information Rate (CIR) in kbps. Value for calculations is\nrounded down to nearest 64 kbps when < 1000, 128 kpbs when < 10000,\nand 1000 kbps when < 100000'
          },
          namespace: 'com:gemds:mds-interfaces',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          units: 'kbps',
          type: { namespace: 'com:gemds:mds-interfaces', name: 't9' },
          default: '85000',
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'leaf',
          name: 'ingress-burst',
          qname: 'mdsif:ingress-burst',
          info: { string: 'Burst Allocation in kbits' },
          namespace: 'com:gemds:mds-interfaces',
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          units: 'kbits',
          type: {
            namespace: 'com:gemds:mds-interfaces',
            name: 't10'
          },
          default: '2048',
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'vrrp',
          qname: 'mdsif:vrrp',
          info: {
            string: 'Virtual Router Redundancy Protocol (VRRP).'
          },
          namespace: 'com:gemds:mds-interfaces',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'leaf',
              name: 'enabled',
              qname: 'mdsif:enabled',
              info: {
                string: 'Enable Virtual Router Redundancy Protocol (VRRP) on this interface.'
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
              kind: 'leaf',
              name: 'address',
              qname: 'mdsif:address',
              info: { string: 'Virtual Router IP address.' },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              }
            },
            {
              kind: 'leaf',
              name: 'subnet-mask',
              qname: 'mdsif:subnet-mask',
              info: { string: 'Virtual Router IP subnet.' },
              mandatory: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              }
            },
            {
              kind: 'leaf',
              name: 'id',
              qname: 'mdsif:id',
              info: { string: 'Virtual Router Id' },
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
                name: 't1'
              }
            },
            {
              kind: 'leaf',
              name: 'priority',
              qname: 'mdsif:priority',
              info: {
                string: 'Priority of this physical router in the VRRP group.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-interfaces',
                name: 't2'
              },
              default: '100'
            },
            {
              kind: 'leaf',
              name: 'advertisement-interval',
              qname: 'mdsif:advertisement-interval',
              info: { string: 'Delay between advertisements.' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:mds-interfaces',
                name: 't3'
              },
              default: '1'
            },
            {
              kind: 'leaf',
              name: 'preemption',
              qname: 'mdsif:preemption',
              info: {
                string:
                  'Whether to enable higher priority routers to preempt lower priority routers.'
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
              kind: 'container',
              name: 'verify-primary-path',
              qname: 'netmon:verify-primary-path',
              info: {
                string:
                  'This is used to automatically switch from Backup to Master\nrole if a remote host cannot be reached through the Master router.\nAn ICMP netmon service must be created first before being used\nin this configuration. When the remote host cannot be reached, this VRRP\nrouter will switch to Master mode by elevating its priority.\nIt will revert to the pre-configured priority when the remote host\nbecomes reachable again.'
              },
              namespace: 'com:gemds:services:netmon',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['operation']],
              leafref_groups: [['operation']],
              children: [
                {
                  kind: 'leaf',
                  name: 'operation',
                  qname: 'netmon:operation',
                  info: {
                    string:
                      'The network monitor operation to use for verifying\nhost-reachability through the primary path'
                  },
                  mandatory: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/serv:services/netmon:netmon/operation/name',
                  type: {
                    namespace: 'com:gemds:security',
                    name: 'word-string'
                  },
                  deps: ['/serv:services/netmon:netmon/operation']
                }
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_bridge:bridge-settings/members/port',
            '/if:interfaces/interface/mds_bridge:bridge-settings/members/port/interface',
            '/if:interfaces/interface/mds_vlan:vlan-mode',
            '/if:interfaces/interface/mdsif:vrrp/enabled',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'ln-config',
          qname: 'mds_ln:ln-config',
          info: {
            string: 'The configuration of the GE MDS Narrowband interface'
          },
          namespace: 'com:gemds:narrowband',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'list',
              name: 'virtual-radio-channel',
              qname: 'mds_ln:virtual-radio-channel',
              info: {
                string:
                  'The list of virtual serial devices and their virtual radio channel (VRC) settings.  This is only applicable in packet-with-mac mode.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['serial-device'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'serial-device',
                  qname: 'mds_ln:serial-device',
                  info: { string: 'The name of the serial channel' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't2'
                  }
                },
                {
                  kind: 'leaf',
                  name: 'id',
                  qname: 'mds_ln:id',
                  info: {
                    string: 'The VRC used when sending and receiving messages over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't3'
                  },
                  default: '1',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'listen-on-all',
                  qname: 'mds_ln:listen-on-all',
                  info: {
                    string: 'Whether all messages from all VRCs will be recieved.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false,
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'talk-to',
                  qname: 'mds_ln:talk-to',
                  info: {
                    string: 'The VRC used when sending messages over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't4'
                  },
                  default: 'vrc-1',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'listen-on',
                  qname: 'mds_ln:listen-on',
                  info: {
                    string: 'The VRC used when receiving messages over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't5'
                  },
                  default: 'all',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                }
              ],
              deps: ['/if:interfaces/interface/mds_ln:ln-config/virtual-radio-channel/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'radio-mode',
              qname: 'mds_ln:radio-mode',
              info: {
                string:
                  "Controls the operating mode of the NIC. Setting must match on all radios on the network.\n\nStandard: Normal setting for point to multipoint networks.\n\nStore and forward: Special setting for point to multipoint networks that include store and forward nodes. Please note that in order for this radio to operate as a store and forward node, you must also set Device Mode to 'store and forward.'\n\nTransparent Serial: Special setting for networks with SD or x710 radios in transparent serial mode."
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:narrowband', name: 't6' },
              default: 'standard'
            },
            {
              kind: 'leaf',
              name: 'device-mode',
              qname: 'mds_ln:device-mode',
              info: {
                string:
                  'Sets the role the radio will assume in the network.\n\nAccess point, remote: Valid in all Radio Modes.\n\nStore and forward: Valid only when the Radio Mode is set to store and forward.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:narrowband', name: 't7' },
              deps: [
                '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                '/if:interfaces/interface/mds_ln:ln-config/radio-mode'
              ]
            },
            {
              kind: 'leaf',
              name: 'network-name',
              qname: 'mds_ln:network-name',
              info: {
                string:
                  'The name of the network.  Used to identify the logical network that\nthe device should join. If the network name does not match, the device\nwill log an event to identify network name collisions.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:narrowband', name: 't8' },
              default: 'mds_ln',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'data-compression',
              qname: 'mds_ln:data-compression',
              info: {
                string: 'Over the air data compression algorithm'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:narrowband', name: 't9' },
              default: 'lzo',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'header-compression',
              qname: 'mds_ln:header-compression',
              info: {
                string:
                  'Use Robust Header Compression to compress the IP headers. This feature\nis most useful in applications that rely on IP packets with small\npayloads, such as terminal server operations or MODBUS polling.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: true,
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'power',
              qname: 'mds_ln:power',
              info: { string: 'The transmit power of the radio' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'dBm',
              type: {
                namespace: 'com:gemds:narrowband',
                name: 't10'
              },
              default: '40'
            },
            {
              kind: 'leaf',
              name: 'tx-frequency',
              qname: 'mds_ln:tx-frequency',
              info: {
                string: 'The transmit frequency of the radio in MHz'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'MHz',
              type: {
                namespace: 'com:gemds:narrowband',
                name: 'frequency'
              }
            },
            {
              kind: 'leaf',
              name: 'rx-frequency',
              qname: 'mds_ln:rx-frequency',
              info: {
                string: 'The receive frequency of the radio in MHz'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'MHz',
              type: {
                namespace: 'com:gemds:narrowband',
                name: 'frequency'
              }
            },
            {
              kind: 'leaf',
              name: 'channel',
              qname: 'mds_ln:channel',
              info: {
                string: 'The bandwidth and symbol rate of the radio'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'bandwidth-symbol-rate',
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'ln-channel'
              },
              default: '12.5KHz-10.0ksps',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'modulation',
              qname: 'mds_ln:modulation',
              info: {
                string:
                  "Sets the modulation the NIC uses.\n\n'Automatic' adaptively selects which modulation is used on a\nper-transmission basis. This allows remotes that are closer to take\nadvantage of a higher data rate for directed messages, and remotes\nthat are farther away or obstructed to use a more conservative\nmodulation.\n\nRadios with fixed modulation settings will operate ONLY at the\nmodulation that you specify. If the specified modulation is higher\nthan the connection can support, no traffic will flow. If the\nconnection can support a higher modulation, the radio will not\ntake advantage of this. We recommend that 'automatic' be used in all\ncases other than bench tests."
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'ln-modulation'
              },
              default: 'automatic',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'serial-modulation',
              qname: 'mds_ln:serial-modulation',
              info: {
                string:
                  'Sets the modulation the NIC uses.\n\nRadios in transparent serial mode will run with fixed modulation.\nIf the specified modulation is higher than the connection can\nsupport, no traffic will flow. If the connection can support a\nhigher modulation, the radio will not take advantage of this.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'ln-modulation-ser'
              },
              default: '9600-3FSK',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'system-id',
              qname: 'mds_ln:system-id',
              info: { string: 'Set the system ID of the NIC.' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:narrowband',
                name: 't11'
              },
              default: '0',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'rx-timeout-delay',
              qname: 'mds_ln:rx-timeout-delay',
              info: {
                string:
                  'Set the how much time before the NIC will reset without recieving an over the air packet.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'seconds',
              type: {
                namespace: 'com:gemds:narrowband',
                name: 't12'
              },
              default: '1200',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'fec',
              qname: 'mds_ln:fec',
              info: {
                string:
                  'Forward error correction (FEC) adds redundancy to control\nerrors over noisy communication channels and improve\nsensitivity.  FEC redundancy increases the effective data\ntransmission size, for this reason two methods are offered.\nAdaptive chooses the optimal redundancy based on size\noffering the highest sensitivity.  Low gain always uses the\nminimal amount of redundancy to provide the smallest impact\non size while increasing sensitivity.  FEC parameter must\nmatch on all radios in the network.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'ln-fec-type'
              },
              default: 'disabled',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'data-key-hold-time',
              qname: 'mds_ln:data-key-hold-time',
              info: {
                string: 'How many idle frames to wait for data, before we dekey.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:narrowband',
                name: 't13'
              },
              default: '2',
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'leaf',
              name: 'peer-to-peer',
              qname: 'mds_ln:peer-to-peer',
              info: {
                string: 'Allow transmission from one remote to another.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: false,
              deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
            },
            {
              kind: 'container',
              name: 'security',
              qname: 'mds_ln:security',
              info: {
                string: 'The security configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              leafrefGroups: [['radius-server']],
              leafref_groups: [['radius-server']],
              children: [
                {
                  kind: 'leaf',
                  name: 'security-mode',
                  qname: 'mds_ln:security-mode',
                  info: {
                    string: 'The type of over the air authentication to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't15'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'encryption',
                  qname: 'mds_ln:encryption',
                  info: {
                    string: 'The type of over the air encryption to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't16'
                  },
                  default: 'none',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'eap-mode',
                  qname: 'mds_ln:eap-mode',
                  info: { string: 'The type of EAP to perform' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't17'
                  },
                  default: 'eap-tls',
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/security/security-mode'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'passphrase',
                  qname: 'mds_ln:passphrase',
                  info: {
                    string:
                      'Passphrase used to secure data communications.  May be\nparsed as a string or, if 64 characters long, a hex key.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'AESCFB128IVEncryptedString',
                    primitive: true
                  },
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/security/security-mode']
                },
                {
                  kind: 'leaf',
                  name: 'radius-server',
                  qname: 'mds_ln:radius-server',
                  info: {
                    string: 'Radius server for eap authentication'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/sys:system/mdssys:mds-radius/servers/name',
                  when_targets: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/security/security-mode'
                  ],
                  type: { name: 'string', primitive: true },
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/security/security-mode',
                    '/sys:system/mdssys:mds-radius/servers'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'rekey-interval',
                  qname: 'mds_ln:rekey-interval',
                  info: {
                    string:
                      'Required elapsed time, in minutes, before renegotiating encryption keys.\nEnter 0 to renegotiate keys after one million packets have been sent,\ninstead of using a time-based interval.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't18'
                  },
                  default: '180',
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/security/encryption'
                  ]
                },
                {
                  kind: 'container',
                  name: 'pki',
                  qname: 'mds_ln:pki',
                  info: {
                    string: 'The public key infrastructure used by EAP-TLS'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  leafrefGroups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  leafref_groups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  children: [
                    {
                      kind: 'leaf',
                      name: 'cert-id',
                      qname: 'mds_ln:cert-id',
                      info: { string: 'certificate identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/client-certs/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'key-id',
                      qname: 'mds_ln:key-id',
                      info: { string: 'private key identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/private-keys/show-all/key-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/private-keys/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'ca-cert-id',
                      qname: 'mds_ln:ca-cert-id',
                      info: {
                        string: 'ca-certificate chain identifier'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/ca-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/ca-certs/show-all']
                    }
                  ],
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/security/security-mode'
                  ]
                }
              ],
              deps: [
                '/if:interfaces/interface/mds_ln:ln-config',
                '/if:interfaces/interface/mds_ln:ln-config/radio-mode',
                '/if:interfaces/interface/mds_ln:ln-config/security/encryption',
                '/if:interfaces/interface/mds_ln:ln-config/security/passphrase',
                '/if:interfaces/interface/mds_ln:ln-config/security/security-mode'
              ]
            },
            {
              kind: 'container',
              name: 'advanced-config',
              qname: 'mds_ln:advanced-config',
              info: {
                string: 'The advanced configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'data-retries',
                  qname: 'mds_ln:data-retries',
                  info: {
                    string: 'Number of times to retry unicast data before declaring NACK'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't19'
                  },
                  default: '7',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'nic-id',
                  qname: 'mds_ln:nic-id',
                  info: {
                    string: 'Manually overrides the NIC identifier'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't20'
                  },
                  default: '0',
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/radio-mode'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'gateway-id',
                  qname: 'mds_ln:gateway-id',
                  info: {
                    string: 'Sets the ID of the device you wish to connect to.  '
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't21'
                  },
                  default: '0',
                  deps: [
                    '/if:interfaces/interface/mds_ln:ln-config/device-mode',
                    '/if:interfaces/interface/mds_ln:ln-config/radio-mode'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'unit-address',
                  qname: 'mds_ln:unit-address',
                  info: {
                    string:
                      "Legacy DLINK unit address. If not specified, defaults to the last 4 digits of the radio's platform\nserial number. Valid values: 10000-65000, or the last 4 digits of the platform serial address."
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'uint16', primitive: true },
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'legacy-store-and-forward',
                  qname: 'mds_ln:legacy-store-and-forward',
                  info: {
                    string: 'Set store and forward while in legacy mode'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false,
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'packet-ttl',
                  qname: 'mds_ln:packet-ttl',
                  info: {
                    string:
                      'Length of inactivity for all over the air messaging before registering a disconnect.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'milliseconds',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't22'
                  },
                  default: '5000',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'remote-age-time',
                  qname: 'mds_ln:remote-age-time',
                  info: {
                    string: 'Length of inactivity on this device before it is disconnected.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't23'
                  },
                  default: '900',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'endpoint-age-time',
                  qname: 'mds_ln:endpoint-age-time',
                  info: {
                    string:
                      'Length of inactivity on this endpoint before it is removed from the database.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't24'
                  },
                  default: '300',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'allow-retransmit',
                  qname: 'mds_ln:allow-retransmit',
                  info: {
                    string:
                      "Allow retransmission of remote-to-remote traffic. When enabled the\nAP will retransmit traffic from one remote to another based on the MAC\naddress. It will also resend any remote's broadcast traffic to all\nother remotes."
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: true,
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'arp-cache',
                  qname: 'mds_ln:arp-cache',
                  info: {
                    string:
                      'Allow the local radio to transparently reply to ARPs it knows the\naddress for without sending it across the link, similar to proxy ARP.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: true,
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'dscp-qos',
                  qname: 'mds_ln:dscp-qos',
                  info: {
                    string:
                      'Specifies that the MAC should use the DSCP field in the header to do\nQoS over the air. The three most significant bits are used as the\npriority of the packet over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'qam16-threshold',
                  qname: 'mds_ln:qam16-threshold',
                  info: {
                    string:
                      'When the radio is using automatic modulation, it will automatically\nswitch to QAM16 modulation when the averaged calculated RSSI drops\nbelow this value. Setting the value to 0 will disable QAM16\nmodulation.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't26'
                  },
                  default: '-85',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'qam64-threshold',
                  qname: 'mds_ln:qam64-threshold',
                  info: {
                    string:
                      'When the radio is using automatic modulation, it will automatically\nswitch to QAM64 modulation when the averaged calculated RSSI drops\nbelow this value. Setting the value to 0 will disable QAM64\nmodulation.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't27'
                  },
                  default: '-70',
                  deps: ['/if:interfaces/interface/mds_ln:ln-config/radio-mode']
                },
                {
                  kind: 'leaf',
                  name: 'fairness',
                  qname: 'mds_ln:fairness',
                  info: {
                    string:
                      'Set to allow fair usage of the channel by not having the NIC always\ncontend for the channel.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                }
              ]
            },
            {
              kind: 'container',
              name: 'alarm-settings',
              qname: 'mds_ln:alarm-settings',
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'evm-threshold',
                  qname: 'mds_ln:evm-threshold',
                  info: {
                    string:
                      'If the received EVM exceeds this for more than the evm-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'int8', primitive: true },
                  default: '50'
                },
                {
                  kind: 'leaf',
                  name: 'evm-alarm-count',
                  qname: 'mds_ln:evm-alarm-count',
                  info: {
                    string:
                      'The amount of consecutive measurements required to change the alarm state.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't29'
                  },
                  default: '5'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-upper-threshold',
                  qname: 'mds_ln:rssi-upper-threshold',
                  info: {
                    string:
                      'If the received RSSI is weaker than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-120'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-lower-threshold',
                  qname: 'mds_ln:rssi-lower-threshold',
                  info: {
                    string:
                      'If the received RSSI is stronger than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-20'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-alarm-count',
                  qname: 'mds_ln:rssi-alarm-count',
                  info: {
                    string:
                      'The amount of consecutive measurements required to change the alarm state.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't30'
                  },
                  default: '10'
                },
                {
                  kind: 'leaf',
                  name: 'retry-percentage',
                  qname: 'mds_ln:retry-percentage',
                  info: {
                    string:
                      'Will assert an alarm if the ratio of retries to successful transmits is greater than\nthe given percentage. The percentage is calculated over a rolling half hour window, updated\nevery 5 minutes.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'percent',
                  type: {
                    namespace: 'com:gemds:narrowband',
                    name: 't31'
                  },
                  default: '10'
                }
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_bond:bond-config',
            '/if:interfaces/interface/mds_bond:bond-config/member',
            '/if:interfaces/interface/mds_bond:bond-config/member/interface',
            '/if:interfaces/interface/mds_ln:ln-config',
            '/if:interfaces/interface/mds_ln:ln-config/device-mode',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'nx-config',
          qname: 'mds_nx:nx-config',
          info: {
            string: 'The configuration of the GE MDS NX interface'
          },
          namespace: 'com:gemds:netmanager',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'leaf',
              name: 'modem-mode',
              qname: 'mds_nx:modem-mode',
              info: {
                string: 'Controls the target throughput of the radio'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'modem-type'
              },
              default: '500kbps'
            },
            {
              kind: 'leaf',
              name: 'device-mode',
              qname: 'mds_nx:device-mode',
              info: {
                string: 'Sets the role the radio will assume in the network.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'device-type'
              }
            },
            {
              kind: 'leaf',
              name: 'network-name',
              qname: 'mds_nx:network-name',
              info: {
                string:
                  'The name of the network.  Used to identify the logical network that\nthe device should join. If the network name does not match, the device\nwill log an event to identify network name collisions.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:netmanager', name: 't1' },
              default: 'mds_nx'
            },
            {
              kind: 'leaf',
              name: 'data-compression',
              qname: 'mds_nx:data-compression',
              info: {
                string: 'Over the air data compression algorithm'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:netmanager', name: 't2' },
              default: 'none'
            },
            {
              kind: 'leaf',
              name: 'header-compression',
              qname: 'mds_nx:header-compression',
              info: {
                string:
                  'Use Robust Header Compression to compress the IP headers. This feature\nis most useful in applications that rely on IP packets with small\npayloads, such as terminal server operations or MODBUS polling.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: false
            },
            {
              kind: 'leaf',
              name: 'power',
              qname: 'mds_nx:power',
              info: { string: 'The transmit power of the radio' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'dBm',
              type: { namespace: 'com:gemds:netmanager', name: 't3' },
              default: '30'
            },
            {
              kind: 'list',
              name: 'virtual-radio-channel',
              qname: 'mds_nx:virtual-radio-channel',
              info: {
                string:
                  'The list of virtual serial devices and their virtual radio channel (VRC) settings.  This is only applicable in packet-with-mac mode.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['serial-device'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'serial-device',
                  qname: 'mds_nx:serial-device',
                  info: { string: 'The name of the serial channel' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't4'
                  }
                },
                {
                  kind: 'leaf',
                  name: 'id',
                  qname: 'mds_nx:id',
                  info: {
                    string: 'The VRC used when sending and receiving messages over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't5'
                  },
                  default: '1'
                },
                {
                  kind: 'leaf',
                  name: 'listen-on-all',
                  qname: 'mds_nx:listen-on-all',
                  info: {
                    string: 'Whether all messages from all VRCs will be recieved.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'dwell-time',
              qname: 'mds_nx:dwell-time',
              info: { string: 'Time spent on a channel' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'milliseconds',
              type: { namespace: 'com:gemds:netmanager', name: 't7' },
              default: '50',
              deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
            },
            {
              kind: 'leaf',
              name: 'beacon-interval',
              qname: 'mds_nx:beacon-interval',
              info: {
                string: 'Synchronization beacon transmit interval'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'milliseconds',
              type: { namespace: 'com:gemds:netmanager', name: 't8' },
              default: '150',
              deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
            },
            {
              kind: 'leaf',
              name: 'hop-set',
              qname: 'mds_nx:hop-set',
              info: { string: 'The hop set of the radio' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:netmanager',
                name: 'hop-set-type'
              },
              default: 'a',
              deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
            },
            {
              kind: 'container',
              name: 'security',
              qname: 'mds_nx:security',
              info: {
                string: 'The security configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              leafrefGroups: [['radius-server']],
              leafref_groups: [['radius-server']],
              children: [
                {
                  kind: 'leaf',
                  name: 'security-mode',
                  qname: 'mds_nx:security-mode',
                  info: {
                    string: 'The type of over the air authentication to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't9'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'encryption',
                  qname: 'mds_nx:encryption',
                  info: {
                    string: 'The type of over the air encryption to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't10'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'eap-mode',
                  qname: 'mds_nx:eap-mode',
                  info: { string: 'The type of EAP to perform' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't11'
                  },
                  default: 'eap-tls',
                  deps: [
                    '/if:interfaces/interface/mds_nx:nx-config/device-mode',
                    '/if:interfaces/interface/mds_nx:nx-config/security/security-mode'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'passphrase',
                  qname: 'mds_nx:passphrase',
                  info: {
                    string:
                      'Passphrase used to secure data communications.  May be\nparsed as a string or, if 64 characters long, a hex key.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'AESCFB128IVEncryptedString',
                    primitive: true
                  },
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/security/security-mode']
                },
                {
                  kind: 'leaf',
                  name: 'radius-server',
                  qname: 'mds_nx:radius-server',
                  info: {
                    string: 'Radius server for eap authentication'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/sys:system/mdssys:mds-radius/servers/name',
                  when_targets: [
                    '/if:interfaces/interface/mds_nx:nx-config/device-mode',
                    '/if:interfaces/interface/mds_nx:nx-config/security/security-mode'
                  ],
                  type: { name: 'string', primitive: true },
                  deps: [
                    '/if:interfaces/interface/mds_nx:nx-config/device-mode',
                    '/if:interfaces/interface/mds_nx:nx-config/security/security-mode',
                    '/sys:system/mdssys:mds-radius/servers'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'rekey-interval',
                  qname: 'mds_nx:rekey-interval',
                  info: {
                    string:
                      'Required elapsed time, in minutes, before renegotiating encryption keys.\nEnter 0 to renegotiate keys after one million packets have been sent,\ninstead of using a time-based interval.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't12'
                  },
                  default: '180',
                  deps: [
                    '/if:interfaces/interface/mds_nx:nx-config/device-mode',
                    '/if:interfaces/interface/mds_nx:nx-config/security/encryption'
                  ]
                },
                {
                  kind: 'container',
                  name: 'pki',
                  qname: 'mds_nx:pki',
                  info: {
                    string: 'The public key infrastructure used by EAP-TLS'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  leafrefGroups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  leafref_groups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  children: [
                    {
                      kind: 'leaf',
                      name: 'cert-id',
                      qname: 'mds_nx:cert-id',
                      info: { string: 'certificate identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/client-certs/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'key-id',
                      qname: 'mds_nx:key-id',
                      info: { string: 'private key identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/private-keys/show-all/key-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/private-keys/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'ca-cert-id',
                      qname: 'mds_nx:ca-cert-id',
                      info: {
                        string: 'ca-certificate chain identifier'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/ca-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/ca-certs/show-all']
                    }
                  ],
                  deps: [
                    '/if:interfaces/interface/mds_nx:nx-config/device-mode',
                    '/if:interfaces/interface/mds_nx:nx-config/security/security-mode'
                  ]
                }
              ],
              deps: [
                '/if:interfaces/interface/mds_nx:nx-config',
                '/if:interfaces/interface/mds_nx:nx-config/security/encryption',
                '/if:interfaces/interface/mds_nx:nx-config/security/passphrase',
                '/if:interfaces/interface/mds_nx:nx-config/security/security-mode'
              ]
            },
            {
              kind: 'container',
              name: 'advanced-config',
              qname: 'mds_nx:advanced-config',
              info: {
                string: 'The advanced configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'lna-state',
                  qname: 'mds_nx:lna-state',
                  info: { string: 'Controls the low noise amplifier' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't13'
                  },
                  default: 'high-sensitivity'
                },
                {
                  kind: 'leaf-list',
                  name: 'avoided-frequencies',
                  qname: 'mds_nx:avoided-frequencies',
                  info: {
                    string:
                      'Frequencies that are not included in the hop pattern. Values must be a single frequency or a range (i.e. 903.1 or 910-912).\nFrequencies must be between 902.7 and 927.3 with at most 4 digits after the decimal point.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't15'
                  },
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'stale-packet-timeout',
                  qname: 'mds_nx:stale-packet-timeout',
                  info: {
                    string:
                      'If the MAC is unable to transmit a packet in this time,\nit will drop the packet.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'milliseconds',
                  type: { name: 'uint16', primitive: true },
                  default: '1500'
                },
                {
                  kind: 'leaf',
                  name: 'propagation-delay',
                  qname: 'mds_nx:propagation-delay',
                  info: {
                    string: 'Correction for the propagation delay of the RF signal.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't16'
                  },
                  default: '40miles',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'mcast-repeat',
                  qname: 'mds_nx:mcast-repeat',
                  info: {
                    string: 'Number of times to repeat downstream broadcast and\nmulticast data.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'uint8', primitive: true },
                  default: '3',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'data-retries',
                  qname: 'mds_nx:data-retries',
                  info: {
                    string: 'Number of times to retry unicast data before declaring NACK.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't17'
                  },
                  default: '7'
                },
                {
                  kind: 'leaf',
                  name: 'nic-id',
                  qname: 'mds_nx:nic-id',
                  info: {
                    string: 'Manual overrides of the NIC identifier'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't18'
                  },
                  default: '0',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'gateway-id',
                  qname: 'mds_nx:gateway-id',
                  info: {
                    string: "Manual overrides of the NIC's gateway identifier"
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't19'
                  },
                  default: '0',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'fragment-threshold',
                  qname: 'mds_nx:fragment-threshold',
                  info: { string: 'Fragmentation threshold' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't20'
                  },
                  default: '0',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'remote-age-time',
                  qname: 'mds_nx:remote-age-time',
                  info: {
                    string: 'Length of inactivity on this device before it is disconnected.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't21'
                  },
                  default: '600',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'endpoint-age-time',
                  qname: 'mds_nx:endpoint-age-time',
                  info: {
                    string:
                      'Length of inactivity on this endpoint before it is removed from the database.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't22'
                  },
                  default: '300',
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'allow-retransmit',
                  qname: 'mds_nx:allow-retransmit',
                  info: {
                    string:
                      "Allow retransmission of remote-to-remote traffic. When enabled the\nAP will retransmit traffic from one remote to another based on the MAC\naddress. It will also resend any remote's broadcast traffic to all\nother remotes."
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: true,
                  deps: ['/if:interfaces/interface/mds_nx:nx-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'arp-cache',
                  qname: 'mds_nx:arp-cache',
                  info: {
                    string:
                      'Allow the local radio to transparently reply to ARPs it knows the\naddress for without sending it across the link, similar to proxy ARP.'
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
                  kind: 'leaf',
                  name: 'dscp-qos',
                  qname: 'mds_nx:dscp-qos',
                  info: {
                    string:
                      'Specifies that the MAC should use the DSCP field in the header to do\nQoS over the air. The three most significant bits are used as the\npriority of the packet over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'adr-mode',
                  qname: 'mds_nx:adr-mode',
                  info: {
                    string:
                      'Adaptive Data Rate will change the modem to attempt to get the best\nthroughput, for a given network.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't24'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'adr-threshold',
                  qname: 'mds_nx:adr-threshold',
                  info: {
                    string:
                      'Adaptive Data Rate Threshold.  If signal is stronger\nthan threshold the faster data rate setting will be used.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't25'
                  },
                  default: '-70'
                },
                {
                  kind: 'leaf',
                  name: 'encryption-protocol',
                  qname: 'mds_nx:encryption-protocol',
                  info: {
                    string: 'Set this to 1.0 when migrating remote network to new security protocol'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't26'
                  },
                  default: '1.0'
                }
              ]
            },
            {
              kind: 'container',
              name: 'alarm-settings',
              qname: 'mds_nx:alarm-settings',
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'rssi-upper-threshold',
                  qname: 'mds_nx:rssi-upper-threshold',
                  info: {
                    string:
                      'If the received RSSI is weaker than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-120'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-lower-threshold',
                  qname: 'mds_nx:rssi-lower-threshold',
                  info: {
                    string:
                      'If the received RSSI is stronger than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-20'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-alarm-count',
                  qname: 'mds_nx:rssi-alarm-count',
                  info: {
                    string:
                      'The amount of consecutive measurements required to change the alarm state.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't27'
                  },
                  default: '10'
                },
                {
                  kind: 'leaf',
                  name: 'retry-percentage',
                  qname: 'mds_nx:retry-percentage',
                  info: {
                    string:
                      'Will assert an alarm if the ratio of retries to successful transmits is greater than\nthe given percentage. The percentage is calculated over a rolling half hour window, updated\nevery 5 minutes.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'percent',
                  type: {
                    namespace: 'com:gemds:netmanager',
                    name: 't28'
                  },
                  default: '10'
                }
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_bond:bond-config',
            '/if:interfaces/interface/mds_bond:bond-config/member',
            '/if:interfaces/interface/mds_bond:bond-config/member/interface',
            '/if:interfaces/interface/mds_nx:nx-config',
            '/if:interfaces/interface/mds_nx:nx-config/device-mode',
            '/if:interfaces/interface/mds_nx:nx-config/modem-mode',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'filter',
          qname: 'fire:filter',
          namespace: 'com:gemds:services:firewall',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [['input'], ['output']],
          leafref_groups: [['input'], ['output']],
          children: [
            {
              kind: 'leaf',
              name: 'input',
              qname: 'fire:input',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/fire:firewall/filter/name',
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't7'
              },
              deps: [
                '/if:interfaces/interface/fire:filter/input',
                '/if:interfaces/interface/type',
                '/serv:services/fire:firewall/filter',
                '/serv:services/fire:firewall/filter/name',
                '/serv:services/fire:firewall/filter/rule-eth'
              ]
            },
            {
              kind: 'leaf',
              name: 'output',
              qname: 'fire:output',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/fire:firewall/filter/name',
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't7'
              },
              deps: [
                '/if:interfaces/interface/fire:filter/output',
                '/if:interfaces/interface/type',
                '/serv:services/fire:firewall/filter',
                '/serv:services/fire:firewall/filter/name',
                '/serv:services/fire:firewall/filter/rule-eth'
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface/enabled',
            '/if:interfaces/interface/fire:filter',
            '/if:interfaces/interface/fire:type',
            '/if:interfaces/interface/ip:ipv4',
            '/if:interfaces/interface/ip:ipv6',
            '/serv:services/fire:firewall/enabled'
          ]
        },
        {
          kind: 'container',
          name: 'nat',
          qname: 'fire:nat',
          namespace: 'com:gemds:services:firewall',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [['source'], ['destination'], ['static']],
          leafref_groups: [['source'], ['destination'], ['static']],
          children: [
            {
              kind: 'leaf',
              name: 'source',
              qname: 'fire:source',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/fire:firewall/nat/source/rule-set/name',
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't16'
              },
              deps: ['/serv:services/fire:firewall/nat/source/rule-set']
            },
            {
              kind: 'leaf',
              name: 'destination',
              qname: 'fire:destination',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/fire:firewall/nat/destination/rule-set/name',
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't17'
              },
              deps: ['/serv:services/fire:firewall/nat/destination/rule-set']
            },
            {
              kind: 'leaf',
              name: 'static',
              qname: 'fire:static',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/fire:firewall/nat/static/rule-set/name',
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't18'
              },
              deps: ['/serv:services/fire:firewall/nat/static/rule-set']
            }
          ],
          deps: ['/if:interfaces/interface/fire:type']
        },
        {
          kind: 'container',
          name: 'qos',
          qname: 'qos:qos',
          namespace: 'com:gemds:services:qos',
          mandatory: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          leafrefGroups: [['output']],
          leafref_groups: [['output']],
          children: [
            {
              kind: 'leaf',
              name: 'output',
              qname: 'qos:output',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/qos:qos/policy/name',
              type: {
                namespace: 'com:gemds:services:qos',
                name: 't0'
              },
              deps: [
                '/if:interfaces/interface/qos:qos/output',
                '/if:interfaces/interface/type',
                '/serv:services/qos:qos/policy'
              ]
            }
          ],
          deps: ['/if:interfaces/interface/type']
        },
        {
          kind: 'container',
          name: 'lw-config',
          qname: 'mds_lw:lw-config',
          info: {
            string: 'The configuration of the GE MDS Narrowband interface'
          },
          namespace: 'com:gemds:wideband',
          presence: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/if:interfaces/interface/type'],
          children: [
            {
              kind: 'leaf',
              name: 'radio-mode',
              qname: 'mds_lw:radio-mode',
              info: {
                string:
                  'Controls the operating mode of the NIC. Setting must match on all radios on the network.\n\nStandard: Normal setting for point to multipoint networks.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't5' },
              default: 'standard'
            },
            {
              kind: 'leaf',
              name: 'device-mode',
              qname: 'mds_lw:device-mode',
              info: {
                string:
                  'Sets the role the radio will assume in the network.\n\nAccess point, remote: Valid in all Radio Modes.\n\nStore and forward: Valid only when the Radio Mode is set to store and forward.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't6' }
            },
            {
              kind: 'leaf',
              name: 'network-name',
              qname: 'mds_lw:network-name',
              info: {
                string:
                  'The name of the network.  Used to identify the logical network that\nthe device should join. If the network name does not match, the device\nwill log an event to identify network name collisions.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't7' },
              default: 'mds_lw'
            },
            {
              kind: 'leaf',
              name: 'data-compression',
              qname: 'mds_lw:data-compression',
              info: {
                string: 'Over the air data compression algorithm'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't8' },
              default: 'lzo'
            },
            {
              kind: 'leaf',
              name: 'header-compression',
              qname: 'mds_lw:header-compression',
              info: {
                string:
                  'Use Robust Header Compression to compress the IP headers. This feature\nis most useful in applications that rely on IP packets with small\npayloads, such as terminal server operations or MODBUS polling.'
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
              kind: 'leaf',
              name: 'power',
              qname: 'mds_lw:power',
              info: { string: 'The transmit power of the radio' },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'dBm',
              type: { namespace: 'com:gemds:wideband', name: 't9' },
              default: '30'
            },
            {
              kind: 'list',
              name: 'virtual-radio-channel',
              qname: 'mds_lw:virtual-radio-channel',
              info: {
                string:
                  'The list of virtual serial devices and their virtual radio channel (VRC) settings.  This is only applicable in packet-with-mac mode.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['serial-device'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'serial-device',
                  qname: 'mds_lw:serial-device',
                  info: { string: 'The name of the serial channel' },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't10'
                  }
                },
                {
                  kind: 'leaf',
                  name: 'id',
                  qname: 'mds_lw:id',
                  info: {
                    string: 'The VRC used when sending and receiving messages over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't11'
                  },
                  default: '1'
                },
                {
                  kind: 'leaf',
                  name: 'listen-on-all',
                  qname: 'mds_lw:listen-on-all',
                  info: {
                    string: 'Whether all messages from all VRCs will be recieved.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'channel',
              qname: 'mds_lw:channel',
              info: {
                string: 'Determines the frequency used by the radio.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't12' },
              default: '1',
              deps: [
                '/if:interfaces/interface/mds_lw:lw-config/auto-discover',
                '/if:interfaces/interface/mds_lw:lw-config/device-mode'
              ]
            },
            {
              kind: 'leaf',
              name: 'duplex-setting',
              qname: 'mds_lw:duplex-setting',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { namespace: 'com:gemds:wideband', name: 't13' },
              default: 'fdd-low-high',
              deps: [
                '/if:interfaces/interface/mds_lw:lw-config/auto-discover',
                '/if:interfaces/interface/mds_lw:lw-config/device-mode'
              ]
            },
            {
              kind: 'leaf',
              name: 'auto-discover',
              qname: 'mds_lw:auto-discover',
              info: {
                string: 'Automaticly discovers the channel size, channel and duplex setting'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/if:interfaces/interface/mds_lw:lw-config/device-mode'],
              type: { name: 'boolean', primitive: true },
              default: true,
              deps: ['/if:interfaces/interface/mds_lw:lw-config/device-mode']
            },
            {
              kind: 'leaf',
              name: 'channel-size',
              qname: 'mds_lw:channel-size',
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-if-nx-common',
                name: 'lw-channel'
              },
              default: '570KHz',
              deps: [
                '/if:interfaces/interface/mds_lw:lw-config/auto-discover',
                '/if:interfaces/interface/mds_lw:lw-config/device-mode'
              ]
            },
            {
              kind: 'container',
              name: 'security',
              qname: 'mds_lw:security',
              info: {
                string: 'The security configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              leafrefGroups: [['radius-server']],
              leafref_groups: [['radius-server']],
              children: [
                {
                  kind: 'leaf',
                  name: 'security-mode',
                  qname: 'mds_lw:security-mode',
                  info: {
                    string: 'The type of over the air authentication to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't14'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'encryption',
                  qname: 'mds_lw:encryption',
                  info: {
                    string: 'The type of over the air encryption to perform'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't15'
                  },
                  default: 'none'
                },
                {
                  kind: 'leaf',
                  name: 'eap-mode',
                  qname: 'mds_lw:eap-mode',
                  info: { string: 'The type of EAP to perform' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't16'
                  },
                  default: 'eap-tls',
                  deps: [
                    '/if:interfaces/interface/mds_lw:lw-config/device-mode',
                    '/if:interfaces/interface/mds_lw:lw-config/security/security-mode'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'passphrase',
                  qname: 'mds_lw:passphrase',
                  info: {
                    string:
                      'Passphrase used to secure data communications.  May be\nparsed as a string or, if 64 characters long, a hex key.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'AESCFB128IVEncryptedString',
                    primitive: true
                  },
                  deps: ['/if:interfaces/interface/mds_lw:lw-config/security/security-mode']
                },
                {
                  kind: 'leaf',
                  name: 'radius-server',
                  qname: 'mds_lw:radius-server',
                  info: {
                    string: 'Radius server for eap authentication'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/sys:system/mdssys:mds-radius/servers/name',
                  when_targets: [
                    '/if:interfaces/interface/mds_lw:lw-config/device-mode',
                    '/if:interfaces/interface/mds_lw:lw-config/security/security-mode'
                  ],
                  type: { name: 'string', primitive: true },
                  deps: [
                    '/if:interfaces/interface/mds_lw:lw-config/device-mode',
                    '/if:interfaces/interface/mds_lw:lw-config/security/security-mode',
                    '/sys:system/mdssys:mds-radius/servers'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'rekey-interval',
                  qname: 'mds_lw:rekey-interval',
                  info: {
                    string:
                      'Required elapsed time, in minutes, before renegotiating encryption keys.\nEnter 0 to renegotiate keys after one million packets have been sent,\ninstead of using a time-based interval.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'minutes',
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't17'
                  },
                  default: '180',
                  deps: [
                    '/if:interfaces/interface/mds_lw:lw-config/device-mode',
                    '/if:interfaces/interface/mds_lw:lw-config/security/encryption'
                  ]
                },
                {
                  kind: 'container',
                  name: 'pki',
                  qname: 'mds_lw:pki',
                  info: {
                    string: 'The public key infrastructure used by EAP-TLS'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: true,
                    delete: false,
                    execute: false
                  },
                  leafrefGroups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  leafref_groups: [['cert-id'], ['key-id'], ['ca-cert-id']],
                  children: [
                    {
                      kind: 'leaf',
                      name: 'cert-id',
                      qname: 'mds_lw:cert-id',
                      info: { string: 'certificate identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/client-certs/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'key-id',
                      qname: 'mds_lw:key-id',
                      info: { string: 'private key identifier' },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/private-keys/show-all/key-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/private-keys/show-all']
                    },
                    {
                      kind: 'leaf',
                      name: 'ca-cert-id',
                      qname: 'mds_lw:ca-cert-id',
                      info: {
                        string: 'ca-certificate chain identifier'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/cm:pki/ca-certs/show-all/cert-identity',
                      type: { name: 'string', primitive: true },
                      deps: ['/cm:pki/ca-certs/show-all']
                    }
                  ],
                  deps: [
                    '/if:interfaces/interface/mds_lw:lw-config/device-mode',
                    '/if:interfaces/interface/mds_lw:lw-config/security/security-mode'
                  ]
                }
              ],
              deps: [
                '/if:interfaces/interface/mds_lw:lw-config',
                '/if:interfaces/interface/mds_lw:lw-config/security/encryption',
                '/if:interfaces/interface/mds_lw:lw-config/security/passphrase',
                '/if:interfaces/interface/mds_lw:lw-config/security/security-mode'
              ]
            },
            {
              kind: 'container',
              name: 'advanced-config',
              qname: 'mds_lw:advanced-config',
              info: {
                string: 'The advanced configuration of the interface'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'enhanced-blocking',
                  qname: 'mds_lw:enhanced-blocking',
                  info: { string: 'Controls the low noise amplifier' },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'modulation-low',
                  qname: 'mds_lw:modulation-low',
                  info: {
                    string:
                      'The most robust modulation that will be selected for the weakest links and all boadcast traffic.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-nx-common',
                    name: 'lw-modulation'
                  },
                  default: 'qpsk-3/4'
                },
                {
                  kind: 'leaf',
                  name: 'modulation-high',
                  qname: 'mds_lw:modulation-high',
                  info: {
                    string: 'The fastest modulation that will be selected for strong links.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-if-nx-common',
                    name: 'lw-modulation'
                  },
                  default: '16qam-3/4'
                },
                {
                  kind: 'leaf',
                  name: 'data-retries',
                  qname: 'mds_lw:data-retries',
                  info: {
                    string: 'Number of times to retry unicast data before declaring NACK'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't18'
                  },
                  default: '7'
                },
                {
                  kind: 'leaf',
                  name: 'nic-id',
                  qname: 'mds_lw:nic-id',
                  info: {
                    string: 'Manually overrides the NIC identifier'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't19'
                  },
                  default: '0',
                  deps: ['/if:interfaces/interface/mds_lw:lw-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'packet-ttl',
                  qname: 'mds_lw:packet-ttl',
                  info: {
                    string:
                      'Length of inactivity for all over the air messaging before registering a disconnect.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'milliseconds',
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't20'
                  },
                  default: '5000'
                },
                {
                  kind: 'leaf',
                  name: 'remote-age-time',
                  qname: 'mds_lw:remote-age-time',
                  info: {
                    string: 'Length of inactivity on this device before it is disconnected.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't21'
                  },
                  default: '900'
                },
                {
                  kind: 'leaf',
                  name: 'endpoint-age-time',
                  qname: 'mds_lw:endpoint-age-time',
                  info: {
                    string:
                      'Length of inactivity on this endpoint before it is removed from the database.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't22'
                  },
                  default: '300',
                  deps: ['/if:interfaces/interface/mds_lw:lw-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'allow-retransmit',
                  qname: 'mds_lw:allow-retransmit',
                  info: {
                    string:
                      "Allow retransmission of remote-to-remote traffic. When enabled the\nAP will retransmit traffic from one remote to another based on the MAC\naddress. It will also resend any remote's broadcast traffic to all\nother remotes."
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: true,
                  deps: ['/if:interfaces/interface/mds_lw:lw-config/device-mode']
                },
                {
                  kind: 'leaf',
                  name: 'arp-cache',
                  qname: 'mds_lw:arp-cache',
                  info: {
                    string:
                      'Allow the local radio to transparently reply to ARPs it knows the\naddress for without sending it across the link, similar to proxy ARP.'
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
                  kind: 'leaf',
                  name: 'dscp-qos',
                  qname: 'mds_lw:dscp-qos',
                  info: {
                    string:
                      'Specifies that the MAC should use the DSCP field in the header to do\nQoS over the air. The three most significant bits are used as the\npriority of the packet over the air.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'fairness',
                  qname: 'mds_lw:fairness',
                  info: {
                    string:
                      'Set to allow fair usage of the channel by not having the NIC always\ncontend for the channel.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                }
              ]
            },
            {
              kind: 'container',
              name: 'alarm-settings',
              qname: 'mds_lw:alarm-settings',
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'rssi-upper-threshold',
                  qname: 'mds_lw:rssi-upper-threshold',
                  info: {
                    string:
                      'If the received RSSI is weaker than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-120'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-lower-threshold',
                  qname: 'mds_lw:rssi-lower-threshold',
                  info: {
                    string:
                      'If the received RSSI is stronger than this for more than the rssi-alarm-count packets,\nthe unit will create an event.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dBm',
                  type: { name: 'int8', primitive: true },
                  default: '-20'
                },
                {
                  kind: 'leaf',
                  name: 'rssi-alarm-count',
                  qname: 'mds_lw:rssi-alarm-count',
                  info: {
                    string:
                      'The amount of consecutive measurements required to change the alarm state.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't24'
                  },
                  default: '10'
                },
                {
                  kind: 'leaf',
                  name: 'retry-percentage',
                  qname: 'mds_lw:retry-percentage',
                  info: {
                    string:
                      'Will assert an alarm if the ratio of retries to successful transmits is greater than\nthe given percentage. The percentage is calculated over a rolling half hour window, updated\nevery 5 minutes.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'percent',
                  type: {
                    namespace: 'com:gemds:wideband',
                    name: 't25'
                  },
                  default: '10'
                }
              ]
            }
          ],
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/mds_bond:bond-config',
            '/if:interfaces/interface/mds_bond:bond-config/member',
            '/if:interfaces/interface/mds_bond:bond-config/member/interface',
            '/if:interfaces/interface/mds_lw:lw-config',
            '/if:interfaces/interface/mds_lw:lw-config/device-mode',
            '/if:interfaces/interface/name',
            '/if:interfaces/interface/type'
          ]
        },
        {
          kind: 'container',
          name: 'ipv4',
          qname: 'ip:ipv4',
          info: { string: 'Parameters for the IPv4 address family.' },
          namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
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
              name: 'enabled',
              qname: 'ip:enabled',
              info: {
                string:
                  'Controls whether IPv4 is enabled or disabled on this\ninterface.  When IPv4 is enabled, this interface is\nconnected to an IPv4 stack, and the interface can send\nand receive IPv4 packets.'
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
              kind: 'leaf',
              name: 'forwarding',
              qname: 'ip:forwarding',
              info: {
                string:
                  'Controls IPv4 packet forwarding of datagrams received by,\nbut not addressed to, this interface.  IPv4 routers\nforward datagrams.  IPv4 hosts do not (except those\nsource-routed via the host).'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: false,
              deps: ['/if:interfaces/interface/ip:ipv4/forwarding']
            },
            {
              kind: 'leaf',
              name: 'mtu',
              qname: 'ip:mtu',
              info: {
                string:
                  "The size, in octets, of the largest IPv4 packet that the\ninterface will send and receive.\n\nThe server may restrict the allowed values for this leaf,\ndepending on the interface's type.\n\nIf this leaf is not configured, the operationally used MTU\ndepends on the interface's type."
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'octets',
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
                name: 't6'
              },
              deps: ['/if:interfaces/interface/ip:ipv4/mtu']
            },
            {
              kind: 'list',
              name: 'address',
              qname: 'ip:address',
              info: {
                string: 'The list of configured IPv4 addresses on the interface.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['ip'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'ip',
                  qname: 'ip:ip',
                  info: {
                    string: 'The IPv4 address on the interface.'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    name: 'ipv4-address-no-zone',
                    primitive: true
                  }
                },
                {
                  kind: 'choice',
                  name: 'subnet',
                  qname: 'ip:subnet',
                  cases: [
                    {
                      kind: 'case',
                      name: 'prefix-length',
                      qname: 'ip:prefix-length',
                      children: [
                        {
                          kind: 'leaf',
                          name: 'prefix-length',
                          qname: 'ip:prefix-length',
                          info: {
                            string: 'The length of the subnet prefix.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
                            name: 't7'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'netmask',
                      qname: 'ip:netmask',
                      children: ''
                    }
                  ],
                  mandatory: true
                }
              ]
            },
            {
              kind: 'list',
              name: 'neighbor',
              qname: 'ip:neighbor',
              info: {
                string:
                  'A list of mappings from IPv4 addresses to\nlink-layer addresses.\n\nEntries in this list are used as static entries in the\nARP Cache.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['ip'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'ip',
                  qname: 'ip:ip',
                  info: {
                    string: 'The IPv4 address of the neighbor node.'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    name: 'ipv4-address-no-zone',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'link-layer-address',
                  qname: 'ip:link-layer-address',
                  info: {
                    string: 'The link-layer address of the neighbor node.'
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
                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-yang-types',
                    name: 'phys-address'
                  }
                }
              ]
            },
            {
              kind: 'container',
              name: 'dhcp',
              qname: 'mdsif:dhcp',
              info: {
                string: 'configure the interface to obtain address and other settings via DHCPv4'
              },
              namespace: 'com:gemds:mds-interfaces',
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
                  name: 'client-identifier',
                  qname: 'mdsif:client-identifier',
                  info: {
                    string: 'The dhcp-client-identifier option sent to the server'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'string', primitive: true }
                },
                {
                  kind: 'leaf',
                  name: 'request-hostname',
                  qname: 'mdsif:request-hostname',
                  info: { string: 'Request host name.' },
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
                  kind: 'leaf',
                  name: 'request-dns',
                  qname: 'mdsif:request-dns',
                  info: {
                    string: 'Request DNS search domains, domain names and servers'
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
                  kind: 'leaf',
                  name: 'request-routers',
                  qname: 'mdsif:request-routers',
                  info: { string: 'Request default router(s)' },
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
                  kind: 'leaf',
                  name: 'point-to-point-connection',
                  qname: 'mdsif:point-to-point-connection',
                  info: {
                    string:
                      'Handle address assigment for this interface as if\nit is a point-to-point connection'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
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
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-interfaces',
                    name: 't14'
                  },
                  default: '60'
                }
              ]
            }
          ],
          deps: ['/if:interfaces/interface/ip:type']
        },
        {
          kind: 'container',
          name: 'ipv6',
          qname: 'ip:ipv6',
          info: { string: 'Parameters for the IPv6 address family.' },
          namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
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
              name: 'enabled',
              qname: 'ip:enabled',
              info: {
                string:
                  'Controls whether IPv6 is enabled or disabled on this\ninterface.  When IPv6 is enabled, this interface is\nconnected to an IPv6 stack, and the interface can send\nand receive IPv6 packets.'
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
              kind: 'leaf',
              name: 'forwarding',
              qname: 'ip:forwarding',
              info: {
                string:
                  'Controls IPv6 packet forwarding of datagrams received by,\nbut not addressed to, this interface.  IPv6 routers\nforward datagrams.  IPv6 hosts do not (except those\nsource-routed via the host).'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'boolean', primitive: true },
              default: false,
              deps: ['/if:interfaces/interface/ip:ipv6/forwarding']
            },
            {
              kind: 'leaf',
              name: 'mtu',
              qname: 'ip:mtu',
              info: {
                string:
                  "The size, in octets, of the largest IPv6 packet that the\ninterface will send and receive.\n\nThe server may restrict the allowed values for this leaf,\ndepending on the interface's type.\n\nIf this leaf is not configured, the operationally used MTU\ndepends on the interface's type."
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'octets',
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
                name: 't8'
              }
            },
            {
              kind: 'list',
              name: 'address',
              qname: 'ip:address',
              info: {
                string: 'The list of configured IPv6 addresses on the interface.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['ip'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'ip',
                  qname: 'ip:ip',
                  info: {
                    string: 'The IPv6 address on the interface.'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    name: 'ipv6-address-no-zone',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'prefix-length',
                  qname: 'ip:prefix-length',
                  info: { string: 'The length of the subnet prefix.' },
                  mandatory: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-ip',
                    name: 't9'
                  }
                }
              ]
            },
            {
              kind: 'list',
              name: 'neighbor',
              qname: 'ip:neighbor',
              info: {
                string:
                  'A list of mappings from IPv6 addresses to\nlink-layer addresses.\n\nEntries in this list are used as static entries in the\nNeighbor Cache.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['ip'],
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              children: [
                {
                  kind: 'key',
                  name: 'ip',
                  qname: 'ip:ip',
                  info: {
                    string: 'The IPv6 address of the neighbor node.'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    name: 'ipv6-address-no-zone',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'link-layer-address',
                  qname: 'ip:link-layer-address',
                  info: {
                    string: 'The link-layer address of the neighbor node.'
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
                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-yang-types',
                    name: 'phys-address'
                  }
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'dup-addr-detect-transmits',
              qname: 'ip:dup-addr-detect-transmits',
              info: {
                string:
                  'The number of consecutive Neighbor Solicitation messages\nsent while performing Duplicate Address Detection on a\ntentative address.  A value of zero indicates that\nDuplicate Address Detection is not performed on\ntentative addresses.  A value of one indicates a single\ntransmission with no follow-up retransmissions.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: { name: 'uint32', primitive: true },
              default: '1'
            },
            {
              kind: 'container',
              name: 'autoconf',
              qname: 'ip:autoconf',
              info: {
                string:
                  'Parameters to control the autoconfiguration of IPv6\naddresses, as described in RFC 4862.'
              },
              mandatory: true,
              access: {
                create: false,
                read: true,
                update: true,
                delete: false,
                execute: false
              },
              children: [
                {
                  kind: 'leaf',
                  name: 'create-global-addresses',
                  qname: 'ip:create-global-addresses',
                  info: {
                    string:
                      'If enabled, the host creates global addresses as\ndescribed in RFC 4862.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'create-temporary-addresses',
                  qname: 'ip:create-temporary-addresses',
                  info: {
                    string:
                      'If enabled, the host creates temporary addresses as\ndescribed in RFC 4941.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'temporary-valid-lifetime',
                  qname: 'ip:temporary-valid-lifetime',
                  info: {
                    string: 'The time period during which the temporary address\nis valid.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: { name: 'uint32', primitive: true },
                  default: '604800'
                },
                {
                  kind: 'leaf',
                  name: 'temporary-preferred-lifetime',
                  qname: 'ip:temporary-preferred-lifetime',
                  info: {
                    string: 'The time period during which the temporary address is\npreferred.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'seconds',
                  type: { name: 'uint32', primitive: true },
                  default: '86400'
                },
                {
                  kind: 'leaf',
                  name: 'enabled',
                  qname: 'mdsif:enabled',
                  info: {
                    string: 'Enable auto configuration via router discovery mechanisms.'
                  },
                  namespace: 'com:gemds:mds-interfaces',
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
                  kind: 'leaf',
                  name: 'router-solicitation-interval',
                  qname: 'mdsif:router-solicitation-interval',
                  info: {
                    string: 'Number of seconds to wait between Router Solicitations.'
                  },
                  namespace: 'com:gemds:mds-interfaces',
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'uint32', primitive: true },
                  default: '4'
                },
                {
                  kind: 'leaf',
                  name: 'add-default-route',
                  qname: 'mdsif:add-default-route',
                  info: {
                    string: 'Add default route over this interface'
                  },
                  namespace: 'com:gemds:mds-interfaces',
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
                  kind: 'container',
                  name: 'prefix-delegation',
                  qname: 'mdsif:prefix-delegation',
                  namespace: 'com:gemds:mds-interfaces',
                  presence: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['interface']],
                  leafref_groups: [['interface']],
                  children: [
                    {
                      kind: 'leaf',
                      name: 'interface',
                      qname: 'mdsif:interface',
                      info: {
                        string: 'The interface to which the the received /64 prefix is delegated.'
                      },
                      mandatory: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/if:interfaces/interface/name',
                      type: { name: 'string', primitive: true },
                      deps: ['/if:interfaces/interface']
                    }
                  ]
                }
              ]
            },
            {
              kind: 'container',
              name: 'dhcp',
              qname: 'mdsif:dhcp',
              info: {
                string: 'configure the interface to obtain address and other settings via DHCPv6'
              },
              namespace: 'com:gemds:mds-interfaces',
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
                  name: 'client-identifier',
                  qname: 'mdsif:client-identifier',
                  info: {
                    string: 'The dhcp-client-identifier option sent to the server'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'string', primitive: true }
                },
                {
                  kind: 'leaf',
                  name: 'force-start',
                  qname: 'mdsif:force-start',
                  info: {
                    string:
                      "Normally, DHCPv6 client is started if RA is received with 'managed' or\n'other' flag set. Enable this parameter to start DHCPv6 client without\nrelying on receipt of RA."
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: { name: 'boolean', primitive: true },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'request-info',
                  qname: 'mdsif:request-info',
                  info: {
                    string: 'Perform an information only (other) request over DHCPv6.'
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
                  kind: 'leaf',
                  name: 'request-normal-address',
                  qname: 'mdsif:request-normal-address',
                  info: {
                    string: 'Perform a normal (IA_NA) address query over DHCPv6.'
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
                },
                {
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
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-interfaces',
                    name: 't13'
                  },
                  default: '60'
                }
              ]
            }
          ],
          deps: ['/if:interfaces/interface/ip:type']
        }
      ],
      deps: ['/if:interfaces/interface']
    }
  ]
})
