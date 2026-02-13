const createImageLoader = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.loading = "eager";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load icon: ${src}`));
    image.src = src;
  });

export default async function preloadIcons(icons) {
  const uniqueIcons = Array.from(
    new Map(
      (icons || [])
        .filter((icon) => icon?.id && icon?.src)
        .map((icon) => [icon.id, icon])
    ).values()
  );

  const loaded = await Promise.allSettled(
    uniqueIcons.map(async ({ id, src }) => ({
      id,
      image: await createImageLoader(src),
    }))
  );

  return loaded.reduce((iconMap, result) => {
    if (result.status === "fulfilled") {
      iconMap.set(result.value.id, result.value.image);
    }
    return iconMap;
  }, new Map());
}
