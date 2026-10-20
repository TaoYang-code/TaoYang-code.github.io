(() => {
 const page = document.currentScript.dataset.page;
 fetch(page + '-content.json', {cache:'no-cache'})
 .then(r => {if(!r.ok) throw new Error('Content unavailable'); return r.json()})
 .then(data => {
  for (const item of data.texts || []) {
   const el = document.querySelector('[data-content="' + item.field + '"]');
   if (!el || el.textContent.trim() === item.text.trim()) continue;
   // Preserve nested links and emphasis when the whole block has not changed.
   // An edited text block is rendered safely as plain text.
   if (el.children.length === 1 && el.firstElementChild.tagName === "A") {el.firstElementChild.textContent = item.text;} else {el.textContent = item.text;}
   el.dataset.contentEdited = "true";
  }
  for (const item of data.links || []) {
   const el = document.querySelector('[data-link="' + item.field + '"]');
   if (!el) continue;
   if (/^(https?:|mailto:)/.test(item.url)) el.href = item.url;
   if (!el.closest('[data-content-edited="true"]') && el.textContent.trim() !== item.label.trim()) el.textContent = item.label;
  }
 }).catch(error => console.warn('Using built-in page content:', error.message));
})();
