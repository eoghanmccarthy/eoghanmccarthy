export function extractExcerpt(content: string, maxLength = 150): string {
    // Remove markdown syntax and get first paragraph
    const cleaned = content
        .replace(/^#{1,6}\s+/gm, '') // Remove headers
        .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
        .replace(/\*(.+?)\*/g, '$1') // Remove italic
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/`(.+?)`/g, '$1') // Remove inline code
        .trim()

    const firstParagraph = cleaned.split('\n\n')[0]
    if (firstParagraph.length <= maxLength) {
        return firstParagraph
    }
    return firstParagraph.slice(0, maxLength).trim() + '...'
}
