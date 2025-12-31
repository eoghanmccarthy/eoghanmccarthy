export function parseFrontmatter(markdown: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatter = match[1];
  const content = match[2];

  const data: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts.join(":").trim();
    }
  });

  return { data, content };
}
