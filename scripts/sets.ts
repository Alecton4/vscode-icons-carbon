import type { Codicon } from './ids'

export interface IconSet {
  name: string
  display: string
  icons: Partial<Record<Codicon, string>>
}

export const sets: IconSet[] = [
  {
    name: 'icons-carbon-tweaked',
    display: 'Carbon',
    icons: {
      // 'codicon:account': 'carbon:',
      // 'codicon:activate-breakpoints': 'carbon:',
      // 'codicon:add': 'carbon:',
      'codicon:alert': 'carbon:warning-alt',
      'codicon:archive': 'carbon:box',
      'codicon:array': 'material-symbols:data-array-rounded',
      'codicon:arrow-both': 'carbon:pan-horizontal',
      'codicon:arrow-down': 'carbon:arrow-down',
      'codicon:arrow-left': 'carbon:arrow-left',
      'codicon:arrow-right': 'carbon:arrow-right',
      // 'codicon:arrow-small-down': 'carbon:',
      // 'codicon:arrow-small-left': 'carbon:',
      // 'codicon:arrow-small-right': 'carbon:',
      // 'codicon:arrow-small-up': 'carbon:',
      'codicon:arrow-swap': 'carbon:arrows-horizontal',
      'codicon:arrow-up': 'carbon:arrow-up',
      'codicon:beaker': 'carbon:chemistry',
      'codicon:bell': 'carbon:notification',
      'codicon:bell-dot': 'carbon:notification-new',
      'codicon:bold': 'carbon:text-bold',
      'codicon:book': 'carbon:book',
      'codicon:bookmark': 'carbon:bookmark',
      'codicon:briefcase': 'carbon:tool-box',
      'codicon:broadcast': 'carbon:connection-signal',
      'codicon:browser': 'carbon:account',
      // 'codicon:bug': 'carbon:',
      'codicon:calendar': 'carbon:calendar',
      'codicon:call-incoming': 'carbon:phone-incoming',
      'codicon:call-outgoing': 'carbon:phone-outgoing',
      // 'codicon:case-sensitive': 'carbon:',
      // 'codicon:check': 'carbon:',
      // 'codicon:check-all': 'carbon:',
      'codicon:checklist': 'carbon:list-checked',
      'codicon:chevron-down': 'carbon:chevron-down',
      'codicon:chevron-left': 'carbon:chevron-left',
      'codicon:chevron-right': 'carbon:chevron-right',
      'codicon:chevron-up': 'carbon:chevron-up',
      // 'codicon:chrome-close': 'carbon:',
      // 'codicon:chrome-maximize': 'carbon:',
      // 'codicon:chrome-minimize': 'carbon:',
      // 'codicon:chrome-restore': 'carbon:',
      // 'codicon:circle-filled': 'carbon:',
      // 'codicon:circle-large-filled': 'carbon:',
      // 'codicon:circle-large-outline': 'carbon:',
      // 'codicon:circle-outline': 'carbon:',
      'codicon:circle-slash': 'carbon:error',
      'codicon:circuit-board': 'carbon:edge-node',
      'codicon:clear-all': 'carbon:clean',
      // 'codicon:clippy': 'carbon:',
      'codicon:clock': 'carbon:time',
      // 'codicon:clone': 'carbon:',
      // 'codicon:close': 'carbon:',
      // 'codicon:close-all': 'carbon:',
      // 'codicon:close-dirty': 'carbon:',
      'codicon:cloud': 'carbon:cloud',
      'codicon:cloud-download': 'carbon:cloud-download',
      'codicon:cloud-upload': 'carbon:cloud-upload',
      'codicon:code': 'carbon:code',
      // 'codicon:collapse-all': 'carbon:',
      'codicon:color-mode': 'carbon:contrast',
      // 'codicon:combine': 'carbon:',
      'codicon:comment': 'carbon:chat',
      'codicon:comment-add': 'carbon:add-comment',
      'codicon:comment-discussion': 'carbon:forum',
      'codicon:compare-changes': 'carbon:compare',
      'codicon:console': 'carbon:terminal',
      'codicon:copy': 'carbon:copy',
      'codicon:credit-card': 'carbon:purchase',
      // 'codicon:dash': 'carbon:',
      'codicon:dashboard': 'carbon:meter',
      // 'codicon:database': 'carbon:',
      // 'codicon:debug': 'carbon:',
      // 'codicon:debug-alt': 'carbon:',
      // 'codicon:debug-alt-small': 'carbon:',
      // 'codicon:debug-breakpoint': 'carbon:',
      // 'codicon:debug-breakpoint-conditional': 'carbon:',
      // 'codicon:debug-breakpoint-conditional-disabled': 'carbon:',
      // 'codicon:debug-breakpoint-conditional-unverified': 'carbon:',
      // 'codicon:debug-breakpoint-data': 'carbon:',
      // 'codicon:debug-breakpoint-data-disabled': 'carbon:',
      // 'codicon:debug-breakpoint-data-unverified': 'carbon:',
      // 'codicon:debug-breakpoint-disabled': 'carbon:',
      // 'codicon:debug-breakpoint-function': 'carbon:',
      // 'codicon:debug-breakpoint-function-disabled': 'carbon:',
      // 'codicon:debug-breakpoint-function-unverified': 'carbon:',
      // 'codicon:debug-breakpoint-log': 'carbon:',
      // 'codicon:debug-breakpoint-log-disabled': 'carbon:',
      // 'codicon:debug-breakpoint-log-unverified': 'carbon:',
      // 'codicon:debug-breakpoint-unsupported': 'carbon:',
      // 'codicon:debug-breakpoint-unverified': 'carbon:',
      // 'codicon:debug-console': 'carbon:',
      // 'codicon:debug-continue': 'carbon:',
      // 'codicon:debug-disconnect': 'carbon:',
      // 'codicon:debug-hint': 'carbon:',
      // 'codicon:debug-line-by-line': 'carbon:'
      // 'codicon:debug-pause': 'carbon:',
      // 'codicon:debug-rerun': 'carbon:',
      // 'codicon:debug-restart': 'carbon:',
      // 'codicon:debug-restart-frame': 'carbon:',
      // 'codicon:debug-reverse-continue': 'carbon:',
      // 'codicon:debug-stackframe': 'carbon:',
      // 'codicon:debug-stackframe-active': 'carbon:',
      // 'codicon:debug-stackframe-dot': 'carbon:',
      // 'codicon:debug-stackframe-focused': 'carbon:',
      // 'codicon:debug-start': 'carbon:',
      // 'codicon:debug-step-back': 'carbon:',
      // 'codicon:debug-step-into': 'carbon:',
      // 'codicon:debug-step-out': 'carbon:',
      // 'codicon:debug-step-over': 'carbon:',
      // 'codicon:debug-stop': 'carbon:',
      // 'codicon:desktop-download': 'carbon:',
      'codicon:device-camera': 'carbon:camera',
      'codicon:device-camera-video': 'carbon:video',
      // 'codicon:device-desktop': 'carbon:',
      'codicon:device-mobile': 'carbon:mobile',
      // 'codicon:diff': 'carbon:',
      // 'codicon:diff-added': 'carbon:',
      // 'codicon:diff-ignored': 'carbon:',
      // 'codicon:diff-modified': 'carbon:',
      // 'codicon:diff-removed': 'carbon:',
      // 'codicon:diff-renamed': 'carbon:',
      'codicon:discard': 'carbon:undo',
      // 'codicon:drop-down-button': 'carbon:',
      'codicon:edit': 'carbon:edit',
      // 'codicon:editor-layout': 'carbon:',
      // 'codicon:ellipsis': 'carbon:',
      // 'codicon:empty-window': 'carbon:',
      // 'codicon:error': 'carbon:',
      // 'codicon:exclude': 'carbon:',
      // 'codicon:expand-all': 'carbon:',
      'codicon:export': 'carbon:export',
      'codicon:extension-activation-time': 'carbon:time',
      'codicon:extensions': 'bi:puzzle',
      // 'codicon:eye': 'carbon:',
      // 'codicon:eye-closed': 'carbon:',
      // 'codicon:eye-unwatch': 'carbon:',
      // 'codicon:eye-watch': 'carbon:',
      'codicon:feedback': 'carbon:share-knowledge',
      // 'codicon:file': 'carbon:',
      // 'codicon:file-add': 'carbon:',
      // 'codicon:file-binary': 'carbon:',
      // 'codicon:file-code': 'carbon:',
      // 'codicon:file-directory': 'carbon:',
      // 'codicon:file-directory-create': 'carbon:',
      // 'codicon:file-media': 'carbon:',
      // 'codicon:file-pdf': 'carbon:',
      // 'codicon:file-submodule': 'carbon:',
      // 'codicon:file-symlink-directory': 'carbon:',
      // 'codicon:file-symlink-file': 'carbon:',
      // 'codicon:file-text': 'carbon:',
      // 'codicon:file-zip': 'carbon:',
      // 'codicon:files': 'carbon:',
      'codicon:filter': 'carbon:filter',
      'codicon:filter-filled': 'carbon:filter',
      'codicon:flame': 'carbon:fire',
      // 'codicon:fold': 'carbon:',
      // 'codicon:fold-down': 'carbon:',
      // 'codicon:fold-up': 'carbon:',
      // 'codicon:folder': 'carbon:',
      // 'codicon:folder-active': 'carbon:',
      // 'codicon:folder-opened': 'carbon:',
      // 'codicon:gather': 'carbon:',
      'codicon:gear': 'carbon:settings',
      'codicon:gift': 'carbon:gift',
      'codicon:gist': 'carbon:script',
      // 'codicon:gist-fork': 'carbon:',
      // 'codicon:gist-new': 'carbon:',
      'codicon:gist-private': 'carbon:locked',
      // 'codicon:gist-secret': 'carbon:',
      'codicon:git-branch': 'carbon:branch',
      'codicon:git-branch-create': 'carbon:branch',
      'codicon:git-branch-delete': 'carbon:branch',
      'codicon:git-commit': 'carbon:commit',
      'codicon:git-compare': 'carbon:compare',
      'codicon:git-fork-private': 'carbon:locked',
      // 'codicon:git-merge': 'carbon:',
      // 'codicon:git-pull-request': 'carbon:',
      // 'codicon:git-pull-request-abandoned': 'carbon:',
      // 'codicon:git-pull-request-create': 'carbon:',
      // 'codicon:github': 'carbon:',
      // 'codicon:github-action': 'carbon:',
      // 'codicon:github-alt': 'carbon:',
      // 'codicon:github-inverted': 'carbon:',
      'codicon:globe': 'carbon:wikis',
      // 'codicon:go-to-file': 'carbon:',
      // 'codicon:grabber': 'carbon:',
      // 'codicon:graph': 'carbon:',
      // 'codicon:graph-left': 'carbon:',
      // 'codicon:gripper': 'carbon:',
      // 'codicon:group-by-ref-type': 'carbon:',
      'codicon:heart': 'carbon:favorite',
      'codicon:history': 'carbon:recently-viewed',
      'codicon:home': 'carbon:home',
      // 'codicon:horizontal-rule': 'carbon:',
      'codicon:hubot': 'carbon:machine-learning',
      // 'codicon:inbox': 'carbon:',
      // 'codicon:info': 'carbon:',
      // 'codicon:issue-closed': 'carbon:',
      // 'codicon:issue-opened': 'carbon:',
      // 'codicon:issue-reopened': 'carbon:',
      // 'codicon:issues': 'carbon:',
      'codicon:italic': 'carbon:text-italic',
      // 'codicon:jersey': 'carbon:',
      'codicon:json': 'carbon:json',
      // 'codicon:kebab-horizontal': 'carbon:',
      // 'codicon:kebab-vertical': 'carbon:',
      'codicon:key': 'carbon:password',
      'codicon:keyboard': 'carbon:keyboard',
      'codicon:law': 'carbon:scales',
      // 'codicon:library': 'carbon:',
      'codicon:light-bulb': 'carbon:idea',
      'codicon:lightbulb': 'carbon:idea',
      'codicon:lightbulb-autofix': 'carbon:ai-status-complete',
      'codicon:link': 'carbon:link',
      'codicon:link-external': 'carbon:launch',
      // 'codicon:list-filter': 'carbon:',
      'codicon:list-flat': 'carbon:list',
      'codicon:list-ordered': 'carbon:list-numbered',
      // 'codicon:list-selection': 'carbon:',
      'codicon:list-tree': 'carbon:tree-view-alt',
      'codicon:list-unordered': 'carbon:list-bulleted',
      // 'codicon:live-share': 'carbon:',
      // 'codicon:loading': 'carbon:',
      'codicon:location': 'carbon:location',
      'codicon:lock': 'carbon:locked',
      'codicon:log-in': 'carbon:login',
      'codicon:log-out': 'carbon:logout',
      // 'codicon:logo-github': 'carbon:',
      // 'codicon:magnet': 'carbon:',
      // 'codicon:mail': 'carbon:',
      // 'codicon:mail-read': 'carbon:',
      'codicon:mail-reply': 'carbon:mail-reply',
      // 'codicon:mark-github': 'carbon:',
      // 'codicon:markdown': 'carbon:',
      'codicon:megaphone': 'carbon:bullhorn',
      'codicon:mention': 'carbon:at',
      'codicon:menu': 'carbon:menu',
      'codicon:merge': 'carbon:direction-merge',
      'codicon:microscope': 'carbon:microscope',
      'codicon:milestone': 'carbon:crossroads',
      // 'codicon:mirror': 'carbon:',
      'codicon:mirror-private': 'carbon:locked',
      // 'codicon:mirror-public': 'carbon:',
      // 'codicon:more': 'carbon:',
      // 'codicon:mortar-board': 'carbon:',
      'codicon:move': 'carbon:move',
      // 'codicon:multiple-windows': 'carbon:',
      'codicon:mute': 'carbon:volume-mute',
      // 'codicon:new-file': 'carbon:',
      // 'codicon:new-folder': 'carbon:',
      // 'codicon:no-newline': 'carbon:',
      // 'codicon:note': 'carbon:',
      // 'codicon:notebook': 'carbon:',
      // 'codicon:notebook-template': 'carbon:',
      // 'codicon:octoface': 'carbon:',
      'codicon:open-preview': 'carbon:data-view-alt',
      'codicon:organization': 'carbon:events',
      'codicon:organization-filled': 'carbon:events',
      'codicon:organization-outline': 'carbon:events',
      // 'codicon:output': 'carbon:',
      'codicon:package': 'carbon:delivery-parcel',
      // 'codicon:paintcan': 'carbon:',
      // 'codicon:pass': 'carbon:',
      // 'codicon:pass-filled': 'carbon:',
      'codicon:pencil': 'carbon:pen',
      'codicon:person': 'carbon:person',
      'codicon:person-add': 'carbon:user-follow',
      'codicon:person-filled': 'carbon:user-filled',
      'codicon:person-follow': 'carbon:user-follow',
      'codicon:person-outline': 'carbon:person',
      // 'codicon:pin': 'carbon:',
      // 'codicon:pinned': 'carbon:',
      // 'codicon:pinned-dirty': 'carbon:',
      'codicon:play': 'carbon:play',
      'codicon:play-circle': 'carbon:play-outline',
      'codicon:plug': 'carbon:plug',
      // 'codicon:plus': 'carbon:',
      // 'codicon:preserve-case': 'carbon:',
      'codicon:preview': 'carbon:content-view',
      // 'codicon:primitive-dot': 'carbon:',
      // 'codicon:primitive-square': 'carbon:',
      // 'codicon:project': 'carbon:',
      'codicon:pulse': 'carbon:activity',
      'codicon:question': 'carbon:help',
      'codicon:quote': 'carbon:quotes',
      // 'codicon:radio-tower': 'carbon:',
      'codicon:reactions': 'carbon:face-add',
      // 'codicon:record': 'carbon:',
      'codicon:record-keys': 'carbon:keyboard',
      'codicon:redo': 'carbon:redo',
      // 'codicon:references': 'carbon:',
      // 'codicon:refresh': 'carbon:',
      // 'codicon:regex': 'carbon:',
      // 'codicon:remote': 'carbon:',
      // 'codicon:remote-explorer': 'carbon:',
      // 'codicon:remove': 'carbon:',
      // 'codicon:remove-close': 'carbon:',
      'codicon:repl': 'carbon:terminal',
      // 'codicon:replace': 'carbon:',
      // 'codicon:replace-all': 'carbon:',
      'codicon:reply': 'carbon:reply',
      // 'codicon:repo': 'carbon:',
      // 'codicon:repo-clone': 'carbon:',
      // 'codicon:repo-create': 'carbon:',
      // 'codicon:repo-delete': 'carbon:',
      // 'codicon:repo-force-push': 'carbon:',
      // 'codicon:repo-forked': 'carbon:',
      // 'codicon:repo-pull': 'carbon:',
      // 'codicon:repo-push': 'carbon:',
      // 'codicon:repo-sync': 'carbon:',
      // 'codicon:report': 'carbon:',
      // 'codicon:request-changes': 'carbon:',
      'codicon:rocket': 'carbon:rocket',
      // 'codicon:root-folder': 'carbon:',
      // 'codicon:root-folder-opened': 'carbon:',
      'codicon:rss': 'carbon:rss',
      // 'codicon:ruby': 'carbon:',
      // 'codicon:run': 'carbon:',
      // 'codicon:run-all': 'carbon:',
      // 'codicon:run-above': 'carbon:',
      // 'codicon:run-below': 'carbon:',
      'codicon:save': 'carbon:save',
      'codicon:save-all': 'carbon:save-series',
      'codicon:save-as': 'carbon:save-annotation',
      // 'codicon:screen-full': 'carbon:',
      // 'codicon:screen-normal': 'carbon:',
      'codicon:search': 'carbon:search',
      'codicon:search-save': 'carbon:search',
      // 'codicon:search-stop': 'carbon:',
      // 'codicon:selection': 'carbon:',
      'codicon:server': 'carbon:data-base',
      // 'codicon:server-environment': 'carbon:',
      // 'codicon:server-process': 'carbon:',
      'codicon:settings': 'carbon:audio-console',
      'codicon:settings-gear': 'carbon:settings-adjust',
      'codicon:shield': 'carbon:manage-protection',
      'codicon:sign-in': 'carbon:login',
      'codicon:sign-out': 'carbon:logout',
      'codicon:smiley': 'carbon:face-satisfied',
      // 'codicon:sort-precedence': 'carbon:',
      'codicon:source-control': 'carbon:branch',
      'codicon:split-horizontal': 'mdi:flip-horizontal',
      'codicon:split-vertical': 'mdi:flip-vertical',
      // 'codicon:squirrel': 'carbon:',
      'codicon:star': 'carbon:star',
      'codicon:star-add': 'carbon:star',
      'codicon:star-delete': 'carbon:star',
      'codicon:star-empty': 'carbon:star',
      'codicon:star-full': 'carbon:star-filled',
      'codicon:star-half': 'carbon:star-half',
      // 'codicon:stop': 'carbon:',
      // 'codicon:stop-circle': 'carbon:',
      'codicon:symbol-array': 'material-symbols:data-array-rounded',
      'codicon:symbol-boolean': 'material-symbols:toggle-off-outline',
      'codicon:symbol-class': 'carbon:data-class',
      // 'codicon:symbol-color': 'carbon:',
      // 'codicon:symbol-constant': 'carbon:',
      'codicon:symbol-constructor': 'carbon:construction',
      // 'codicon:symbol-enum': 'carbon:',
      // 'codicon:symbol-enum-member': 'carbon:',
      // 'codicon:symbol-event': 'carbon:',
      'codicon:symbol-field': 'carbon:3d-mpr-toggle',
      // 'codicon:symbol-file': 'carbon:document-blank',
      // 'codicon:symbol-folder': 'carbon:folder',
      'codicon:symbol-function': 'carbon:function-math',
      'codicon:symbol-interface': 'carbon:connect',
      'codicon:symbol-key': 'carbon:character-upper-case',
      // 'codicon:symbol-keyword': 'carbon:',
      'codicon:symbol-method': 'carbon:function',
      'codicon:symbol-misc': 'carbon:type-pattern',
      'codicon:symbol-module': 'carbon:delivery-parcel',
      // 'codicon:symbol-namespace': 'carbon:',
      'codicon:symbol-null': 'carbon:circle-dash',
      'codicon:symbol-number': 'carbon:character-whole-number',
      'codicon:symbol-numeric': 'carbon:character-whole-number',
      'codicon:symbol-object': 'carbon:object-storage',
      // 'codicon:symbol-operator': 'carbon:',
      'codicon:symbol-package': 'carbon:delivery-parcel',
      'codicon:symbol-parameter': 'carbon:types',
      'codicon:symbol-property': 'carbon:tools',
      // 'codicon:symbol-reference': 'carbon:',
      'codicon:symbol-ruler': 'carbon:ruler-alt',
      'codicon:symbol-snippet': 'material-symbols:code-blocks-outline',
      'codicon:symbol-string': 'carbon:character-upper-case',
      'codicon:symbol-struct': 'carbon:data-structured',
      'codicon:symbol-structure': 'carbon:data-structured',
      'codicon:symbol-text': 'carbon:text-font',
      // 'codicon:symbol-type-parameter': 'carbon:',
      'codicon:symbol-unit': 'carbon:ruler-alt',
      'codicon:symbol-value': 'carbon:value-variable',
      'codicon:symbol-variable': 'carbon:cube',
      // 'codicon:sync': 'carbon:',
      // 'codicon:sync-ignored': 'carbon:',
      'codicon:tag': 'carbon:tag',
      'codicon:tag-add': 'carbon:tag-edit',
      'codicon:tag-remove': 'carbon:tag-none',
      'codicon:tasklist': 'carbon:list-checked',
      // 'codicon:telescope': 'carbon:',
      'codicon:terminal': 'carbon:terminal',
      // 'codicon:terminal-bash': 'carbon:',
      // 'codicon:terminal-cmd': 'carbon:',
      // 'codicon:terminal-debian': 'carbon:',
      // 'codicon:terminal-linux': 'carbon:',
      // 'codicon:terminal-powershell': 'carbon:',
      // 'codicon:terminal-tmux': 'carbon:',
      // 'codicon:terminal-ubuntu': 'carbon:',
      'codicon:text-size': 'carbon:text-scale',
      // 'codicon:three-bars': 'carbon:',
      'codicon:thumbsdown': 'carbon:thumbs-down',
      'codicon:thumbsup': 'carbon:thumbs-up',
      'codicon:tools': 'carbon:tools-alt',
      'codicon:trash': 'carbon:trash-can',
      'codicon:trashcan': 'carbon:trash-can',
      'codicon:triangle-down': 'carbon:caret-down',
      'codicon:triangle-left': 'carbon:caret-left',
      'codicon:triangle-right': 'carbon:caret-right',
      'codicon:triangle-up': 'carbon:caret-up',
      'codicon:twitter': 'carbon:logo-twitter',
      // 'codicon:type-hierarchy': 'carbon:',
      // 'codicon:type-hierarchy-sub': 'carbon:',
      // 'codicon:type-hierarchy-super': 'carbon:',
      // 'codicon:unfold': 'carbon:',
      // 'codicon:ungroup-by-ref-type': 'carbon:',
      'codicon:unlock': 'carbon:unlocked',
      'codicon:unmute': 'carbon:volume-up',
      // 'codicon:unverified': 'carbon:',
      'codicon:variable': 'carbon:cube',
      // 'codicon:verified': 'carbon:',
      'codicon:versions': 'carbon:stacked-scrolling-1',
      // 'codicon:vm': 'carbon:',
      // 'codicon:vm-active': 'carbon:',
      // 'codicon:vm-connect': 'carbon:',
      // 'codicon:vm-outline': 'carbon:',
      // 'codicon:vm-running': 'carbon:',
      'codicon:wand': 'carbon:magic-wand',
      'codicon:warning': 'carbon:warning-alt',
      'codicon:watch': 'carbon:watch',
      'codicon:whitespace': 'carbon:paragraph',
      // 'codicon:whole-word': 'carbon:',
      // 'codicon:window': 'carbon:',
      // 'codicon:word-wrap': 'carbon:',
      'codicon:wrench': 'carbon:tools',
      'codicon:wrench-subaction': 'carbon:tools',
      // 'codicon:x': 'carbon:',
      // 'codicon:zap': 'carbon:',
      'codicon:zoom-in': 'carbon:zoom-in',
      'codicon:zoom-out': 'carbon:zoom-out',
    },
  },
]
