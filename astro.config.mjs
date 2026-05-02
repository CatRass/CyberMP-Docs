// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { pluginCollapsible } from 'expressive-code-collapsible';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightThemeNext from 'starlight-theme-next';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';

const [serverStarlightTypeDoc] = createStarlightTypeDocPlugin();
const [clientStarlightTypeDoc] = createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.cyber.mp',
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Guides and recipes',
            link: '/guides/server/getting-started',
            icon: 'open-book',
            items: [
              {
                label: 'Server',
                items: ['guides/server/getting-started'],
              },
              {
                label: 'Resources',
                items: [
                  'guides/resources/creating-resource',
                  'guides/resources/interacting-with-resources',
                  'guides/resources/live-updates',
                  'guides/resources/first-logic',
                ],
              },
              {
                label: 'General',
                items: [
                  'guides/general/type-safety',
                  'guides/general/hotreload',
                  'guides/general/rpc',
                ],
              },
              {
                label: 'Client',
                items: [
                  'guides/client/spawning-player',
                  'guides/client/teleporting-player',
                ],
              },
            ],
          },
          {
            label: 'Reference',
            link: '/reference/server/configuration',
            icon: 'information',
            items: [
              {
                label: 'Server',
                items: [
                  {
                    label: 'API',
                    autogenerate: { directory: 'reference/server/api' },
                    collapsed: true,
                  },
                  'reference/server/configuration',
                  'reference/server/console',
                ],
              },
              {
                label: 'Client',
                items: [
                  {
                    label: 'API',
                    autogenerate: { directory: 'reference/client/api' },
                    collapsed: true,
                  },
                  'reference/client/console',
                  'reference/client/working-with-game-natives',
                ],
              },
            ],
          },
        ]),
        // starlightLinksValidatorPlugin(),
        starlightThemeNext(),
        serverStarlightTypeDoc({
          entryPoints: ['./node_modules/@cybermp/server-types/src/index.ts'],
          tsconfig: 'tsconfig.typedoc.json',
          output: 'reference/server/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'table',
            router: 'category',
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: true,
            classPropertiesFormat: 'table',
            typeDeclarationFormat: 'table',
            useHTMLAnchors: true,
          },
        }),
        clientStarlightTypeDoc({
          entryPoints: [
            './node_modules/@cybermp/client-types/precomputed/index.d.ts',
          ],
          tsconfig: 'tsconfig.typedoc.json',
          output: 'reference/client/api',
          typeDoc: {
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'table',
            router: 'category',
            flattenOutputFiles: true,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: true,
            classPropertiesFormat: 'table',
            typeDeclarationFormat: 'table',
            useHTMLAnchors: true,
          },
        }),
      ],
      expressiveCode: {
        plugins: [pluginCollapsible({ lineThreshold: 25, previewLines: 10 })],
      },
      title: 'CyberMP Docs',
      credits: false,
      components: {
        ThemeSelect: './src/components/starlight/theme-select.astro',
      },
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/global.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/cyber-mp',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.cyber.mp',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/cyber-mp/cybermp-docs/edit/main',
      },
    }),
  ],
  vite: {
    server: {
      host: true,
    },
  },
  redirects: {
    '/': '/guides/server/getting-started',
  },
});
