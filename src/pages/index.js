import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      <header>
        <h1>{t("hel")}</h1>
      </header>
    </div>
  );
}
