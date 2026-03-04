export function detectLanguage(text) {
  const arabic = /[\u0600-\u06FF]/;
  const english = /[A-Za-z]/;

  if (arabic.test(text)) {
    return "ar"; // Arabic
  } else if (english.test(text)) {
    return "en"; // English
  } else {
    return "unknown"; // لو مش عربي ولا إنجليزي
  }
}


export async function translate(text, src, dest) {
  const response = await fetch(
    `https://function-bun-production-35ad.up.railway.app/translate?text=${encodeURIComponent(text)}&src=${src}&dest=${dest}`,
    { method: "GET" }
  );

  const data = await response.json();
  return data.translated_text;
}


