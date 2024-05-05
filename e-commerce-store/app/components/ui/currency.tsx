import { priceFormatter } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  return (
    <div className="font-semibold">
      {priceFormatter.format(Number(value))}
    </div>
  )
}

export default Currency