// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightThemeNext from 'starlight-theme-next';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';

const [serverStarlightTypeDoc, serverTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [clientStarlightTypeDoc, clientTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.cyber.mp',
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Guides',
            link: '/',
            icon: 'open-book',
            items: [
              {
                label: 'Server',
                items: [
                  'guides/server/getting-started',
                  'guides/server/first-resource',
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
                ],
              },
            ],
          },
        ]),
        // starlightLinksValidatorPlugin(),
        starlightThemeNext(),
        serverStarlightTypeDoc({
          entryPoints: [
            './node_modules/@cybermp/server-types/index.d.ts',
            './node_modules/@cybermp/server-types/events.d.ts',
          ],
          tsconfig: 'tsconfig.json',
          output: 'reference/server/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'table',
            router: 'structure',
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
        clientStarlightTypeDoc({
          entryPoints: [
            './node_modules/@cybermp/client-types/out/precomputed/classes.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/enums.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/events.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/game.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/global.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/meta.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/primitives.d.ts',
            './node_modules/@cybermp/client-types/out/precomputed/voice-chat.d.ts',
          ],
          tsconfig: 'tsconfig.json',
          output: 'reference/client/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'table',
            router: 'structure',
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
      title: 'CyberMP Docs',
      credits: false,
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
      // sidebar: [
      //   {
      //     label: 'Guides',
      //     items: [
      //       '/',
      //     ],
      //   },
      //   {
      //     label: 'Reference',
      //     items: [

      //     ],
      //   },
      //   {
      //     label: 'Server reference API',
      //     autogenerate: { directory: 'server-reference' },
      //   },
      //   {
      //     label: 'Client reference API',
      //     autogenerate: { directory: 'client-reference' },
      //   },
      // ],
    }),
  ],
});
