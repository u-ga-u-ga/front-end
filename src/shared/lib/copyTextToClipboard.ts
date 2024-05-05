export default async (text: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      alert("copy success!!");
    } catch {
      alert("copy failed");
    }
  } else {
    const _dummy = document.createElement("textarea");
    _dummy.value = text;
    document.body.appendChild(_dummy);
    _dummy.select();
    document.execCommand("copy");
    document.body.removeChild(_dummy);
  }
};
