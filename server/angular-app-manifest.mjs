
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/dashstack-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dashstack-app"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dashstack-app/favorites"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dashstack-app/orders"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dashstack-app/team"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dashstack-app/team/add"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5134, hash: '7c60c3752cd0edcf1d8b614e7678df2205de12d31ad2722f24dce7fd9554a4f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1047, hash: '7f5b3625733428b4010ac3500e40f5600c8b66033a90056a97b2e815bbf8358c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DICB4EUS.css': {size: 231315, hash: 'DbiyYaEEx7s', text: () => import('./assets-chunks/styles-DICB4EUS_css.mjs').then(m => m.default)}
  },
};
