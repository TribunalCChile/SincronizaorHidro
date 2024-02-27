export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'SINCRONIZACIÓN',
  },
  {
    component: 'CNavItem',
    name: 'Estado de sincronización',
    to: '/sync-status',
    icon: 'cil-task',
  },
  {
    component: 'CNavItem',
    name: 'Crear tareas',
    to: '/create-task',
    icon: 'cil-note-add',
  },
  {
    component: 'CNavItem',
    name: 'Tareas en cola',
    to: '/task-queue',
    icon: 'pen-to-square',
  },
  {
    component: 'CNavItem',
    name: 'Fallidas',
    to: '/failed-tasks',
    icon: 'cil-settings',
  },

  
  {
    component: 'CNavTitle',
    name: 'CONFIGURACIÓN DE CLIENTES',
  },
  {
    component: 'CNavItem',
    name: 'Clientes',
    to: '/clients',
    icon: 'icon.cil-group',
  },
  
  {
    component: 'CNavItem',
    name: 'Configuraciones',
    to: '/client-configs',
    icon: 'cil-pencil',
  },
  
  {
    component: 'CNavItem',
    name: 'Dispositivos',
    to: '/devices',
    icon: 'cil-rss',
  },
  
  
  {
    component: 'CNavTitle',
    name: 'ADMINISTRACIÓN',
  },
  
  {
    component: 'CNavItem',
    name: 'Usuarios',
    to: '/users',
    icon: 'cil-user',
  },
  

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
