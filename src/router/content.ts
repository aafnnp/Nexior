import i18n, { t } from '../i18n';

export default {
  path: '/content',
  name: 'content',
  meta: {
    title: t('common.nav.content')
  },
  component: () => import('@/layouts/Content.vue'),
  children: [
    {
      path: 'editor',
      name: 'editor',
      meta: {
        title: t('common.nav.editor')
      },
      component: () => import('@/pages/content/Editor.vue')
    },
    {
      path: 'article',
      name: 'article',
      meta: {
        title: t('common.nav.article')
      },
      component: () => import('@/pages/content/Article.vue')
    },
    {
      path: 'platform',
      name: 'platform',
      meta: {
        title: t('common.nav.platform')
      },
      component: () => import('@/pages/content/platform/Index.vue')
    }
  ]
};