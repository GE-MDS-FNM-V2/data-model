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
    execute: false
  },
  type: {
    namespace: 'com:gemds:mds-interfaces',
    name: 't13'
  },
  default: '60'
})
