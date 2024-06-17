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

export default function FormPulsa() {
  const [value, setValue] = useState("10000");

  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Input
        name="phone"
        floatingLabel="Nomor Telpon"
        icon={<Phone />}
        className="h-11"
      />
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10000">10.000</SelectItem>
          <SelectItem value="20000">20.000</SelectItem>
          <SelectItem value="50000">50.000</SelectItem>
          <SelectItem value="100000">100.000</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline/primary">Beli</Button>
    </div>
  );
}
