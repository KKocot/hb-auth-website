// CopyButton — vanilla JS island
// Attaches copy-to-clipboard behavior to elements with data-copy-target attribute

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-copy-button]');

  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const targetId = button.dataset['copyButton'];
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      const text = target.textContent ?? '';

      try {
        await navigator.clipboard.writeText(text);
        button.dataset['copied'] = 'true';
        setTimeout(() => {
          delete button.dataset['copied'];
        }, 2000);
      } catch {
        // Clipboard API unavailable — silent fail
      }
    });
  });
});
