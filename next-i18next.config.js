module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
