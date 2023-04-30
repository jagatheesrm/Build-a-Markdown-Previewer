const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Update preview when editor content changes
editor.addEventListener('input', () => {
  preview.innerHTML = marked(editor.value);
});

// Set default markdown in editor and preview
editor.value = `
# JAGATHEESWARAN

## Web Developer

[Link](https://github.com/jagatheesrm)

\`Inline code\`

\`\`\`
// Code block
function add(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;
preview.innerHTML = marked(editor.value);
