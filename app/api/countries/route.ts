// src/app/api/countries/route.ts
import { NextResponse } from "next/server";

const countries = [
  { code: "CY", name: "Cyprus", dialCode: "+357" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "DE", name: "Germany", dialCode: "+49" },
];

export async function GET() {
  return NextResponse.json(countries);
}
