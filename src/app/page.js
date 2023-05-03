import Image from "next/image";
import "./i18n";
import React from "react";

import { useTranslation } from "react-i18next";

export default function Home() {
  const t = useTranslation();
  return (
    <div>
      <header>
        <h1>{t("hel")}</h1>
      </header>
    </div>
  );
}
