export const servicesResult = JSON.stringify({
  contains_when_statement: true,
  kind: 'container',
  name: 'services',
  qname: 'serv:services',
  info: {
    string: 'Services which are configurable on this system'
  },
  mandatory: true,
  exists: true,
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
      name: 'services-status',
      qname: 'serv:services-status',
      mandatory: true,
      min_elements: 0,
      max_elements: 'unbounded',
      config: false,
      is_config_false_callpoint: true,
      key: ['name'],
      exists: true,
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
          qname: 'serv:name',
          info: {
            string: 'Service Name.'
          },
          mandatory: true,
          config: false,
          is_config_false_callpoint: true,
          access: {
            create: false,
            read: true,
            update: false,
            delete: false,
            execute: false
          },
          type: {
            name: 'string',
            primitive: true
          },
          readonly: true
        },
        {
          kind: 'leaf',
          name: 'status',
          qname: 'serv:status',
          info: {
            string: 'The current state of the service'
          },
          config: false,
          is_config_false_callpoint: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:mds-services',
            name: 't0'
          },
          readonly: true
        }
      ],
      readonly: true
    },
    {
      kind: 'container',
      name: 'dhcp',
      qname: 'dhcp:dhcp',
      namespace: 'com:gemds:dhcp-service',
      mandatory: true,
      exists: true,
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
          name: 'leases',
          qname: 'dhcp:leases',
          info: {
            string: 'A table showing the currently assigned DHCP leases'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          config: false,
          is_config_false_callpoint: true,
          key: ['ip-address'],
          exists: true,
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
              name: 'ip-address',
              qname: 'dhcp:ip-address',
              info: {
                string: 'The IP address assigned to the client'
              },
              mandatory: true,
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: false,
                read: true,
                update: false,
                delete: false,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'mac-address',
              qname: 'dhcp:mac-address',
              info: {
                string: 'The MAC address of the client.'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-yang-types',
                name: 'mac-address'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'expiry-time',
              qname: 'dhcp:expiry-time',
              info: {
                string: 'The expiry time of the lease.'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'date-and-time',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'hostname',
              qname: 'dhcp:hostname',
              info: {
                string: 'The hostname of the client, if available'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'client-id',
              qname: 'dhcp:client-id',
              info: {
                string: 'The client ID of the client, if available'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            }
          ],
          readonly: true
        },
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'dhcp:enabled',
          info: {
            string: 'Whether or not to run the dhcp service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false,
          deps: ['/serv:services/dhcp:dhcp/enabled']
        },
        {
          kind: 'leaf',
          name: 'default-lease-time',
          qname: 'dhcp:default-lease-time',
          info: {
            string:
              "The length in seconds that will be assigned to a lease if the client\nrequesting the lease does not ask for a specific expiration time.\nThis is used for both DHCPv4 and DHCPv6 leases (it is also known as\nthe 'valid lifetime' in DHCPv6)."
          },
          value: '43200',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'uint32',
            primitive: true
          },
          default: '43200'
        },
        {
          kind: 'list',
          name: 'v4subnet',
          qname: 'dhcp:v4subnet',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['network'],
          exists: true,
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
              name: 'network',
              qname: 'dhcp:network',
              info: {
                string:
                  'An IP address with prefix length (eg: x.x.x.x/yy),\nthat will designate the subnet given in the DHCP lease.'
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
                name: 'ipv4-prefix',
                primitive: true
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/enabled',
                '/if:interfaces/interface/ip:ipv4',
                '/serv:services/dhcp:dhcp/enabled',
                '/serv:services/dhcp:dhcp/v4subnet/network'
              ]
            },
            {
              kind: 'leaf',
              name: 'range-start',
              qname: 'dhcp:range-start',
              info: {
                string: 'The starting (low) address of IP address to assign on this\nsubnet'
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
                name: 'ipv4-address',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'range-end',
              qname: 'dhcp:range-end',
              info: {
                string: 'The ending (high) address of IP address to assign on this subnet'
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
                name: 'ipv4-address',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'broadcast-address',
              qname: 'dhcp:broadcast-address',
              info: {
                string: 'An optional broadcast address to pass to the client'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'ipv4-address',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'router',
              qname: 'dhcp:router',
              info: {
                string: 'An optional default router to pass to the client'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'ipv4-address',
                primitive: true
              }
            },
            {
              kind: 'leaf-list',
              name: 'domain-name-servers',
              qname: 'dhcp:domain-name-servers',
              info: {
                string: 'An optional list of DNS servers to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't1'
              }
            },
            {
              kind: 'leaf',
              name: 'domain-name',
              qname: 'dhcp:domain-name',
              info: {
                string: 'An optional domain-name to pass to the client'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'domain-name'
              }
            },
            {
              kind: 'leaf-list',
              name: 'domain-search',
              qname: 'dhcp:domain-search',
              info: {
                string: 'An optional search list of domain names to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't3'
              }
            },
            {
              kind: 'leaf-list',
              name: 'ntp-servers',
              qname: 'dhcp:ntp-servers',
              info: {
                string: 'An optional list of NTP servers to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't5'
              }
            },
            {
              kind: 'leaf-list',
              name: 'netbios-name-servers',
              qname: 'dhcp:netbios-name-servers',
              info: {
                string:
                  'An optional list of RFC 1001/1002 NBNS name servers listed in\norder of preference. NetBIOS Name Service is currently more\ncommonly referred to as WINS.'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't7'
              }
            }
          ]
        },
        {
          kind: 'list',
          name: 'v6subnet',
          qname: 'dhcp:v6subnet',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['network'],
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          leafrefGroups: [['constructor-interface']],
          leafref_groups: [['constructor-interface']],
          children: [
            {
              kind: 'key',
              name: 'network',
              qname: 'dhcp:network',
              info: {
                string:
                  'An IPv6 network address with prefix length (eg: xx:xx:1::/yy),\nthat will designate the subnet given in the DHCP lease.'
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
                name: 'ipv6-prefix',
                primitive: true
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/enabled',
                '/if:interfaces/interface/ip:ipv6',
                '/serv:services/dhcp:dhcp/enabled',
                '/serv:services/dhcp:dhcp/v6subnet/network'
              ]
            },
            {
              kind: 'leaf',
              name: 'constructor-interface',
              qname: 'dhcp:constructor-interface',
              info: {
                string: 'The interface that is used to construct IPv6 range.'
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
                namespace: 'com:gemds:dhcp-service',
                name: 't8'
              },
              deps: ['/if:interfaces/interface']
            },
            {
              kind: 'leaf',
              name: 'range-start',
              qname: 'dhcp:range-start',
              info: {
                string: 'The starting (low) address of IP address to assign on this\nsubnet'
              },
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
              name: 'range-end',
              qname: 'dhcp:range-end',
              info: {
                string: 'The ending (high) address of IP address to assign on this subnet'
              },
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
              kind: 'leaf-list',
              name: 'domain-name-servers',
              qname: 'dhcp:domain-name-servers',
              info: {
                string: 'An optional list of DNS servers to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't10'
              }
            },
            {
              kind: 'leaf-list',
              name: 'domain-search',
              qname: 'dhcp:domain-search',
              info: {
                string: 'An optional search list of domain names to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't12'
              }
            },
            {
              kind: 'leaf-list',
              name: 'ntp-servers',
              qname: 'dhcp:ntp-servers',
              info: {
                string: 'An optional list of NTP servers to pass to the client'
              },
              ordered_by: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:dhcp-service',
                name: 't14'
              }
            }
          ]
        },
        {
          kind: 'container',
          name: 'relay',
          qname: 'dhcp:relay',
          mandatory: true,
          exists: true,
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
              name: 'interface-group',
              qname: 'dhcp:interface-group',
              info: {
                string: 'Group of interfaces on which relay service is provided.'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['name'],
              exists: true,
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
                  name: 'name',
                  qname: 'dhcp:name',
                  info: {
                    string: 'Name of the interface group.'
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
                    name: 'string',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf-list',
                  name: 'interface',
                  qname: 'dhcp:interface',
                  info: {
                    string: 'Name of the interface.'
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
                  type: {
                    namespace: 'com:gemds:dhcp-service',
                    name: 't17'
                  },
                  deps: ['/if:interfaces/interface']
                }
              ]
            },
            {
              kind: 'container',
              name: 'ipv4',
              qname: 'dhcp:ipv4',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['interface-group'], ['active-server-group']],
              leafref_groups: [['interface-group'], ['active-server-group']],
              children: [
                {
                  kind: 'list',
                  name: 'server-group',
                  qname: 'dhcp:server-group',
                  info: {
                    string: 'Group of IPv4 servers.'
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
                  children: [
                    {
                      kind: 'key',
                      name: 'name',
                      qname: 'dhcp:name',
                      info: {
                        string: 'Name of the IPv4 server group.'
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
                        name: 'string',
                        primitive: true
                      }
                    },
                    {
                      kind: 'leaf-list',
                      name: 'address',
                      qname: 'dhcp:address',
                      info: {
                        string: 'IPv4 address of the server.'
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
                        namespace: 'com:gemds:dhcp-service',
                        name: 't19'
                      }
                    }
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'interface-group',
                  qname: 'dhcp:interface-group',
                  info: {
                    string: 'Interface group serviced by IPv4 relay.'
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
                  leafref_target: '/serv:services/dhcp:dhcp/relay/interface-group/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/serv:services/dhcp:dhcp/relay/interface-group']
                },
                {
                  kind: 'leaf',
                  name: 'active-server-group',
                  qname: 'dhcp:active-server-group',
                  info: {
                    string: 'Server group used by IPv4 relay.'
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
                  leafref_target: '/serv:services/dhcp:dhcp/relay/ipv4/server-group/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/serv:services/dhcp:dhcp/relay/ipv4/server-group']
                }
              ]
            },
            {
              kind: 'container',
              name: 'ipv6',
              qname: 'dhcp:ipv6',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['interface-group'], ['active-server-group']],
              leafref_groups: [['interface-group'], ['active-server-group']],
              children: [
                {
                  kind: 'list',
                  name: 'server-group',
                  qname: 'dhcp:server-group',
                  info: {
                    string: 'Group of IPv6 servers.'
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
                  children: [
                    {
                      kind: 'key',
                      name: 'name',
                      qname: 'dhcp:name',
                      info: {
                        string: 'Name of the IPv6 server group.'
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
                        name: 'string',
                        primitive: true
                      }
                    },
                    {
                      kind: 'leaf-list',
                      name: 'address',
                      qname: 'dhcp:address',
                      info: {
                        string: 'IPv6 address of the server.'
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
                        namespace: 'com:gemds:dhcp-service',
                        name: 't21'
                      }
                    }
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'interface-group',
                  qname: 'dhcp:interface-group',
                  info: {
                    string: 'Interface group serviced by IPv6 relay.'
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
                  leafref_target: '/serv:services/dhcp:dhcp/relay/interface-group/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/serv:services/dhcp:dhcp/relay/interface-group']
                },
                {
                  kind: 'leaf',
                  name: 'active-server-group',
                  qname: 'dhcp:active-server-group',
                  info: {
                    string: 'Server group used by IPv6 relay.'
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
                  leafref_target: '/serv:services/dhcp:dhcp/relay/ipv6/server-group/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/serv:services/dhcp:dhcp/relay/ipv6/server-group']
                }
              ]
            }
          ]
        }
      ],
      deps: [
        '/serv:services/dhcp:dhcp/enabled',
        '/serv:services/dhcp:dhcp/relay/ipv4',
        '/serv:services/dhcp:dhcp/relay/ipv6',
        '/serv:services/dhcp:dhcp/v4subnet',
        '/serv:services/dhcp:dhcp/v6subnet'
      ]
    },
    {
      kind: 'container',
      name: 'iperf',
      qname: 'iperf:iperf',
      namespace: 'com:gemds:mds-iperf-service',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'iperf:enabled',
          info: {
            string: 'Whether or not to run the iperf service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'port',
          qname: 'iperf:port',
          info: {
            string: 'The port the iperf server will listen for connections on.'
          },
          value: '5001',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:mds-iperf-service',
            name: 't0'
          },
          default: '5001'
        },
        {
          kind: 'leaf',
          name: 'mode',
          qname: 'iperf:mode',
          info: {
            string: 'The type of connection the iperf server will use.'
          },
          value: 'tcp',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:mds-iperf-service',
            name: 't1'
          },
          default: 'tcp'
        }
      ]
    },
    {
      kind: 'container',
      name: 'serial',
      qname: 'serial:serial',
      namespace: 'com:gemds:mds-serial',
      mandatory: true,
      exists: true,
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
          name: 'ports',
          qname: 'serial:ports',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'serial:name',
              info: {
                string: 'The name of the serial port.'
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
                name: 'string',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'line-mode',
              qname: 'serial:line-mode',
              info: {
                string: 'The line mode of the serial port'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't0'
              },
              default: 'rs232',
              deps: ['/serv:services/serial:serial/ports/line-mode']
            },
            {
              kind: 'leaf',
              name: 'baud-rate',
              qname: 'serial:baud-rate',
              info: {
                string: 'The serial port baud rate'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: true,
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't1'
              },
              default: 'b115200',
              deps: ['/serv:services/serial:serial/ports/line-mode']
            },
            {
              kind: 'leaf',
              name: 'byte-format',
              qname: 'serial:byte-format',
              info: {
                string: 'The data byte format'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: true,
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't2'
              },
              default: 'bf8n1',
              deps: ['/serv:services/serial:serial/ports/line-mode']
            },
            {
              kind: 'leaf',
              name: 'hw-flow-control',
              qname: 'serial:hw-flow-control',
              info: {
                string: 'Hardware flow control enable/disable'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/serv:services/serial:serial/ports/line-mode'],
              evaluated_when_entry: true,
              type: {
                name: 'boolean',
                primitive: true
              },
              default: false,
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/hw-flow-control',
                '/serv:services/serial:serial/ports/line-mode',
                '/serv:services/serial:serial/ports/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'hw-device-mode',
              qname: 'serial:hw-device-mode',
              info: {
                string: 'Device mode for hardware flow control'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't3'
              },
              default: 'DCE',
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/hw-flow-control',
                '/serv:services/serial:serial/ports/line-mode',
                '/serv:services/serial:serial/ports/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'cts-delay',
              qname: 'serial:cts-delay',
              info: {
                string:
                  'DCE: Time to delay CTS after RTS.  CTSKEY: Time to delay data after CTS. (milliseconds)'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                name: 'uint16',
                primitive: true
              },
              default: '0',
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/hw-flow-control',
                '/serv:services/serial:serial/ports/line-mode',
                '/serv:services/serial:serial/ports/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'cts-hold',
              qname: 'serial:cts-hold',
              info: {
                string: 'Time to hold CTS up after data is transmitted (milliseconds)'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                name: 'uint16',
                primitive: true
              },
              default: '0',
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/hw-device-mode',
                '/serv:services/serial:serial/ports/hw-flow-control',
                '/serv:services/serial:serial/ports/line-mode',
                '/serv:services/serial:serial/ports/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'vmin',
              qname: 'serial:vmin',
              info: {
                string:
                  'The minimum number of characters read on the serial port\nbefore the data is processed'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: true,
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't4'
              },
              default: '255',
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/name'
              ]
            },
            {
              kind: 'leaf',
              name: 'vtime',
              qname: 'serial:vtime',
              info: {
                string:
                  'The minimum time (in milliseconds) between reads\nof data on the serial port'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: 'milliseconds',
              evaluated_when_entry: true,
              type: {
                name: 'uint16',
                primitive: true
              },
              default: '10',
              deps: [
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/payload-serial-2-port',
                '/serv:interfaces/interface/sd-config/radio-config/basic-settings/serial-payload-port',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/enabled',
                '/serv:interfaces/interface/sd-config/radio-config/dlink/serial-port',
                '/serv:services/serial:serial/ports/name'
              ]
            }
          ]
        },
        {
          kind: 'list',
          name: 'ports-status',
          qname: 'serial:ports-status',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          config: false,
          is_config_false_callpoint: true,
          exists: true,
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
              name: 'name',
              qname: 'serial:name',
              info: {
                string: 'The name of the serial port.'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'container',
              name: 'capabilities',
              qname: 'serial:capabilities',
              mandatory: true,
              config: false,
              is_config_false_callpoint: true,
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
                  name: 'rs485-2-wire',
                  qname: 'serial:rs485-2-wire',
                  info: {
                    string: 'If true, this device supports half-duplex RS-485 operation'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'rs485-4-wire',
                  qname: 'serial:rs485-4-wire',
                  info: {
                    string: 'If true, this device supports full-duplex RS-485 operation'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'modem-control',
                  qname: 'serial:modem-control',
                  info: {
                    string: 'If true, this device supports modem-control handshaking lines'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  readonly: true
                }
              ],
              readonly: true
            }
          ],
          readonly: true
        },
        {
          kind: 'container',
          name: 'console',
          qname: 'serial:console',
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [['serial-ports']],
          leafref_groups: [['serial-ports']],
          children: [
            {
              kind: 'leaf-list',
              name: 'serial-ports',
              qname: 'serial:serial-ports',
              info: {
                string:
                  'The serial ports on which to run a login-console.\nIf this list is empty, there will be no serial consoles enabled.\nMake sure this is what you want!'
              },
              value: ['COM1', 'USB1'],
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/serial:serial/ports/name',
              type: {
                namespace: 'com:gemds:mds-serial',
                name: 't6'
              },
              deps: ['/serv:services/serial:serial/ports']
            }
          ]
        },
        {
          kind: 'container',
          name: 'terminal-server',
          qname: 'serial:terminal-server',
          mandatory: true,
          exists: true,
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
              name: 'server',
              qname: 'serial:server',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['serial-port'],
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['serial-port']],
              leafref_groups: [['serial-port']],
              children: [
                {
                  kind: 'key',
                  name: 'serial-port',
                  qname: 'serial:serial-port',
                  info: {
                    string: 'The serial port to operate this terminal-server instance on'
                  },
                  mandatory: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/serv:services/serial:serial/ports/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/serv:services/serial:serial/ports']
                },
                {
                  kind: 'leaf',
                  name: 'description',
                  qname: 'serial:description',
                  info: {
                    string: 'A optional description for this terminal-server instance'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'enabled',
                  qname: 'serial:enabled',
                  info: {
                    string: 'Whether or not to run the terminal server service'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: true
                },
                {
                  kind: 'leaf',
                  name: 'display-banner',
                  qname: 'serial:display-banner',
                  info: {
                    string:
                      'When set to true, banner will be printed to port when\nentering terminal server'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: true
                },
                {
                  kind: 'container',
                  name: 'mode',
                  qname: 'serial:mode',
                  info: {
                    string: 'The terminal server operating mode.'
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
                      kind: 'choice',
                      name: 'tcp-or-udp',
                      qname: 'serial:tcp-or-udp',
                      cases: [
                        {
                          kind: 'case',
                          name: 'tcp',
                          qname: 'serial:tcp',
                          children: [
                            {
                              kind: 'container',
                              name: 'tcp-server',
                              qname: 'serial:tcp-server',
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
                                  name: 'server-mode',
                                  qname: 'serial:server-mode',
                                  info: {
                                    string:
                                      'The TCP server mode to use, based on your network connections.\nThe modes represent the following connections:\nstreaming - tcp data is streamed as it arrives\nqueued - used in a polled network where serial data is queued on a per-transaction basis, with one transaction serviced at a time\n'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-serial',
                                    name: 't7'
                                  },
                                  default: 'streaming-tcp'
                                },
                                {
                                  kind: 'leaf',
                                  name: 'port',
                                  qname: 'serial:port',
                                  info: {
                                    string: 'The local port of the server'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                    name: 'port-number'
                                  },
                                  default: '30011',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/port'
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'idle-timeout',
                                  qname: 'serial:idle-timeout',
                                  info: {
                                    string:
                                      'The time interval (in secs) after which a tcp connection is\ndisconnected if there is no data activity to/from the client'
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
                                    name: 'uint32',
                                    primitive: true
                                  },
                                  default: '30'
                                },
                                {
                                  kind: 'leaf',
                                  name: 'transaction-timeout',
                                  qname: 'serial:transaction-timeout',
                                  info: {
                                    string:
                                      'The time interval (in ms) after which a serial transaction is aborted\nif there is no data activity to or from the serial port.\nRange: 500-65535'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode'
                                  ],
                                  units: 'milliseconds',
                                  evaluated_when_entry: false,
                                  type: {
                                    name: 'uint16',
                                    primitive: true
                                  },
                                  default: '3500',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode',
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/transaction-timeout'
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'drop-unsolicited-serial-traffic',
                                  qname: 'serial:drop-unsolicited-serial-traffic',
                                  info: {
                                    string:
                                      'If enabled, the server will drop unexpected serial traffic. Recommended\nonly for polled systems.'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode'
                                  ],
                                  evaluated_when_entry: false,
                                  type: {
                                    name: 'boolean',
                                    primitive: true
                                  },
                                  default: true,
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode'
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'connection-policy',
                                  qname: 'serial:connection-policy',
                                  info: {
                                    string:
                                      'When a TCP connection is attempted, while there is already an ongoing\nconnection, this controls which connection is allowed. If not set, the\nbehavior is to drop existing if the idle timeout is disabled (set to 0)\nand to drop new otherwise.'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode'
                                  ],
                                  evaluated_when_entry: false,
                                  type: {
                                    namespace: 'com:gemds:mds-serial',
                                    name: 't12'
                                  },
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/server-mode'
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'container',
                              name: 'tcp-client',
                              qname: 'serial:tcp-client',
                              info: {
                                string: 'TCP terminal server configuration.'
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
                                  kind: 'container',
                                  name: 'remote',
                                  qname: 'serial:remote',
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
                                      name: 'address',
                                      qname: 'serial:address',
                                      info: {
                                        string:
                                          'The IPv4/IPv6 address used when sending serial data.'
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
                                        name: 'ip-address'
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'port',
                                      qname: 'serial:port',
                                      info: {
                                        string:
                                          'The UDP port number used when sending serial data to the remote address.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                        name: 'port-number'
                                      },
                                      default: '30011'
                                    }
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'idle-timeout',
                                  qname: 'serial:idle-timeout',
                                  info: {
                                    string:
                                      'The time interval (in secs) after which a tcp connection is\ndisconnected if there is no data activity to/from the remote'
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
                          name: 'modbus-tcp',
                          qname: 'serial:modbus-tcp',
                          children: [
                            {
                              kind: 'leaf',
                              name: 'modbus-tcp-mode',
                              qname: 'serial:modbus-tcp-mode',
                              info: {
                                string:
                                  'The mode in which this instance of the MODBUS TCP service should operate.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:mds-serial',
                                name: 't13'
                              },
                              default: 'server'
                            },
                            {
                              kind: 'container',
                              name: 'modbus-tcp',
                              qname: 'serial:modbus-tcp',
                              info: {
                                string:
                                  'MODBUS/TCP to MODBUS/RTU MODBUS/ASCII terminal server configuration.'
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
                                  name: 'mode',
                                  qname: 'serial:mode',
                                  mandatory: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-serial',
                                    name: 't14'
                                  }
                                },
                                {
                                  kind: 'leaf',
                                  name: 'port',
                                  qname: 'serial:port',
                                  info: {
                                    string: 'The local port of this server'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp-mode'
                                  ],
                                  evaluated_when_entry: false,
                                  type: {
                                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                    name: 'port-number'
                                  },
                                  default: '502',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp-mode',
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp/port'
                                  ]
                                },
                                {
                                  kind: 'container',
                                  name: 'remote-ips',
                                  qname: 'serial:remote-ips',
                                  info: {
                                    string: 'The remote server address and port'
                                  },
                                  mandatory: true,
                                  access: {
                                    create: false,
                                    read: true,
                                    update: true,
                                    delete: false,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp-mode'
                                  ],
                                  evaluated_when_entry: false,
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'serial:address',
                                      info: {
                                        string:
                                          'The IPv4/IPv6 address used when sending serial data.'
                                      },
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
                                      name: 'port',
                                      qname: 'serial:port',
                                      info: {
                                        string:
                                          'The port number used when sending serial data to the remote address.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                        name: 'port-number'
                                      },
                                      default: '502'
                                    }
                                  ],
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp',
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp-mode',
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp/remote-ips/address'
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'idle-timeout',
                                  qname: 'serial:idle-timeout',
                                  info: {
                                    string:
                                      'The time interval (in secs) after which a tcp connection is\ndisconnected if there is no data activity to/from the client'
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
                                    name: 'uint32',
                                    primitive: true
                                  },
                                  default: '30'
                                },
                                {
                                  kind: 'leaf',
                                  name: 'transaction-timeout',
                                  qname: 'serial:transaction-timeout',
                                  info: {
                                    string:
                                      'The time interval (in ms) after which a serial transaction is aborted\nif there is no data activity to or from the serial port.\nRange: 500-65535'
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
                                    name: 'uint16',
                                    primitive: true
                                  },
                                  default: '3500',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp/transaction-timeout'
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          kind: 'case',
                          name: 'udp',
                          qname: 'serial:udp',
                          children: [
                            {
                              kind: 'container',
                              name: 'udp',
                              qname: 'serial:udp',
                              info: {
                                string: 'UDP terminal server configuration.'
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
                                  name: 'mode',
                                  qname: 'serial:mode',
                                  info: {
                                    string:
                                      'The UDP mode to use, based on your network connections.\nThe modes represent the following connections:\npoint-to-point - from a single device to another single device\npoint-to-multipoint - from a single device to a group of devices\nmultipoint-to-point - from a device in the group to a single device\nmultipoint-to-multipoint - from a device in the group to a group of devices\nqueued - a form of point-to-point where serial data is queued on a per-transaction basis, with one transaction serviced at a time\n'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-serial',
                                    name: 't15'
                                  },
                                  default: 'point-to-point'
                                },
                                {
                                  kind: 'leaf',
                                  name: 'port',
                                  qname: 'serial:port',
                                  info: {
                                    string: 'The local port of the server'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ],
                                  evaluated_when_entry: false,
                                  type: {
                                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                    name: 'port-number'
                                  },
                                  default: '30011',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode',
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/port'
                                  ]
                                },
                                {
                                  kind: 'leaf',
                                  name: 'transaction-timeout',
                                  qname: 'serial:transaction-timeout',
                                  info: {
                                    string:
                                      'The time interval (in ms) after which a serial transaction is aborted\nif there is no data activity to or from the serial port.\nRange: 500-65535'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ],
                                  units: 'milliseconds',
                                  evaluated_when_entry: false,
                                  type: {
                                    name: 'uint16',
                                    primitive: true
                                  },
                                  default: '3500',
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode',
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/transaction-timeout'
                                  ]
                                },
                                {
                                  kind: 'container',
                                  name: 'remote',
                                  qname: 'serial:remote',
                                  info: {
                                    string: 'The configuration for sending to a remote device.'
                                  },
                                  mandatory: true,
                                  access: {
                                    create: false,
                                    read: true,
                                    update: true,
                                    delete: false,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ],
                                  evaluated_when_entry: false,
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'serial:address',
                                      info: {
                                        string:
                                          'The IPv4/IPv6 address used when sending serial data.'
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
                                        name: 'ip-address'
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'port',
                                      qname: 'serial:port',
                                      info: {
                                        string:
                                          'The UDP port number used when sending serial data to the remote address.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                        name: 'port-number'
                                      },
                                      default: '30011'
                                    }
                                  ],
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ]
                                },
                                {
                                  kind: 'container',
                                  name: 'multicast',
                                  qname: 'serial:multicast',
                                  info: {
                                    string: 'The multicast group configuration.'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  when_targets: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ],
                                  leafrefGroups: [['bind-interface']],
                                  leafref_groups: [['bind-interface']],
                                  evaluated_when_entry: false,
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'serial:address',
                                      info: {
                                        string:
                                          'The multicast IPv4/IPv6 address in the form of 224.0.0.1 or FF01:::::::1.'
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
                                        namespace: 'com:gemds:mds-serial',
                                        name: 'ip-multicast-group-address'
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'port',
                                      qname: 'serial:port',
                                      info: {
                                        string: 'The UDP port number to use.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                        name: 'port-number'
                                      },
                                      default: '30011',
                                      deps: [
                                        '/serv:services/serial:serial/terminal-server/server/mode/udp/multicast/port'
                                      ]
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'ttl',
                                      qname: 'serial:ttl',
                                      info: {
                                        string:
                                          'The multicast TTL threshold used to restrict delivery of multicast frame\nas they pass through routers to a specified number of hops.\nSetting TTL to a value of 0 restricts the frame to the same host.\nSetting TTL to a value of 1 restricts the frame to the same subnet.\nSetting TTL to a value of 32 restricts the frame to the same site.\nSetting TTL to a value of 64 restricts the frame to the same region.\nSetting TTL to a value of 128 restricts the frame to the same continent.\nSetting TTL to a value of 255 unrestricts the frame.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      evaluated_when_entry: false,
                                      type: {
                                        name: 'uint8',
                                        primitive: true
                                      },
                                      default: '1',
                                      deps: [
                                        '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                      ]
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'bind-interface',
                                      qname: 'serial:bind-interface',
                                      info: {
                                        string:
                                          'The interface that the multicast traffic will be sent out on.'
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
                                        namespace: 'com:gemds:mds-serial',
                                        name: 't16'
                                      },
                                      deps: ['/if:interfaces/interface']
                                    }
                                  ],
                                  deps: [
                                    '/serv:services/serial:serial/terminal-server/server/mode/udp/mode'
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      kind: 'leaf',
                      name: 'dscp',
                      qname: 'serial:dscp',
                      info: {
                        string: 'The DSCP value to set in the outgoing IP packets.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:mds-serial',
                        name: 't17'
                      },
                      default: '40'
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'status',
                  qname: 'serial:status',
                  mandatory: true,
                  config: false,
                  is_config_false_callpoint: true,
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
                      name: 'ip-tx-packets',
                      qname: 'serial:ip-tx-packets',
                      info: {
                        string: 'The number of IP packets trasmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'ip-tx-bytes',
                      qname: 'serial:ip-tx-bytes',
                      info: {
                        string: 'The number of IP bytes trasmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'ip-rx-packets',
                      qname: 'serial:ip-rx-packets',
                      info: {
                        string: 'The number of IP packets received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'ip-rx-bytes',
                      qname: 'serial:ip-rx-bytes',
                      info: {
                        string: 'The number of IP bytes received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'serial-tx-packets',
                      qname: 'serial:serial-tx-packets',
                      info: {
                        string: 'The number of serial packets transmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'serial-tx-bytes',
                      qname: 'serial:serial-tx-bytes',
                      info: {
                        string: 'The number of serial bytes transmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'serial-rx-packets',
                      qname: 'serial:serial-rx-packets',
                      info: {
                        string: 'The number of serial packets received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'serial-rx-bytes',
                      qname: 'serial:serial-rx-bytes',
                      info: {
                        string: 'The number of serial bytes received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    }
                  ],
                  readonly: true
                }
              ],
              deps: [
                '/serv:services/serial:serial/terminal-server/server',
                '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp',
                '/serv:services/serial:serial/terminal-server/server/mode/modbus-tcp/port',
                '/serv:services/serial:serial/terminal-server/server/mode/tcp-client',
                '/serv:services/serial:serial/terminal-server/server/mode/tcp-server',
                '/serv:services/serial:serial/terminal-server/server/mode/tcp-server/port',
                '/serv:services/serial:serial/terminal-server/server/mode/udp',
                '/serv:services/serial:serial/terminal-server/server/mode/udp/port'
              ]
            }
          ]
        },
        {
          kind: 'container',
          name: 'passthrough',
          qname: 'serial:passthrough',
          info: {
            string: 'Serial passthrough allows 2 serial ports to be virtually\nconnected together.'
          },
          mandatory: true,
          exists: true,
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
              name: 'instance',
              qname: 'serial:instance',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['name'],
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              leafrefGroups: [['port-1'], ['port-2']],
              leafref_groups: [['port-1'], ['port-2']],
              children: [
                {
                  kind: 'key',
                  name: 'name',
                  qname: 'serial:name',
                  info: {
                    string: 'The name assigned to this passthrough instance'
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
                    name: 'string',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'port-1',
                  qname: 'serial:port-1',
                  info: {
                    string: 'The first of two ports that will be connected together'
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
                  leafref_target: '/serv:services/serial:serial/ports/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: [
                    '/serv:services/serial:serial/passthrough/instance',
                    '/serv:services/serial:serial/passthrough/instance/name',
                    '/serv:services/serial:serial/passthrough/instance/port-1',
                    '/serv:services/serial:serial/passthrough/instance/port-2',
                    '/serv:services/serial:serial/ports'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'port-2',
                  qname: 'serial:port-2',
                  info: {
                    string: 'The second of two ports that will be connected together'
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
                  leafref_target: '/serv:services/serial:serial/ports/name',
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: [
                    '/serv:services/serial:serial/passthrough/instance',
                    '/serv:services/serial:serial/passthrough/instance/name',
                    '/serv:services/serial:serial/passthrough/instance/port-1',
                    '/serv:services/serial:serial/passthrough/instance/port-2',
                    '/serv:services/serial:serial/ports'
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'display-banner',
                  qname: 'serial:display-banner',
                  info: {
                    string:
                      'When set to true, banner will be printed to port when\nentering terminal server'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: true
                },
                {
                  kind: 'container',
                  name: 'status',
                  qname: 'serial:status',
                  mandatory: true,
                  config: false,
                  is_config_false_callpoint: true,
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
                      name: 'port1-tx-packets',
                      qname: 'serial:port1-tx-packets',
                      info: {
                        string: 'The number of serial packets trasmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port1-tx-bytes',
                      qname: 'serial:port1-tx-bytes',
                      info: {
                        string: 'The number of serial bytes trasmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port1-rx-packets',
                      qname: 'serial:port1-rx-packets',
                      info: {
                        string: 'The number of serial packets received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port1-rx-bytes',
                      qname: 'serial:port1-rx-bytes',
                      info: {
                        string: 'The number of serial bytes received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port2-tx-packets',
                      qname: 'serial:port2-tx-packets',
                      info: {
                        string: 'The number of serial packets transmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port2-tx-bytes',
                      qname: 'serial:port2-tx-bytes',
                      info: {
                        string: 'The number of serial bytes transmitted.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port2-rx-packets',
                      qname: 'serial:port2-rx-packets',
                      info: {
                        string: 'The number of serial packets received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    },
                    {
                      kind: 'leaf',
                      name: 'port2-rx-bytes',
                      qname: 'serial:port2-rx-bytes',
                      info: {
                        string: 'The number of serial bytes received.'
                      },
                      config: false,
                      is_config_false_callpoint: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'uint32',
                        primitive: true
                      },
                      readonly: true
                    }
                  ],
                  readonly: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'remote-management',
      qname: 'remote-management:remote-management',
      info: {
        string: 'Remote management service'
      },
      namespace: 'com:gemds:mds-service-remote-management',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['interfaces']],
      leafref_groups: [['interfaces']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'remote-management:enabled',
          info: {
            string: 'Whether or not to run the remote-management service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: true
        },
        {
          kind: 'leaf-list',
          name: 'interfaces',
          qname: 'remote-management:interfaces',
          info: {
            string:
              'One or more interfaces to listen for remote management traffic.\nIf the desired interface is in a bridge, you must use that\nbridge instead.'
          },
          value: ['Bridge'],
          exists: true,
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
            namespace: 'com:gemds:mds-service-remote-management',
            name: 't8'
          },
          deps: ['/if:interfaces/interface']
        },
        {
          kind: 'leaf',
          name: 'shared-secret',
          qname: 'remote-management:shared-secret',
          info: {
            string:
              'Shared secret string used to secure remote management communications.\n  May be a passphrase (if under 128 characters) or a hex key.'
          },
          value: '$8$519qpW0tca5pbS4MOhb0WLizQj1WpL61wUehn957wfc=',
          exists: true,
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
          }
        },
        {
          kind: 'container',
          name: 'firmware',
          qname: 'remote-management:firmware',
          info: {
            string: 'Configuration for remote management of system firmware'
          },
          mandatory: true,
          exists: true,
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
              name: 'enabled',
              qname: 'remote-management:enabled',
              info: {
                string: 'Allow remote management of system firmware'
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            },
            {
              kind: 'leaf',
              name: 'receive-certificate',
              qname: 'remote-management:receive-certificate',
              info: {
                string: 'Allow remote management to recieve firmware certifiactes'
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            }
          ]
        },
        {
          kind: 'container',
          name: 'web-proxy',
          qname: 'remote-management:web-proxy',
          info: {
            string: 'Configuration for remote management of the remote web proxy client'
          },
          mandatory: true,
          exists: true,
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
              name: 'enabled',
              qname: 'remote-management:enabled',
              info: {
                string: 'Allow this device to manage another through a remote web UI session.'
              },
              value: false,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            },
            {
              kind: 'leaf',
              name: 'auto-redirect',
              qname: 'remote-management:auto-redirect',
              info: {
                string:
                  'Enables the system to automaticly redirect web traffic destined for a proxied device.'
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: [
                '/serv:services/remote-management:remote-management/web-proxy/enabled'
              ],
              evaluated_when_entry: false,
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true,
              deps: ['/serv:services/remote-management:remote-management/web-proxy/enabled']
            },
            {
              kind: 'leaf',
              name: 'legacy-connect',
              qname: 'remote-management:legacy-connect',
              info: {
                string:
                  "If set, it will set up connections for devices it can't confirm the version of with a best effort web proxy."
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            },
            {
              kind: 'leaf',
              name: 'min-web-port',
              qname: 'remote-management:min-web-port',
              value: '30020',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint16',
                primitive: true
              },
              default: '30020'
            },
            {
              kind: 'leaf',
              name: 'max-web-port',
              qname: 'remote-management:max-web-port',
              value: '30080',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint16',
                primitive: true
              },
              default: '30080'
            }
          ]
        },
        {
          kind: 'container',
          name: 'send',
          qname: 'remote-management:send',
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          children: [
            {
              kind: 'action',
              name: 'firmware',
              qname: 'remote-management:firmware',
              info: {
                string:
                  'Start remote management session to send a firmware image to\nremote devices participating in remote management. This can be\neither a currently installed firmware image, or an external\nfile.'
              },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              leafrefGroups: [['interface']],
              leafref_groups: [['interface']],
              children: [
                {
                  kind: 'leaf',
                  name: 'interface',
                  qname: 'remote-management:interface',
                  info: {
                    string:
                      'Interface to use when sending remote management messages.\nIf the desired interface is in a bridge, you must use that\nbridge instead.'
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
                  is_leafref: true,
                  leafref_target: '/if:interfaces/interface/name',
                  type: {
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't0'
                  },
                  deps: ['/if:interfaces/interface']
                },
                {
                  kind: 'leaf',
                  name: 'txrate',
                  qname: 'remote-management:txrate',
                  info: {
                    string:
                      'Number of kilobytes per second to send data blocks. You can also enter\n-1 to send as fast as the network interface will allow, or -2 to\ntransfer at the maximum rate that can be sustained by the slowest peer.'
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
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't1'
                  },
                  default: '-2'
                },
                {
                  kind: 'leaf',
                  name: 'blocksize',
                  qname: 'remote-management:blocksize',
                  info: {
                    string: 'Number of bytes per data block'
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
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't2'
                  },
                  default: '512'
                },
                {
                  kind: 'choice',
                  name: 'source',
                  qname: 'remote-management:source',
                  is_action_input: true,
                  cases: [
                    {
                      kind: 'case',
                      name: 'local-image',
                      qname: 'remote-management:local-image',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'local-image',
                          qname: 'remote-management:local-image',
                          info: {
                            string:
                              'Send one of the currently installed flash images to remote\nunits.'
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
                          children: [
                            {
                              kind: 'choice',
                              name: 'which-image',
                              qname: 'remote-management:which-image',
                              is_action_input: true,
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'version',
                                  qname: 'remote-management:version',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'version',
                                      qname: 'remote-management:version',
                                      info: {
                                        string: 'Select the specified firmware version'
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
                                        '/sys:system/mdssys:firmware/versions/version',
                                      type: {
                                        name: 'string',
                                        primitive: true
                                      },
                                      deps: [
                                        '/sys:system/mdssys:firmware/versions',
                                        '/sys:system/mdssys:firmware/versions/version'
                                      ]
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'image',
                                  qname: 'remote-management:image',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'image',
                                      qname: 'remote-management:image',
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
                                        '/sys:system/mdssys:firmware/versions/location',
                                      type: {
                                        name: 'uint8',
                                        primitive: true
                                      },
                                      deps: ['/sys:system/mdssys:firmware/versions']
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'active',
                                  qname: 'remote-management:active',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'active',
                                      qname: 'remote-management:active',
                                      info: {
                                        string: 'Select the current active firmware'
                                      },
                                      is_action_input: true,
                                      presence: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'inactive',
                                  qname: 'remote-management:inactive',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'inactive',
                                      qname: 'remote-management:inactive',
                                      info: {
                                        string: 'Select the inactive firmware'
                                      },
                                      is_action_input: true,
                                      presence: true,
                                      access: {
                                        create: false,
                                        read: false,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                }
                              ],
                              default: 'active'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'external-file',
                      qname: 'remote-management:external-file',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'external-file',
                          qname: 'remote-management:external-file',
                          info: {
                            string:
                              'Retrieve a file from an external file server and send it to\nremote units.'
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
                          children: [
                            {
                              kind: 'leaf',
                              name: 'filename',
                              qname: 'remote-management:filename',
                              info: {
                                string: 'Path and filename of remote file'
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
                              kind: 'choice',
                              name: 'location',
                              qname: 'remote-management:location',
                              is_action_input: true,
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'manual-file-server',
                                  qname: 'remote-management:manual-file-server',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'manual-file-server',
                                      qname: 'remote-management:manual-file-server',
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
                                          qname: 'remote-management:protocol',
                                          is_action_input: true,
                                          cases: [
                                            {
                                              kind: 'case',
                                              name: 'tftp',
                                              qname: 'remote-management:tftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'tftp',
                                                  qname: 'remote-management:tftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:block-size',
                                                      info: {
                                                        string:
                                                          'TFTP blocksize as defined in RFC2348'
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
                                                        namespace:
                                                          'com:gemds:mds-service-remote-management',
                                                        name: 't3'
                                                      },
                                                      default: '1024'
                                                    },
                                                    {
                                                      kind: 'leaf',
                                                      name: 'port',
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
                                                      info: {
                                                        string:
                                                          'TFTP Timeout as defined in RFC2349, in seconds'
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
                                                        namespace:
                                                          'com:gemds:mds-service-remote-management',
                                                        name: 't4'
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
                                              qname: 'remote-management:sftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'sftp',
                                                  qname: 'remote-management:sftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:username',
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
                                                      qname: 'remote-management:password',
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
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
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
                                              qname: 'remote-management:ftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'ftp',
                                                  qname: 'remote-management:ftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:username',
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
                                                      qname: 'remote-management:password',
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
                                                      qname: 'remote-management:control-port',
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
                                                      qname: 'remote-management:data-port',
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
                                                      qname: 'remote-management:timeout',
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
                                              qname: 'remote-management:http',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'http',
                                                  qname: 'remote-management:http',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
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
                                  qname: 'remote-management:preconfigured-file-server',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'preconfigured-file-server',
                                      qname: 'remote-management:preconfigured-file-server',
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
                                          qname: 'remote-management:configuration_name',
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
                                          leafref_target:
                                            '/mds-common:file-servers/configuration-name',
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
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'reboot-remotes-on-completion',
                  qname: 'remote-management:reboot-remotes-on-completion',
                  info: {
                    string:
                      'Automatically reboot remote devices once they are finished\nreprogramming.'
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
                    name: 'boolean',
                    primitive: true
                  },
                  default: false
                }
              ]
            },
            {
              kind: 'action',
              name: 'firmware-certificate',
              qname: 'remote-management:firmware-certificate',
              info: {
                string:
                  'Start remote management session to send a firmware certificate to\nremote devices participating in remote management. This can be\neither a currently installed firmware certificate, or an external\nfile.'
              },
              mandatory: true,
              access: {
                create: false,
                read: false,
                update: false,
                delete: false,
                execute: true
              },
              leafrefGroups: [['interface']],
              leafref_groups: [['interface']],
              children: [
                {
                  kind: 'leaf',
                  name: 'interface',
                  qname: 'remote-management:interface',
                  info: {
                    string:
                      'Interface to use when sending remote management messages.\nIf the desired interface is in a bridge, you must use that\nbridge instead.'
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
                  is_leafref: true,
                  leafref_target: '/if:interfaces/interface/name',
                  type: {
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't0'
                  },
                  deps: ['/if:interfaces/interface']
                },
                {
                  kind: 'leaf',
                  name: 'txrate',
                  qname: 'remote-management:txrate',
                  info: {
                    string:
                      'Number of kilobytes per second to send data blocks. You can also enter\n-1 to send as fast as the network interface will allow, or -2 to\ntransfer at the maximum rate that can be sustained by the slowest peer.'
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
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't1'
                  },
                  default: '-2'
                },
                {
                  kind: 'leaf',
                  name: 'blocksize',
                  qname: 'remote-management:blocksize',
                  info: {
                    string: 'Number of bytes per data block'
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
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 't2'
                  },
                  default: '512'
                },
                {
                  kind: 'choice',
                  name: 'source',
                  qname: 'remote-management:source',
                  is_action_input: true,
                  cases: [
                    {
                      kind: 'case',
                      name: 'local-certificate',
                      qname: 'remote-management:local-certificate',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'local-certificate',
                          qname: 'remote-management:local-certificate',
                          info: {
                            string:
                              'Send one of the currently installed firmware certificates to remote\nunits.'
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
                          children: [
                            {
                              kind: 'leaf',
                              name: 'cert-id',
                              qname: 'remote-management:cert-id',
                              info: {
                                string: 'firmware certificate identifier'
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
                              leafref_target: '/cm:pki/firmware-certs/show-all/cert-identity',
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              deps: [
                                '/cm:pki/firmware-certs/show-all',
                                '/cm:pki/firmware-certs/show-all/cert-identity'
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'external-file',
                      qname: 'remote-management:external-file',
                      is_action_input: true,
                      children: [
                        {
                          kind: 'container',
                          name: 'external-file',
                          qname: 'remote-management:external-file',
                          info: {
                            string:
                              'Retrieve a file from an external file server and send it to\nremote units.'
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
                          children: [
                            {
                              kind: 'leaf',
                              name: 'filename',
                              qname: 'remote-management:filename',
                              info: {
                                string: 'Path and filename of remote file'
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
                              kind: 'choice',
                              name: 'location',
                              qname: 'remote-management:location',
                              is_action_input: true,
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'manual-file-server',
                                  qname: 'remote-management:manual-file-server',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'manual-file-server',
                                      qname: 'remote-management:manual-file-server',
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
                                          qname: 'remote-management:protocol',
                                          is_action_input: true,
                                          cases: [
                                            {
                                              kind: 'case',
                                              name: 'tftp',
                                              qname: 'remote-management:tftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'tftp',
                                                  qname: 'remote-management:tftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:block-size',
                                                      info: {
                                                        string:
                                                          'TFTP blocksize as defined in RFC2348'
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
                                                        namespace:
                                                          'com:gemds:mds-service-remote-management',
                                                        name: 't3'
                                                      },
                                                      default: '1024'
                                                    },
                                                    {
                                                      kind: 'leaf',
                                                      name: 'port',
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
                                                      info: {
                                                        string:
                                                          'TFTP Timeout as defined in RFC2349, in seconds'
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
                                                        namespace:
                                                          'com:gemds:mds-service-remote-management',
                                                        name: 't4'
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
                                              qname: 'remote-management:sftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'sftp',
                                                  qname: 'remote-management:sftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:username',
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
                                                      qname: 'remote-management:password',
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
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
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
                                              qname: 'remote-management:ftp',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'ftp',
                                                  qname: 'remote-management:ftp',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:username',
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
                                                      qname: 'remote-management:password',
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
                                                      qname: 'remote-management:control-port',
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
                                                      qname: 'remote-management:data-port',
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
                                                      qname: 'remote-management:timeout',
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
                                              qname: 'remote-management:http',
                                              is_action_input: true,
                                              children: [
                                                {
                                                  kind: 'container',
                                                  name: 'http',
                                                  qname: 'remote-management:http',
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
                                                      qname: 'remote-management:address',
                                                      info: {
                                                        string:
                                                          'Remote server hostname or IP address'
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
                                                      qname: 'remote-management:port',
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
                                                      qname: 'remote-management:timeout',
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
                                  qname: 'remote-management:preconfigured-file-server',
                                  is_action_input: true,
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'preconfigured-file-server',
                                      qname: 'remote-management:preconfigured-file-server',
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
                                          qname: 'remote-management:configuration_name',
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
                                          leafref_target:
                                            '/mds-common:file-servers/configuration-name',
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
                          kind: 'leaf',
                          name: 'cert-id',
                          qname: 'remote-management:cert-id',
                          info: {
                            string: 'An ID to assign to this certficate once retrieved'
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
                        }
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
          name: 'cancel-session',
          qname: 'remote-management:cancel-session',
          info: {
            string: 'Cancel active remote management web or reprogramming session.'
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
          name: 'clear-web-cache',
          qname: 'remote-management:clear-web-cache',
          info: {
            string: 'Cancel active remote management web or reprogramming session.'
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
          name: 'reboot-remote-devices',
          qname: 'remote-management:reboot-remote-devices',
          info: {
            string: 'Reboot remote devices currently participating in remote management.'
          },
          mandatory: true,
          access: {
            create: false,
            read: false,
            update: false,
            delete: false,
            execute: true
          },
          leafrefGroups: [['interface']],
          leafref_groups: [['interface']],
          children: [
            {
              kind: 'leaf',
              name: 'interface',
              qname: 'remote-management:interface',
              info: {
                string:
                  'Interface on which to send the reboot message.\nIf the desired interface is in a bridge, you must use that\nbridge instead.'
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
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/name',
              type: {
                namespace: 'com:gemds:mds-service-remote-management',
                name: 't9'
              },
              deps: ['/if:interfaces/interface']
            },
            {
              kind: 'leaf',
              name: 'version',
              qname: 'remote-management:version',
              info: {
                string: 'The version that the remote devices should be booted to if avalible.'
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
              leafref_target: '/sys:system/mdssys:firmware/versions/version',
              type: {
                name: 'string',
                primitive: true
              },
              deps: [
                '/sys:system/mdssys:firmware/versions',
                '/sys:system/mdssys:firmware/versions/version'
              ]
            }
          ]
        }
      ],
      deps: [
        '/serv:services/remote-management:remote-management',
        '/serv:services/web:web/http/enabled',
        '/serv:services/web:web/https/enabled'
      ]
    },
    {
      kind: 'container',
      name: 'remote-management-status',
      qname: 'remote-management:remote-management-status',
      namespace: 'com:gemds:mds-service-remote-management',
      mandatory: true,
      config: false,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      children: [
        {
          kind: 'container',
          name: 'web-proxy-client',
          qname: 'remote-management:web-proxy-client',
          mandatory: true,
          config: false,
          exists: true,
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
              name: 'remotes',
              qname: 'remote-management:remotes',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              config: false,
              is_config_false_callpoint: true,
              key: ['ip-address'],
              exists: true,
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
                  name: 'ip-address',
                  qname: 'remote-management:ip-address',
                  info: {
                    string: 'Address of connected device.'
                  },
                  mandatory: true,
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                    name: 'ip-address'
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'status',
                  qname: 'remote-management:status',
                  info: {
                    string: 'Status of local web proxy.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:mds-service-remote-management',
                    name: 'rm-mgmt-status'
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'version',
                  qname: 'remote-management:version',
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'interface',
                  qname: 'remote-management:interface',
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'proxy-address',
                  qname: 'remote-management:proxy-address',
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  readonly: true
                }
              ],
              readonly: true
            }
          ],
          readonly: true
        },
        {
          kind: 'container',
          name: 'send-status',
          qname: 'remote-management:send-status',
          info: {
            string: 'The current status of the remote current send operation.'
          },
          mandatory: true,
          config: false,
          exists: true,
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
              name: 'state',
              qname: 'remote-management:state',
              info: {
                string: 'Status of the file transfer task'
              },
              config: false,
              value: 'inactive',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:mds-service-remote-management',
                name: 't12'
              },
              default: 'inactive',
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'detailed-message',
              qname: 'remote-management:detailed-message',
              info: {
                string: 'Detailed description of the current status of the file transfer task'
              },
              config: false,
              value: 'Service disabled',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              default: '',
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'size',
              qname: 'remote-management:size',
              info: {
                string: 'Number of bytes in the file to transfer'
              },
              config: false,
              value: '0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint32',
                primitive: true
              },
              default: '0',
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'bytes-transferred',
              qname: 'remote-management:bytes-transferred',
              info: {
                string: 'Number of bytes of the file transferred so far'
              },
              config: false,
              value: '0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint32',
                primitive: true
              },
              default: '0',
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'percent-complete',
              qname: 'remote-management:percent-complete',
              info: {
                string: 'Percentage of the file transferred so far'
              },
              config: false,
              value: '0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint32',
                primitive: true
              },
              default: '0',
              readonly: true
            }
          ],
          readonly: true
        },
        {
          kind: 'list',
          name: 'peer-database',
          qname: 'remote-management:peer-database',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          config: false,
          is_config_false_callpoint: true,
          key: ['ip-address'],
          exists: true,
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
              name: 'ip-address',
              qname: 'remote-management:ip-address',
              info: {
                string: 'IP address of peer receiving data'
              },
              mandatory: true,
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: false,
                read: true,
                update: false,
                delete: false,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'ip-address'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'status',
              qname: 'remote-management:status',
              info: {
                string: 'Status of the receiving on peer.'
              },
              config: false,
              is_config_false_callpoint: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            }
          ],
          readonly: true
        }
      ],
      readonly: true
    },
    {
      kind: 'container',
      name: 'ddns',
      qname: 'ddns:ddns',
      info: {
        string:
          'Dynamic Domain Name System (DDNS). Updates a DNS server\nwith the dynamic IP address of an interface on this device.'
      },
      namespace: 'com:gemds:services:ddns',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['interface'], ['ca-certificate']],
      leafref_groups: [['interface'], ['ca-certificate']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'ddns:enabled',
          info: {
            string: 'Whether or not to run the DDNS service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'provider',
          qname: 'ddns:provider',
          info: {
            string: 'The DDNS provider to use'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't0'
          }
        },
        {
          kind: 'leaf',
          name: 'url',
          qname: 'ddns:url',
          info: {
            string:
              "A user defined URL to use for sending updates to the DDNS server when service is set to 'other'"
          },
          value:
            'http://[USERNAME]:[PASSWORD]@example.com/nic/update?hostname=[HOSTNAME]&myip=[IP]',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/serv:services/ddns:ddns/provider'],
          evaluated_when_entry: false,
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't1'
          },
          default:
            'http://[USERNAME]:[PASSWORD]@example.com/nic/update?hostname=[HOSTNAME]&myip=[IP]',
          deps: ['/serv:services/ddns:ddns/provider']
        },
        {
          kind: 'leaf',
          name: 'hostname',
          qname: 'ddns:hostname',
          info: {
            string: 'The fully qualified domain name to update with a new IP'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't2'
          }
        },
        {
          kind: 'leaf',
          name: 'username',
          qname: 'ddns:username',
          info: {
            string: 'The username for the account at the DDNS server'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't3'
          }
        },
        {
          kind: 'leaf',
          name: 'password',
          qname: 'ddns:password',
          info: {
            string: 'The password for the account at the DDNS server'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't4'
          }
        },
        {
          kind: 'leaf',
          name: 'interface',
          qname: 'ddns:interface',
          info: {
            string: 'The IP address from this interface will be used to update the DDNS server'
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
            namespace: 'com:gemds:services:ddns',
            name: 't5'
          },
          deps: ['/if:interfaces/interface']
        },
        {
          kind: 'leaf',
          name: 'update-interval',
          qname: 'ddns:update-interval',
          info: {
            string: 'The interval, in minutes, at which periodic updates will occur'
          },
          value: '1440',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't6'
          },
          default: '1440'
        },
        {
          kind: 'leaf',
          name: 'failure-retry-interval',
          qname: 'ddns:failure-retry-interval',
          info: {
            string:
              'The interval, in seconds, at which retries will occur if a connection cannot be made to the DDNS server'
          },
          value: '5',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't7'
          },
          default: '5'
        },
        {
          kind: 'leaf',
          name: 'max-failure-retries',
          qname: 'ddns:max-failure-retries',
          info: {
            string: 'The max number of times to retry connecting to the DDNS server for an update'
          },
          value: '6',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ddns',
            name: 't8'
          },
          default: '6'
        },
        {
          kind: 'leaf',
          name: 'https',
          qname: 'ddns:https',
          info: {
            string: 'Whether or not to use HTTPS when sending DDNS updates'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          when_targets: ['/serv:services/ddns:ddns/provider'],
          evaluated_when_entry: false,
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false,
          deps: ['/serv:services/ddns:ddns/provider']
        },
        {
          kind: 'leaf',
          name: 'verify-server-certificate',
          qname: 'ddns:verify-server-certificate',
          info: {
            string: "Whether or not to verify the DDNS server's certificate"
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'ca-certificate',
          qname: 'ddns:ca-certificate',
          info: {
            string:
              "A locally stored CA certficate to use when verifying the DDNS server's certificate"
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
          type: {
            name: 'string',
            primitive: true
          },
          deps: ['/cm:pki/ca-certs/show-all']
        },
        {
          kind: 'container',
          name: 'status',
          qname: 'ddns:status',
          mandatory: true,
          config: false,
          is_config_false_callpoint: true,
          exists: true,
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
              name: 'update-state',
              qname: 'ddns:update-state',
              info: {
                string: 'The current state of DDNS update operation'
              },
              config: false,
              is_config_false_callpoint: true,
              value: 'disabled',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:ddns',
                name: 't9'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'update-failure-reason',
              qname: 'ddns:update-failure-reason',
              info: {
                string: 'The reason if the DDNS failed to update'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'update-timestamp',
              qname: 'ddns:update-timestamp',
              info: {
                string: 'timestamp of last update'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '1970-01-01T00:00:00-04:00',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'date-and-time',
                primitive: true
              },
              readonly: true
            }
          ],
          readonly: true
        }
      ],
      deps: [
        '/serv:services/ddns:ddns/enabled',
        '/serv:services/ddns:ddns/hostname',
        '/serv:services/ddns:ddns/interface',
        '/serv:services/ddns:ddns/password',
        '/serv:services/ddns:ddns/provider',
        '/serv:services/ddns:ddns/username'
      ]
    },
    {
      kind: 'container',
      name: 'firewall',
      qname: 'fire:firewall',
      namespace: 'com:gemds:services:firewall',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'fire:enabled',
          info: {
            string: 'Whether or not to run the firewall service'
          },
          value: true,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'udp-spi-enabled',
          qname: 'fire:udp-spi-enabled',
          info: {
            string: 'Whether or not to enable stateful packet inspection (SPI) for UDP.'
          },
          value: true,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: true
        },
        {
          kind: 'container',
          name: 'allowed-protocols',
          qname: 'fire:allowed-protocols',
          info: {
            string: 'Sets the firewall with one of these values as a preset.'
          },
          mandatory: true,
          exists: true,
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
              name: 'firewall-mode',
              qname: 'fire:firewall-mode',
              info: {
                string:
                  'Enables the basic web firewall. If set to advanced, the firewall is only changed in advanced mode.'
              },
              value: 'advanced',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't0'
              },
              default: 'advanced'
            },
            {
              kind: 'leaf',
              name: 'broadcast',
              qname: 'fire:broadcast',
              info: {
                string: 'Allow broadcast traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'multicast',
              qname: 'fire:multicast',
              info: {
                string: 'Allow multicast traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'stp',
              qname: 'fire:stp',
              info: {
                string:
                  'Allow STP/RSTP traffic, will override broadcast/multicast setting for matching traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'pvst',
              qname: 'fire:pvst',
              info: {
                string:
                  'Allow PVST/PVST+ traffic, will override broadcast/multicast setting for matching traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'arp',
              qname: 'fire:arp',
              info: {
                string:
                  'Allow ARP traffic, will override broadcast/multicast setting for matching traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'cdp',
              qname: 'fire:cdp',
              info: {
                string:
                  'Allow Cisco discovery protocol traffic, will override broadcast/multicast setting for matching traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'ipv4',
              qname: 'fire:ipv4',
              info: {
                string: 'Allow IPv4 traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'ipv6',
              qname: 'fire:ipv6',
              info: {
                string: 'Allow IPv6 traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'dhcp',
              qname: 'fire:dhcp',
              info: {
                string:
                  'Allow DHCP traffic, will override broadcast/multicast setting for matching traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'icmp',
              qname: 'fire:icmp',
              info: {
                string: 'Allow ICMP traffic'
              },
              value: 'accept',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'accept',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'dns',
              qname: 'fire:dns',
              info: {
                string: 'Allow DNS traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            },
            {
              kind: 'leaf',
              name: 'ntp',
              qname: 'fire:ntp',
              info: {
                string: 'Allow DNS traffic'
              },
              value: 'drop',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              evaluated_when_entry: false,
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 'rule-eth-action'
              },
              default: 'drop',
              deps: ['/serv:services/fire:firewall/allowed-protocols/firewall-mode']
            }
          ]
        },
        {
          kind: 'list',
          name: 'address-set',
          qname: 'fire:address-set',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'fire:name',
              info: {
                string: 'ASCII string identifying the address-set (allowed chars: a-zA-Z0-9-_).'
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
                namespace: 'com:gemds:services:firewall',
                name: 't1'
              }
            },
            {
              kind: 'leaf-list',
              name: 'addresses',
              qname: 'fire:addresses',
              info: {
                string: 'List of IPv4 addresses or networks'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't3'
              }
            }
          ]
        },
        {
          kind: 'list',
          name: 'address6-set',
          qname: 'fire:address6-set',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'fire:name',
              info: {
                string: 'ASCII string identifying the address6-set (allowed chars: a-zA-Z0-9-_).'
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
                namespace: 'com:gemds:services:firewall',
                name: 't4'
              }
            },
            {
              kind: 'leaf-list',
              name: 'addresses6',
              qname: 'fire:addresses6',
              info: {
                string: 'List of IPv6 addresses or networks'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:firewall',
                name: 't6'
              }
            }
          ]
        },
        {
          kind: 'list',
          name: 'filter',
          qname: 'fire:filter',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'fire:name',
              info: {
                string: 'ASCII string identifying the filter (allowed chars: a-zA-Z0-9-_).'
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
                namespace: 'com:gemds:services:firewall',
                name: 't7'
              }
            },
            {
              kind: 'list',
              name: 'rule',
              qname: 'fire:rule',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['id'],
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
                  name: 'id',
                  qname: 'fire:id',
                  info: {
                    string: 'rule id'
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
                    name: 'uint32',
                    primitive: true
                  }
                },
                {
                  kind: 'container',
                  name: 'match',
                  qname: 'fire:match',
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
                      name: 'protocol',
                      qname: 'fire:protocol',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 'protocol'
                      },
                      default: 'all'
                    },
                    {
                      kind: 'leaf',
                      name: 'icmp-type',
                      qname: 'fire:icmp-type',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/match/protocol'],
                      evaluated_when_entry: false,
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 'icmp-type'
                      },
                      deps: ['/serv:services/fire:firewall/filter/rule/match/protocol']
                    },
                    {
                      kind: 'leaf',
                      name: 'icmpv6-type',
                      qname: 'fire:icmpv6-type',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/match/protocol'],
                      evaluated_when_entry: false,
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 'icmpv6-type'
                      },
                      deps: ['/serv:services/fire:firewall/filter/rule/match/protocol']
                    },
                    {
                      kind: 'container',
                      name: 'src-address',
                      qname: 'fire:src-address',
                      info: {
                        string: 'source address(es) specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'If present, this inverts the sense of the address-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'fire:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'address',
                              qname: 'fire:address',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address',
                                  qname: 'fire:address',
                                  info: {
                                    string: 'IPv4 address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv4-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address6',
                              qname: 'fire:address6',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address6',
                                  qname: 'fire:address6',
                                  info: {
                                    string: 'IPv6 address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv6-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-range',
                              qname: 'fire:address-range',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'address-range',
                                  qname: 'fire:address-range',
                                  info: {
                                    string: 'IPv4 or IPv6 address range'
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
                                      name: 'from',
                                      qname: 'fire:from',
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
                                      name: 'to',
                                      qname: 'fire:to',
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
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-set',
                              qname: 'fire:address-set',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address-set',
                                  qname: 'fire:address-set',
                                  info: {
                                    string: 'set of one or more IPv4 addresses/networks'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  is_leafref: true,
                                  leafref_target: '/serv:services/fire:firewall/address-set/name',
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't1'
                                  },
                                  deps: ['/serv:services/fire:firewall/address-set']
                                },
                                {
                                  kind: 'leaf',
                                  name: 'add-interface-address',
                                  qname: 'fire:add-interface-address',
                                  info: {
                                    string:
                                      'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'boolean',
                                    primitive: true
                                  },
                                  default: false
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address6-set',
                              qname: 'fire:address6-set',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address6-set',
                                  qname: 'fire:address6-set',
                                  info: {
                                    string: 'set of one or more IPv6 addresses/networks'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  is_leafref: true,
                                  leafref_target: '/serv:services/fire:firewall/address6-set/name',
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't4'
                                  },
                                  deps: ['/serv:services/fire:firewall/address6-set']
                                },
                                {
                                  kind: 'leaf',
                                  name: 'add-interface-address6',
                                  qname: 'fire:add-interface-address6',
                                  info: {
                                    string:
                                      'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'boolean',
                                    primitive: true
                                  },
                                  default: false
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'src-port',
                      qname: 'fire:src-port',
                      info: {
                        string: 'source port(s) specification'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/match/protocol'],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'if present, this inverts the sense of the port-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'fire:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'services',
                              qname: 'fire:services',
                              children: [
                                {
                                  kind: 'leaf-list',
                                  name: 'services',
                                  qname: 'fire:services',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't9'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'port-range',
                              qname: 'fire:port-range',
                              children: [
                                {
                                  kind: 'list',
                                  name: 'port-range',
                                  qname: 'fire:port-range',
                                  mandatory: true,
                                  min_elements: 0,
                                  max_elements: 'unbounded',
                                  key: ['from'],
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
                                      name: 'from',
                                      qname: 'fire:from',
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: true,
                                        update: false,
                                        delete: false,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'to',
                                      qname: 'fire:to',
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: ['/serv:services/fire:firewall/filter/rule/match/protocol']
                    },
                    {
                      kind: 'container',
                      name: 'dst-address',
                      qname: 'fire:dst-address',
                      info: {
                        string: 'destination address(es) specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'If present, this inverts the sense of the address-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'fire:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'address',
                              qname: 'fire:address',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address',
                                  qname: 'fire:address',
                                  info: {
                                    string: 'IPv4 address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv4-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address6',
                              qname: 'fire:address6',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address6',
                                  qname: 'fire:address6',
                                  info: {
                                    string: 'IPv6 address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv6-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-range',
                              qname: 'fire:address-range',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'address-range',
                                  qname: 'fire:address-range',
                                  info: {
                                    string: 'IPv4 or IPv6 address range'
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
                                      name: 'from',
                                      qname: 'fire:from',
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
                                      name: 'to',
                                      qname: 'fire:to',
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
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-set',
                              qname: 'fire:address-set',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address-set',
                                  qname: 'fire:address-set',
                                  info: {
                                    string: 'set of one or more IPv4 addresses/networks'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  is_leafref: true,
                                  leafref_target: '/serv:services/fire:firewall/address-set/name',
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't1'
                                  },
                                  deps: ['/serv:services/fire:firewall/address-set']
                                },
                                {
                                  kind: 'leaf',
                                  name: 'add-interface-address',
                                  qname: 'fire:add-interface-address',
                                  info: {
                                    string:
                                      'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'boolean',
                                    primitive: true
                                  },
                                  default: false
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address6-set',
                              qname: 'fire:address6-set',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address6-set',
                                  qname: 'fire:address6-set',
                                  info: {
                                    string: 'set of one or more IPv6 addresses/networks'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  is_leafref: true,
                                  leafref_target: '/serv:services/fire:firewall/address6-set/name',
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't4'
                                  },
                                  deps: ['/serv:services/fire:firewall/address6-set']
                                },
                                {
                                  kind: 'leaf',
                                  name: 'add-interface-address6',
                                  qname: 'fire:add-interface-address6',
                                  info: {
                                    string:
                                      'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'boolean',
                                    primitive: true
                                  },
                                  default: false
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'dst-port',
                      qname: 'fire:dst-port',
                      info: {
                        string: 'destination port(s) specification'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/match/protocol'],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'if present, this inverts the sense of the port-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'fire:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'services',
                              qname: 'fire:services',
                              children: [
                                {
                                  kind: 'leaf-list',
                                  name: 'services',
                                  qname: 'fire:services',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't9'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'port-range',
                              qname: 'fire:port-range',
                              children: [
                                {
                                  kind: 'list',
                                  name: 'port-range',
                                  qname: 'fire:port-range',
                                  mandatory: true,
                                  min_elements: 0,
                                  max_elements: 'unbounded',
                                  key: ['from'],
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
                                      name: 'from',
                                      qname: 'fire:from',
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: true,
                                        update: false,
                                        delete: false,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'to',
                                      qname: 'fire:to',
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: ['/serv:services/fire:firewall/filter/rule/match/protocol']
                    },
                    {
                      kind: 'container',
                      name: 'ipsec',
                      qname: 'fire:ipsec',
                      info: {
                        string:
                          'this allows one to match  traffic going into and coming\nout of the tunnel identified by tunnel source/destination\naddresses'
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
                          name: 'direction',
                          qname: 'fire:direction',
                          info: {
                            string:
                              'whether this rule matches incoming or outgoing traffic\ninside ipsec tunnel'
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
                            namespace: 'com:gemds:services:firewall',
                            name: 't10'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'tunnel-src-address',
                          qname: 'fire:tunnel-src-address',
                          info: {
                            string: 'tunnel endpoint source address'
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
                            name: 'ipv4-prefix',
                            primitive: true
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'tunnel-dst-address',
                          qname: 'fire:tunnel-dst-address',
                          info: {
                            string: 'tunnel endpoint destination address'
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
                            name: 'ipv4-prefix',
                            primitive: true
                          }
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'pkt-type',
                      qname: 'fire:pkt-type',
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'if present, this inverts the sense of the packet type'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'type',
                          qname: 'fire:type',
                          info: {
                            string: 'The type of IP packet'
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
                            namespace: 'com:gemds:services:firewall',
                            name: 't11'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'actions',
                  qname: 'fire:actions',
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
                      name: 'action',
                      qname: 'fire:action',
                      info: {
                        string: 'action to perform on matching packets'
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
                        namespace: 'com:gemds:services:firewall',
                        name: 'rule-action'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'reject-type',
                      qname: 'fire:reject-type',
                      info: {
                        string: 'type of icmp error message to be returned if action\nis reject'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/actions/action'],
                      evaluated_when_entry: false,
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 'icmp-reject-type'
                      },
                      deps: ['/serv:services/fire:firewall/filter/rule/actions/action']
                    },
                    {
                      kind: 'leaf',
                      name: 'reject-type-v6',
                      qname: 'fire:reject-type-v6',
                      info: {
                        string: 'type of ICMPv6 error message to be returned if action\nis reject'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: ['/serv:services/fire:firewall/filter/rule/actions/action'],
                      evaluated_when_entry: false,
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 'icmpv6-reject-type'
                      },
                      deps: ['/serv:services/fire:firewall/filter/rule/actions/action']
                    },
                    {
                      kind: 'container',
                      name: 'log',
                      qname: 'fire:log',
                      info: {
                        string: 'enables logging of packets matching the rule via syslog'
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
                          name: 'level',
                          qname: 'fire:level',
                          info: {
                            string: 'syslog level'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:firewall',
                            name: 'syslog-level'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'prefix',
                          qname: 'fire:prefix',
                          info: {
                            string:
                              'prefix log messages with the specified prefix. This\nis useful for distinguishing messages in the logs\n(allowed chars: a-zA-Z0-9-_).'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:firewall',
                            name: 't12'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'list',
              name: 'rule-eth',
              qname: 'fire:rule-eth',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['id'],
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
                  name: 'id',
                  qname: 'fire:id',
                  info: {
                    string: 'rule id'
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
                    name: 'uint32',
                    primitive: true
                  }
                },
                {
                  kind: 'container',
                  name: 'match',
                  qname: 'fire:match',
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
                      kind: 'container',
                      name: 'eth-type',
                      qname: 'fire:eth-type',
                      info: {
                        string: 'The layer 2 type in the ethernet header'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'If present, this inverts the sense of the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'fire:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'protocol',
                              qname: 'fire:protocol',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'protocol',
                                  qname: 'fire:protocol',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-common',
                                    name: 'ether-type'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'custom',
                              qname: 'fire:custom',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'custom',
                                  qname: 'fire:custom',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:firewall',
                                    name: 't14'
                                  }
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'src-mac',
                      qname: 'fire:src-mac',
                      info: {
                        string: 'Source MAC address specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'If present, this inverts the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'address',
                          qname: 'fire:address',
                          info: {
                            string: 'MAC address'
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
                            name: 'mac-address'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'mask',
                          qname: 'fire:mask',
                          info: {
                            string: 'The mask for the MAC address'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'urn:ietf:params:xml:ns:yang:ietf-yang-types',
                            name: 'mac-address'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'dst-mac',
                      qname: 'fire:dst-mac',
                      info: {
                        string: 'Destination MAC address specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'fire:not',
                          info: {
                            string: 'If present, this inverts the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'address',
                          qname: 'fire:address',
                          info: {
                            string: 'MAC address'
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
                            name: 'mac-address'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'mask',
                          qname: 'fire:mask',
                          info: {
                            string: 'The mask for the MAC address'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'urn:ietf:params:xml:ns:yang:ietf-yang-types',
                            name: 'mac-address'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'actions',
                  qname: 'fire:actions',
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
                      name: 'action',
                      qname: 'fire:action',
                      info: {
                        string: 'action to perform on matching packets'
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
                        namespace: 'com:gemds:services:firewall',
                        name: 'rule-eth-action'
                      }
                    },
                    {
                      kind: 'container',
                      name: 'log',
                      qname: 'fire:log',
                      info: {
                        string: 'enables logging of packets matching the rule via syslog'
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
                          name: 'level',
                          qname: 'fire:level',
                          info: {
                            string: 'syslog level'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:firewall',
                            name: 'syslog-level'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'prefix',
                          qname: 'fire:prefix',
                          info: {
                            string:
                              'prefix log messages with the specified prefix. This\nis useful for distinguishing messages in the logs'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:firewall',
                            name: 't15'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          deps: ['/serv:services/fire:firewall/filter']
        },
        {
          kind: 'container',
          name: 'nat',
          qname: 'fire:nat',
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          children: [
            {
              kind: 'container',
              name: 'source',
              qname: 'fire:source',
              mandatory: true,
              exists: true,
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
                  name: 'rule-set',
                  qname: 'fire:rule-set',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['name'],
                  exists: true,
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
                      qname: 'fire:name',
                      info: {
                        string:
                          'ASCII string identifying the rule-set (allowed chars: a-zA-Z0-9-_).'
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
                        namespace: 'com:gemds:services:firewall',
                        name: 't16'
                      }
                    },
                    {
                      kind: 'list',
                      name: 'rule',
                      qname: 'fire:rule',
                      mandatory: true,
                      min_elements: 0,
                      max_elements: 'unbounded',
                      key: ['id'],
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
                          name: 'id',
                          qname: 'fire:id',
                          info: {
                            string: 'rule id'
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
                            name: 'uint32',
                            primitive: true
                          }
                        },
                        {
                          kind: 'container',
                          name: 'match',
                          qname: 'fire:match',
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
                              kind: 'container',
                              name: 'src-address',
                              qname: 'fire:src-address',
                              info: {
                                string: 'source address(es) specification'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'fire:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the address-spec'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'choice',
                                  name: 'type',
                                  qname: 'fire:type',
                                  cases: [
                                    {
                                      kind: 'case',
                                      name: 'address',
                                      qname: 'fire:address',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'fire:address',
                                          info: {
                                            string: 'IPv4 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv4-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6',
                                      qname: 'fire:address6',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6',
                                          qname: 'fire:address6',
                                          info: {
                                            string: 'IPv6 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv6-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-range',
                                      qname: 'fire:address-range',
                                      children: [
                                        {
                                          kind: 'container',
                                          name: 'address-range',
                                          qname: 'fire:address-range',
                                          info: {
                                            string: 'IPv4 or IPv6 address range'
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
                                              name: 'from',
                                              qname: 'fire:from',
                                              mandatory: true,
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            },
                                            {
                                              kind: 'leaf',
                                              name: 'to',
                                              qname: 'fire:to',
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-set',
                                      qname: 'fire:address-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address-set',
                                          qname: 'fire:address-set',
                                          info: {
                                            string: 'set of one or more IPv4 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't1'
                                          },
                                          deps: ['/serv:services/fire:firewall/address-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address',
                                          qname: 'fire:add-interface-address',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6-set',
                                      qname: 'fire:address6-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6-set',
                                          qname: 'fire:address6-set',
                                          info: {
                                            string: 'set of one or more IPv6 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address6-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't4'
                                          },
                                          deps: ['/serv:services/fire:firewall/address6-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address6',
                                          qname: 'fire:add-interface-address6',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    }
                                  ],
                                  mandatory: true
                                }
                              ]
                            },
                            {
                              kind: 'container',
                              name: 'dst-address',
                              qname: 'fire:dst-address',
                              info: {
                                string: 'destination address(es) specification'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'fire:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the address-spec'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'choice',
                                  name: 'type',
                                  qname: 'fire:type',
                                  cases: [
                                    {
                                      kind: 'case',
                                      name: 'address',
                                      qname: 'fire:address',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'fire:address',
                                          info: {
                                            string: 'IPv4 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv4-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6',
                                      qname: 'fire:address6',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6',
                                          qname: 'fire:address6',
                                          info: {
                                            string: 'IPv6 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv6-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-range',
                                      qname: 'fire:address-range',
                                      children: [
                                        {
                                          kind: 'container',
                                          name: 'address-range',
                                          qname: 'fire:address-range',
                                          info: {
                                            string: 'IPv4 or IPv6 address range'
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
                                              name: 'from',
                                              qname: 'fire:from',
                                              mandatory: true,
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            },
                                            {
                                              kind: 'leaf',
                                              name: 'to',
                                              qname: 'fire:to',
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-set',
                                      qname: 'fire:address-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address-set',
                                          qname: 'fire:address-set',
                                          info: {
                                            string: 'set of one or more IPv4 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't1'
                                          },
                                          deps: ['/serv:services/fire:firewall/address-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address',
                                          qname: 'fire:add-interface-address',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6-set',
                                      qname: 'fire:address6-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6-set',
                                          qname: 'fire:address6-set',
                                          info: {
                                            string: 'set of one or more IPv6 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address6-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't4'
                                          },
                                          deps: ['/serv:services/fire:firewall/address6-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address6',
                                          qname: 'fire:add-interface-address6',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
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
                          kind: 'container',
                          name: 'source-nat',
                          qname: 'fire:source-nat',
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
                              kind: 'choice',
                              name: 'to',
                              qname: 'fire:to',
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'interface',
                                  qname: 'fire:interface',
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'interface',
                                      qname: 'fire:interface',
                                      info: {
                                        string:
                                          'translate source address to the address of\nthe egress interface'
                                      },
                                      presence: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'address',
                                  qname: 'fire:address',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'fire:address',
                                      info: {
                                        string: 'translate source address to this address'
                                      },
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
                                    }
                                  ]
                                }
                              ],
                              mandatory: true
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'container',
              name: 'destination',
              qname: 'fire:destination',
              mandatory: true,
              exists: true,
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
                  name: 'rule-set',
                  qname: 'fire:rule-set',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['name'],
                  exists: true,
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
                      qname: 'fire:name',
                      info: {
                        string:
                          'ASCII string identifying the rule-set (allowed chars: a-zA-Z0-9-_).'
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
                        namespace: 'com:gemds:services:firewall',
                        name: 't17'
                      }
                    },
                    {
                      kind: 'list',
                      name: 'rule',
                      qname: 'fire:rule',
                      mandatory: true,
                      min_elements: 0,
                      max_elements: 'unbounded',
                      key: ['id'],
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
                          name: 'id',
                          qname: 'fire:id',
                          info: {
                            string: 'rule id'
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
                            name: 'uint32',
                            primitive: true
                          }
                        },
                        {
                          kind: 'container',
                          name: 'match',
                          qname: 'fire:match',
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
                              name: 'protocol',
                              qname: 'fire:protocol',
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:services:firewall',
                                name: 'protocol'
                              },
                              default: 'all'
                            },
                            {
                              kind: 'container',
                              name: 'src-address',
                              qname: 'fire:src-address',
                              info: {
                                string: 'source address(es) specification'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'fire:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the address-spec'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'choice',
                                  name: 'type',
                                  qname: 'fire:type',
                                  cases: [
                                    {
                                      kind: 'case',
                                      name: 'address',
                                      qname: 'fire:address',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'fire:address',
                                          info: {
                                            string: 'IPv4 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv4-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6',
                                      qname: 'fire:address6',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6',
                                          qname: 'fire:address6',
                                          info: {
                                            string: 'IPv6 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv6-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-range',
                                      qname: 'fire:address-range',
                                      children: [
                                        {
                                          kind: 'container',
                                          name: 'address-range',
                                          qname: 'fire:address-range',
                                          info: {
                                            string: 'IPv4 or IPv6 address range'
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
                                              name: 'from',
                                              qname: 'fire:from',
                                              mandatory: true,
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            },
                                            {
                                              kind: 'leaf',
                                              name: 'to',
                                              qname: 'fire:to',
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-set',
                                      qname: 'fire:address-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address-set',
                                          qname: 'fire:address-set',
                                          info: {
                                            string: 'set of one or more IPv4 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't1'
                                          },
                                          deps: ['/serv:services/fire:firewall/address-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address',
                                          qname: 'fire:add-interface-address',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6-set',
                                      qname: 'fire:address6-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6-set',
                                          qname: 'fire:address6-set',
                                          info: {
                                            string: 'set of one or more IPv6 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address6-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't4'
                                          },
                                          deps: ['/serv:services/fire:firewall/address6-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address6',
                                          qname: 'fire:add-interface-address6',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    }
                                  ],
                                  mandatory: true
                                }
                              ]
                            },
                            {
                              kind: 'container',
                              name: 'dst-address',
                              qname: 'fire:dst-address',
                              info: {
                                string: 'destination address(es) specification'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'fire:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the address-spec'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'choice',
                                  name: 'type',
                                  qname: 'fire:type',
                                  cases: [
                                    {
                                      kind: 'case',
                                      name: 'address',
                                      qname: 'fire:address',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address',
                                          qname: 'fire:address',
                                          info: {
                                            string: 'IPv4 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv4-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6',
                                      qname: 'fire:address6',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6',
                                          qname: 'fire:address6',
                                          info: {
                                            string: 'IPv6 address or network'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'ipv6-prefix',
                                            primitive: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-range',
                                      qname: 'fire:address-range',
                                      children: [
                                        {
                                          kind: 'container',
                                          name: 'address-range',
                                          qname: 'fire:address-range',
                                          info: {
                                            string: 'IPv4 or IPv6 address range'
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
                                              name: 'from',
                                              qname: 'fire:from',
                                              mandatory: true,
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            },
                                            {
                                              kind: 'leaf',
                                              name: 'to',
                                              qname: 'fire:to',
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                namespace:
                                                  'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                name: 'ip-address'
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address-set',
                                      qname: 'fire:address-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address-set',
                                          qname: 'fire:address-set',
                                          info: {
                                            string: 'set of one or more IPv4 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't1'
                                          },
                                          deps: ['/serv:services/fire:firewall/address-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address',
                                          qname: 'fire:add-interface-address',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    },
                                    {
                                      kind: 'case',
                                      name: 'address6-set',
                                      qname: 'fire:address6-set',
                                      children: [
                                        {
                                          kind: 'leaf',
                                          name: 'address6-set',
                                          qname: 'fire:address6-set',
                                          info: {
                                            string: 'set of one or more IPv6 addresses/networks'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          is_leafref: true,
                                          leafref_target:
                                            '/serv:services/fire:firewall/address6-set/name',
                                          type: {
                                            namespace: 'com:gemds:services:firewall',
                                            name: 't4'
                                          },
                                          deps: ['/serv:services/fire:firewall/address6-set']
                                        },
                                        {
                                          kind: 'leaf',
                                          name: 'add-interface-address6',
                                          qname: 'fire:add-interface-address6',
                                          info: {
                                            string:
                                              'Add the address of the interface to which this filter has\nbeen applied to the address6-set'
                                          },
                                          access: {
                                            create: true,
                                            read: true,
                                            update: true,
                                            delete: true,
                                            execute: false
                                          },
                                          type: {
                                            name: 'boolean',
                                            primitive: true
                                          },
                                          default: false
                                        }
                                      ]
                                    }
                                  ],
                                  mandatory: true
                                }
                              ]
                            },
                            {
                              kind: 'leaf',
                              name: 'dst-port',
                              qname: 'fire:dst-port',
                              info: {
                                string: 'destination port'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              when_targets: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ],
                              evaluated_when_entry: false,
                              type: {
                                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                name: 'port-number'
                              },
                              deps: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ]
                            },
                            {
                              kind: 'container',
                              name: 'dst-port-range',
                              qname: 'fire:dst-port-range',
                              info: {
                                string: 'destination port range'
                              },
                              presence: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              when_targets: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ],
                              evaluated_when_entry: false,
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'from',
                                  qname: 'fire:from',
                                  mandatory: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'uint16',
                                    primitive: true
                                  }
                                },
                                {
                                  kind: 'leaf',
                                  name: 'to',
                                  qname: 'fire:to',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'uint16',
                                    primitive: true
                                  }
                                }
                              ],
                              deps: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ]
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'destination-nat',
                          qname: 'fire:destination-nat',
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
                              name: 'address',
                              qname: 'fire:address',
                              info: {
                                string: 'translate destination address to this address'
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
                                name: 'ip-address'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'port',
                              qname: 'fire:port',
                              info: {
                                string: 'translate destination port to this port'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              when_targets: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ],
                              evaluated_when_entry: false,
                              type: {
                                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                name: 'port-number'
                              },
                              deps: [
                                '/serv:services/fire:firewall/nat/destination/rule-set/rule/match/protocol'
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'container',
              name: 'static',
              qname: 'fire:static',
              mandatory: true,
              exists: true,
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
                  name: 'rule-set',
                  qname: 'fire:rule-set',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['name'],
                  exists: true,
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
                      qname: 'fire:name',
                      info: {
                        string:
                          'ASCII string identifying the rule-set (allowed chars: a-zA-Z0-9-_).'
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
                        namespace: 'com:gemds:services:firewall',
                        name: 't18'
                      }
                    },
                    {
                      kind: 'list',
                      name: 'rule',
                      qname: 'fire:rule',
                      mandatory: true,
                      min_elements: 0,
                      max_elements: 'unbounded',
                      key: ['id'],
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
                          name: 'id',
                          qname: 'fire:id',
                          info: {
                            string: 'rule id'
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
                            name: 'uint32',
                            primitive: true
                          }
                        },
                        {
                          kind: 'container',
                          name: 'match',
                          qname: 'fire:match',
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
                              name: 'dst-address',
                              qname: 'fire:dst-address',
                              info: {
                                string: 'destination address/network'
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
                                name: 'ipv4-prefix',
                                primitive: true
                              }
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'static-nat',
                          qname: 'fire:static-nat',
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
                              name: 'address',
                              qname: 'fire:address',
                              info: {
                                string:
                                  'translate destination address/network to this address/network and vice versa'
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
                                name: 'ipv4-prefix',
                                primitive: true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'container',
              name: 'nat64',
              qname: 'fire:nat64',
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
                  kind: 'container',
                  name: 'src-pool',
                  qname: 'fire:src-pool',
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
                      name: 'src-address',
                      qname: 'fire:src-address',
                      info: {
                        string: 'IPv4 network'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'ipv4-prefix',
                        primitive: true
                      }
                    },
                    {
                      kind: 'container',
                      name: 'src-ports',
                      qname: 'fire:src-ports',
                      info: {
                        string: 'source port(s) specification'
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
                          name: 'from',
                          qname: 'fire:from',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'uint16',
                            primitive: true
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'to',
                          qname: 'fire:to',
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'uint16',
                            primitive: true
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'leaf',
                  name: 'dst-prefix',
                  qname: 'fire:dst-prefix',
                  info: {
                    string:
                      'IPv6 address pool used for translating IPv4 addresses.\nPrefix length must be 32, 40, 48, 56, 64, or 96.'
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
                    name: 'ipv6-prefix',
                    primitive: true
                  }
                },
                {
                  kind: 'list',
                  name: 'static',
                  qname: 'fire:static',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['id'],
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
                      name: 'id',
                      qname: 'fire:id',
                      info: {
                        string: 'rule id'
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
                        name: 'uint32',
                        primitive: true
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'v6-address',
                      qname: 'fire:v6-address',
                      info: {
                        string:
                          'Source IPv6 address to be masked to the destination IPv4\naddress below.'
                      },
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
                      name: 'v6-port',
                      qname: 'fire:v6-port',
                      info: {
                        string: 'Source IPv6 port.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                        name: 'port-number'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'v4-address',
                      qname: 'fire:v4-address',
                      info: {
                        string:
                          'Destination IPv4 address. Must fall within the dynamic source\nIPv4 pool.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        name: 'ipv4-address',
                        primitive: true
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'v4-port',
                      qname: 'fire:v4-port',
                      info: {
                        string: 'Destination IPv4 port.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                        name: 'port-number'
                      }
                    },
                    {
                      kind: 'leaf-list',
                      name: 'protocols',
                      qname: 'fire:protocols',
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:firewall',
                        name: 't20'
                      }
                    }
                  ],
                  deps: [
                    '/serv:services/fire:firewall/nat/nat64/src-pool/src-address',
                    '/serv:services/fire:firewall/nat/nat64/src-pool/src-ports'
                  ]
                }
              ],
              deps: ['/serv:services/fire:firewall/nat/nat64']
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'gps',
      qname: 'gps:gps',
      namespace: 'com:gemds:services:gps',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['source']],
      leafref_groups: [['source']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'gps:enabled',
          info: {
            string: 'Whether or not to run GPS service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'source',
          qname: 'gps:source',
          info: {
            string:
              'If specified, the data is collected only from this GPS data source.\nOtherwise, data is collected from all sources found in the system.\nThis parameter is useful if there is more than one data source in the\nsystem and you would like to collect data only from a specific source.'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/serv:services/gps:gps/sources/name',
          type: {
            namespace: 'com:gemds:services:gps',
            name: 'display-string'
          },
          deps: ['/serv:services/gps:gps/sources']
        },
        {
          kind: 'container',
          name: 'status',
          qname: 'gps:status',
          mandatory: true,
          config: false,
          is_config_false_callpoint: true,
          exists: true,
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
              name: 'fix-mode',
              qname: 'gps:fix-mode',
              info: {
                string: 'fix mode'
              },
              config: false,
              is_config_false_callpoint: true,
              value: 'no-fix',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:gps',
                name: 't0'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'time',
              qname: 'gps:time',
              info: {
                string: 'UTC time'
              },
              config: false,
              is_config_false_callpoint: true,
              value: 'n/a',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'latitude',
              qname: 'gps:latitude',
              info: {
                string: 'Latitude'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0.000000000000000e+0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'double',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'longitude',
              qname: 'gps:longitude',
              info: {
                string: 'Longitude'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0.000000000000000e+0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'double',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'altitude',
              qname: 'gps:altitude',
              info: {
                string: 'Altitude (ft)'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0.000000000000000e+0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'double',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'speed',
              qname: 'gps:speed',
              info: {
                string: 'Speed (mph)'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0.000000000000000e+0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'double',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'heading',
              qname: 'gps:heading',
              info: {
                string: 'True Heading (degree)'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0.000000000000000e+0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'double',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'satellites-visible',
              qname: 'gps:satellites-visible',
              info: {
                string: 'The number of satellites currently visible.'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint8',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'satellites-used',
              qname: 'gps:satellites-used',
              info: {
                string: 'The number of satellites being used for GPS fix.'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '0',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint8',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'list',
              name: 'satellites',
              qname: 'gps:satellites',
              info: {
                string: 'The list of all visible satellites, and their status'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              config: false,
              is_config_false_callpoint: true,
              key: ['prn'],
              exists: true,
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
                  name: 'prn',
                  qname: 'gps:prn',
                  info: {
                    string: 'PRN (pseudorandom noise code) of satellite'
                  },
                  mandatory: true,
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: false,
                    read: true,
                    update: false,
                    delete: false,
                    execute: false
                  },
                  type: {
                    name: 'uint16',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'used',
                  qname: 'gps:used',
                  info: {
                    string: 'True if this satellite is used in current GPS fix.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'elevation',
                  qname: 'gps:elevation',
                  info: {
                    string: 'elevation of satellite'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'uint16',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'azimuth',
                  qname: 'gps:azimuth',
                  info: {
                    string: 'azimuth of satellite'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'uint16',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'snr',
                  qname: 'gps:snr',
                  info: {
                    string: 'signal-to-noise ratio'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  units: 'dB',
                  type: {
                    name: 'uint16',
                    primitive: true
                  },
                  readonly: true
                }
              ],
              readonly: true
            }
          ],
          readonly: true
        },
        {
          kind: 'list',
          name: 'sources',
          qname: 'gps:sources',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          config: false,
          key: ['name'],
          exists: true,
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
              qname: 'gps:name',
              info: {
                string: 'Name of GPS data source'
              },
              mandatory: true,
              config: false,
              access: {
                create: false,
                read: true,
                update: false,
                delete: false,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:gps',
                name: 'display-string'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'device',
              qname: 'gps:device',
              info: {
                string: 'Name of the GPS data source device'
              },
              config: false,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            }
          ],
          readonly: true
        }
      ]
    },
    {
      kind: 'container',
      name: 'ip-passthrough',
      qname: 'ip-passthrough:ip-passthrough',
      namespace: 'com:gemds:services:ip-passthrough',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['from-interface'], ['to-interface']],
      leafref_groups: [['from-interface'], ['to-interface']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'ip-passthrough:enabled',
          info: {
            string: 'Whether or not to run IP passthrough service.'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'from-interface',
          qname: 'ip-passthrough:from-interface',
          info: {
            string:
              'The interface from which the IP address is taken for passing through\nto the locally connected device.'
          },
          value: 'Cell',
          exists: true,
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
            name: 'string',
            primitive: true
          },
          default: 'Cell',
          deps: ['/if:interfaces/interface']
        },
        {
          kind: 'leaf',
          name: 'to-interface',
          qname: 'ip-passthrough:to-interface',
          info: {
            string:
              'The interface to which the local device is connected.\nThe local device receives the passsed through address via DHCP.'
          },
          value: 'Bridge',
          exists: true,
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
            name: 'string',
            primitive: true
          },
          default: 'Bridge',
          deps: ['/if:interfaces/interface']
        },
        {
          kind: 'list',
          name: 'local-service',
          qname: 'ip-passthrough:local-service',
          info: {
            string:
              'The traffic received for these services is processed locally\ninstead getting passed through to the connected LAN device.'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'ip-passthrough:name',
              info: {
                string: 'The ASCII string identifying the service.'
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
                name: 'string',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'protocol',
              qname: 'ip-passthrough:protocol',
              info: {
                string: 'The protocol type for the service.'
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
                namespace: 'com:gemds:services:ip-passthrough',
                name: 't0'
              }
            },
            {
              kind: 'leaf',
              name: 'port',
              qname: 'ip-passthrough:port',
              info: {
                string: 'The port number for the service.'
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
                name: 'uint16',
                primitive: true
              }
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'netconf',
      qname: 'netconf:netconf',
      namespace: 'com:gemds:services:netconf',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
      leafref_groups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'netconf:enabled',
          info: {
            string: 'Whether or not to run the netconf server'
          },
          value: true,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: true
        },
        {
          kind: 'leaf',
          name: 'port',
          qname: 'netconf:port',
          info: {
            string: 'The port to listen to netconf connections on.'
          },
          value: '830',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
            name: 'port-number'
          },
          default: '830'
        },
        {
          kind: 'leaf-list',
          name: 'ipv4-bind-ips',
          qname: 'netconf:ipv4-bind-ips',
          info: {
            string:
              'Restrict the server to only listen for connections\non the specified IPv4 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv4 addresses.'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
          type: {
            namespace: 'com:gemds:services:netconf',
            name: 't1'
          },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/ip:ipv4',
            '/if:interfaces/interface/ip:ipv4/address'
          ]
        },
        {
          kind: 'leaf-list',
          name: 'ipv6-bind-ips',
          qname: 'netconf:ipv6-bind-ips',
          info: {
            string:
              'Restrict the server to only listen for connections\non the specified IPv6 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv6 addresses.'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/ip:ipv6/address/ip',
          type: {
            namespace: 'com:gemds:services:netconf',
            name: 't3'
          },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/ip:ipv6',
            '/if:interfaces/interface/ip:ipv6/address'
          ]
        }
      ],
      deps: ['/serv:services/netconf:netconf']
    },
    {
      kind: 'container',
      name: 'netmon',
      qname: 'netmon:netmon',
      namespace: 'com:gemds:services:netmon',
      mandatory: true,
      exists: true,
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
          name: 'operation',
          qname: 'netmon:operation',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'netmon:name',
              info: {
                string: 'ASCII string identifying the operation (allowed chars: a-zA-Z0-9-_).'
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
                namespace: 'com:gemds:security',
                name: 'word-string'
              }
            },
            {
              kind: 'leaf',
              name: 'enabled',
              qname: 'netmon:enabled',
              info: {
                string: 'Whether or not to run this operation'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: false
            },
            {
              kind: 'leaf',
              name: 'type',
              qname: 'netmon:type',
              info: {
                string: 'Type of monitor operation'
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
                namespace: 'com:gemds:services:netmon',
                name: 't4'
              }
            },
            {
              kind: 'container',
              name: 'interface-monitor',
              qname: 'netmon:interface-monitor',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/serv:services/netmon:netmon/operation/type'],
              leafrefGroups: [['interface']],
              leafref_groups: [['interface']],
              evaluated_when_entry: false,
              children: [
                {
                  kind: 'leaf',
                  name: 'interface',
                  qname: 'netmon:interface',
                  info: {
                    string: 'Interface to monitor'
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
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  deps: ['/if:interfaces/interface']
                },
                {
                  kind: 'leaf',
                  name: 'down-delay',
                  qname: 'netmon:down-delay',
                  info: {
                    string: 'Time interval (secs) to wait before indicating interface is down'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'uint32',
                    primitive: true
                  },
                  default: '5'
                },
                {
                  kind: 'leaf',
                  name: 'up-delay',
                  qname: 'netmon:up-delay',
                  info: {
                    string: 'Time interval (secs) to wait before indicating interface is up'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'uint32',
                    primitive: true
                  },
                  default: '5'
                }
              ],
              deps: ['/serv:services/netmon:netmon/operation/type']
            },
            {
              kind: 'container',
              name: 'icmp-echo-monitor',
              qname: 'netmon:icmp-echo-monitor',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/serv:services/netmon:netmon/operation/type'],
              evaluated_when_entry: false,
              children: [
                {
                  kind: 'leaf',
                  name: 'dst-host',
                  qname: 'netmon:dst-host',
                  info: {
                    string: 'Destination IP address or DNS name to send icmp-echo to.'
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
                  name: 'src-address',
                  qname: 'netmon:src-address',
                  info: {
                    string: 'Source address to use for icmp-echo'
                  },
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
                  name: 'interval',
                  qname: 'netmon:interval',
                  info: {
                    string: 'Time interval (in seconds) between icmp-echo requests'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:services:netmon',
                    name: 't5'
                  },
                  default: '5'
                },
                {
                  kind: 'leaf',
                  name: 'timeout',
                  qname: 'netmon:timeout',
                  info: {
                    string: 'Time to wait (in milliseconds) for icmp-echo response'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:services:netmon',
                    name: 't6'
                  },
                  default: '2000'
                },
                {
                  kind: 'leaf',
                  name: 'successive-loss-threshold',
                  qname: 'netmon:successive-loss-threshold',
                  info: {
                    string:
                      'Number of consecutive icmp-echo requests for which\nno responses need to be received before destination\nis declared unreachable'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:services:netmon',
                    name: 't7'
                  },
                  default: '6'
                },
                {
                  kind: 'leaf',
                  name: 'successive-gain-threshold',
                  qname: 'netmon:successive-gain-threshold',
                  info: {
                    string:
                      'Number of consecutive icmp-echo requests for which\nresponses need to be received before destination is\ndeclared reachable'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:services:netmon',
                    name: 't8'
                  },
                  default: '6'
                }
              ],
              deps: ['/serv:services/netmon:netmon/operation/type']
            },
            {
              kind: 'container',
              name: 'bgp-neighbor-monitor',
              qname: 'netmon:bgp-neighbor-monitor',
              presence: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              when_targets: ['/serv:services/netmon:netmon/operation/type'],
              leafrefGroups: [['mds-routing-bgp:neighbor']],
              leafref_groups: [['mds-routing-bgp:neighbor']],
              evaluated_when_entry: false,
              children: [
                {
                  kind: 'leaf',
                  name: 'down-delay',
                  qname: 'netmon:down-delay',
                  info: {
                    string: 'Time interval (secs) to wait before indicating neighbor is down'
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
                    name: 'uint32',
                    primitive: true
                  },
                  default: '300'
                },
                {
                  kind: 'leaf',
                  name: 'up-delay',
                  qname: 'netmon:up-delay',
                  info: {
                    string: 'Time interval (secs) to wait before indicating neighbor is up'
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
                    name: 'uint32',
                    primitive: true
                  },
                  default: '60'
                },
                {
                  kind: 'leaf',
                  name: 'neighbor',
                  qname: 'mds-routing-bgp:neighbor',
                  info: {
                    string: 'BGP neighbor to monitor.'
                  },
                  namespace: 'com:gemds:mds-routing-bgp',
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  is_leafref: true,
                  leafref_target: '/mds-routing:routing/mds-routing-bgp:bgp/neighbor/name',
                  type: {
                    namespace: 'com:gemds:security',
                    name: 'word-string'
                  },
                  deps: [
                    '/mds-routing:routing/mds-routing-bgp:bgp',
                    '/mds-routing:routing/mds-routing-bgp:bgp/neighbor'
                  ]
                }
              ],
              deps: [
                '/serv:services/netmon:netmon/operation/bgp-neighbor-monitor',
                '/serv:services/netmon:netmon/operation/type'
              ]
            },
            {
              kind: 'container',
              name: 'status',
              qname: 'netmon:status',
              mandatory: true,
              config: false,
              is_config_false_callpoint: true,
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
                  name: 'state',
                  qname: 'netmon:state',
                  info: {
                    string: 'True if state is up, false otherwise.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  readonly: true
                }
              ],
              readonly: true
            }
          ],
          deps: [
            '/serv:services/netmon:netmon/operation/bgp-neighbor-monitor',
            '/serv:services/netmon:netmon/operation/icmp-echo-monitor',
            '/serv:services/netmon:netmon/operation/interface-monitor',
            '/serv:services/netmon:netmon/operation/interface-monitor/interface',
            '/serv:services/netmon:netmon/operation/type'
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'nhrp',
      qname: 'nhrp:nhrp',
      namespace: 'com:gemds:services:nhrp',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'nhrp:enabled',
          info: {
            string: 'Whether or not to run NHRP service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'list',
          name: 'interface',
          qname: 'nhrp:interface',
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'nhrp:name',
              info: {
                string:
                  'The interface on which the protocol is activated with given interface-specific options.'
              },
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
                namespace: 'com:gemds:services:nhrp',
                name: 't0'
              },
              deps: ['/if:interfaces/interface']
            },
            {
              kind: 'list',
              name: 'map',
              qname: 'nhrp:map',
              info: {
                string: 'static mapping of protocol-address to nbma-address'
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
              children: [
                {
                  kind: 'key',
                  name: 'name',
                  qname: 'nhrp:name',
                  info: {
                    string: 'Name of the mapping. (allowed chars: a-zA-Z0-9-_).'
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
                    namespace: 'com:gemds:security',
                    name: 'word-string'
                  }
                },
                {
                  kind: 'leaf',
                  name: 'protocol-address',
                  qname: 'nhrp:protocol-address',
                  info: {
                    string: 'Peer protocol address (i.e. peer tunnel interface address)'
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
                    name: 'ip-address'
                  }
                },
                {
                  kind: 'leaf',
                  name: 'protocol-netmask',
                  qname: 'nhrp:protocol-netmask',
                  info: {
                    string:
                      'Peer protocol address mask. If present, the peer is used a next hop server\nfor the subnet specified by protocol-address and protocol-netmask.'
                  },
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
                  name: 'nbma-address',
                  qname: 'nhrp:nbma-address',
                  info: {
                    string:
                      'Peer NBMA FQDN or address (i.e. peer transport/nbma network name or address)'
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
                  name: 'register',
                  qname: 'nhrp:register',
                  info: {
                    string: 'Registration Request should be sent to this peer on startup.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: false
                },
                {
                  kind: 'leaf',
                  name: 'cisco',
                  qname: 'nhrp:cisco',
                  info: {
                    string: 'Registration Request should be sent to this peer on startup.'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: false
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'authentication',
              qname: 'nhrp:authentication',
              info: {
                string:
                  'Enables  Cisco style authentication on NHRP packets. This embeds\nthe secret plaintext password  to  the  outgoing  NHRP  packets.\nIncoming NHRP packets on this interface are discarded unless the\nsecret password is present. Maximum length of the  secret  is  8\ncharacters.'
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
              }
            },
            {
              kind: 'leaf',
              name: 'holding-time',
              qname: 'nhrp:holding-time',
              info: {
                string:
                  'Specifies  the  holding  time (in secondS) for NHRP Registration Requests and\nResolution Replies sent from this interface'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint32',
                primitive: true
              },
              default: '7200'
            },
            {
              kind: 'container',
              name: 'multicast',
              qname: 'nhrp:multicast',
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
                  name: 'dynamic',
                  qname: 'nhrp:dynamic',
                  info: {
                    string:
                      'Multicast traffic is forwarded to all peers with which the interface has a\ndirect connection'
                  },
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'boolean',
                    primitive: true
                  },
                  default: true
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'redirect',
              qname: 'nhrp:redirect',
              info: {
                string:
                  'Enables sending of Cisco style NHRP Traffic Indication packets.\nIf this is enabled and nhrp detects a forwarded  packet,  it\nwill  send  a  message  to  the  original  sender  of the packet\ninstructing it to create a direct connection with  the  destina‐\ntion.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            },
            {
              kind: 'leaf',
              name: 'shortcut',
              qname: 'nhrp:shortcut',
              info: {
                string:
                  'Enable creation of shortcut  routes.  A  received  NHRP  Traffic\nIndication  will  trigger  the resolution and establishment of a\nshortcut route.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true
            },
            {
              kind: 'leaf',
              name: 'shortcut-destination',
              qname: 'nhrp:shortcut-destination',
              info: {
                string:
                  'This  instructs  the device to  reply with authorative answers on\nNHRP Resolution Requests destined to addresses in  this  interface\n(instead  of  forwarding  the  packets).  This allows the creation\nof shortcut routes to subnets located on the interface.\n\nNOTE: When specified, this should be the only parameter\nconfigured for this interface.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'empty',
                primitive: true
              }
            }
          ]
        },
        {
          kind: 'container',
          name: 'status',
          qname: 'nhrp:status',
          mandatory: true,
          config: false,
          exists: true,
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
              name: 'entry',
              qname: 'nhrp:entry',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              config: false,
              is_config_false_callpoint: true,
              exists: true,
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
                  name: 'nbma-address',
                  qname: 'nhrp:nbma-address',
                  info: {
                    string: 'Peer NBMA address.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
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
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'protocol-address',
                  qname: 'nhrp:protocol-address',
                  info: {
                    string: 'Peer protocol/tunnel address.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'ip-prefix',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'state',
                  qname: 'nhrp:state',
                  info: {
                    string: 'State of entry.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'type',
                  qname: 'nhrp:type',
                  info: {
                    string: 'Type of entry.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    namespace: 'com:gemds:services:nhrp',
                    name: 't1'
                  },
                  readonly: true
                },
                {
                  kind: 'leaf',
                  name: 'expires-in',
                  qname: 'nhrp:expires-in',
                  info: {
                    string: 'Specifies the duration after which it would expire.'
                  },
                  config: false,
                  is_config_false_callpoint: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'string',
                    primitive: true
                  },
                  readonly: true
                }
              ],
              readonly: true
            }
          ],
          readonly: true
        }
      ],
      deps: ['/serv:services/nhrp:nhrp/enabled', '/serv:services/nhrp:nhrp/interface']
    },
    {
      kind: 'container',
      name: 'qos',
      qname: 'qos:qos',
      info: {
        string: 'Configuration of the Quality of Service system'
      },
      namespace: 'com:gemds:services:qos',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'qos:enabled',
          info: {
            string: 'Whether or not to run the QoS service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'list',
          name: 'policy',
          qname: 'qos:policy',
          info: {
            string: 'The QoS policies to apply to network traffic.'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'qos:name',
              info: {
                string: 'String identifying the policy'
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
                namespace: 'com:gemds:services:qos',
                name: 't0'
              }
            },
            {
              kind: 'choice',
              name: 'type',
              qname: 'qos:type',
              cases: [
                {
                  kind: 'case',
                  name: 'modify',
                  qname: 'qos:modify',
                  children: [
                    {
                      kind: 'container',
                      name: 'modify',
                      qname: 'qos:modify',
                      info: {
                        string: 'Modifies fields in network packets.'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      leafrefGroups: [['classifier']],
                      leafref_groups: [['classifier']],
                      children: [
                        {
                          kind: 'leaf-list',
                          name: 'classifier',
                          qname: 'qos:classifier',
                          info: {
                            string:
                              'A list of classifers. If any of the classifiers\nmatch, then the traffic will be modified accordingly.'
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
                          leafref_target: '/serv:services/qos:qos/classifier/name',
                          type: {
                            namespace: 'com:gemds:services:qos',
                            name: 't2'
                          },
                          deps: ['/serv:services/qos:qos/classifier']
                        },
                        {
                          kind: 'choice',
                          name: 'modify-type',
                          qname: 'qos:modify-type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'tos',
                              qname: 'qos:tos',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'tos',
                                  qname: 'qos:tos',
                                  info: {
                                    string: 'Set the ToS value in IPv4 packets.'
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
                                      name: 'value',
                                      qname: 'qos:value',
                                      mandatory: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:qos',
                                        name: 't3'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'dscp',
                              qname: 'qos:dscp',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'dscp',
                                  qname: 'qos:dscp',
                                  info: {
                                    string: 'Set the DSCP value in IPv4 packets.'
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
                                      name: 'value',
                                      qname: 'qos:value',
                                      mandatory: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:qos',
                                        name: 't6'
                                      }
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
                  name: 'prioritization',
                  qname: 'qos:prioritization',
                  children: [
                    {
                      kind: 'container',
                      name: 'prioritization',
                      qname: 'qos:prioritization',
                      info: {
                        string:
                          'Prioritizes the transmission of classes of traffic to give precedence to\ncritical traffic flows.'
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
                          name: 'default-priority',
                          qname: 'qos:default-priority',
                          info: {
                            string: 'Priority of any unclassified traffic (1=highest).'
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
                            namespace: 'com:gemds:services:qos',
                            name: 't7'
                          }
                        },
                        {
                          kind: 'list',
                          name: 'class',
                          qname: 'qos:class',
                          info: {
                            string: 'Configuration of each priority class.'
                          },
                          mandatory: true,
                          min_elements: 0,
                          max_elements: 16,
                          key: ['name'],
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          leafrefGroups: [['classifier'], ['next-policy']],
                          leafref_groups: [['classifier'], ['next-policy']],
                          children: [
                            {
                              kind: 'key',
                              name: 'name',
                              qname: 'qos:name',
                              info: {
                                string: 'String identifying the class'
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
                                namespace: 'com:gemds:services:qos',
                                name: 't8'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'priority',
                              qname: 'qos:priority',
                              info: {
                                string: 'Priority of this traffic class (1=highest).'
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
                                namespace: 'com:gemds:services:qos',
                                name: 't9'
                              }
                            },
                            {
                              kind: 'leaf-list',
                              name: 'classifier',
                              qname: 'qos:classifier',
                              info: {
                                string:
                                  'A list of classifers. If any of the classifiers\nmatch, then the traffic will be placed into this class.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              is_leafref: true,
                              leafref_target: '/serv:services/qos:qos/classifier/name',
                              type: {
                                namespace: 'com:gemds:services:qos',
                                name: 't11'
                              },
                              deps: ['/serv:services/qos:qos/classifier']
                            },
                            {
                              kind: 'leaf',
                              name: 'next-policy',
                              qname: 'qos:next-policy',
                              info: {
                                string:
                                  'Next policy to be applied to this traffic class. This\ncan be used to setup a hierarchy of policies'
                              },
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
                                '/serv:services/qos:qos/policy',
                                '/serv:services/qos:qos/policy/fairness',
                                '/serv:services/qos:qos/policy/name',
                                '/serv:services/qos:qos/policy/prioritization/class/classifier',
                                '/serv:services/qos:qos/policy/prioritization/class/next-policy'
                              ]
                            }
                          ],
                          deps: ['/serv:services/qos:qos/policy/prioritization/class/priority']
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/policy',
                        '/serv:services/qos:qos/policy/prioritization/class',
                        '/serv:services/qos:qos/policy/prioritization/class/priority',
                        '/serv:services/qos:qos/policy/prioritization/default-priority'
                      ]
                    }
                  ]
                },
                {
                  kind: 'case',
                  name: 'fairness',
                  qname: 'qos:fairness',
                  children: [
                    {
                      kind: 'container',
                      name: 'fairness',
                      qname: 'qos:fairness',
                      info: {
                        string:
                          'Applies an algorithm to ensure all flows of traffic have an equal\nopportunity to utilize transmission bandwidth.'
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
                          kind: 'choice',
                          name: 'fairness-type',
                          qname: 'qos:fairness-type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'sfq',
                              qname: 'qos:sfq',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'sfq',
                                  qname: 'qos:sfq',
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
                                      name: 'perturb',
                                      qname: 'qos:perturb',
                                      info: {
                                        string:
                                          'Reconfigure the hashing algorithim once\nthis many seconds has gone by.'
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
                                        namespace: 'com:gemds:services:qos',
                                        name: 't12'
                                      },
                                      default: '10'
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'quantum',
                                      qname: 'qos:quantum',
                                      info: {
                                        string:
                                          'Amount of bytes to send before switching to the next stream.'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      units: 'bytes',
                                      type: {
                                        namespace: 'com:gemds:services:qos',
                                        name: 't13'
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'limit',
                                      qname: 'qos:limit',
                                      info: {
                                        string: 'Number of packets to be queued'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      units: 'packets',
                                      type: {
                                        namespace: 'com:gemds:services:qos',
                                        name: 't14'
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'case',
                  name: 'shaping',
                  qname: 'qos:shaping',
                  children: [
                    {
                      kind: 'container',
                      name: 'shaping-htb',
                      qname: 'qos:shaping-htb',
                      info: {
                        string:
                          'Applies maximum rate limits and ensures\nminimum allocated bandwidth to different flows of traffic.'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      leafrefGroups: [['default-class']],
                      leafref_groups: [['default-class']],
                      children: [
                        {
                          kind: 'leaf',
                          name: 'default-class',
                          qname: 'qos:default-class',
                          info: {
                            string: 'Unclassified traffic will be placed into this class.'
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
                          leafref_target: '/serv:services/qos:qos/policy/shaping-htb/class/name',
                          type: {
                            namespace: 'com:gemds:services:qos',
                            name: 't17'
                          },
                          deps: ['/serv:services/qos:qos/policy/shaping-htb/class']
                        },
                        {
                          kind: 'leaf',
                          name: 'committed-rate',
                          qname: 'qos:committed-rate',
                          info: {
                            string: 'The minimal rate of traffic, in kbps.'
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
                            namespace: 'com:gemds:services:qos',
                            name: 't15'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'max-rate',
                          qname: 'qos:max-rate',
                          info: {
                            string: 'The maximal rate of traffic, in kbps.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:qos',
                            name: 't16'
                          },
                          deps: [
                            '/serv:services/qos:qos/policy/shaping-htb/committed-rate',
                            '/serv:services/qos:qos/policy/shaping-htb/max-rate'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'burst',
                          qname: 'qos:burst',
                          info: {
                            string:
                              'The number of bytes than can be burst above the configured rate.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'uint32',
                            primitive: true
                          }
                        },
                        {
                          kind: 'list',
                          name: 'class',
                          qname: 'qos:class',
                          info: {
                            string:
                              'A list of the classes of traffic flows where each class has its own rate configuration.'
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
                          leafrefGroups: [['classifier'], ['next-policy']],
                          leafref_groups: [['classifier'], ['next-policy']],
                          children: [
                            {
                              kind: 'key',
                              name: 'name',
                              qname: 'qos:name',
                              info: {
                                string: 'String identifying the HTB class.'
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
                                namespace: 'com:gemds:services:qos',
                                name: 't17'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'committed-rate',
                              qname: 'qos:committed-rate',
                              info: {
                                string: 'The minimal rate of traffic, in kbps.'
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
                                namespace: 'com:gemds:services:qos',
                                name: 't18'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'max-rate',
                              qname: 'qos:max-rate',
                              info: {
                                string: 'The maximal rate of traffic, in kbps.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:services:qos',
                                name: 't19'
                              },
                              deps: [
                                '/serv:services/qos:qos/policy/shaping-htb/class/committed-rate',
                                '/serv:services/qos:qos/policy/shaping-htb/class/max-rate'
                              ]
                            },
                            {
                              kind: 'leaf',
                              name: 'burst',
                              qname: 'qos:burst',
                              info: {
                                string:
                                  'The number of bytes than can be burst above the configured rate.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'priority',
                              qname: 'qos:priority',
                              info: {
                                string: 'The servicing priority.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:services:qos',
                                name: 't20'
                              }
                            },
                            {
                              kind: 'leaf-list',
                              name: 'classifier',
                              qname: 'qos:classifier',
                              info: {
                                string:
                                  'A list of classifers. If any of the classifiers\nmatch, then the traffic will be placed into this class.'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              is_leafref: true,
                              leafref_target: '/serv:services/qos:qos/classifier/name',
                              type: {
                                namespace: 'com:gemds:services:qos',
                                name: 't22'
                              },
                              deps: ['/serv:services/qos:qos/classifier']
                            },
                            {
                              kind: 'leaf',
                              name: 'next-policy',
                              qname: 'qos:next-policy',
                              info: {
                                string:
                                  'Next policy to be applied to this traffic class. This\ncan be used to setup a hierarchy of policies'
                              },
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
                              deps: ['/serv:services/qos:qos/policy']
                            }
                          ],
                          deps: ['/serv:services/qos:qos/policy/shaping-htb/class/priority']
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          kind: 'list',
          name: 'classifier',
          qname: 'qos:classifier',
          info: {
            string: 'Filters used to identify classes of network traffic.'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
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
              qname: 'qos:name',
              info: {
                string: 'String identifying the classifier.'
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
                namespace: 'com:gemds:services:qos',
                name: 't23'
              }
            },
            {
              kind: 'leaf',
              name: 'match-type',
              qname: 'qos:match-type',
              info: {
                string: 'Match type for list of match conditions'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:qos',
                name: 't24'
              },
              default: 'any'
            },
            {
              kind: 'list',
              name: 'match',
              qname: 'qos:match',
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
              children: [
                {
                  kind: 'key',
                  name: 'name',
                  qname: 'qos:name',
                  info: {
                    string: 'ASCII string identifying the filter'
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
                    namespace: 'com:gemds:services:qos',
                    name: 't25'
                  }
                },
                {
                  kind: 'container',
                  name: 'ipv4',
                  qname: 'qos:ipv4',
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
                      kind: 'container',
                      name: 'protocol',
                      qname: 'qos:protocol',
                      info: {
                        string: 'Specify the IPv4 protocol.'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'assigned-number',
                              qname: 'qos:assigned-number',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'assigned-number',
                                  qname: 'qos:assigned-number',
                                  info: {
                                    string:
                                      'Specify the IP protocol from a list of defined protocols.'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-common',
                                    name: 'protocol-type'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'custom',
                              qname: 'qos:custom',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'custom',
                                  qname: 'qos:custom',
                                  info: {
                                    string:
                                      'Specify the IP protocol as a decimal or hexadecimal number.'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:qos',
                                    name: 't27'
                                  }
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'src-address',
                      qname: 'qos:src-address',
                      info: {
                        string: 'source address(es) specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the address-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'address',
                              qname: 'qos:address',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address',
                                  qname: 'qos:address',
                                  info: {
                                    string: 'address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv4-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-range',
                              qname: 'qos:address-range',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'address-range',
                                  qname: 'qos:address-range',
                                  info: {
                                    string: 'address range'
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
                                      name: 'from',
                                      qname: 'qos:from',
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
                                      name: 'to',
                                      qname: 'qos:to',
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
                      kind: 'container',
                      name: 'src-port',
                      qname: 'qos:src-port',
                      info: {
                        string: 'source port(s) specification'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/assigned-number',
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/not'
                      ],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'if present, this inverts the sense of the port-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'services',
                              qname: 'qos:services',
                              children: [
                                {
                                  kind: 'leaf-list',
                                  name: 'services',
                                  qname: 'qos:services',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:qos',
                                    name: 't29'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'port-range',
                              qname: 'qos:port-range',
                              children: [
                                {
                                  kind: 'list',
                                  name: 'port-range',
                                  qname: 'qos:port-range',
                                  mandatory: true,
                                  min_elements: 0,
                                  max_elements: 'unbounded',
                                  key: ['from'],
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
                                      name: 'from',
                                      qname: 'qos:from',
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: true,
                                        update: false,
                                        delete: false,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'to',
                                      qname: 'qos:to',
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/assigned-number',
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/not'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'dst-address',
                      qname: 'qos:dst-address',
                      info: {
                        string: 'destination address(es) specification'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the address-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'address',
                              qname: 'qos:address',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'address',
                                  qname: 'qos:address',
                                  info: {
                                    string: 'address or network'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv4-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'address-range',
                              qname: 'qos:address-range',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'address-range',
                                  qname: 'qos:address-range',
                                  info: {
                                    string: 'address range'
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
                                      name: 'from',
                                      qname: 'qos:from',
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
                                      name: 'to',
                                      qname: 'qos:to',
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
                      kind: 'container',
                      name: 'dst-port',
                      qname: 'qos:dst-port',
                      info: {
                        string: 'destination port(s) specification'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/assigned-number',
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/not'
                      ],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'if present, this inverts the sense of the port-spec'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'services',
                              qname: 'qos:services',
                              children: [
                                {
                                  kind: 'leaf-list',
                                  name: 'services',
                                  qname: 'qos:services',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:qos',
                                    name: 't29'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'port-range',
                              qname: 'qos:port-range',
                              children: [
                                {
                                  kind: 'list',
                                  name: 'port-range',
                                  qname: 'qos:port-range',
                                  mandatory: true,
                                  min_elements: 0,
                                  max_elements: 'unbounded',
                                  key: ['from'],
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
                                      name: 'from',
                                      qname: 'qos:from',
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: true,
                                        update: false,
                                        delete: false,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    },
                                    {
                                      kind: 'leaf',
                                      name: 'to',
                                      qname: 'qos:to',
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        name: 'uint16',
                                        primitive: true
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/assigned-number',
                        '/serv:services/qos:qos/classifier/match/ipv4/protocol/not'
                      ]
                    },
                    {
                      kind: 'choice',
                      name: 'tos-dscp',
                      qname: 'qos:tos-dscp',
                      cases: [
                        {
                          kind: 'case',
                          name: 'dscp',
                          qname: 'qos:dscp',
                          children: [
                            {
                              kind: 'container',
                              name: 'dscp',
                              qname: 'qos:dscp',
                              info: {
                                string:
                                  'Differentiated Services Code Point. DSCP and TOS are two different interpratations of\nthe same byte in the IPv4 header.'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'qos:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the match'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'leaf',
                                  name: 'value',
                                  qname: 'qos:value',
                                  info: {
                                    string: 'The six bit mark in the IPv4 header.'
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
                                    namespace: 'com:gemds:services:qos',
                                    name: 't30'
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          kind: 'case',
                          name: 'tos',
                          qname: 'qos:tos',
                          children: [
                            {
                              kind: 'container',
                              name: 'tos',
                              qname: 'qos:tos',
                              info: {
                                string:
                                  'Type of service field. DSCP and TOS are two different interpratations of\nthe same byte in the IPv4 header.'
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
                                  kind: 'container',
                                  name: 'not',
                                  qname: 'qos:not',
                                  info: {
                                    string: 'If present, this inverts the sense of the match'
                                  },
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                },
                                {
                                  kind: 'leaf',
                                  name: 'value',
                                  qname: 'qos:value',
                                  info: {
                                    string: 'Matches against the TOS byte in the IPv4 header.'
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
                                    namespace: 'com:gemds:services:qos',
                                    name: 't32'
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'ethernet',
                  qname: 'qos:ethernet',
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
                      kind: 'container',
                      name: 'ether-type',
                      qname: 'qos:ether-type',
                      info: {
                        string:
                          'The two bytes in the ethernet header that define the ethernet protocol used.'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'protocol',
                              qname: 'qos:protocol',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'protocol',
                                  qname: 'qos:protocol',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-common',
                                    name: 'ether-type'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'custom',
                              qname: 'qos:custom',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'custom',
                                  qname: 'qos:custom',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:qos',
                                    name: 't34'
                                  }
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'src-address',
                      qname: 'qos:src-address',
                      info: {
                        string: 'The source MAC address.'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the mach'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'address',
                          qname: 'qos:address',
                          info: {
                            string: 'Mac address'
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
                            name: 'mac-address'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'dst-address',
                      qname: 'qos:dst-address',
                      info: {
                        string: 'The destination MAC address.'
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
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the mach'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'address',
                          qname: 'qos:address',
                          info: {
                            string: 'Mac address'
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
                            name: 'mac-address'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'vlan-priority',
                      qname: 'qos:vlan-priority',
                      info: {
                        string: 'The priority bits in the VLAN header.'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the vlan-priority'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'priority',
                          qname: 'qos:priority',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:qos',
                            name: 't35'
                          }
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'vlan-id',
                      qname: 'qos:vlan-id',
                      info: {
                        string: 'The identifier in the VLAN header.'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the vlan-id'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'leaf',
                          name: 'id',
                          qname: 'qos:id',
                          info: {
                            string: 'The ID of the vlan to filter'
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
                            namespace: 'com:gemds:mds-if-vlan',
                            name: 'vlan-id'
                          }
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'encap-protocol',
                      qname: 'qos:encap-protocol',
                      info: {
                        string:
                          'The protocol encapsulated by the VLAN header. Can be entered as a decimal\nor hexadecimal value.'
                      },
                      presence: true,
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      when_targets: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ],
                      evaluated_when_entry: false,
                      children: [
                        {
                          kind: 'container',
                          name: 'not',
                          qname: 'qos:not',
                          info: {
                            string: 'If present, this inverts the sense of the match'
                          },
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          children: []
                        },
                        {
                          kind: 'choice',
                          name: 'type',
                          qname: 'qos:type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'protocol',
                              qname: 'qos:protocol',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'protocol',
                                  qname: 'qos:protocol',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:mds-common',
                                    name: 'ether-type'
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'custom',
                              qname: 'qos:custom',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'custom',
                                  qname: 'qos:custom',
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    namespace: 'com:gemds:services:qos',
                                    name: 't34'
                                  }
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: [
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/not',
                        '/serv:services/qos:qos/classifier/match/ethernet/ether-type/protocol'
                      ]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'metric',
              qname: 'qos:metric',
              info: {
                string: 'Classifiers with a lower metric will be evaluated first.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:qos',
                name: 't36'
              },
              default: '10'
            }
          ]
        }
      ],
      deps: ['/serv:services/qos:qos']
    },
    {
      kind: 'container',
      name: 'snmp',
      qname: 'snmp:snmp',
      info: {
        string: 'Top-level container for SNMP configuration and status objects.'
      },
      namespace: 'com:gemds:services:snmp',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      children: [
        {
          kind: 'container',
          name: 'agent',
          qname: 'snmp:agent',
          info: {
            string: 'Configuration of the SNMP agent'
          },
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
          leafref_groups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
          children: [
            {
              kind: 'leaf',
              name: 'enabled',
              qname: 'snmp:enabled',
              info: {
                string: 'Enables the SNMP agent.'
              },
              value: false,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: false,
              deps: ['/serv:services/snmp:snmp/agent/enabled']
            },
            {
              kind: 'leaf-list',
              name: 'ipv4-bind-ips',
              qname: 'snmp:ipv4-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv4 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv4 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 't6'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv4',
                '/if:interfaces/interface/ip:ipv4/address'
              ]
            },
            {
              kind: 'leaf-list',
              name: 'ipv6-bind-ips',
              qname: 'snmp:ipv6-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv6 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv6 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv6/address/ip',
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 't8'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv6',
                '/if:interfaces/interface/ip:ipv6/address'
              ]
            },
            {
              kind: 'leaf',
              name: 'port',
              qname: 'snmp:port',
              info: {
                string: 'UDP protocol port to be used for communication'
              },
              value: '161',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'port-number'
              },
              default: '161',
              deps: ['/serv:services/snmp:snmp/agent/port']
            },
            {
              kind: 'container',
              name: 'version',
              qname: 'snmp:version',
              info: {
                string: 'SNMP version used by the agent'
              },
              mandatory: true,
              exists: true,
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
                  name: 'v1',
                  qname: 'snmp:v1',
                  value: false,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'empty',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'v2c',
                  qname: 'snmp:v2c',
                  value: false,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'empty',
                    primitive: true
                  }
                },
                {
                  kind: 'leaf',
                  name: 'v3',
                  qname: 'snmp:v3',
                  value: false,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'empty',
                    primitive: true
                  },
                  deps: ['/serv:services/snmp:snmp/agent/engine-id']
                }
              ]
            },
            {
              kind: 'container',
              name: 'engine-id',
              qname: 'snmp:engine-id',
              info: {
                string: "Local SNMP engine's administratively-unique identifier"
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
                  name: 'enterprise-number',
                  qname: 'snmp:enterprise-number',
                  mandatory: true,
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  type: {
                    name: 'uint32',
                    primitive: true
                  }
                },
                {
                  kind: 'choice',
                  name: 'method',
                  qname: 'snmp:method',
                  cases: [
                    {
                      kind: 'case',
                      name: 'from-ip',
                      qname: 'snmp:from-ip',
                      children: [
                        {
                          kind: 'leaf',
                          name: 'from-ip',
                          qname: 'snmp:from-ip',
                          info: {
                            string: 'Generate the SNMP engine ID based on the specified IP address'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
                          type: {
                            name: 'ipv4-address-no-zone',
                            primitive: true
                          },
                          deps: [
                            '/if:interfaces/interface',
                            '/if:interfaces/interface/ip:ipv4',
                            '/if:interfaces/interface/ip:ipv4/address'
                          ]
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'from-mac',
                      qname: 'snmp:from-mac',
                      children: [
                        {
                          kind: 'leaf',
                          name: 'from-mac',
                          qname: 'snmp:from-mac',
                          info: {
                            string: 'Generate the SNMP engine ID based on the ethernet MAC address'
                          },
                          value: false,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'empty',
                            primitive: true
                          }
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'from-text',
                      qname: 'snmp:from-text',
                      children: [
                        {
                          kind: 'leaf',
                          name: 'from-text',
                          qname: 'snmp:from-text',
                          info: {
                            string: 'Generate the SNMP engine ID based specified text string'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 't9'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'case',
                      name: 'other',
                      qname: 'snmp:other',
                      children: [
                        {
                          kind: 'leaf',
                          name: 'other',
                          qname: 'snmp:other',
                          info: {
                            string: 'Generate the SNMP engine ID based specified hex string'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 't10'
                          }
                        }
                      ]
                    }
                  ],
                  mandatory: true
                }
              ]
            },
            {
              kind: 'leaf',
              name: 'max-message-size',
              qname: 'snmp:max-message-size',
              info: {
                string: 'The maximum length of SNMP message agent can send or receive'
              },
              value: '50000',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 't11'
              }
            },
            {
              kind: 'leaf',
              name: 'debug-enabled',
              qname: 'snmp:debug-enabled',
              info: {
                string:
                  'Enabling SNMP debug will cause all SNMP requests to be logged to the\nsnmp.log file. This should only be enabled when diagnosing issues as\nthis log file can fill quickly and reduce the overall performance of\nthe system.'
              },
              value: false,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: false
            }
          ]
        },
        {
          kind: 'container',
          name: 'system',
          qname: 'snmp:system',
          info: {
            string: 'System group configuration'
          },
          mandatory: true,
          exists: true,
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
              name: 'contact',
              qname: 'snmp:contact',
              value: '',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 'admin-string'
              },
              default: ''
            },
            {
              kind: 'leaf',
              name: 'name',
              qname: 'snmp:name',
              value: 'orbit-03',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 'admin-string'
              },
              default: ''
            },
            {
              kind: 'leaf',
              name: 'location',
              qname: 'snmp:location',
              value: '',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 'admin-string'
              },
              default: ''
            }
          ]
        },
        {
          kind: 'list',
          name: 'community',
          qname: 'snmp:community',
          info: {
            string: 'List of communities'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['index'],
          exists: true,
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
              name: 'index',
              qname: 'snmp:index',
              info: {
                string: 'Index into the community list.'
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
                namespace: 'com:gemds:services:snmp',
                name: 'identifier'
              }
            },
            {
              kind: 'leaf',
              name: 'name',
              qname: 'snmp:name',
              info: {
                string: 'Use only when the community string is not the same as the index.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              }
            },
            {
              kind: 'leaf',
              name: 'sec-name',
              qname: 'snmp:sec-name',
              info: {
                string: "Initially set to the value of 'index'"
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
                namespace: 'com:gemds:services:snmp',
                name: 'sec-name'
              }
            },
            {
              kind: 'leaf',
              name: 'target-tag',
              qname: 'snmp:target-tag',
              info: {
                string: 'Used to limit access for this community to the specified targets.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/snmp:snmp/target/tag',
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 'identifier'
              },
              deps: ['/serv:services/snmp:snmp/target', '/serv:services/snmp:snmp/target/tag']
            }
          ]
        },
        {
          kind: 'container',
          name: 'usm',
          qname: 'snmp:usm',
          info: {
            string: 'Configuration of the User-based Security Model'
          },
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          children: [
            {
              kind: 'container',
              name: 'local',
              qname: 'snmp:local',
              mandatory: true,
              exists: true,
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
                  name: 'user',
                  qname: 'snmp:user',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['name'],
                  exists: true,
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
                      qname: 'snmp:name',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'identifier'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'security-name',
                      qname: 'snmp:security-name',
                      info: {
                        string: "If not set, the value of 'name' is operationally used"
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'identifier'
                      }
                    },
                    {
                      kind: 'container',
                      name: 'auth',
                      qname: 'snmp:auth',
                      info: {
                        string: 'Enables authentication protocol of the user'
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
                          kind: 'choice',
                          name: 'protocol',
                          qname: 'snmp:protocol',
                          cases: [
                            {
                              kind: 'case',
                              name: 'md5',
                              qname: 'snmp:md5',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'md5',
                                  qname: 'snmp:md5',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'sha',
                              qname: 'snmp:sha',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'sha',
                                  qname: 'snmp:sha',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
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
                      kind: 'container',
                      name: 'priv',
                      qname: 'snmp:priv',
                      info: {
                        string: 'Enables encryption for the authentication process'
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
                          kind: 'choice',
                          name: 'protocol',
                          qname: 'snmp:protocol',
                          cases: [
                            {
                              kind: 'case',
                              name: 'des',
                              qname: 'snmp:des',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'des',
                                  qname: 'snmp:des',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'aes',
                              qname: 'snmp:aes',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'aes',
                                  qname: 'snmp:aes',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: ['/serv:services/snmp:snmp/usm/local/user/auth']
                    }
                  ]
                }
              ]
            },
            {
              kind: 'list',
              name: 'remote',
              qname: 'snmp:remote',
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['engine-id'],
              exists: true,
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
                  name: 'engine-id',
                  qname: 'snmp:engine-id',
                  info: {
                    string:
                      'The value of this field MUST NOT be the same as the local\nengine-id, as defined by /snmp/agent/engine-id'
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
                    namespace: 'com:gemds:services:snmp',
                    name: 'engine-id'
                  }
                },
                {
                  kind: 'list',
                  name: 'user',
                  qname: 'snmp:user',
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
                  children: [
                    {
                      kind: 'key',
                      name: 'name',
                      qname: 'snmp:name',
                      mandatory: true,
                      access: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'identifier'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'security-name',
                      qname: 'snmp:security-name',
                      info: {
                        string: "If not set, the value of 'name' is operationally used"
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'identifier'
                      }
                    },
                    {
                      kind: 'container',
                      name: 'auth',
                      qname: 'snmp:auth',
                      info: {
                        string: 'Enables authentication protocol of the user'
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
                          kind: 'choice',
                          name: 'protocol',
                          qname: 'snmp:protocol',
                          cases: [
                            {
                              kind: 'case',
                              name: 'md5',
                              qname: 'snmp:md5',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'md5',
                                  qname: 'snmp:md5',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'sha',
                              qname: 'snmp:sha',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'sha',
                                  qname: 'snmp:sha',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
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
                      kind: 'container',
                      name: 'priv',
                      qname: 'snmp:priv',
                      info: {
                        string: 'Enables encryption for the authentication process'
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
                          kind: 'choice',
                          name: 'protocol',
                          qname: 'snmp:protocol',
                          cases: [
                            {
                              kind: 'case',
                              name: 'des',
                              qname: 'snmp:des',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'des',
                                  qname: 'snmp:des',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'aes',
                              qname: 'snmp:aes',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'aes',
                                  qname: 'snmp:aes',
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
                                      kind: 'choice',
                                      name: 'key-type',
                                      qname: 'snmp:key-type',
                                      cases: [
                                        {
                                          kind: 'case',
                                          name: 'password',
                                          qname: 'snmp:password',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'password',
                                              qname: 'snmp:password',
                                              info: {
                                                string: 'Will be used to create a localized key.'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          kind: 'case',
                                          name: 'key',
                                          qname: 'snmp:key',
                                          children: [
                                            {
                                              kind: 'leaf',
                                              name: 'key',
                                              qname: 'snmp:key',
                                              info: {
                                                string: 'Authentication key'
                                              },
                                              access: {
                                                create: true,
                                                read: true,
                                                update: true,
                                                delete: true,
                                                execute: false
                                              },
                                              type: {
                                                name: 'string',
                                                primitive: true
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        }
                      ],
                      deps: ['/serv:services/snmp:snmp/usm/remote/user/auth']
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          kind: 'list',
          name: 'target',
          qname: 'snmp:target',
          info: {
            string: 'List of targets'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          leafrefGroups: [['engine-id']],
          leafref_groups: [['engine-id']],
          children: [
            {
              kind: 'key',
              name: 'name',
              qname: 'snmp:name',
              info: {
                string: 'identifies the target'
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
                namespace: 'com:gemds:services:snmp',
                name: 'identifier'
              }
            },
            {
              kind: 'leaf',
              name: 'ip',
              qname: 'snmp:ip',
              info: {
                string: 'Transport IP address of the target'
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
                name: 'ip-address'
              }
            },
            {
              kind: 'leaf',
              name: 'port',
              qname: 'snmp:port',
              info: {
                string: 'UDP port number'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'port-number'
              },
              default: '162'
            },
            {
              kind: 'leaf-list',
              name: 'tag',
              qname: 'snmp:tag',
              info: {
                string: 'List of tag values used to select target address'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 't13'
              }
            },
            {
              kind: 'leaf',
              name: 'timeout',
              qname: 'snmp:timeout',
              info: {
                string: 'Needed only if this target can receive v3 informs.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              units: '0.01 seconds',
              type: {
                name: 'uint32',
                primitive: true
              },
              default: '1500'
            },
            {
              kind: 'leaf',
              name: 'retries',
              qname: 'snmp:retries',
              info: {
                string: 'Needed only if this target can receive v3 informs.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'uint8',
                primitive: true
              },
              default: '3'
            },
            {
              kind: 'leaf',
              name: 'engine-id',
              qname: 'snmp:engine-id',
              info: {
                string:
                  'Needed only if this target can receive v3 informs.\n\nThis object is not present in the SNMP MIBs.  In\nRFC 3412s, it is a implementation specific matter how this engine-id\nis handled.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/serv:services/snmp:snmp/usm/remote/engine-id',
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 'engine-id'
              },
              deps: [
                '/serv:services/snmp:snmp/target',
                '/serv:services/snmp:snmp/target/engine-id',
                '/serv:services/snmp:snmp/target/name',
                '/serv:services/snmp:snmp/target/usm/user-name',
                '/serv:services/snmp:snmp/usm/remote',
                '/serv:services/snmp:snmp/usm/remote/engine-id',
                '/serv:services/snmp:snmp/usm/remote/user',
                '/serv:services/snmp:snmp/usm/remote/user/name'
              ]
            },
            {
              kind: 'choice',
              name: 'params',
              qname: 'snmp:params',
              cases: [
                {
                  kind: 'case',
                  name: 'v1',
                  qname: 'snmp:v1',
                  children: [
                    {
                      kind: 'container',
                      name: 'v1',
                      qname: 'snmp:v1',
                      info: {
                        string: 'SNMPv1 parameters type'
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
                          name: 'sec-name',
                          qname: 'snmp:sec-name',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/serv:services/snmp:snmp/community/sec-name',
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 'sec-name'
                          },
                          deps: [
                            '/serv:services/snmp:snmp/community',
                            '/serv:services/snmp:snmp/community/sec-name'
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'case',
                  name: 'v2c',
                  qname: 'snmp:v2c',
                  children: [
                    {
                      kind: 'container',
                      name: 'v2c',
                      qname: 'snmp:v2c',
                      info: {
                        string: 'SNMPv2 community parameters type'
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
                          name: 'sec-name',
                          qname: 'snmp:sec-name',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/serv:services/snmp:snmp/community/sec-name',
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 'sec-name'
                          },
                          deps: [
                            '/serv:services/snmp:snmp/community',
                            '/serv:services/snmp:snmp/community/sec-name'
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'case',
                  name: 'usm',
                  qname: 'snmp:usm',
                  children: [
                    {
                      kind: 'container',
                      name: 'usm',
                      qname: 'snmp:usm',
                      info: {
                        string: 'user based SNMPv3 parameters type'
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
                          name: 'user-name',
                          qname: 'snmp:user-name',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 'identifier'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'sec-level',
                          qname: 'snmp:sec-level',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:snmp',
                            name: 'sec-level'
                          }
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
          kind: 'list',
          name: 'notify',
          qname: 'snmp:notify',
          info: {
            string: 'List of notify names and tags'
          },
          mandatory: true,
          min_elements: 0,
          max_elements: 'unbounded',
          key: ['name'],
          exists: true,
          access: {
            create: false,
            read: true,
            update: false,
            delete: false,
            execute: false
          },
          children: [
            {
              kind: 'key',
              name: 'name',
              qname: 'snmp:name',
              info: {
                string: 'an arbitrary name for the list entry'
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
                namespace: 'com:gemds:services:snmp',
                name: 'identifier'
              }
            },
            {
              kind: 'leaf',
              name: 'tag',
              qname: 'snmp:tag',
              info: {
                string: 'target tag, selects a set of notification targets'
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
                namespace: 'com:gemds:services:snmp',
                name: 'identifier'
              }
            },
            {
              kind: 'leaf',
              name: 'type',
              qname: 'snmp:type',
              info: {
                string: 'Defines notification type to be generated'
              },
              access: {
                create: false,
                read: true,
                update: false,
                delete: false,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:snmp',
                name: 't14'
              },
              default: 'trap'
            }
          ]
        },
        {
          kind: 'container',
          name: 'vacm',
          qname: 'snmp:vacm',
          info: {
            string: 'Configuration of the View-based Access Control Model'
          },
          mandatory: true,
          exists: true,
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
              name: 'group',
              qname: 'snmp:group',
              info: {
                string: 'VACM Groups'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['name'],
              exists: true,
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
                  qname: 'snmp:name',
                  info: {
                    string: 'The name of this VACM group.'
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
                    namespace: 'com:gemds:services:snmp',
                    name: 'group-name'
                  }
                },
                {
                  kind: 'list',
                  name: 'member',
                  qname: 'snmp:member',
                  info: {
                    string:
                      'A member of this VACM group. According to VACM, every\ngroup must have at least one member.\n\nA certain combination of sec-name and sec-model MUST NOT\nbe mapped to more than one group.'
                  },
                  mandatory: true,
                  min_elements: 1,
                  max_elements: 'unbounded',
                  key: ['sec-name'],
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
                      name: 'sec-name',
                      qname: 'snmp:sec-name',
                      info: {
                        string: 'The securityName of a group member.'
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
                        namespace: 'com:gemds:services:snmp',
                        name: 'sec-name'
                      }
                    },
                    {
                      kind: 'leaf-list',
                      name: 'sec-model',
                      qname: 'snmp:sec-model',
                      info: {
                        string:
                          'The security models under which this securityName\nis a member of this group.'
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
                        namespace: 'com:gemds:services:snmp',
                        name: 't16'
                      }
                    }
                  ]
                },
                {
                  kind: 'list',
                  name: 'access',
                  qname: 'snmp:access',
                  info: {
                    string: 'Definition of access right for groups'
                  },
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['sec-model', 'sec-level'],
                  access: {
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                    execute: false
                  },
                  leafrefGroups: [['read-view'], ['write-view'], ['notify-view']],
                  leafref_groups: [['read-view'], ['write-view'], ['notify-view']],
                  children: [
                    {
                      kind: 'key',
                      name: 'sec-model',
                      qname: 'snmp:sec-model',
                      info: {
                        string: 'The security model under which the access rights apply.'
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
                        namespace: 'com:gemds:services:snmp',
                        name: 'sec-model'
                      }
                    },
                    {
                      kind: 'key',
                      name: 'sec-level',
                      qname: 'snmp:sec-level',
                      info: {
                        string: 'The minimum security level under which the access rights\napply.'
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
                        namespace: 'com:gemds:services:snmp',
                        name: 'sec-level'
                      }
                    },
                    {
                      kind: 'leaf',
                      name: 'read-view',
                      qname: 'snmp:read-view',
                      info: {
                        string:
                          'The name of the MIB view of the SNMP context authorizing\nread access.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/serv:services/snmp:snmp/vacm/view/name',
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'view-name'
                      },
                      deps: ['/serv:services/snmp:snmp/vacm/view']
                    },
                    {
                      kind: 'leaf',
                      name: 'write-view',
                      qname: 'snmp:write-view',
                      info: {
                        string:
                          'The name of the MIB view of the SNMP context authorizing\nwrite access.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/serv:services/snmp:snmp/vacm/view/name',
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'view-name'
                      },
                      deps: ['/serv:services/snmp:snmp/vacm/view']
                    },
                    {
                      kind: 'leaf',
                      name: 'notify-view',
                      qname: 'snmp:notify-view',
                      info: {
                        string:
                          'The name of the MIB view of the SNMP context authorizing\nnotify access.'
                      },
                      access: {
                        create: true,
                        read: true,
                        update: true,
                        delete: true,
                        execute: false
                      },
                      is_leafref: true,
                      leafref_target: '/serv:services/snmp:snmp/vacm/view/name',
                      type: {
                        namespace: 'com:gemds:services:snmp',
                        name: 'view-name'
                      },
                      deps: ['/serv:services/snmp:snmp/vacm/view']
                    }
                  ]
                }
              ],
              deps: ['/serv:services/snmp:snmp/vacm/group']
            },
            {
              kind: 'list',
              name: 'view',
              qname: 'snmp:view',
              info: {
                string: 'Definition of MIB views'
              },
              mandatory: true,
              min_elements: 0,
              max_elements: 'unbounded',
              key: ['name'],
              exists: true,
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
                  qname: 'snmp:name',
                  info: {
                    string: 'The name of this VACM MIB view.'
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
                    namespace: 'com:gemds:services:snmp',
                    name: 'view-name'
                  }
                },
                {
                  kind: 'list',
                  name: 'subtree',
                  qname: 'snmp:subtree',
                  mandatory: true,
                  min_elements: 0,
                  max_elements: 'unbounded',
                  key: ['oids'],
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
                      name: 'oids',
                      qname: 'snmp:oids',
                      info: {
                        string: 'A family of subtrees included in this MIB view.'
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
                        namespace: 'com:gemds:services:snmp',
                        name: 'wildcard-object-identifier'
                      }
                    },
                    {
                      kind: 'choice',
                      name: 'type',
                      qname: 'snmp:type',
                      cases: [
                        {
                          kind: 'case',
                          name: 'included',
                          qname: 'snmp:included',
                          children: [
                            {
                              kind: 'leaf',
                              name: 'included',
                              qname: 'snmp:included',
                              info: {
                                string: 'The family of subtrees is included in the MIB view'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'empty',
                                primitive: true
                              }
                            }
                          ]
                        },
                        {
                          kind: 'case',
                          name: 'excluded',
                          qname: 'snmp:excluded',
                          children: [
                            {
                              kind: 'leaf',
                              name: 'excluded',
                              qname: 'snmp:excluded',
                              info: {
                                string: 'The family of subtrees is excluded from the MIB view'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'empty',
                                primitive: true
                              }
                            }
                          ]
                        }
                      ],
                      mandatory: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'ssh',
      qname: 'ssh:ssh',
      namespace: 'com:gemds:services:ssh',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      leafrefGroups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
      leafref_groups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
      children: [
        {
          kind: 'leaf',
          name: 'enabled',
          qname: 'ssh:enabled',
          info: {
            string: 'Whether or not to run the SSH server'
          },
          value: true,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: true
        },
        {
          kind: 'leaf',
          name: 'port',
          qname: 'ssh:port',
          info: {
            string: 'The port to listen to SSH connections on.'
          },
          value: '22',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
            name: 'port-number'
          },
          default: '22'
        },
        {
          kind: 'leaf-list',
          name: 'ipv4-bind-ips',
          qname: 'ssh:ipv4-bind-ips',
          info: {
            string:
              'Restrict the server to only listen for connections\non the specified IPv4 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv4 addresses.'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
          type: {
            namespace: 'com:gemds:services:ssh',
            name: 't1'
          },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/ip:ipv4',
            '/if:interfaces/interface/ip:ipv4/address'
          ]
        },
        {
          kind: 'leaf-list',
          name: 'ipv6-bind-ips',
          qname: 'ssh:ipv6-bind-ips',
          info: {
            string:
              'Restrict the server to only listen for connections\non the specified IPv6 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv6 addresses.'
          },
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          is_leafref: true,
          leafref_target: '/if:interfaces/interface/ip:ipv6/address/ip',
          type: {
            namespace: 'com:gemds:services:ssh',
            name: 't3'
          },
          deps: [
            '/if:interfaces/interface',
            '/if:interfaces/interface/ip:ipv6',
            '/if:interfaces/interface/ip:ipv6/address'
          ]
        },
        {
          kind: 'action',
          name: 'generate-key-pair',
          qname: 'ssh:generate-key-pair',
          info: {
            string: 'Generate an ssh key pair.'
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
        }
      ],
      deps: ['/serv:services/ssh:ssh']
    },
    {
      kind: 'container',
      name: 'vpn',
      qname: 'vpn:vpn',
      namespace: 'com:gemds:services:vpn',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'vpn:enabled',
          info: {
            string: 'Whether or not to run the vpn service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false,
          deps: [
            '/serv:services/vpn:vpn/enabled',
            '/serv:services/vpn:vpn/ike',
            '/serv:services/vpn:vpn/ipsec'
          ]
        },
        {
          kind: 'leaf',
          name: 'strict-crl-policy',
          qname: 'vpn:strict-crl-policy',
          info: {
            string: 'if true, fail authentication on certificate revocation failure'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'container',
          name: 'dhcp',
          qname: 'vpn:dhcp',
          mandatory: true,
          exists: true,
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
              name: 'server-address',
              qname: 'vpn:server-address',
              info: {
                string:
                  'IP address of the DHCP server to use for assiging addresses to remote hosts.'
              },
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
            }
          ]
        },
        {
          kind: 'choice',
          name: 'type',
          qname: 'vpn:type',
          cases: [
            {
              kind: 'case',
              name: 'type-ipsec',
              qname: 'vpn:type-ipsec',
              children: [
                {
                  kind: 'container',
                  name: 'ike',
                  qname: 'vpn:ike',
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
                      kind: 'list',
                      name: 'policy',
                      qname: 'vpn:policy',
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
                      children: [
                        {
                          kind: 'key',
                          name: 'name',
                          qname: 'vpn:name',
                          info: {
                            string:
                              'ASCII string identifying the policy (allowed chars: a-zA-Z0-9-_).'
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
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'version',
                          qname: 'vpn:version',
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 'ike-version'
                          },
                          default: 'ike'
                        },
                        {
                          kind: 'leaf',
                          name: 'mode',
                          qname: 'vpn:mode',
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          when_targets: ['/serv:services/vpn:vpn/ike/policy/version'],
                          evaluated_when_entry: false,
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 'ike-v1-mode'
                          },
                          default: 'main',
                          deps: ['/serv:services/vpn:vpn/ike/policy/version']
                        },
                        {
                          kind: 'leaf',
                          name: 'auth-method',
                          qname: 'vpn:auth-method',
                          info: {
                            string: 'IKE authentication method to use locally'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 'ike-auth-method'
                          },
                          deps: [
                            '/serv:services/vpn:vpn/ike/policy/auth-method',
                            '/serv:services/vpn:vpn/ike/policy/pki',
                            '/serv:services/vpn:vpn/ike/policy/pre-shared-key'
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'pre-shared-key',
                          qname: 'vpn:pre-shared-key',
                          info: {
                            string: 'pre-shared secret key (ascii text)'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 't0'
                          },
                          deps: ['/serv:services/vpn:vpn/ike/policy/pre-shared-key']
                        },
                        {
                          kind: 'container',
                          name: 'pki',
                          qname: 'vpn:pki',
                          presence: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          leafrefGroups: [
                            ['cert-id'],
                            ['key-id'],
                            ['ca-cert-id'],
                            ['sub-ca-cert-ids']
                          ],
                          leafref_groups: [
                            ['cert-id'],
                            ['key-id'],
                            ['ca-cert-id'],
                            ['sub-ca-cert-ids']
                          ],
                          children: [
                            {
                              kind: 'leaf',
                              name: 'cert-type',
                              qname: 'vpn:cert-type',
                              info: {
                                string: 'certificate type'
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
                                namespace: 'com:gemds:services:vpn',
                                name: 't1'
                              },
                              deps: ['/serv:services/vpn:vpn/ike/policy/pki/cert-type']
                            },
                            {
                              kind: 'leaf',
                              name: 'cert-id',
                              qname: 'vpn:cert-id',
                              info: {
                                string: 'certificate identifier'
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
                              leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              deps: ['/cm:pki/client-certs/show-all']
                            },
                            {
                              kind: 'leaf',
                              name: 'key-id',
                              qname: 'vpn:key-id',
                              info: {
                                string: 'private key identifier'
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
                              leafref_target: '/cm:pki/private-keys/show-all/key-identity',
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              deps: ['/cm:pki/private-keys/show-all']
                            },
                            {
                              kind: 'leaf',
                              name: 'ca-cert-id',
                              qname: 'vpn:ca-cert-id',
                              info: {
                                string: 'Root ca-certificate identifier.'
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
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              deps: ['/cm:pki/ca-certs/show-all']
                            },
                            {
                              kind: 'leaf-list',
                              name: 'sub-ca-cert-ids',
                              qname: 'vpn:sub-ca-cert-ids',
                              info: {
                                string: 'Sub/Intermediate ca-certificate identifiers.'
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
                              type: {
                                namespace: 'com:gemds:services:vpn',
                                name: 't3'
                              },
                              deps: ['/cm:pki/ca-certs/show-all']
                            }
                          ]
                        },
                        {
                          kind: 'list',
                          name: 'ciphersuite',
                          qname: 'vpn:ciphersuite',
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
                          children: [
                            {
                              kind: 'key',
                              name: 'name',
                              qname: 'vpn:name',
                              info: {
                                string:
                                  'ASCII string identifying the ciphersuite (allowed chars: a-zA-Z0-9-_).'
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
                                namespace: 'com:gemds:security',
                                name: 'word-string'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'encryption-algo',
                              qname: 'vpn:encryption-algo',
                              info: {
                                string: 'IKE encryption algorithm'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'encryption-algo'
                              },
                              default: 'aes128-cbc',
                              deps: [
                                '/serv:services/vpn:vpn/ike/policy/ciphersuite/encryption-algo'
                              ]
                            },
                            {
                              kind: 'leaf',
                              name: 'mac-algo',
                              qname: 'vpn:mac-algo',
                              info: {
                                string: 'IKE message authentication algorithm'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'mac-algo'
                              },
                              default: 'sha256-hmac'
                            },
                            {
                              kind: 'leaf',
                              name: 'dh-group',
                              qname: 'vpn:dh-group',
                              info: {
                                string: 'IKE dh group'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'dh-group'
                              },
                              default: 'dh14',
                              deps: ['/serv:services/vpn:vpn/ike/policy/ciphersuite/dh-group']
                            }
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'life-time',
                          qname: 'vpn:life-time',
                          info: {
                            string: 'Time interval (in mins) after which an IKE SA expires'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 't4'
                          },
                          default: '180'
                        },
                        {
                          kind: 'leaf',
                          name: 'reauth',
                          qname: 'vpn:reauth',
                          info: {
                            string:
                              'If true, rekeying of an IKE_SA also reauthenticates\nthe peer when using IKEv2. In IKEv1, re-authentictaion\nis always done irrespective of this setting.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'boolean',
                            primitive: true
                          },
                          default: false
                        },
                        {
                          kind: 'leaf',
                          name: 'mobike',
                          qname: 'vpn:mobike',
                          info: {
                            string: 'Enables the IKEv2 MOBIKE protocol defined by RFC 4555.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'boolean',
                            primitive: true
                          },
                          default: true
                        }
                      ]
                    },
                    {
                      kind: 'list',
                      name: 'peer',
                      qname: 'vpn:peer',
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
                      leafrefGroups: [['ike-policy']],
                      leafref_groups: [['ike-policy']],
                      children: [
                        {
                          kind: 'key',
                          name: 'name',
                          qname: 'vpn:name',
                          info: {
                            string:
                              'An ASCII string to identify the peer (allowed chars: a-zA-Z0-9-_).'
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
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'ike-policy',
                          qname: 'vpn:ike-policy',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/serv:services/vpn:vpn/ike/policy/name',
                          type: {
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          },
                          deps: ['/serv:services/vpn:vpn/ike', '/serv:services/vpn:vpn/ike/policy']
                        },
                        {
                          kind: 'container',
                          name: 'local-endpoint',
                          qname: 'vpn:local-endpoint',
                          info: {
                            string: 'Local IKE endpoint'
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
                              kind: 'choice',
                              name: 'ike-endpoint-type',
                              qname: 'vpn:ike-endpoint-type',
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'any',
                                  qname: 'vpn:any',
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'any',
                                      qname: 'vpn:any',
                                      info: {
                                        string: 'Any peer'
                                      },
                                      presence: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'address',
                                  qname: 'vpn:address',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'vpn:address',
                                      info: {
                                        string: 'IPv4 or IPv6 address'
                                      },
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
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'fqdn',
                                  qname: 'vpn:fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'fqdn',
                                      qname: 'vpn:fqdn',
                                      info: {
                                        string: 'Fully qualified domain name (FQDN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't5'
                                      }
                                    }
                                  ]
                                }
                              ],
                              default: 'any'
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'local-identity',
                          qname: 'vpn:local-identity',
                          info: {
                            string: 'Local IKE ID to use for authentication with peer'
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
                              kind: 'choice',
                              name: 'ike-identity-type',
                              qname: 'vpn:ike-identity-type',
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'default',
                                  qname: 'vpn:default',
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'default',
                                      qname: 'vpn:default',
                                      info: {
                                        string:
                                          'IPv4 or IPv6 address configured via ike-endpoint\nor DN if pki is configured'
                                      },
                                      presence: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'address',
                                  qname: 'vpn:address',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'vpn:address',
                                      info: {
                                        string: 'IPv4 or IPv6 address'
                                      },
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
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'fqdn',
                                  qname: 'vpn:fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'fqdn',
                                      qname: 'vpn:fqdn',
                                      info: {
                                        string: 'Fully qualified domain name (FQDN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't6'
                                      }
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'user-fqdn',
                                  qname: 'vpn:user-fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'user-fqdn',
                                      qname: 'vpn:user-fqdn',
                                      info: {
                                        string:
                                          'User fully qualified domain name (User-FQDN) e.g. email address'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't7'
                                      }
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'dn',
                                  qname: 'vpn:dn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'dn',
                                      qname: 'vpn:dn',
                                      info: {
                                        string: 'Distinguished Name (DN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't8'
                                      }
                                    }
                                  ]
                                }
                              ],
                              default: 'default'
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'peer-endpoint',
                          qname: 'vpn:peer-endpoint',
                          info: {
                            string: 'Peer IKE endpoint'
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
                              kind: 'choice',
                              name: 'ike-endpoint-type',
                              qname: 'vpn:ike-endpoint-type',
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'any',
                                  qname: 'vpn:any',
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'any',
                                      qname: 'vpn:any',
                                      info: {
                                        string: 'Any peer'
                                      },
                                      presence: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'address',
                                  qname: 'vpn:address',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'vpn:address',
                                      info: {
                                        string: 'IPv4 or IPv6 address'
                                      },
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
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'fqdn',
                                  qname: 'vpn:fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'fqdn',
                                      qname: 'vpn:fqdn',
                                      info: {
                                        string: 'Fully qualified domain name (FQDN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't5'
                                      }
                                    }
                                  ]
                                }
                              ],
                              mandatory: true
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'peer-identity',
                          qname: 'vpn:peer-identity',
                          info: {
                            string: 'Peer IKE ID to use for authentication with peer'
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
                              kind: 'choice',
                              name: 'ike-identity-type',
                              qname: 'vpn:ike-identity-type',
                              cases: [
                                {
                                  kind: 'case',
                                  name: 'default',
                                  qname: 'vpn:default',
                                  children: [
                                    {
                                      kind: 'container',
                                      name: 'default',
                                      qname: 'vpn:default',
                                      info: {
                                        string:
                                          'IPv4 or IPv6 address configured via ike-endpoint\nor DN if pki is configured'
                                      },
                                      presence: true,
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'address',
                                  qname: 'vpn:address',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'address',
                                      qname: 'vpn:address',
                                      info: {
                                        string: 'IPv4 or IPv6 address'
                                      },
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
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'fqdn',
                                  qname: 'vpn:fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'fqdn',
                                      qname: 'vpn:fqdn',
                                      info: {
                                        string: 'Fully qualified domain name (FQDN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't6'
                                      }
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'user-fqdn',
                                  qname: 'vpn:user-fqdn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'user-fqdn',
                                      qname: 'vpn:user-fqdn',
                                      info: {
                                        string:
                                          'User fully qualified domain name (User-FQDN) e.g. email address'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't7'
                                      }
                                    }
                                  ]
                                },
                                {
                                  kind: 'case',
                                  name: 'dn',
                                  qname: 'vpn:dn',
                                  children: [
                                    {
                                      kind: 'leaf',
                                      name: 'dn',
                                      qname: 'vpn:dn',
                                      info: {
                                        string: 'Distinguished Name (DN)'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      type: {
                                        namespace: 'com:gemds:services:vpn',
                                        name: 't8'
                                      }
                                    }
                                  ]
                                }
                              ],
                              default: 'default'
                            }
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'peer-identity-no-idr',
                          qname: 'vpn:peer-identity-no-idr',
                          info: {
                            string:
                              'This field is OBSOLETE and confguring it has no effect.\nIt has been kept here to just maintain backwards compatibility.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'boolean',
                            primitive: true
                          },
                          default: true
                        },
                        {
                          kind: 'leaf',
                          name: 'role',
                          qname: 'vpn:role',
                          info: {
                            string:
                              'The role specifies whether this endpoint initiates connection\nto the peer or listens for connection from the peer'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 't9'
                          },
                          default: 'responder'
                        },
                        {
                          kind: 'leaf',
                          name: 'initiator-mode',
                          qname: 'vpn:initiator-mode',
                          info: {
                            string: 'tunnel initiation mode'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          when_targets: ['/serv:services/vpn:vpn/ike/peer/role'],
                          evaluated_when_entry: false,
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 't10'
                          },
                          default: 'always-on',
                          deps: ['/serv:services/vpn:vpn/ike/peer/role']
                        },
                        {
                          kind: 'leaf',
                          name: 'inactivity-timeout',
                          qname: 'vpn:inactivity-timeout',
                          info: {
                            string:
                              'time interval (in secs) after which tunnel is disconnected\nif there is no traffic sent or received'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          when_targets: ['/serv:services/vpn:vpn/ike/peer/initiator-mode'],
                          units: 'seconds',
                          evaluated_when_entry: false,
                          type: {
                            name: 'uint32',
                            primitive: true
                          },
                          default: '150',
                          deps: ['/serv:services/vpn:vpn/ike/peer/initiator-mode']
                        },
                        {
                          kind: 'leaf',
                          name: 'dpd-enabled',
                          qname: 'vpn:dpd-enabled',
                          info: {
                            string:
                              'If dead peer detection is enabled, an established\nconnection will be cleared on detecting a dead peer\nand retried after connection-retry-interval'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'boolean',
                            primitive: true
                          },
                          default: true
                        },
                        {
                          kind: 'leaf',
                          name: 'dpd-interval',
                          qname: 'vpn:dpd-interval',
                          info: {
                            string: 'Dead peer detection interval (in secs)'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 't11'
                          },
                          default: '300'
                        }
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'security-associations',
                      qname: 'vpn:security-associations',
                      mandatory: true,
                      config: false,
                      is_config_false_callpoint: true,
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
                          name: 'security-association',
                          qname: 'vpn:security-association',
                          mandatory: true,
                          min_elements: 0,
                          max_elements: 'unbounded',
                          config: false,
                          is_config_false_callpoint: true,
                          key: ['id'],
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
                              name: 'id',
                              qname: 'vpn:id',
                              info: {
                                string: 'Unique index of this security association'
                              },
                              mandatory: true,
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: false,
                                read: true,
                                update: false,
                                delete: false,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'name',
                              qname: 'vpn:name',
                              info: {
                                string: 'Name of this security association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'state',
                              qname: 'vpn:state',
                              info: {
                                string: 'State of the security association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'local-host',
                              qname: 'vpn:local-host',
                              info: {
                                string: 'Local IKE endpoint address.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
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
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'local-id',
                              qname: 'vpn:local-id',
                              info: {
                                string: 'Local IKE identity.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'remote-host',
                              qname: 'vpn:remote-host',
                              info: {
                                string: 'Remote IKE endpoint address.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
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
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'remote-id',
                              qname: 'vpn:remote-id',
                              info: {
                                string: 'Remote IKE identity.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'initiator',
                              qname: 'vpn:initiator',
                              info: {
                                string: 'True, if we are the initiator of this IKE association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'boolean',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'initiator-spi',
                              qname: 'vpn:initiator-spi',
                              info: {
                                string: 'Initiator SPI (hex encoded string).'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'responder-spi',
                              qname: 'vpn:responder-spi',
                              info: {
                                string: 'Responder SPI (hex encoded string).'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'ciphersuite',
                              qname: 'vpn:ciphersuite',
                              info: {
                                string:
                                  'Specifices encryption/integrity/prf/dh algorithms being used to protect this association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'established-time',
                              qname: 'vpn:established-time',
                              info: {
                                string: 'Numbers of seconds since this association was established.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'rekey-time',
                              qname: 'vpn:rekey-time',
                              info: {
                                string: 'Numbers of seconds before this association rekeys.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'reauth-time',
                              qname: 'vpn:reauth-time',
                              info: {
                                string:
                                  'Numbers of seconds before this association re-authenticates.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            }
                          ],
                          readonly: true
                        }
                      ],
                      readonly: true
                    }
                  ]
                },
                {
                  kind: 'container',
                  name: 'ipsec',
                  qname: 'vpn:ipsec',
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
                      kind: 'list',
                      name: 'policy',
                      qname: 'vpn:policy',
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
                      children: [
                        {
                          kind: 'key',
                          name: 'name',
                          qname: 'vpn:name',
                          info: {
                            string:
                              'ASCII string identifying the policy (allowed chars: a-zA-Z0-9-_).'
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
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          }
                        },
                        {
                          kind: 'list',
                          name: 'ciphersuite',
                          qname: 'vpn:ciphersuite',
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
                          children: [
                            {
                              kind: 'key',
                              name: 'name',
                              qname: 'vpn:name',
                              info: {
                                string:
                                  'ASCII string identifying the proposal (allowed chars: a-zA-Z0-9-_).'
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
                                namespace: 'com:gemds:security',
                                name: 'word-string'
                              }
                            },
                            {
                              kind: 'leaf',
                              name: 'encryption-algo',
                              qname: 'vpn:encryption-algo',
                              info: {
                                string: 'ESP encryption algorithm'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'encryption-algo'
                              },
                              default: 'aes128-cbc'
                            },
                            {
                              kind: 'leaf',
                              name: 'mac-algo',
                              qname: 'vpn:mac-algo',
                              info: {
                                string: 'ESP message authentication algorithm'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'mac-algo'
                              },
                              default: 'sha256-hmac'
                            },
                            {
                              kind: 'leaf',
                              name: 'dh-group',
                              qname: 'vpn:dh-group',
                              info: {
                                string: 'ESP dh group, if perfect forward secrecy is desired'
                              },
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                namespace: 'com:gemds:security',
                                name: 'dh-group'
                              },
                              deps: ['/serv:services/vpn:vpn/ipsec/policy/ciphersuite/dh-group']
                            }
                          ]
                        },
                        {
                          kind: 'leaf',
                          name: 'life-time',
                          qname: 'vpn:life-time',
                          info: {
                            string: 'Time interval (in mins) after which an IPSec SA expires'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 't12'
                          },
                          default: '60'
                        }
                      ]
                    },
                    {
                      kind: 'list',
                      name: 'connection',
                      qname: 'vpn:connection',
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
                      leafrefGroups: [['ike-peer'], ['ipsec-policy']],
                      leafref_groups: [['ike-peer'], ['ipsec-policy']],
                      children: [
                        {
                          kind: 'key',
                          name: 'name',
                          qname: 'vpn:name',
                          info: {
                            string:
                              'ASCII string to identify the connection (allowed chars: a-zA-Z0-9-_).'
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
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'ike-peer',
                          qname: 'vpn:ike-peer',
                          info: {
                            string: 'VPN Peer'
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
                          leafref_target: '/serv:services/vpn:vpn/ike/peer/name',
                          type: {
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          },
                          deps: ['/serv:services/vpn:vpn/ike', '/serv:services/vpn:vpn/ike/peer']
                        },
                        {
                          kind: 'leaf',
                          name: 'ipsec-policy',
                          qname: 'vpn:ipsec-policy',
                          mandatory: true,
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          is_leafref: true,
                          leafref_target: '/serv:services/vpn:vpn/ipsec/policy/name',
                          type: {
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          },
                          deps: [
                            '/serv:services/vpn:vpn/ipsec',
                            '/serv:services/vpn:vpn/ipsec/policy'
                          ]
                        },
                        {
                          kind: 'choice',
                          name: 'conn-type',
                          qname: 'vpn:conn-type',
                          cases: [
                            {
                              kind: 'case',
                              name: 'net-to-net',
                              qname: 'vpn:net-to-net',
                              children: [
                                {
                                  kind: 'leaf',
                                  name: 'local-ip-subnet',
                                  qname: 'vpn:local-ip-subnet',
                                  info: {
                                    string: 'Local IPv4 subnet'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv4-prefix',
                                    primitive: true
                                  }
                                },
                                {
                                  kind: 'leaf',
                                  name: 'local-ip6-subnet',
                                  qname: 'vpn:local-ip6-subnet',
                                  info: {
                                    string: 'Local IPv6 subnet'
                                  },
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  type: {
                                    name: 'ipv6-prefix',
                                    primitive: true
                                  }
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'host-to-net',
                              qname: 'vpn:host-to-net',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'host-to-net',
                                  qname: 'vpn:host-to-net',
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
                                      name: 'local-ip-subnet',
                                      qname: 'vpn:local-ip-subnet',
                                      info: {
                                        string: 'Local IPv4 subnet'
                                      },
                                      access: {
                                        create: true,
                                        read: true,
                                        update: true,
                                        delete: true,
                                        execute: false
                                      },
                                      when_targets: [
                                        '/serv:services/vpn:vpn/ike/peer/role',
                                        '/serv:services/vpn:vpn/ipsec/connection/ike-peer'
                                      ],
                                      evaluated_when_entry: false,
                                      type: {
                                        name: 'ipv4-prefix',
                                        primitive: true
                                      },
                                      deps: [
                                        '/serv:services/vpn:vpn/ike/peer/role',
                                        '/serv:services/vpn:vpn/ipsec/connection/ike-peer'
                                      ]
                                    },
                                    {
                                      kind: 'container',
                                      name: 'remote-virtual-address',
                                      qname: 'vpn:remote-virtual-address',
                                      mandatory: true,
                                      access: {
                                        create: false,
                                        read: true,
                                        update: true,
                                        delete: false,
                                        execute: false
                                      },
                                      when_targets: [
                                        '/serv:services/vpn:vpn/ipsec/connection/host-to-net/local-ip-subnet'
                                      ],
                                      evaluated_when_entry: false,
                                      children: [
                                        {
                                          kind: 'choice',
                                          name: 'assignment-type',
                                          qname: 'vpn:assignment-type',
                                          cases: [
                                            {
                                              kind: 'case',
                                              name: 'specified-by-remote',
                                              qname: 'vpn:specified-by-remote',
                                              children: [
                                                {
                                                  kind: 'leaf',
                                                  name: 'specified-by-remote',
                                                  qname: 'vpn:specified-by-remote',
                                                  info: {
                                                    string:
                                                      'Virtual IP address (remote inner tunnel address) requested by remote is assigned'
                                                  },
                                                  access: {
                                                    create: true,
                                                    read: true,
                                                    update: true,
                                                    delete: true,
                                                    execute: false
                                                  },
                                                  type: {
                                                    name: 'empty',
                                                    primitive: true
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              kind: 'case',
                                              name: 'static-address',
                                              qname: 'vpn:static-address',
                                              children: [
                                                {
                                                  kind: 'leaf',
                                                  name: 'static-address',
                                                  qname: 'vpn:static-address',
                                                  info: {
                                                    string:
                                                      'Virtual IP address (remote inner tunnel address) that will be assigned to remote.'
                                                  },
                                                  access: {
                                                    create: true,
                                                    read: true,
                                                    update: true,
                                                    delete: true,
                                                    execute: false
                                                  },
                                                  type: {
                                                    namespace:
                                                      'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                                                    name: 'ip-address'
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              kind: 'case',
                                              name: 'from-pool',
                                              qname: 'vpn:from-pool',
                                              children: [
                                                {
                                                  kind: 'leaf',
                                                  name: 'from-v4-pool',
                                                  qname: 'vpn:from-v4-pool',
                                                  info: {
                                                    string:
                                                      'Virtual IP address pool from which an address will be assigned to the remote'
                                                  },
                                                  access: {
                                                    create: true,
                                                    read: true,
                                                    update: true,
                                                    delete: true,
                                                    execute: false
                                                  },
                                                  type: {
                                                    name: 'ipv4-prefix',
                                                    primitive: true
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              kind: 'case',
                                              name: 'from-dhcp',
                                              qname: 'vpn:from-dhcp',
                                              children: [
                                                {
                                                  kind: 'leaf',
                                                  name: 'from-dhcp',
                                                  qname: 'vpn:from-dhcp',
                                                  info: {
                                                    string: 'Obtain IP address from a DHCP server.'
                                                  },
                                                  access: {
                                                    create: true,
                                                    read: true,
                                                    update: true,
                                                    delete: true,
                                                    execute: false
                                                  },
                                                  type: {
                                                    name: 'empty',
                                                    primitive: true
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          mandatory: true
                                        }
                                      ],
                                      deps: [
                                        '/serv:services/vpn:vpn/ipsec/connection/host-to-net/local-ip-subnet'
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'host-to-host',
                              qname: 'vpn:host-to-host',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'host-to-host',
                                  qname: 'vpn:host-to-host',
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                }
                              ]
                            },
                            {
                              kind: 'case',
                              name: 'client',
                              qname: 'vpn:client',
                              children: [
                                {
                                  kind: 'container',
                                  name: 'client',
                                  qname: 'vpn:client',
                                  presence: true,
                                  access: {
                                    create: true,
                                    read: true,
                                    update: true,
                                    delete: true,
                                    execute: false
                                  },
                                  children: []
                                }
                              ]
                            }
                          ],
                          mandatory: true
                        },
                        {
                          kind: 'leaf-list',
                          name: 'remote-ip-subnets',
                          qname: 'vpn:remote-ip-subnets',
                          info: {
                            string: 'Private IPv4 subnet(s) behind the peer'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 't14'
                          }
                        },
                        {
                          kind: 'leaf-list',
                          name: 'remote-ip6-subnets',
                          qname: 'vpn:remote-ip6-subnets',
                          info: {
                            string: 'Private IPv6 subnet(s) behind the peer'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            namespace: 'com:gemds:services:vpn',
                            name: 't16'
                          }
                        },
                        {
                          kind: 'leaf',
                          name: 'is-out-of-band-ima',
                          qname: 'vpn:is-out-of-band-ima',
                          info: {
                            string: 'Whether this is an out-of-band IMA ipsec connection'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'boolean',
                            primitive: true
                          },
                          default: false
                        },
                        {
                          kind: 'leaf',
                          name: 'failure-retry-interval',
                          qname: 'vpn:failure-retry-interval',
                          info: {
                            string: 'connection failure retry time interval (in mins)'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 't17'
                          },
                          default: '5'
                        },
                        {
                          kind: 'leaf',
                          name: 'periodic-retry-interval',
                          qname: 'vpn:periodic-retry-interval',
                          info: {
                            string: 'periodic attestation time interval (in mins)'
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
                            namespace: 'com:gemds:services:vpn',
                            name: 't18'
                          },
                          default: '60'
                        },
                        {
                          kind: 'leaf',
                          name: 'replay-window-size',
                          qname: 'vpn:replay-window-size',
                          info: {
                            string:
                              'Size of the IPsec replay window, in packets. Set to 0 to disable anti-replay protection.'
                          },
                          access: {
                            create: true,
                            read: true,
                            update: true,
                            delete: true,
                            execute: false
                          },
                          type: {
                            name: 'uint32',
                            primitive: true
                          }
                        },
                        {
                          kind: 'container',
                          name: 'filter',
                          qname: 'vpn:filter',
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
                              qname: 'vpn:input',
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
                              deps: ['/serv:services/fire:firewall/filter']
                            },
                            {
                              kind: 'leaf',
                              name: 'output',
                              qname: 'vpn:output',
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
                              deps: ['/serv:services/fire:firewall/filter']
                            }
                          ]
                        },
                        {
                          kind: 'container',
                          name: 'nat',
                          qname: 'vpn:nat',
                          mandatory: true,
                          access: {
                            create: false,
                            read: true,
                            update: true,
                            delete: false,
                            execute: false
                          },
                          leafrefGroups: [['static']],
                          leafref_groups: [['static']],
                          children: [
                            {
                              kind: 'leaf',
                              name: 'static',
                              qname: 'vpn:static',
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              is_leafref: true,
                              leafref_target:
                                '/serv:services/fire:firewall/nat/static/rule-set/name',
                              type: {
                                namespace: 'com:gemds:services:firewall',
                                name: 't18'
                              },
                              deps: ['/serv:services/fire:firewall/nat/static/rule-set']
                            }
                          ]
                        }
                      ],
                      deps: [
                        '/serv:services/vpn:vpn/dhcp/server-address',
                        '/serv:services/vpn:vpn/ipsec/connection/client',
                        '/serv:services/vpn:vpn/ipsec/connection/host-to-host',
                        '/serv:services/vpn:vpn/ipsec/connection/host-to-net/local-ip-subnet',
                        '/serv:services/vpn:vpn/ipsec/connection/host-to-net/remote-virtual-address',
                        '/serv:services/vpn:vpn/ipsec/connection/host-to-net/remote-virtual-address/from-dhcp',
                        '/serv:services/vpn:vpn/ipsec/connection/local-ip-subnet',
                        '/serv:services/vpn:vpn/ipsec/connection/local-ip6-subnet',
                        '/serv:services/vpn:vpn/ipsec/connection/remote-ip-subnets',
                        '/serv:services/vpn:vpn/ipsec/connection/remote-ip6-subnets'
                      ]
                    },
                    {
                      kind: 'container',
                      name: 'security-associations',
                      qname: 'vpn:security-associations',
                      mandatory: true,
                      config: false,
                      is_config_false_callpoint: true,
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
                          name: 'security-association',
                          qname: 'vpn:security-association',
                          mandatory: true,
                          min_elements: 0,
                          max_elements: 'unbounded',
                          config: false,
                          is_config_false_callpoint: true,
                          key: ['id'],
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
                              name: 'id',
                              qname: 'vpn:id',
                              info: {
                                string: 'Unique index of this security association'
                              },
                              mandatory: true,
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: false,
                                read: true,
                                update: false,
                                delete: false,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'name',
                              qname: 'vpn:name',
                              info: {
                                string: 'Name of this security association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'state',
                              qname: 'vpn:state',
                              info: {
                                string: 'State of the security association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'mode',
                              qname: 'vpn:mode',
                              info: {
                                string: 'Mode of the security association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'udp-encap',
                              qname: 'vpn:udp-encap',
                              info: {
                                string: 'Specifies whether UDP encapsulation is being used.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'boolean',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'in-spi',
                              qname: 'vpn:in-spi',
                              info: {
                                string: 'Inbound Security Parameter Index (SPI)'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'out-spi',
                              qname: 'vpn:out-spi',
                              info: {
                                string: 'Outbound Security Parameter Index (SPI)'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'ciphersuite',
                              qname: 'vpn:ciphersuite',
                              info: {
                                string:
                                  'Specifices encryption/integrity/prf/dh algorithms being used to protect this association.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'in-bytes',
                              qname: 'vpn:in-bytes',
                              info: {
                                string: 'Number of bytes received.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'in-packets',
                              qname: 'vpn:in-packets',
                              info: {
                                string: 'Number of packets received.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'in-last-use',
                              qname: 'vpn:in-last-use',
                              info: {
                                string: 'Numbers of seconds since last inbound packet.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'out-bytes',
                              qname: 'vpn:out-bytes',
                              info: {
                                string: 'Number of bytes sent.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'out-packets',
                              qname: 'vpn:out-packets',
                              info: {
                                string: 'Number of packets sent.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'out-last-use',
                              qname: 'vpn:out-last-use',
                              info: {
                                string: 'Numbers of seconds since last outbound packet.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'rekey-time',
                              qname: 'vpn:rekey-time',
                              info: {
                                string: 'Numbers of seconds before this association rekeys.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'life-time',
                              qname: 'vpn:life-time',
                              info: {
                                string: 'Numbers of seconds before this association expires.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'install-time',
                              qname: 'vpn:install-time',
                              info: {
                                string: 'Numbers of seconds since this association was installed.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              units: 'seconds',
                              type: {
                                name: 'uint32',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'local-ts',
                              qname: 'vpn:local-ts',
                              info: {
                                string: 'Local traffic selector.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            },
                            {
                              kind: 'leaf',
                              name: 'remote-ts',
                              qname: 'vpn:remote-ts',
                              info: {
                                string: 'Remote traffic selector.'
                              },
                              config: false,
                              is_config_false_callpoint: true,
                              access: {
                                create: true,
                                read: true,
                                update: true,
                                delete: true,
                                execute: false
                              },
                              type: {
                                name: 'string',
                                primitive: true
                              },
                              readonly: true
                            }
                          ],
                          readonly: true
                        }
                      ],
                      readonly: true
                    },
                    {
                      kind: 'action',
                      name: 'attest-with-ima',
                      qname: 'vpn:attest-with-ima',
                      info: {
                        string: 'triggers ad-hoc attestation with IMA for IPsec VPN'
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
                          name: 'conn-name',
                          qname: 'vpn:conn-name',
                          info: {
                            string: 'ipsec connection name (allowed chars: a-zA-Z0-9-_).'
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
                            namespace: 'com:gemds:security',
                            name: 'word-string'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'web',
      qname: 'web:web',
      namespace: 'com:gemds:services:web',
      mandatory: true,
      exists: true,
      access: {
        create: false,
        read: true,
        update: true,
        delete: false,
        execute: false
      },
      children: [
        {
          kind: 'container',
          name: 'http',
          qname: 'web:http',
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
          leafref_groups: [['ipv4-bind-ips'], ['ipv6-bind-ips']],
          children: [
            {
              kind: 'leaf',
              name: 'enabled',
              qname: 'web:enabled',
              info: {
                string:
                  'Whether or not to run the HTTP server. If HTTP is disabled, but HTTPS\nis enabled, the server will still respond on the HTTP port, but will\nredirect to the HTTPS port. If both HTTP and HTTPS are disabled, the\nserver will not respond on either port.'
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: false,
              deps: ['/serv:services/web:web/http/enabled']
            },
            {
              kind: 'leaf',
              name: 'port',
              qname: 'web:port',
              info: {
                string: 'The port to listen to HTTP connections on.'
              },
              value: '80',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'port-number'
              },
              default: '80',
              deps: ['/serv:services/web:web/http/port']
            },
            {
              kind: 'leaf-list',
              name: 'ipv4-bind-ips',
              qname: 'web:ipv4-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv4 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv4 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
              type: {
                namespace: 'com:gemds:services:web',
                name: 't1'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv4',
                '/if:interfaces/interface/ip:ipv4/address'
              ]
            },
            {
              kind: 'leaf-list',
              name: 'ipv6-bind-ips',
              qname: 'web:ipv6-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv6 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv6 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv6/address/ip',
              type: {
                namespace: 'com:gemds:services:web',
                name: 't3'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv6',
                '/if:interfaces/interface/ip:ipv6/address'
              ]
            }
          ]
        },
        {
          kind: 'container',
          name: 'https',
          qname: 'web:https',
          mandatory: true,
          exists: true,
          access: {
            create: false,
            read: true,
            update: true,
            delete: false,
            execute: false
          },
          leafrefGroups: [
            ['ipv4-bind-ips'],
            ['ipv6-bind-ips'],
            ['tls-certificate'],
            ['tls-priv-key']
          ],
          leafref_groups: [
            ['ipv4-bind-ips'],
            ['ipv6-bind-ips'],
            ['tls-certificate'],
            ['tls-priv-key']
          ],
          children: [
            {
              kind: 'leaf',
              name: 'enabled',
              qname: 'web:enabled',
              info: {
                string: 'Whether or not to run the HTTPS server'
              },
              value: true,
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'boolean',
                primitive: true
              },
              default: true,
              deps: ['/serv:services/web:web/https/enabled']
            },
            {
              kind: 'leaf',
              name: 'port',
              qname: 'web:port',
              info: {
                string: 'The port to listen to HTTPS connections on.'
              },
              value: '443',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'urn:ietf:params:xml:ns:yang:ietf-inet-types',
                name: 'port-number'
              },
              default: '443',
              deps: ['/serv:services/web:web/https/port']
            },
            {
              kind: 'leaf-list',
              name: 'tls-versions',
              qname: 'web:tls-versions',
              info: {
                string: 'A list of allowed TLS versions the HTTPS server can use.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:web',
                name: 't5'
              }
            },
            {
              kind: 'leaf-list',
              name: 'ipv4-bind-ips',
              qname: 'web:ipv4-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv4 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv4 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv4/address/ip',
              type: {
                namespace: 'com:gemds:services:web',
                name: 't1'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv4',
                '/if:interfaces/interface/ip:ipv4/address'
              ]
            },
            {
              kind: 'leaf-list',
              name: 'ipv6-bind-ips',
              qname: 'web:ipv6-bind-ips',
              info: {
                string:
                  'Restrict the server to only listen for connections\non the specified IPv6 addresses.  If this leaf is not present,\nor empty, the server will listen on all IPv6 addresses.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/if:interfaces/interface/ip:ipv6/address/ip',
              type: {
                namespace: 'com:gemds:services:web',
                name: 't3'
              },
              deps: [
                '/if:interfaces/interface',
                '/if:interfaces/interface/ip:ipv6',
                '/if:interfaces/interface/ip:ipv6/address'
              ]
            },
            {
              kind: 'leaf',
              name: 'tls-certificate',
              qname: 'web:tls-certificate',
              info: {
                string:
                  'The certificate to use for the HTTPS server.\nIf this leaf is empty or not present, a self-signed\ncertificate/key pair will be used.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/cm:pki/client-certs/show-all/cert-identity',
              type: {
                name: 'string',
                primitive: true
              },
              deps: [
                '/cm:pki/client-certs/show-all',
                '/serv:services/web:web/https/tls-certificate',
                '/serv:services/web:web/https/tls-priv-key'
              ]
            },
            {
              kind: 'leaf',
              name: 'tls-priv-key',
              qname: 'web:tls-priv-key',
              info: {
                string:
                  'The private key which matches the specified tls-certificate\nIf this leaf is empty or not present, a self-signed\ncertificate/key pair will be used.'
              },
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              is_leafref: true,
              leafref_target: '/cm:pki/private-keys/show-all/key-identity',
              type: {
                name: 'string',
                primitive: true
              },
              deps: [
                '/cm:pki/private-keys/show-all',
                '/serv:services/web:web/https/tls-certificate',
                '/serv:services/web:web/https/tls-priv-key'
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'container',
      name: 'ztp',
      qname: 'ztp:ztp',
      info: {
        string:
          'Zero touch provisioning (ZTP) service. Retrives initial device\nconfiguration from ZTP server.'
      },
      namespace: 'com:gemds:services:ztp',
      mandatory: true,
      exists: true,
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
          name: 'enabled',
          qname: 'ztp:enabled',
          info: {
            string: 'Whether or not to run the ZTP service'
          },
          value: false,
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            name: 'boolean',
            primitive: true
          },
          default: false
        },
        {
          kind: 'leaf',
          name: 'url',
          qname: 'ztp:url',
          info: {
            string: 'ZTP server URL.'
          },
          value: 'http://ztp/register',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          type: {
            namespace: 'com:gemds:services:ztp',
            name: 't0'
          },
          default: 'http://ztp/register'
        },
        {
          kind: 'leaf',
          name: 'failure-retry-interval',
          qname: 'ztp:failure-retry-interval',
          info: {
            string: 'The retry interval after registeration failure.'
          },
          value: '5',
          exists: true,
          access: {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          },
          units: 'seconds',
          type: {
            name: 'uint16',
            primitive: true
          },
          default: '5'
        },
        {
          kind: 'container',
          name: 'status',
          qname: 'ztp:status',
          mandatory: true,
          config: false,
          is_config_false_callpoint: true,
          exists: true,
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
              name: 'state',
              qname: 'ztp:state',
              info: {
                string: 'The current state of ZTP update operation'
              },
              config: false,
              is_config_false_callpoint: true,
              value: 'disabled',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                namespace: 'com:gemds:services:ztp',
                name: 't1'
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'failure-reason',
              qname: 'ztp:failure-reason',
              info: {
                string: 'The reason for ZTP registeration failure.'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'string',
                primitive: true
              },
              readonly: true
            },
            {
              kind: 'leaf',
              name: 'last-timestamp',
              qname: 'ztp:last-timestamp',
              info: {
                string: 'Timestamp of last registration attempt'
              },
              config: false,
              is_config_false_callpoint: true,
              value: '1970-01-01T00:00:00-04:00',
              exists: true,
              access: {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              },
              type: {
                name: 'date-and-time',
                primitive: true
              },
              readonly: true
            }
          ],
          readonly: true
        }
      ],
      deps: ['/serv:services/ztp:ztp/enabled', '/serv:services/ztp:ztp/url']
    }
  ]
})
