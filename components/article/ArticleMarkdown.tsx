import Markdown from 'react-native-markdown-display';

import { theme } from '@/src/styles/theme';

export function ArticleMarkdown({ markdown }: { markdown: string }) {
  return (
    <Markdown
      style={{
        body: { color: theme.colors.text, fontSize: 15, lineHeight: 24 },
        heading1: { color: theme.colors.text, fontSize: 24, marginBottom: 12 },
        heading2: { color: theme.colors.text, fontSize: 18, marginTop: 18, marginBottom: 8 },
        paragraph: { color: theme.colors.textMuted, marginTop: 0, marginBottom: 14, lineHeight: 24 },
        bullet_list: { marginBottom: 12 },
        list_item: { color: theme.colors.textMuted },
        strong: { color: theme.colors.text },
        code_inline: { color: theme.colors.accent, backgroundColor: theme.colors.background },
      }}>
      {markdown}
    </Markdown>
  );
}
