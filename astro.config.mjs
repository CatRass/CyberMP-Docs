// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
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
        starlightLinksValidatorPlugin(),
        starlightThemeNext(),
        serverStarlightTypeDoc({
          entryPoints: [
            './node_modules/@cybermp/server-types/index.d.ts',
            './node_modules/@cybermp/server-types/events.d.ts',
          ],
          tsconfig: 'tsconfig.json',
          output: 'server-reference',
          typeDoc: {
            outputFileStrategy: 'modules',
            entryPointStrategy: 'resolve',
            excludeInternal: true,
            skipErrorChecking: true,
            readme: 'none',
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
          output: 'client-reference',
          typeDoc: {
            outputFileStrategy: 'modules',
            entryPointStrategy: 'resolve',
            excludeInternal: true,
            skipErrorChecking: true,
            readme: 'none',
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
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Server reference',
          autogenerate: { directory: 'server-reference' },
        },
        {
          label: 'Client reference',
          autogenerate: { directory: 'client-reference' },
        },
      ],
    }),
  ],
});
