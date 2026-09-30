const MINT = "3Ziv8YD4Uv7sqYsaECTrbeUCfwKKPpTQ1PhZmEvWjupx";

export type TokenStats = {
  mcap: number | null;
  price: number | null;
  holders: number | null;
  supply: number | null;
};

export async function getTokenStats(): Promise<TokenStats | null> {
  try {
    const res = await fetch(
      `https://api.jup.ag/tokens/v2/search?query=${MINT}`,
      {
        headers: { "x-api-key": process.env.JUPITER_API_KEY ?? "" },
        next: { revalidate: 60 }, // cache for 60s so you don't burn rate limits
      },
    );
    if (!res.ok) return null;

    const data = await res.json();
    const t = data.find((x: any) => x.id === MINT);
    if (!t) return null;

    return {
      mcap: t.mcap ?? null,
      price: t.usdPrice ?? null,
      holders: t.holderCount ?? null,
      supply: t.totalSupply ?? null,
    };
  } catch {
    return null;
  }
}

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export const fmtNum = (n: number | null) =>
  n == null ? "—" : compact.format(n);

export const fmtUsd = (n: number | null) =>
  n == null ? "—" : `$${compact.format(n)}`;

const SUB = "₀₁₂₃₄₅₆₇₈₉";
const toSub = (n: number) =>
  String(n)
    .split("")
    .map((d) => SUB[Number(d)])
    .join("");

// Compact price: 0.000312 -> $0.0₃312 (fits small mobile cards)
export const fmtPrice = (n: number | null) => {
  if (n == null || n <= 0) return "—";

  if (n >= 0.01) {
    return `$${n.toLocaleString("en-US", { maximumSignificantDigits: 4 })}`;
  }

  // e.g. 0.000312 -> "3.12e-4"
  const [mantissa, exp] = n.toExponential(2).split("e");
  const zeros = -parseInt(exp, 10) - 1; // zeros after the decimal point
  const digits = mantissa.replace(".", ""); // "312"

  if (zeros <= 2) return `$${n.toFixed(zeros + 3)}`;
  return `$0.0${toSub(zeros)}${digits}`;
};
