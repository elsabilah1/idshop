"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./common/select";
import { Phone } from "./common/icons";
import { Input } from "./common/input";
import { Button } from "./common/button";

export default function FormPaketData() {
  const [value, setValue] = useState("seminggu");

  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Input placeholder="Nomor Telpon" icon={<Phone />} className="h-11" />
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="seminggu">Paket Seminggu - 20.000</SelectItem>
          <SelectItem value="bulanan">Paket Bulanan - 50.000</SelectItem>
          <SelectItem value="bulanan-omg">
            Paket Bulanan OMG - 78.000
          </SelectItem>
          <SelectItem value="berkah">Paket Berkah - 54.000</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline/primary">Beli</Button>
    </div>
  );
}
