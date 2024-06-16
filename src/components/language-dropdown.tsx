"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./common/select";
import { Language } from "./common/icons";

export default function LanguageDropdown() {
  const [value, setValue] = useState("indonesia");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full md:w-[240px]">
        <div className="flex gap-4">
          <Language />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="indonesia">Bahasa Indonesia</SelectItem>
        <SelectItem value="english">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
